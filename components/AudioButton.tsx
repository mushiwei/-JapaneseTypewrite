
import React, { useState } from 'react';
import { getGeminiTTS, decodeAudio, decodeAudioData } from '../services/geminiService';

interface AudioButtonProps {
  text: string;
  className?: string;
}

const AudioButton: React.FC<AudioButtonProps> = ({ text, className }) => {
  const [loading, setLoading] = useState(false);

  const handlePlay = async () => {
    if (loading) return;
    setLoading(true);
    
    try {
      const base64 = await getGeminiTTS(text);
      if (base64) {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const decoded = decodeAudio(base64);
        // Correct usage of manual decodeAudioData with required params: sampleRate=24000, numChannels=1
        const audioBuffer = await decodeAudioData(decoded, audioCtx, 24000, 1);
        
        const source = audioCtx.createBufferSource();
        source.buffer = audioBuffer;
        source.connect(audioCtx.destination);
        source.start();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button 
      onClick={handlePlay}
      disabled={loading}
      className={`p-2 rounded-full transition-all hover:bg-amber-100 active:scale-95 disabled:opacity-50 ${className}`}
      title="发音"
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 text-amber-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-700">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
        </svg>
      )}
    </button>
  );
};

export default AudioButton;

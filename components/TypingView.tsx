
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { PracticeState, TrainingStats, JLPTItem } from '../types';
import AudioButton from './AudioButton';
import { getGeminiTTS, playAudioBase64 } from '../services/geminiService';

interface TypingViewProps {
  items: JLPTItem[];
  title: string;
  onFinish: (stats: TrainingStats) => void;
}

const TypingView: React.FC<TypingViewProps> = ({ items, title, onFinish }) => {
  const [state, setState] = useState<PracticeState>({
    currentIndex: 0,
    userInput: '',
    correctChars: 0,
    errorChars: 0,
    startTime: null,
    isComplete: false,
    history: []
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const currentItem = items[state.currentIndex];

  useEffect(() => {
    inputRef.current?.focus();
    if (currentItem) {
      handleInitialVoice();
    }
  }, [state.currentIndex]);

  const handleInitialVoice = async () => {
    // Fix: currentItem.display does not exist on JLPTItem, using currentItem.kanji instead
    const audio = await getGeminiTTS(currentItem.kanji, 'teacher');
    if (audio) playAudioBase64(audio);
  };

  const calculateWPM = () => {
    if (!state.startTime) return 0;
    const minutes = (Date.now() - state.startTime) / 60000;
    return Math.round((state.correctChars / 5) / (minutes || 1));
  };

  const calculateAccuracy = () => {
    const total = state.correctChars + state.errorChars;
    return total === 0 ? 100 : Math.round((state.correctChars / total) * 100);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!state.startTime) setState(p => ({ ...p, startTime: Date.now() }));
    
    const val = e.target.value.toLowerCase();
    const target = currentItem.romaji.toLowerCase();

    if (target.startsWith(val)) {
      // Correct input
      setState(prev => ({ 
        ...prev, 
        userInput: val, 
        correctChars: prev.correctChars + 1 
      }));
      
      if (val === target) {
        if (state.currentIndex === items.length - 1) {
          const endTime = Date.now();
          const finalStats: TrainingStats = {
            wpm: calculateWPM(),
            accuracy: calculateAccuracy(),
            timeSpent: Math.floor((endTime - (state.startTime || endTime)) / 1000),
            errors: state.errorChars,
            rank: calculateAccuracy() > 95 ? 'S' : calculateAccuracy() > 85 ? 'A' : 'B'
          };
          setState(p => ({ ...p, isComplete: true }));
          onFinish(finalStats);
        } else {
          setState(prev => ({ ...prev, userInput: '', currentIndex: prev.currentIndex + 1 }));
        }
      }
    } else {
      // Error input
      setState(prev => ({ ...prev, errorChars: prev.errorChars + 1 }));
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-end bg-black text-white p-4 manga-border">
        <div className="space-y-1">
          <h2 className="text-xl font-black uppercase tracking-widest">{title}</h2>
          <div className="flex space-x-6 text-xs font-mono opacity-70">
            <span>WPM: {calculateWPM()}</span>
            <span>ACCURACY: {calculateAccuracy()}%</span>
            <span>ERRORS: {state.errorChars}</span>
          </div>
        </div>
        <div className="text-4xl font-black">
          {state.currentIndex + 1}<span className="text-xl opacity-50">/{items.length}</span>
        </div>
      </div>

      <div className="relative bg-white manga-border p-12 min-h-[400px] flex flex-col items-center justify-center space-y-8">
        {/* Kanji & Category */}
        <div className="text-center space-y-4">
          <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold mb-2">
            {currentItem.category}
          </span>
          <div className="flex items-center justify-center space-x-6">
            <h1 className="text-8xl font-black text-gray-900 drop-shadow-lg">
              {currentItem.kanji}
            </h1>
            <AudioButton text={currentItem.kana} className="scale-150" />
          </div>
          <div className="text-3xl text-gray-400 font-bold tracking-widest">
            {currentItem.kana}
          </div>
          <p className="text-xl text-gray-600 font-zcool border-t-2 border-gray-100 pt-4">
            {currentItem.mean}
          </p>
        </div>

        {/* Input Zone */}
        <div className="w-full max-w-xl space-y-4">
          <div className="flex justify-center space-x-2">
            {currentItem.romaji.split('').map((char, i) => {
              let color = "text-gray-200";
              if (i < state.userInput.length) color = "text-black border-b-4 border-black";
              return (
                <span key={i} className={`text-4xl font-mono font-black uppercase transition-all ${color}`}>
                  {char}
                </span>
              );
            })}
          </div>
          
          <input
            ref={inputRef}
            type="text"
            className="absolute inset-0 w-full h-full opacity-0 cursor-default"
            value={state.userInput}
            onChange={handleChange}
            autoFocus
          />
          
          <div className="flex justify-center items-center h-20 space-x-1">
             {state.userInput.split('').map((c, i) => (
               <span key={i} className="text-7xl font-black text-pink-600 animate-in zoom-in duration-75">
                 {c.toUpperCase()}
               </span>
             ))}
             <div className="w-4 h-16 bg-black animate-pulse ml-2" />
          </div>
        </div>
      </div>

      <div className="text-center font-mono text-xs opacity-40 uppercase tracking-widest">
        Focus Mode Active • Mechanical Input Simulation • Keep Typing
      </div>
    </div>
  );
};

export default TypingView;


import { GoogleGenAI, Modality } from "@google/genai";

// Implement manual base64 decoding as per guideline
export function decodeAudio(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

// Implement raw PCM decoding as per guideline
export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

export const getGeminiTTS = async (text: string, style: 'normal' | 'excited' | 'teacher' = 'normal'): Promise<string | undefined> => {
  try {
    // Always use process.env.API_KEY directly for initialization
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    let prompt = `朗读这段日语: ${text}`;
    if (style === 'excited') prompt = `用超级热血、充满活力的动漫语气朗读: ${text}`;
    if (style === 'teacher') prompt = `用温柔且专业的日语老师语气朗读: ${text}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: style === 'excited' ? 'Puck' : 'Kore' }, 
          },
        },
      },
    });

    return response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  } catch (error) {
    console.error("Gemini TTS Error:", error);
    return undefined;
  }
};

export const playAudioBase64 = async (base64: string) => {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
  const decoded = decodeAudio(base64);
  const audioBuffer = await decodeAudioData(decoded, audioCtx, 24000, 1);

  const source = audioCtx.createBufferSource();
  source.buffer = audioBuffer;
  source.connect(audioCtx.destination);
  source.start();
};

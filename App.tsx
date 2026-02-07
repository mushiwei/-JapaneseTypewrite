import React, { useMemo, useState } from 'react';
import { AppMode, TrainingStats, JLPTItem } from './types';
import { JLPT_DATA, KANA_DATA } from './constants';
import TypingView from './components/TypingView';

const TRAINING_PRESETS = [
  { id: 'KANA', title: '五十音图', sub: 'Kana Marathon', color: 'bg-white', note: '清/浊/拗音随机抽测' },
  { id: 'N5', title: 'N5 语汇', sub: 'Beginner Level', color: 'bg-white', note: '基础生存词汇' },
  { id: 'N2', title: 'N2 核心', sub: 'Advanced Level', color: 'bg-white', note: '职场与专业表达' },
  { id: 'ANIME', title: '名台词', sub: 'Otaku Soul', color: 'bg-pink-600 text-white', note: '热血语感训练' }
] as const;

const ADVANTAGES = [
  {
    id: '01',
    title: '瞬时反应',
    desc: 'JLPT考试时间紧张，你必须对单词达到“生理反射”级别的熟悉度。本系统通过打字速度（WPM）强迫你跳过中文翻译过程。'
  },
  {
    id: '02',
    title: '听音辨位',
    desc: '原生 Gemini TTS 模拟真实语境发音，让你在录入的同时建立正确的重音（Accent）感。'
  },
  {
    id: '03',
    title: '零容错率',
    desc: '严苛的报错机制会记录每一次击键。通过不断提高准确率，你将掌握日文录入的节奏感。'
  }
];

const getRandomItems = (pool: JLPTItem[], count: number): JLPTItem[] => [...pool].sort(() => 0.5 - Math.random()).slice(0, count);

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.HOME);
  const [currentLevel, setCurrentLevel] = useState<string>('');
  const [practiceItems, setPracticeItems] = useState<JLPTItem[]>([]);
  const [results, setResults] = useState<TrainingStats | null>(null);

  const levelTitle = useMemo(() => `${currentLevel} 专项能力突破`, [currentLevel]);

  const startTraining = (level: string) => {
    const items = level === 'KANA'
      ? getRandomItems(KANA_DATA, 20)
      : getRandomItems(JLPT_DATA.filter(i => i.level === level), 15);

    setPracticeItems(items);
    setCurrentLevel(level);
    setMode(AppMode.TRAINING);
    setResults(null);
  };

  const handleFinish = (stats: TrainingStats) => {
    setResults(stats);
    setMode(AppMode.RESULT);
  };

  const renderHome = () => (
    <div className="max-w-6xl mx-auto px-4 py-12 md:px-6 md:py-16 space-y-14 md:space-y-20">
      <header className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between border-b-8 border-black pb-8">
        <div className="text-left space-y-4">
          <h1 className="text-6xl md:text-9xl font-black italic tracking-tighter leading-none">
            JLPT<br /><span className="text-pink-600">DRIVE</span>
          </h1>
          <p className="text-sm md:text-xl font-bold uppercase tracking-widest bg-black text-white inline-block px-4 py-1">
            Professional Typing Trainer v3.2
          </p>
        </div>
        <div className="w-44 h-44 md:w-64 md:h-64 manga-border bg-white flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
          <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=ryo&backgroundColor=ffffff" alt="Mascot" className="w-full h-full object-cover" />
        </div>
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
        {TRAINING_PRESETS.map(item => (
          <button
            key={item.id}
            onClick={() => startTraining(item.id)}
            className={`${item.color} manga-border p-6 md:p-8 text-left group hover:-translate-y-2 hover:bg-black hover:text-white transition-all duration-200`}
          >
            <div className="text-xs font-mono mb-2 opacity-60">{item.sub}</div>
            <h3 className="text-2xl md:text-3xl font-black mb-2">{item.title}</h3>
            <p className="text-[10px] font-bold opacity-40 mb-6 uppercase">{item.note}</p>
            <div className="text-sm font-bold border-t-2 border-current pt-4 flex justify-between items-center">
              <span>进入作战训练</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </button>
        ))}
      </section>

      <section className="manga-border p-8 md:p-12 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-7xl md:text-9xl font-black opacity-10">CORE</div>
        <div className="relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black uppercase font-zcool">为什么选择严格训练？</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-sm font-bold opacity-80 leading-relaxed">
            {ADVANTAGES.map(item => (
              <div key={item.id} className="space-y-2">
                <div className="text-pink-500 text-lg">{item.id}. {item.title}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderResult = () => (
    <div className="max-w-4xl mx-auto py-12 md:py-20 px-4 md:px-6">
      <div className="bg-white manga-border p-8 md:p-16 text-center space-y-10 animate-in zoom-in duration-300">
        <div className="text-6xl md:text-9xl font-black text-pink-600 leading-none">RANK {results?.rank}</div>
        <h2 className="text-3xl md:text-4xl font-black uppercase border-y-4 border-black py-4">训练结果报告</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8">
          <div>
            <div className="text-xs font-mono opacity-50 uppercase">打字速度</div>
            <div className="text-2xl md:text-3xl font-black">{results?.wpm} WPM</div>
          </div>
          <div>
            <div className="text-xs font-mono opacity-50 uppercase">准确率</div>
            <div className="text-2xl md:text-3xl font-black">{results?.accuracy}%</div>
          </div>
          <div>
            <div className="text-xs font-mono opacity-50 uppercase">击键错误</div>
            <div className="text-2xl md:text-3xl font-black">{results?.errors}</div>
          </div>
          <div>
            <div className="text-xs font-mono opacity-50 uppercase">总耗时</div>
            <div className="text-2xl md:text-3xl font-black">{results?.timeSpent}s</div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <button onClick={() => setMode(AppMode.HOME)} className="flex-1 py-4 md:py-6 bg-gray-200 text-black text-lg md:text-xl font-black hover:bg-gray-300 transition-colors">返回基地</button>
          <button onClick={() => startTraining(currentLevel)} className="flex-1 py-4 md:py-6 bg-black text-white text-lg md:text-xl font-black hover:bg-pink-600 transition-colors">再次作战</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-transparent">
      {mode === AppMode.HOME && renderHome()}
      {mode === AppMode.TRAINING && (
        <div className="py-8 md:py-12 px-3 md:px-4">
          <TypingView items={practiceItems} title={levelTitle} onFinish={handleFinish} />
        </div>
      )}
      {mode === AppMode.RESULT && renderResult()}
    </div>
  );
};

export default App;


import React, { useState } from 'react';
import { AppMode, TrainingStats, JLPTItem } from './types';
import { JLPT_DATA, KANA_DATA } from './constants';
import TypingView from './components/TypingView';

const App: React.FC = () => {
  const [mode, setMode] = useState<AppMode>(AppMode.HOME);
  const [currentLevel, setCurrentLevel] = useState<string>('');
  const [practiceItems, setPracticeItems] = useState<JLPTItem[]>([]);
  const [results, setResults] = useState<TrainingStats | null>(null);

  const startTraining = (level: string) => {
    let items: JLPTItem[] = [];
    if (level === 'KANA') {
      // 五十音图模式下提供完整列表，不进行随机截断，以实现系统化背诵
      items = [...KANA_DATA];
    } else {
      const pool = JLPT_DATA.filter(i => i.level === level);
      // 考级词汇模式下随机抽取15个，保证每次训练新鲜感
      items = [...pool].sort(() => 0.5 - Math.random()).slice(0, 15);
    }
    
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
    <div className="max-w-6xl mx-auto py-16 px-6 space-y-20">
      <header className="flex flex-col md:flex-row items-center justify-between border-b-8 border-black pb-8">
        <div className="text-left">
          <h1 className="text-9xl font-black italic tracking-tighter leading-none">
            JLPT<br/><span className="text-pink-600">DRIVE</span>
          </h1>
          <p className="text-xl font-bold mt-4 uppercase tracking-widest bg-black text-white inline-block px-4">
            Professional Typing Trainer v3.1
          </p>
        </div>
        <div className="mt-8 md:mt-0 w-64 h-64 manga-border bg-white flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all">
          <img src="https://api.dicebear.com/7.x/adventurer/svg?seed=ryo&backgroundColor=ffffff" alt="Mascot" className="w-full h-full object-cover" />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { id: 'KANA', title: '五十音图', sub: 'Full Chart Training', color: 'bg-white', note: '包含完整清音行' },
          { id: 'N5', title: 'N5 语汇', sub: 'Beginner Exam', color: 'bg-white', note: '随机15词抽测' },
          { id: 'N2', title: 'N2 核心', sub: 'Advanced Exam', color: 'bg-white', note: '随机15词抽测' },
          { id: 'ANIME', title: '名台词', sub: 'Elite Challenge', color: 'bg-pink-600 text-white', note: '打破次元壁' }
        ].map(item => (
          <button 
            key={item.id}
            onClick={() => startTraining(item.id)}
            className={`${item.color} manga-border p-8 text-left group hover:-translate-y-2 hover:bg-black hover:text-white transition-all`}
          >
            <div className="text-xs font-mono mb-2 opacity-60">{item.sub}</div>
            <h3 className="text-3xl font-black mb-2">{item.title}</h3>
            <p className="text-[10px] font-bold opacity-40 mb-6 uppercase">{item.note}</p>
            <div className="text-sm font-bold border-t-2 border-current pt-4 flex justify-between items-center">
              <span>START TRAINING</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </button>
        ))}
      </div>

      <section className="manga-border p-12 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-9xl font-black opacity-10">CORE</div>
        <div className="relative z-10 space-y-6">
          <h2 className="text-4xl font-black uppercase">专业训练指南</h2>
          <div className="grid md:grid-cols-3 gap-12 text-sm font-bold opacity-80">
            <div className="space-y-2">
              <div className="text-pink-500 text-lg">01. 盲打肌肉记忆</div>
              <p>不要低头看键盘。通过屏幕上的罗马音提示，建立日文假名与指尖动作的条件反射。</p>
            </div>
            <div className="space-y-2">
              <div className="text-pink-500 text-lg">02. 听力先行</div>
              <p>每一题开始时都会自动播放 Gemini 原生语音。先听发音，再开始录入，同步强化听力感官。</p>
            </div>
            <div className="space-y-2">
              <div className="text-pink-500 text-lg">03. 速度与精度</div>
              <p>考级要求对词汇的瞬时反应。保持 95% 以上的准确率，并努力提升 WPM（每分钟字数）。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderResult = () => (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <div className="bg-white manga-border p-16 text-center space-y-10 animate-in zoom-in duration-300">
        <div className="text-9xl font-black text-pink-600 leading-none">
          RANK {results?.rank}
        </div>
        <h2 className="text-4xl font-black uppercase border-y-4 border-black py-4">训练结果报告</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          <div>
            <div className="text-xs font-mono opacity-50 uppercase">速度</div>
            <div className="text-3xl font-black">{results?.wpm} WPM</div>
          </div>
          <div>
            <div className="text-xs font-mono opacity-50 uppercase">准确率</div>
            <div className="text-3xl font-black">{results?.accuracy}%</div>
          </div>
          <div>
            <div className="text-xs font-mono opacity-50 uppercase">错误数</div>
            <div className="text-3xl font-black">{results?.errors}</div>
          </div>
          <div>
            <div className="text-xs font-mono opacity-50 uppercase">用时</div>
            <div className="text-3xl font-black">{results?.timeSpent}s</div>
          </div>
        </div>
        <div className="flex space-x-4">
          <button 
            onClick={() => setMode(AppMode.HOME)}
            className="flex-1 py-6 bg-gray-200 text-black text-xl font-black hover:bg-gray-300 transition-colors"
          >
            返回大厅
          </button>
          <button 
            onClick={() => startTraining(currentLevel)}
            className="flex-1 py-6 bg-black text-white text-xl font-black hover:bg-pink-600 transition-colors"
          >
            再次训练
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-100">
      {mode === AppMode.HOME && renderHome()}
      {mode === AppMode.TRAINING && (
        <div className="py-12 px-4">
          <TypingView items={practiceItems} title={`${currentLevel === 'KANA' ? '五十音图全量' : currentLevel} 核心能力训练`} onFinish={handleFinish} />
        </div>
      )}
      {mode === AppMode.RESULT && renderResult()}
    </div>
  );
};

export default App;

import { useState } from 'react';
import { RotateCcw } from 'lucide-react';

export default function InteractiveHell() {
  const [clickCounts, setClickCounts] = useState<{ [key: string]: number }>({});
  const [pageRotation, setPageRotation] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('bg-gradient-to-br from-red-500 via-yellow-500 to-green-500');
  const [allCaps, setAllCaps] = useState(false);

  const incrementClick = (key: string) => {
    setClickCounts((prev) => ({ ...prev, [key]: (prev[key] || 0) + 1 }));

    if ((clickCounts[key] || 0) % 3 === 0) {
      setPageRotation((prev) => prev + 15);
    }
    if ((clickCounts[key] || 0) % 5 === 0) {
      const colors = [
        'bg-gradient-to-br from-red-500 via-yellow-500 to-green-500',
        'bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500',
        'bg-gradient-to-br from-green-500 via-cyan-500 to-blue-500',
        'bg-gradient-to-br from-orange-500 via-red-500 to-purple-500',
      ];
      setBackgroundColor(colors[Math.floor(Math.random() * colors.length)]);
    }
    if ((clickCounts[key] || 0) % 7 === 0) {
      setAllCaps(!allCaps);
    }
  };

  const resetChaos = () => {
    setClickCounts({});
    setPageRotation(0);
    setAllCaps(false);
    setBackgroundColor('bg-gradient-to-br from-red-500 via-yellow-500 to-green-500');
  };

  const text = (str: string) => (allCaps ? str.toUpperCase() : str);

  return (
    <section
      className={`py-24 px-4 ${backgroundColor} relative min-h-screen transition-all duration-300 overflow-hidden`}
      style={{
        transform: `rotate(${pageRotation}deg)`,
        perspective: '1000px',
      }}
    >

      <div className="absolute top-0 left-0 w-full h-2 bg-white" />
      
      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-7xl font-black text-white drop-shadow-2xl animate-shake mb-4">
            {text('INTERACTIVE HELL')}
          </h2>
          <p className="text-2xl font-bold text-white/90">
            {text('Click buttons. Chaos ensues. (This is INTENTIONAL)')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <button
            onClick={() => incrementClick('chaos')}
            className="py-8 px-6 bg-black text-white font-black text-2xl border-4 border-white transform hover:scale-110 transition-all duration-200 animate-wiggle hover:animate-spin"
          >
            {text('CHAOS BUTTON')} ({clickCounts['chaos'] || 0})
          </button>

          <button
            onClick={() => incrementClick('void')}
            className="py-8 px-6 bg-white text-black font-black text-2xl border-4 border-black transform hover:invert transition-all duration-200 hover:scale-150"
            style={{
              transform: `rotate(${(clickCounts['void'] || 0) * 10}deg) scale(${1 + (clickCounts['void'] || 0) * 0.1})`,
            }}
          >
            {text('VOID BUTTON')} ({clickCounts['void'] || 0})
          </button>

          <button
            onClick={() => incrementClick('madness')}
            className="py-8 px-6 bg-gradient-to-r from-pink-500 to-cyan-500 text-white font-black text-2xl border-4 border-white transform hover:scale-110 transition-all"
            style={{
              animation: `wiggle ${0.3 + (clickCounts['madness'] || 0) * 0.1}s ease-in-out infinite`,
            }}
          >
            {text('MADNESS')} ({clickCounts['madness'] || 0})
          </button>

          <button
            onClick={() => incrementClick('randomize')}
            className="py-8 px-6 bg-yellow-300 text-black font-black text-2xl border-4 border-black transform hover:scale-110 transition-all duration-200"
            style={{
              filter: `hue-rotate(${(clickCounts['randomize'] || 0) * 20}deg) saturate(${1 + (clickCounts['randomize'] || 0) * 0.5})`,
            }}
          >
            {text('RANDOMIZE LIFE')} ({clickCounts['randomize'] || 0})
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={resetChaos}
            className="py-4 px-8 bg-white text-black font-black text-xl border-4 border-black transform hover:scale-110 transition-all duration-200 flex items-center gap-2 mx-auto"
          >
            <RotateCcw className="w-6 h-6" />
            {text('RESET SANITY')}
          </button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-white font-black text-3xl animate-pulse drop-shadow-lg">
            {text('Total Chaos Level: ')}
            {Object.values(clickCounts).reduce((a, b) => a + b, 0)}
          </p>
        </div>
      </div>
    </section>
  );
}

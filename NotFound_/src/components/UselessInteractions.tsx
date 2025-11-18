import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export default function UselessInteractions() {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [uiBreak, setUiBreak] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isChecked) {
      setTimeout(() => setIsChecked(false), 500);
    }
  }, [isChecked]);

  useEffect(() => {
    const texts = [
      'I have a mind of my own...',
      'Stop trying to control me...',
      'This is MY input field...',
      'I do what I want...',
      'Leave me alone...',
    ];
    const interval = setInterval(() => {
      setInputValue(texts[Math.floor(Math.random() * texts.length)]);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 99) return 0;
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleDoNotClick = () => {
    setUiBreak(true);
    setTimeout(() => setUiBreak(false), 3000);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 relative">
      {uiBreak && (
        <div className="fixed inset-0 z-50 bg-red-600 animate-flash flex items-center justify-center">
          <p className="text-white text-9xl font-black animate-spin">ERROR</p>
        </div>
      )}

      <div className="container mx-auto max-w-4xl">
        <h2 className="text-6xl font-black text-white text-center mb-16 animate-wiggle">
          USELESS INTERACTIONS™
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/90 p-8 rounded-none border-8 border-black transform hover:rotate-2 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-red-600">DO NOT CLICK</h3>
            <button
              onClick={handleDoNotClick}
              className="w-full py-4 bg-red-600 text-white font-bold text-xl hover:bg-red-800 transform hover:scale-105 transition-all animate-pulse"
            >
              SERIOUSLY DON'T
            </button>
          </div>

          <div className="bg-white/90 p-8 rounded-none border-8 border-black transform hover:-rotate-2 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Pointless Slider</h3>
            <input
              type="range"
              min="0"
              max="100"
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full"
            />
            <p className="mt-2 text-gray-600 text-sm italic capitalize">
              Value: {sliderValue} (This does absolutely nothing)
            </p>
          </div>

          <div className="bg-white/90 p-8 rounded-none border-8 border-black transform hover:rotate-1 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-green-600">Self-Unchecking Checkbox</h3>
            <label className="flex items-center gap-4 cursor-pointer">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(true)}
                className="w-8 h-8"
              />
              <span className="text-lg font-bold capitalize">Try to check me</span>
            </label>
            <p className="mt-2 text-gray-600 text-sm italic capitalize">I uncheck myself. Deal with it.</p>
          </div>

          <div className="bg-white/90 p-8 rounded-none border-8 border-black transform hover:-rotate-1 transition-all">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Autonomous Input</h3>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full p-3 border-4 border-purple-600 text-lg font-mono"
              placeholder="I type on my own..."
            />
            <p className="mt-2 text-gray-600 text-sm italic capitalize">I have my own thoughts</p>
          </div>

          <div className="bg-white/90 p-8 rounded-none border-8 border-black transform hover:rotate-3 transition-all md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-orange-600 flex items-center gap-2">
              <Loader2 className="animate-spin" />
              Eternal Loading Bar
            </h3>
            <div className="w-full bg-gray-200 h-8 border-4 border-black">
              <div
                className="bg-gradient-to-r from-green-400 to-blue-500 h-full transition-all duration-100 flex items-center justify-end pr-2"
                style={{ width: `${progress}%` }}
              >
                <span className="text-white font-bold text-sm">{progress}%</span>
              </div>
            </div>
            <p className="mt-2 text-gray-600 text-sm italic capitalize">
              Forever stuck at 99%. Just like your life goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

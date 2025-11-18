import { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';

export default function ChaoticHero() {
  const [_mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [titlePos, setTitlePos] = useState({ x: 0, y: 0 });
  const [buttonPos, setButtonPos] = useState({ x: 0, y: 0 });
  const [bgColor, setBgColor] = useState('from-red-500 to-blue-500');

  const colors = [
    'from-red-500 to-blue-500',
    'from-green-500 to-purple-500',
    'from-yellow-500 to-pink-500',
    'from-cyan-500 to-orange-500',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    const titleX = (x - window.innerWidth / 2) * -0.05;
    const titleY = (y - window.innerHeight / 4) * -0.05;
    setTitlePos({ x: titleX, y: titleY });
  };

  const handleButtonHover = (_e: React.MouseEvent) => {
    const randomX = Math.random() * 300 - 150;
    const randomY = Math.random() * 300 - 150;
    setButtonPos({ x: randomX, y: randomY });
  };

  return (
    <div
      className={`relative min-h-screen bg-gradient-to-br ${bgColor} transition-all duration-1000 overflow-hidden`}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          >
            <div
              className="w-16 h-16 rotate-45"
              style={{
                background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <div
          className="text-center animate-glitch"
          style={{
            transform: `translate(${titlePos.x}px, ${titlePos.y}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <h1 className="text-9xl font-black text-white mb-4 animate-wiggle drop-shadow-2xl">
            404
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-yellow-300 animate-spin-slow" />
            <h2 className="text-5xl font-bold text-white animate-shake">
              DESIGN NOT FOUND
            </h2>
            <AlertTriangle className="w-12 h-12 text-yellow-300 animate-bounce" />
          </div>
          <p className="text-2xl text-white/90 italic animate-pulse capitalize">
            Where creativity dies & chaos wins...
          </p>
        </div>

        <div className="mt-12 relative">
          <button
            onMouseEnter={handleButtonHover}
            className="px-8 py-4 bg-yellow-400 text-black font-bold text-xl rounded-none border-4 border-black transform hover:scale-110 transition-all duration-200 shadow-2xl animate-tilt"
            style={{
              transform: `translate(${buttonPos.x}px, ${buttonPos.y}px) rotate(${buttonPos.x * 0.1}deg)`,
              transition: 'all 0.3s ease-out',
            }}
          >
            TRY TO CLICK ME
          </button>
        </div>
      </div>
    </div>
  );
}

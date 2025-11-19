import { useState, useEffect } from 'react';

export default function AbsoluteNonsense() {
  const [rotation, setRotation] = useState(0);
  const [, setFontSize] = useState(40);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 5) % 360);
      setFontSize(() => {
        const sizes = [20, 40, 60, 100, 15, 80, 30];
        return sizes[Math.floor(Math.random() * sizes.length)];
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const absurdPhrases = [
    'WHY ARE YOU STILL HERE',
    'DESIGN IS A SOCIAL CONSTRUCT',
    'THIS COULD HAVE BEEN AN EMAIL',
    'YOUR MONITOR CALLED IT QUIT',
    'ACCESSIBILITY? NEVER HEARD OF HER',
    'LOREM IPSUM DOLOR SIT AMET',
    'ERROR: COMMON SENSE NOT FOUND',
    'CTRL+Z REGRETS',
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-2 bg-white" />
      
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white/10 font-black transform animate-float"
            style={{
              fontSize: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            ?
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-7xl font-black text-white mb-8 animate-glitch-fast">
            ABSOLUTE NONSENSE ZONE
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {absurdPhrases.map((phrase, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center p-4 transform hover:scale-125 transition-all duration-300 cursor-pointer border-4 border-white/30 hover:border-white"
              style={{
                transform: `rotate(${rotation + index * 45}deg) scale(${1 + Math.sin(rotation / 100) * 0.2})`,
                fontSize: `${Math.random() * 10 + 10}px`,
              }}
            >
              <p className="font-black text-white text-center drop-shadow-lg animate-pulse">
                {phrase}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-3xl font-black mt-16 text-transparent bg-gradient-to-r from-red-600 via-yellow-600 via-green-600 via-blue-600 via-purple-600 to-red-600 bg-clip-text animate-pulse inline-block">
            SYMMETRY IS FOR PEOPLE WITH JOBS
          </p>
        </div>
      </div>
    </section>
  );
}

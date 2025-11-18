import { useEffect, useState } from 'react';

export default function ChaosEngine() {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; size: number; rotation: number }>>([]);

  useEffect(() => {
    const spawnRandomElement = () => {
      const newElement = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 100 + 20,
        rotation: Math.random() * 360,
      };
      setElements((prev) => [...prev.slice(-8), newElement]);

      setTimeout(() => {
        setElements((prev) => prev.filter((e) => e.id !== newElement.id));
      }, 3000);
    };

    const interval = setInterval(spawnRandomElement, 800);
    return () => clearInterval(interval);
  }, []);

  const shapes = ['SQUARE', 'CIRCLE', 'TRIANGLE', '???', 'VOID', 'ERROR'];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,.05),rgba(0,0,0,.05)_10px,transparent_10px,transparent_20px)] pointer-events-none" />

      <div className="relative z-10 container mx-auto text-center">
        <h2 className="text-8xl font-black text-white drop-shadow-2xl mb-8 animate-bounce-slow">
          TOTAL CHAOS ENGINE
        </h2>

        <p className="text-2xl font-bold text-black/80 mb-12 animate-wiggle capitalize">
          Random elements spawning at random positions doing random things (I have no idea)
        </p>

        <div className="relative h-[600px] bg-white/20 border-8 border-black rounded-none overflow-hidden">
          {elements.map((el) => (
            <div
              key={el.id}
              className="absolute font-black text-white drop-shadow-lg animate-pulse"
              style={{
                left: `${el.x}%`,
                top: `${el.y}%`,
                fontSize: `${el.size}px`,
                transform: `rotate(${el.rotation}deg) translate(-50%, -50%)`,
                animation: 'spin 2s linear infinite, float 3s ease-in-out infinite',
              }}
            >
              {shapes[Math.floor(Math.random() * shapes.length)]}
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {['UNPREDICTABLE', 'UNHINGED', 'UNEXPLAINABLE'].map((text, idx) => (
            <div
              key={idx}
              className="p-6 bg-black text-white border-4 border-white font-bold text-xl transform hover:scale-110 transition-all duration-300 hover:rotate-12 cursor-pointer"
              style={{
                animation: `wiggle ${2 + idx}s ease-in-out infinite`,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

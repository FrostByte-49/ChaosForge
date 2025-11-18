import { useEffect, useState } from 'react';

export default function DeathByAesthetic() {
  const [styles, setStyles] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newStyles: { [key: string]: string } = {};
      for (let i = 0; i < 6; i++) {
        const hue = Math.random() * 360;
        const saturation = Math.random() * 100;
        const lightness = Math.random() * 100;
        newStyles[`box${i}`] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
      }
      setStyles(newStyles);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">

      <div className="absolute top-0 left-0 w-full h-2 bg-white" />
      
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-7xl font-black text-white text-center mb-12 animate-wiggle drop-shadow-2xl">
          DEATH BY AESTHETIC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="aspect-square border-4 border-white transform hover:scale-110 transition-all duration-300 hover:rotate-12 flex items-center justify-center font-black text-white text-2xl drop-shadow-lg"
              style={{
                backgroundColor: styles[`box${i}`] || '#666',
                animation: 'float linear infinite',
                animationDuration: `${3 + i}s`,
              }}
            >
              VIBE CHECK #{i + 1}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="aspect-square border-4 border-white/50 transform hover:scale-110 transition-all duration-300 flex items-center justify-center"
              style={{
                backgroundColor: styles[`box${i}`] || '#333',
                fontSize: `${Math.random() * 20 + 10}px`,
                fontWeight: 'black',
                color: 'white',
                textShadow: '0 0 20px rgba(0,0,0,0.5)',
                animation: `spin-slow ${2 + Math.random() * 3}s linear infinite`,
              }}
            >
              {['NO', 'YES', 'WHY', 'OK', 'PAIN', 'JOY'][i]}
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-3xl font-black text-white animate-pulse drop-shadow-lg capitalize">
            Colors change every 500ms because STABILITY IS BORING
          </p>
        </div>
      </div>
    </section>
  );
}

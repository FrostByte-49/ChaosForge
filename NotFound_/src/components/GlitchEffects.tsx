import { useState } from 'react';

export default function GlitchEffects() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const effects = [
    { name: 'SHAKE', effect: 'hover:animate-shake' },
    { name: 'BLUR', effect: 'hover:blur-md' },
    { name: 'ZOOM', effect: 'hover:scale-150' },
    { name: 'INVERT', effect: 'hover:invert' },
    { name: 'SPIN', effect: 'hover:animate-spin' },
    { name: 'GLITCH', effect: 'hover:animate-glitch' },
  ];

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto">
        <h2 className="text-7xl font-black text-white text-center mb-4 animate-glitch-fast">
          GLITCH & DISTORTION
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16 animate-flicker">
          Hover over cards to trigger visual chaos
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {effects.map((effect, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`aspect-square bg-gradient-to-br from-pink-500 to-cyan-500
                flex items-center justify-center cursor-pointer transform transition-all
                duration-300 border-4 border-white ${effect.effect}
                ${hoveredCard === index ? 'z-50' : ''}`}
              style={{
                filter: hoveredCard === index ? 'saturate(2) brightness(1.2)' : 'saturate(1)',
              }}
            >
              <p className="text-3xl font-black text-white drop-shadow-lg">{effect.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <img
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Glitched"
            className="mx-auto w-64 h-64 object-cover border-8 border-red-500 animate-glitch-image"
          />
          <p className="mt-4 text-white text-xl font-bold animate-flicker">
            Perfectly distorted image ✨
          </p>
        </div>
      </div>
    </section>
  );
}

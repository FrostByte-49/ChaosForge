import { useEffect, useState } from 'react';

export default function TextCorruption() {
  const [corrupted, setCorrupted] = useState('BEAUTIFUL WEBSITE');

  const baseText = 'BEAUTIFUL WEBSITE';

  useEffect(() => {
    const corruptChars = ['█', '▓', '░', '?', '!', '@', '#', '$', '%', '^', 'ø', 'Ω', '∆', '◊'];

    const interval = setInterval(() => {
      let newText = baseText;
      const corruptionRate = 0.3;

      newText = newText
        .split('')
        .map((char) => {
          if (Math.random() < corruptionRate) {
            return corruptChars[Math.floor(Math.random() * corruptChars.length)];
          }
          return char;
        })
        .join('');

      setCorrupted(newText);
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 text-center bg-black border-y-4 border-red-500">
      <p className="text-6xl font-black text-red-500 animate-glitch-fast drop-shadow-lg font-mono tracking-wider">
        {corrupted}
      </p>
      <p className="text-white/50 mt-4 text-sm italic animate-flicker capitalize">
        (The corruption is intentional. Please stop fixing it.)
      </p>
    </div>
  );
}

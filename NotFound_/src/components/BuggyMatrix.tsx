import { useEffect, useState } from 'react';

export default function BuggyMatrix() {
  const [matrix, setMatrix] = useState<string[][]>([]);

  useEffect(() => {
    const chars = ['0', '1', '█', '▓', '░', '?', '!', '@', '#', '$', '%', '^', '&'];
    const cols = 20;
    const rows = 8;

    const interval = setInterval(() => {
      const newMatrix = Array(rows)
        .fill(null)
        .map(() =>
          Array(cols)
            .fill(null)
            .map(() => chars[Math.floor(Math.random() * chars.length)])
        );
      setMatrix(newMatrix);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 px-4 bg-black relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-b from-green-500 to-black p-8 border-4 border-green-500 font-mono text-green-500 text-xl leading-tight">
          {matrix.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="animate-flicker"
              style={{
                textShadow: '0 0 10px #00ff00',
                opacity: Math.random() > 0.3 ? 1 : 0.5,
              }}
            >
              {row.join(' ')}
            </div>
          ))}
          <p className="mt-4 text-green-400 animate-pulse">
            {`> SYSTEM.CRASH();`}
          </p>
          <p className="text-green-300">
            {`> YOU_HAVE_BEEN_HACKED_BY_DESIGNERS.exe`}
          </p>
        </div>

        <div className="mt-8 text-center">
          <p className="text-white font-black text-2xl animate-glitch-fast drop-shadow-lg">
            THIS IS NOT A MATRIX REFERENCE
          </p>
          <p className="text-white/50 mt-2 italic">
            (It definitely is)
          </p>
        </div>
      </div>
    </section>
  );
}

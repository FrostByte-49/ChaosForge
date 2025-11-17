import { useState, useEffect } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function CursorEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-4 h-4 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full pointer-events-none z-[9999] animate-fade-out"
          style={{
            left: particle.x - 8,
            top: particle.y - 8,
            boxShadow: '0 0 10px rgba(255,255,255,0.8)',
          }}
        />
      ))}
    </>
  );
}

import { useEffect, useState } from 'react';

export default function FracturedReality() {
  const [fractures, setFractures] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    const createFracture = (e: MouseEvent) => {
      const newFracture = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      setFractures((prev) => [...prev.slice(-10), newFracture]);

      setTimeout(() => {
        setFractures((prev) => prev.filter((f) => f.id !== newFracture.id));
      }, 1500);
    };

    window.addEventListener('click', createFracture);
    return () => window.removeEventListener('click', createFracture);
  }, []);

  return (
    <>
      {fractures.map((fracture) => (
        <div
          key={fracture.id}
          className="fixed pointer-events-none z-40 animate-fade-out"
          style={{
            left: fracture.x,
            top: fracture.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="relative w-40 h-40">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute border-2 border-red-500/50 animate-pulse"
                style={{
                  width: `${Math.random() * 60 + 20}px`,
                  height: `${Math.random() * 60 + 20}px`,
                  left: `${Math.cos((i / 8) * Math.PI * 2) * 40}px`,
                  top: `${Math.sin((i / 8) * Math.PI * 2) * 40}px`,
                  transform: `rotate(${i * 45}deg)`,
                }}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

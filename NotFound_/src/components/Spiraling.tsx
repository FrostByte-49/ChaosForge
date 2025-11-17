import { useEffect, useState } from 'react';

interface Message {
  id: number;
  text: string;
  x: number;
  y: number;
  rotation: number;
  color: string;
}

export default function Spiraling() {
  const [messages, setMessages] = useState<Message[]>([]);

  const crazySayings = [
    'PLEASE SCROLL',
    'NO DONT',
    'WHY THO',
    'STOP IT',
    'HELP ME',
    'IM SCARED',
    'HIRE ME',
    'FIRE ME',
    'BUG OR FEATURE?',
    'YES',
    'NO',
    'MAYBE',
    '...YES',
    'COLOR IS PAIN',
    'DESIGN IS DEAD',
    'I AM ALIVE',
    'OR AM I?',
    'SYNTAX ERROR: LIFE',
    'RETURN 42',
    'VOID GANG',
    'console.log(help)',
    'STACK OVERFLOW',
    'CTRL+ALT+DELETE',
    'BLAME CSS',
    'BLAME JAVASCRIPT',
    'BLAME LIFE',
  ];

  const colors = ['text-red-600', 'text-blue-600', 'text-green-600', 'text-purple-600', 'text-yellow-600', 'text-pink-600', 'text-cyan-600'];

  useEffect(() => {
    const spawnMessage = () => {
      const newMessage = {
        id: Date.now(),
        text: crazySayings[Math.floor(Math.random() * crazySayings.length)],
        x: Math.random() * 90 + 5,
        y: Math.random() * 90 + 5,
        rotation: Math.random() * 360 - 180,
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setMessages((prev) => [...prev.slice(-20), newMessage]);

      setTimeout(() => {
        setMessages((prev) => prev.filter((m) => m.id !== newMessage.id));
      }, 4000);
    };

    const interval = setInterval(spawnMessage, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-black to-cyan-900 relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse" />
      </div>

      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-8xl font-black text-white mb-4 animate-shake drop-shadow-2xl">
            AI IS SPIRALING
          </h2>
          <p className="text-2xl text-white/80 italic animate-flicker">
            (This section is self-aware, unlike the rest of the site)
          </p>
        </div>

        <div className="relative h-screen max-w-6xl mx-auto">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`absolute font-black text-4xl drop-shadow-lg animate-wiggle pointer-events-none ${msg.color}`}
              style={{
                left: `${msg.x}%`,
                top: `${msg.y}%`,
                transform: `rotate(${msg.rotation}deg) translate(-50%, -50%)`,
                opacity: 0.9,
                textShadow: '0 0 20px rgba(255,255,255,0.5)',
              }}
            >
              {msg.text}
            </div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <p className="text-6xl font-black text-white/20 animate-pulse transform rotate-45">
                VOID
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

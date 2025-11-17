import { useState, useEffect } from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface Popup {
  id: number;
  message: string;
  color: string;
}

export default function ErrorPopups() {
  const [popups, setPopups] = useState<Popup[]>([]);

  const messages = [
    { text: 'Error 69420: Design not found.', color: 'bg-red-500' },
    { text: 'Warning: Your UI has given up.', color: 'bg-yellow-500' },
    { text: 'Are you sure you want to proceed? Too late.', color: 'bg-purple-500' },
    { text: 'Critical: Symmetry.exe has stopped working.', color: 'bg-orange-500' },
    { text: 'Success: Successfully failed!', color: 'bg-green-500' },
    { text: 'Info: This is fine. Everything is fine. 🔥', color: 'bg-blue-500' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.5) {
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        const newPopup = {
          id: Date.now(),
          message: randomMessage.text,
          color: randomMessage.color,
        };
        setPopups((prev) => [...prev, newPopup]);

        setTimeout(() => {
          setPopups((prev) => prev.filter((p) => p.id !== newPopup.id));
        }, 4000);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const removePopup = (id: number) => {
    setPopups((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
      {popups.map((popup) => (
        <div
          key={popup.id}
          className={`${popup.color} text-white p-4 shadow-2xl border-4 border-black
            transform animate-slide-in-right hover:scale-105 transition-all`}
          style={{
            animation: 'slideInRight 0.3s ease-out, wiggle 0.5s ease-in-out infinite',
          }}
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 flex-shrink-0 animate-pulse" />
            <p className="font-bold flex-1">{popup.message}</p>
            <button
              onClick={() => removePopup(popup.id)}
              className="hover:bg-black/20 p-1 rounded transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

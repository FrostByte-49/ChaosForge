import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function BrokenNav() {
  const [items, setItems] = useState(['Home', 'About', 'Services', 'Contact']);
  const [menuOpen, setMenuOpen] = useState(false);

  const shuffleItems = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b-4 border-pink-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl font-black text-white transform -rotate-3 animate-bounce-slow">
            CHAOS™
          </div>

          <div className="hidden md:flex gap-8 items-center">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-white font-bold hover:text-pink-400 transition-colors"
                style={{
                  transform: `rotate(${(index - 1.5) * 5}deg) translateY(${Math.sin(index) * 10}px)`,
                  fontSize: `${14 + Math.random() * 8}px`,
                }}
                onMouseEnter={shuffleItems}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 bg-gradient-to-r from-purple-500 to-yellow-500 text-white font-bold transform hover:rotate-180 transition-all duration-500"
          >
            {menuOpen ? <X className="animate-spin" /> : <Menu className="animate-pulse" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-600 p-8 transform origin-top animate-swing">
          <p className="text-center text-white text-2xl font-bold animate-shake">
            LOL THIS MENU DOES NOTHING
          </p>
        </div>
      )}
    </nav>
  );
}

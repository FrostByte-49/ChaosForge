export default function LayoutDisaster() {
  const cards = [
    { title: 'TOO BIG', size: 'w-96 h-96', rotate: 'rotate-6', color: 'bg-red-500' },
    { title: 'Too Small', size: 'w-24 h-24', rotate: '-rotate-12', color: 'bg-blue-400' },
    { title: 'Why Is This Tilted?', size: 'w-64 h-48', rotate: 'rotate-45', color: 'bg-green-500' },
    { title: 'UNNECESSARY SCROLLBAR', size: 'w-48 h-32', rotate: '-rotate-3', color: 'bg-yellow-500' },
    { title: 'IM UPSIDE DOWN', size: 'w-56 h-56', rotate: 'rotate-180', color: 'bg-purple-500' },
    { title: 'barely visible', size: 'w-40 h-40', rotate: 'rotate-90', color: 'bg-pink-500' },
  ];

  return (
    <section className="py-20 px-4 bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-6xl font-black text-white text-center mb-16 animate-glitch">
          LAYOUT DISASTER ZONE ⚠️
        </h2>

        <div className="relative h-[800px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute ${card.size} ${card.rotate} ${card.color} p-6 shadow-2xl
                hover:scale-110 hover:z-50 hover:animate-vibrate transition-all duration-300 cursor-pointer
                border-4 border-black`}
              style={{
                left: `${10 + (index * 15)}%`,
                top: `${50 + (Math.sin(index) * 200)}px`,
                zIndex: index,
              }}
            >
              <p
                className={`font-black text-white drop-shadow-lg ${
                  card.title === 'Too Small' ? 'text-xs' :
                  card.title === 'TOO BIG' ? 'text-4xl' : 'text-xl'
                }`}
              >
                {card.title}
              </p>
              {card.title === 'UNNECESSARY SCROLLBAR' && (
                <div className="mt-2 overflow-y-scroll h-20 border-2 border-white">
                  <p className="text-white text-xs">
                    Scroll scroll scroll scroll scroll scroll scroll scroll
                    Scroll scroll scroll scroll scroll scroll scroll scroll
                    Scroll scroll scroll scroll scroll scroll scroll scroll
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

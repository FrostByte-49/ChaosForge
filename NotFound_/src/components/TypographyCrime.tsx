export default function TypographyCrime() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-lime-300 via-orange-400 to-pink-500 relative overflow-hidden">
      <div className="absolute inset-0 animate-pulse opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,.1)_10px,rgba(0,0,0,.1)_20px)]" />
      </div>

      <div className="relative z-10 container mx-auto">
        <h2 className="text-center mb-12">
          <span className="text-8xl font-serif text-red-600 animate-wiggle inline-block">W</span>
          <span className="text-3xl font-mono text-blue-800 inline-block transform rotate-12">e</span>
          <span className="text-6xl font-sans text-green-600 inline-block">P</span>
          <span className="text-2xl font-bold text-purple-900 inline-block -rotate-6">r</span>
          <span className="text-9xl font-black text-yellow-600 inline-block">O</span>
          <span className="text-4xl font-light text-pink-700 inline-block rotate-3">u</span>
          <span className="text-5xl font-extrabold text-cyan-600 inline-block">D</span>
          <span className="text-3xl italic text-orange-700 inline-block -rotate-12">l</span>
          <span className="text-7xl font-thin text-red-500 inline-block">Y</span>
          <br />
          <span className="text-6xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent animate-pulse inline-block">
            BREAK
          </span>
          <span className="text-2xl font-mono text-white inline-block mx-4">all</span>
          <span className="text-8xl font-serif text-black inline-block transform -rotate-6">
            DESIGN
          </span>
          <span className="text-4xl font-sans text-blue-600 inline-block rotate-12 ml-2">
            rules.
          </span>
        </h2>

        <div className="space-y-8">
          <div className="text-center">
            <p className="text-xs inline-block">tiny</p>
            <p className="text-base inline-block ml-2">normal</p>
            <p className="text-4xl inline-block ml-2 font-bold">BIG</p>
            <p className="text-8xl inline-block ml-2 font-black">HUGE</p>
            <p className="text-sm inline-block ml-2 opacity-50">help</p>
          </div>

          <marquee className="text-3xl font-bold text-white bg-black py-4 transform -rotate-2">
            ⚠️ SCROLLING TEXT IS BACK BABY ⚠️ EMBRACE THE CHAOS ⚠️ CSS IS CRYING ⚠️
          </marquee>

          <div className="relative">
            <p className="text-6xl font-black text-red-600 absolute top-0 left-1/2 -translate-x-1/2 animate-bounce">
              OVERLAPPING
            </p>
            <p className="text-6xl font-black text-blue-600 absolute top-4 left-1/2 -translate-x-1/2 animate-pulse">
              TEXT
            </p>
            <p className="text-6xl font-black text-green-600 absolute top-8 left-1/2 -translate-x-1/2 animate-wiggle">
              IS
            </p>
            <p className="text-6xl font-black text-yellow-600 absolute top-12 left-1/2 -translate-x-1/2 animate-shake">
              FUN
            </p>
            <div className="h-32" />
          </div>

          <p className="text-center text-2xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
            🌈 RAINBOW GRADIENT BECAUSE WHY NOT 🌈
          </p>
        </div>
      </div>
    </section>
  );
}

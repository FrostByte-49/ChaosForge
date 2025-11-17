export default function BrokenFooter() {
  return (
    <footer className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_50px,rgba(255,255,255,.1)_50px,rgba(255,255,255,.1)_100px)]" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="text-center space-y-8">
          <p className="text-9xl font-black text-white transform -rotate-12 animate-bounce-slow inline-block">
            TINY
          </p>
          <p className="text-xs text-white/50 transform rotate-6 inline-block ml-8">footer</p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 items-center">
          <a
            href="#"
            className="text-white text-2xl font-bold transform rotate-12 hover:rotate-45 transition-all"
          >
            Home
          </a>
          <a
            href="#"
            className="text-yellow-300 text-sm transform -rotate-6 hover:scale-150 transition-all"
          >
            About
          </a>
          <a
            href="#"
            className="text-pink-300 text-4xl font-black transform rotate-90 hover:rotate-0 transition-all"
          >
            Contact
          </a>
          <a
            href="#"
            className="text-green-300 text-xs italic transform -rotate-12 hover:text-red-500 transition-all"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-cyan-300 text-3xl font-mono transform rotate-3 hover:animate-spin transition-all"
          >
            Terms
          </a>
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-white text-xl font-bold">
            © 3025 Chaos Industries Inc.
            <span className="text-xs ml-2">(We're from the future)</span>
          </p>
          <p className="text-yellow-300 text-lg italic animate-pulse">
            Made with 💔 and zero design principles
          </p>
          <p className="text-2xl font-black text-white transform -rotate-3 inline-block animate-wiggle">
            If this website hurt your eyes, mission accomplished.
          </p>
        </div>

        <div className="mt-12 flex justify-center gap-8 flex-wrap">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-16 h-16 bg-white/20 transform hover:scale-150 hover:rotate-180 transition-all duration-500 cursor-pointer"
              style={{
                transform: `rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}

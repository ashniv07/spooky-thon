import React from 'react';

// Spider Component using SVG
function Spider({ startX, delay, size }) {
  return (
    <div
      className="absolute top-0"
      style={{ left: `${startX}%`, animationDelay: `${delay}s` }}
    >
       {/* String */}
      <div className={`w-[1px] bg-white/50 mx-auto`} style={{ height: `${size}px` }}></div>
      {/* Spider SVG */}
      <svg
  className="animate-bounce-spider"
  width="20"
  height="20"
  viewBox="0 0 24 24"
  fill="white"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* Body */}
  <circle cx="12" cy="12" r="4" />

  {/* Legs */}
  {/* Left Side */}
  <line x1="12" y1="12" x2="6" y2="8" stroke="white" strokeWidth="1" />
  <line x1="12" y1="12" x2="6" y2="10" stroke="white" strokeWidth="1" />
  <line x1="12" y1="12" x2="6" y2="14" stroke="white" strokeWidth="1" />
  <line x1="12" y1="12" x2="6" y2="16" stroke="white" strokeWidth="1" />

  {/* Right Side */}
  <line x1="12" y1="12" x2="18" y2="8" stroke="white" strokeWidth="1" />
  <line x1="12" y1="12" x2="18" y2="10" stroke="white" strokeWidth="1" />
  <line x1="12" y1="12" x2="18" y2="14" stroke="white" strokeWidth="1" />
  <line x1="12" y1="12" x2="18" y2="16" stroke="white" strokeWidth="1" />
</svg>

    </div>
  );
}

export default function HauntedIDELanding() {
  return (
    <div className="min-h-screen bg-[url('/src/assets/images/spooky-thon.png')] bg-center relative overflow-hidden">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Butcherman&family=Nosifer&display=swap');

        /* GLITCH TEXT */
        .glitch {
          position: relative;
          display: inline-block;
          color: white;
          text-shadow: 0 0 12px red, 0 2px orange;
          animation: glitch-skew 1s infinite linear alternate-reverse;
        }

        .glitch::before,
        .glitch::after {
          content: attr(data-text);
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          overflow: hidden;
          clip: rect(0, 900px, 0, 0);
        }

        .glitch::before {
          left: 2px;
          text-shadow: -2px 0 black;
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        .glitch::after {
          left: -2px;
          text-shadow: -2px 0 orange;
          animation: glitch-anim2 3s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(20px, 9999px, 80px, 0); }
          20% { clip: rect(10px, 9999px, 60px, 0); }
          40% { clip: rect(40px, 9999px, 70px, 0); }
          60% { clip: rect(15px, 9999px, 50px, 0); }
          80% { clip: rect(25px, 9999px, 65px, 0); }
          100% { clip: rect(5px, 9999px, 45px, 0); }
        }

        @keyframes glitch-anim2 {
          0% { clip: rect(15px, 9999px, 60px, 0); }
          25% { clip: rect(30px, 9999px, 90px, 0); }
          50% { clip: rect(10px, 9999px, 80px, 0); }
          75% { clip: rect(40px, 9999px, 100px, 0); }
          100% { clip: rect(20px, 9999px, 70px, 0); }
        }

        @keyframes glitch-skew {
          0% { transform: skew(0deg); }
          50% { transform: skew(2deg); }
          100% { transform: skew(-2deg); }
        }

        /* ARROW ANIMATION */
        @keyframes arrow-flicker {
          0%, 100% { transform: translateX(0) scale(1); opacity: 1; }
          50% { transform: translateX(6px) scale(1.2); opacity: 0.6; }
        }

        .arrow-animate {
          display: inline-block;
          animation: arrow-flicker 1s infinite ease-in-out;
        }

        /* SPIDER BOUNCE */
        @keyframes bounce-spider {
          0% { transform: translateY(0); }
          50% { transform: translateY(50px); }
          100% { transform: translateY(0); }
        }

        .animate-bounce-spider {
          animation: bounce-spider 5s infinite ease-in-out;
        }
      `}</style>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-radial from-red-900/40 via-red-950/60 to-black"></div>

      {/* Spiders */}
      {[...Array(3)].map((_, i) => (
        <Spider
          key={i}
          startX={Math.random() * 100}
          delay={Math.random() * 5}
          size={50 + Math.random() * 100}
        />
      ))}

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center items-center pt-8 pb-4">
        <div className="flex space-x-12">
          {['Home', 'Chapters', 'Play', 'About'].map((item, index) => (
            <a
              key={index}
              href="#"
              className="text-white/90 hover:text-white text-lg font-medium transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-[85vh] px-12">
        <div className="flex-1 max-w-2xl">
          {/* Glitch Heading */}
          <h1
            className="mb-8 leading-tight drop-shadow-lg"
            style={{ fontFamily: 'Creepster, fantasy' }}
          >
            <div
              className="glitch lg:text-[98px] font-black tracking-wide mb-4 ml-40"
              data-text="DEBUG"
            >
              DEBUG
            </div>
            <div
              className="glitch text-5xl lg:text-[98px] ml-20 font-black tracking-wide leading-tight"
              data-text="IF YOU DARE"
            >
              IF YOU DARE
            </div>
          </h1>

          {/* Glitch Description */}
          <p className="glitch text-white/90 text-lg ml-10 lg:text-[20px] mb-10 font-mono">
            A haunted IDE where bugs chase you, AI whispers cursed hints and every mistake brings you closer to the void.
          </p>

          {/* CTA Button */}
          <button
            className="bg-white text-black px-8 ml-40 py-3 font-bold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2"
            style={{ fontFamily: 'Creepster, fantasy' }}
          >
            ENTER THE HAUNTED IDE <span className="arrow-animate">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

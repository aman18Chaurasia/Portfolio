
import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SiReact, SiPython } from "react-icons/si";
import { Cpu, Blocks, Sparkles, TerminalSquare } from "lucide-react";
import TypewriterLoop from "./TypewriterLoop";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const LOTTIE_PATH = "/hero-animation-lottie.json";
const FINAL_FRAME = 150;
const FINAL_STAGE_START = 120;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

const floatingIcons = [
  { Icon: SiReact, color: "#61dafb", size: 38, style: { left: "12%", top: "55%" } },
  { Icon: SiPython, color: "#3776AB", size: 31, style: { right: "13%", top: "65%" } },
  { Icon: Cpu, color: "#eab308", size: 31, style: { left: "24%", top: "30%" } },
  { Icon: Sparkles, color: "#a21caf", size: 27, style: { right: "22%", top: "23%" } },
  { Icon: Blocks, color: "#4172fa", size: 29, style: { right: "30%", top: "37%" } },
];

const fallbackImage = "/hero-fallback.png"; // Use a relevant image in /public

const MetaMorphHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<AnimationItem | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isFinalStage, setIsFinalStage] = useState(false);
  const isMobile = useIsMobile();

  // Lottie loading and GSAP ScrollTrigger-driven progress
  useLayoutEffect(() => {
    if (isMobile) return; // Skip scroll-anim on mobile
    if (!lottieRef.current) return;

    let animation: AnimationItem | null = null;
    let ctx: gsap.Context | null = null;
    let st: ScrollTrigger | null = null;

    lottieInstance.current = lottie.loadAnimation({
      container: lottieRef.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: LOTTIE_PATH,
      rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    });

    lottieInstance.current.addEventListener("DOMLoaded", () => {
      setIsReady(true);
      animation = lottieInstance.current;
      ctx = gsap.context(() => {
        // Scroll progress (0-1) → frames (0-150)
        const totalFrames = FINAL_FRAME;
        st = ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",
          end: "+=100vh",
          scrub: 1.2,
          onUpdate: (self) => {
            const progress = self.progress; // 0 → 1
            const frame = Math.round(progress * totalFrames);
            animation?.goToAndStop(frame, true);
            setIsFinalStage(frame >= FINAL_STAGE_START);
          },
        });
      }, containerRef);

      // On resize, refresh ScrollTrigger
      setTimeout(() => ScrollTrigger.refresh(), 250);
    });

    return () => {
      lottieInstance.current?.destroy();
      st?.kill();
      ctx?.revert();
    };
    // eslint-disable-next-line
  }, [isMobile]);

  // Accessibility: fallback to static image or disabled animation on mobile
  if (isMobile) {
    return (
      <div
        className="relative w-full h-[450px] md:h-[680px] bg-gradient-to-br from-zinc-900 via-purple-950 to-black flex flex-col items-center justify-center overflow-hidden rounded-3xl shadow-2xl border border-purple-800/30 mb-10"
        ref={containerRef}
        aria-label="MetaMorph Developer Animation static preview"
      >
        {/* Fallback image */}
        <img
          src={fallbackImage}
          alt="MetaMorph Developer"
          className="w-[82%] h-auto max-h-[440px] object-contain pointer-events-none select-none mx-auto"
          draggable={false}
        />
        {/* Overlay ambient layers for a bit of depth */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-purple-500/20 blur-2xl" />
          <div className="absolute right-16 top-24 w-36 h-20 rounded-full bg-cyan-400/10 blur-xl rotate-12" />
          <div className="absolute left-[55%] top-[75%] w-36 h-12 bg-pink-400/10 blur-md rounded-full" />
        </div>
        {/* Static heading */}
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 text-lg font-bold text-gradient whitespace-nowrap z-20 animate-fade-in">MetaMorph – The Evolving Developer</div>
      </div>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[650px] md:h-[820px] flex items-center justify-center overflow-visible px-0 md:px-8 z-40 mb-16"
      aria-label="MetaMorph Hero Lottie Animation"
    >
      {/* Ambient BG */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-[36%] left-[-7%] w-60 h-52 rounded-full bg-cyan-500/20 blur-2xl" />
        <div className="absolute right-[-4%] bottom-[16%] w-80 h-36 rounded-full bg-pink-400/12 blur-3xl rotate-12" />
        <div className="absolute left-[54%] top-[50%] w-72 h-16 bg-purple-500/18 blur-xl rounded-full" />
        {/* Subtle Grid or Particles */}
        <svg width="100%" height="100%" className="absolute inset-0 opacity-20 select-none" style={{ zIndex: 1 }}>
          <defs>
            <radialGradient id="grad1" cx="50%" cy="50%" r="85%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.22" />
              <stop offset="80%" stopColor="#0ea5e9" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="54%" cy="60%" r="380" fill="url(#grad1)" />
        </svg>
      </div>
      {/* Lottie Animation */}
      <div
        ref={lottieRef}
        className="relative w-[98vw] max-w-[610px] mx-auto h-[99%] z-10 select-none"
        style={{ minHeight: 360, pointerEvents: "none", userSelect: "none" }}
        aria-label="Evolving Developer Animation"
      />
      {/* Parallax floating SVGs/icons */}
      {floatingIcons.map(({ Icon, color, size, style }, idx) => (
        <div
          key={idx}
          className={`absolute pointer-events-none z-20 animate-float`}
          style={{
            ...style,
            filter: "blur(0.5px)",
            opacity: 0.86,
            transition: "transform 0.2s cubic-bezier(0.4,0,0.2,1)",
            animationDelay: `${idx * 0.8 + 0.2}s`,
          }}
          aria-hidden
        >
          <Icon size={size} color={color} />
        </div>
      ))}
      {/* Typewriter text overlay on final stage */}
      {isFinalStage && (
        <div className="absolute left-1/2 bottom-[16%] -translate-x-1/2 min-w-[210px] md:min-w-[280px]">
          <div className="bg-gradient-to-br from-gray-800/80 via-purple-900/70 to-violet-800/50 px-6 py-4 rounded-xl shadow-xl border border-purple-700/30 backdrop-blur-md glass animate-fade-in">
            <div className="font-mono text-cyan-300 text-base md:text-xl flex flex-row items-center gap-2">
              <TerminalSquare className="w-6 h-6 text-purple-400" />
              <TypewriterLoop
                text={`console.log("Hello, web evolution 🌐🤖!");`}
                className="bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent font-bold"
                speed={44}
                pause={1200}
              />
            </div>
            <div className="text-xs text-gray-200 opacity-65 pt-2 pl-8">MetaMorph – The Evolving Developer</div>
          </div>
        </div>
      )}
      {/* Main heading overlays */}
      <div className="absolute left-1/2 top-8 -translate-x-1/2 text-3xl md:text-5xl text-center font-extrabold tracking-tight text-gradient z-30 drop-shadow-lg whitespace-nowrap">
        MetaMorph – <span className="text-gradient-static">The Evolving Developer</span>
      </div>
    </section>
  );
};

export default MetaMorphHero;


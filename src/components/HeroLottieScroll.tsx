
import React, { useRef, useEffect } from "react";
import lottie, { AnimationItem } from "lottie-web";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroLottieScrollProps {
  animationPath?: string; // Path to Lottie JSON
  height?: number | string;
}

const HeroLottieScroll: React.FC<HeroLottieScrollProps> = ({
  animationPath = "/hero-animation-lottie.json",
  height = 440,
}) => {
  const container = useRef<HTMLDivElement>(null);
  const lottieInstance = useRef<AnimationItem | null>(null);

  useEffect(() => {
    // Load animation
    if (!container.current) return;
    lottieInstance.current = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: animationPath,
      name: "HeroLottieScroll"
    });
    lottieInstance.current.setSpeed(1);

    let anim = lottieInstance.current;

    // Wait for animation to be loaded before ScrollTrigger setup
    const onLoaded = () => {
      gsap.to({}, {
        scrollTrigger: {
          trigger: container.current,
          start: "top 10%",
          end: "bottom top+=60%",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
        onUpdate: (self) => {
          if (!anim) return;
          const frame = Math.floor(self.progress * (anim.totalFrames - 1));
          anim.goToAndStop(frame, true);
        },
      });
    };

    lottieInstance.current.addEventListener("DOMLoaded", onLoaded);

    return () => {
      anim?.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animationPath]);

  return (
    <div
      className="w-full flex justify-center items-center bg-transparent z-10 mx-auto relative"
      style={{ height, minHeight: typeof height === "number" ? height : undefined }}
    >
      <div ref={container} className="w-full h-full" />
      {/* Optional: absolute box for overlaying laptop screen React elements */}
      {/* <div className="absolute" style={{top:110,left:160,width:180,height:60}}>Your live component</div> */}
    </div>
  );
};

export default HeroLottieScroll;

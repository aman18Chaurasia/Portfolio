
import React from "react";

interface AnimatedSectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedSectionContainer = ({ children, className = "" }: AnimatedSectionContainerProps) => (
  <section className={`relative rounded-3xl mx-auto my-12 max-w-6xl p-10 bg-gradient-to-br from-black/70 via-gray-900/70 to-black/80 border border-purple-900/30 shadow-lg glass animate-fade-in transition-all duration-700 ${className}`}>
    <div className="absolute -top-20 -left-10 w-60 h-60 rounded-full bg-gradient-to-br from-purple-800/10 to-cyan-400/10 blur-2xl pointer-events-none animate-float" />
    <div className="absolute bottom-0 right-0 w-80 h-32 rounded-full bg-gradient-to-r from-white/10 to-cyan-600/10 blur-2xl pointer-events-none animate-pulse" />
    <div className="relative z-10">{children}</div>
  </section>
);

export default AnimatedSectionContainer;

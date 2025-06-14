import React from "react";
import Navigation from "./Navigation";
import CursorFollower from "./CursorFollower";
import CursorFollowingCharacter from "./CursorFollowingCharacter";
import InteractiveBackground from "./InteractiveBackground";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  React.useEffect(() => {
    document.body.style.cursor = "none";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative w-full">
      {/* Ambient Living Background */}
      <CursorFollower />
      {/* Removed: <CursorFollowingCharacter /> */}
      <InteractiveBackground />
      {/* Fluid Gradient and Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-black/80 to-gray-950/40" />
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/5 to-cyan-400/10 blur-3xl animate-float" />
        <div className="absolute bottom-10 right-1/4 w-96 h-64 rounded-full bg-gradient-to-br from-pink-400/10 to-white/5 blur-2xl animate-pulse" />
        <div className="absolute right-0 top-0 w-[110px] h-[400px] bg-gradient-to-b from-cyan-800/10 to-pink-700/0 blur-2xl" />
      </div>
      {/* Floating Futuristic Navigation */}
      <Navigation />
      {/* Main Animated Content */}
      <main className="relative z-10 pt-32 md:pt-44">{children}</main>
    </div>
  );
};

export default Layout;

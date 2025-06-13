
import React from 'react';
import Navigation from './Navigation';
import CursorFollower from './CursorFollower';
import CursorFollowingCharacter from './CursorFollowingCharacter';
import InteractiveBackground from './InteractiveBackground';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  React.useEffect(() => {
    document.body.style.cursor = 'none';
    return () => {
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <CursorFollower />
      <CursorFollowingCharacter />
      <InteractiveBackground />
      
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 via-black to-gray-900/30"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-white/5 to-gray-500/5 blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-gray-400/5 to-white/5 blur-2xl animate-pulse"></div>
      </div>

      <Navigation />
      
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;

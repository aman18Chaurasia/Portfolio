
import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  life: number;
}

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
}

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [floatingElements, setFloatingElements] = useState<FloatingElement[]>([]);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const particleIdRef = useRef(0);
  const elementIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create trail particles
      if (Math.random() > 0.8) {
        const newParticle: Particle = {
          id: particleIdRef.current++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          size: Math.random() * 4 + 2,
          color: ['#8b5cf6', '#ec4899', '#06b6d4', '#10b981'][Math.floor(Math.random() * 4)],
          life: 1
        };
        setParticles(prev => [...prev, newParticle].slice(-50));
      }
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Create floating elements on click
      const newElement: FloatingElement = {
        id: elementIdRef.current++,
        x: mousePosition.x,
        y: mousePosition.y,
        rotation: Math.random() * 360,
        scale: 1,
        opacity: 1
      };
      setFloatingElements(prev => [...prev, newElement].slice(-20));
    };

    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        setCursorVariant('button');
      } else if (target.tagName === 'H1' || target.tagName === 'H2') {
        setCursorVariant('text');
      } else {
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseEnter);
    };
  }, [mousePosition]);

  // Animate particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          life: particle.life - 0.02,
          y: particle.y - 1,
          x: particle.x + (Math.random() - 0.5) * 0.5
        })).filter(particle => particle.life > 0)
      );

      setFloatingElements(prev =>
        prev.map(element => ({
          ...element,
          opacity: element.opacity - 0.01,
          scale: element.scale + 0.02,
          rotation: element.rotation + 2
        })).filter(element => element.opacity > 0)
      );
    }, 16);

    return () => clearInterval(interval);
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      rotate: 0,
    },
    button: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      rotate: 0,
    },
    text: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.2,
      rotate: 45,
    }
  };

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-full h-full bg-white rounded-full shadow-lg" />
      </motion.div>

      {/* Cursor Ring */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] border-2 border-white/30 rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />

      {/* Floating Geometric Elements */}
      <AnimatePresence>
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className="fixed pointer-events-none z-[9997]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              x: element.x - 15,
              y: element.y - 15,
              opacity: element.opacity,
              scale: element.scale,
              rotate: element.rotation,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60" />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Trail Particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9996]"
            initial={{ opacity: 1, scale: 1 }}
            animate={{
              x: particle.x,
              y: particle.y,
              opacity: particle.life,
              scale: particle.life,
            }}
            exit={{ opacity: 0, scale: 0 }}
            style={{
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              borderRadius: '50%',
            }}
          />
        ))}
      </AnimatePresence>

      {/* Magnetic Field Effect */}
      <motion.div
        className="fixed pointer-events-none z-[9995] w-32 h-32 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
          x: mousePosition.x - 64,
          y: mousePosition.y - 64,
        }}
        animate={{
          scale: isClicking ? 1.5 : 1,
          opacity: isClicking ? 0.8 : 0.3,
        }}
        transition={{ duration: 0.2 }}
      />

      {/* Orbit Elements */}
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className="fixed pointer-events-none z-[9994] w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
          animate={{
            x: mousePosition.x + Math.cos((Date.now() * 0.001) + (index * Math.PI * 2 / 3)) * 50 - 4,
            y: mousePosition.y + Math.sin((Date.now() * 0.001) + (index * Math.PI * 2 / 3)) * 50 - 4,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      ))}
    </>
  );
};

export default CursorFollower;

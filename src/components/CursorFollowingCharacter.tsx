
import React, { useState, useEffect } from 'react';

const CursorFollowingCharacter = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [characterPosition, setCharacterPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Get character element position
    const characterElement = document.getElementById('character');
    if (characterElement) {
      const rect = characterElement.getBoundingClientRect();
      setCharacterPosition({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
    }
  }, []);

  // Calculate angles for eye and head movement
  const calculateAngle = (centerX: number, centerY: number) => {
    const deltaX = mousePosition.x - centerX;
    const deltaY = mousePosition.y - centerY;
    return Math.atan2(deltaY, deltaX);
  };

  const headAngle = calculateAngle(characterPosition.x, characterPosition.y);
  const eyeMovementX = Math.cos(headAngle) * 3;
  const eyeMovementY = Math.sin(headAngle) * 3;
  const headRotation = headAngle * (180 / Math.PI) * 0.1; // Subtle head rotation

  return (
    <div className="fixed bottom-8 right-8 z-50 pointer-events-none">
      <div 
        id="character"
        className="relative w-24 h-32 transition-transform duration-200"
        style={{ transform: `rotate(${headRotation}deg)` }}
      >
        {/* Character Body */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-20 bg-gray-800 rounded-t-3xl border-2 border-white">
          {/* Shirt/Jacket details */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-white rounded-sm opacity-50"></div>
        </div>

        {/* Character Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gray-200 rounded-full border-2 border-white relative">
          {/* Hair */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gray-800 rounded-t-full border-2 border-white"></div>
          
          {/* Eyes Container */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {/* Left Eye */}
            <div className="relative w-5 h-4 bg-white rounded-full border border-gray-300 overflow-hidden">
              <div 
                className="absolute w-3 h-3 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                style={{ 
                  transform: `translate(${eyeMovementX}px, ${eyeMovementY}px)` 
                }}
              >
                {/* Pupil highlight */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="relative w-5 h-4 bg-white rounded-full border border-gray-300 overflow-hidden">
              <div 
                className="absolute w-3 h-3 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                style={{ 
                  transform: `translate(${eyeMovementX}px, ${eyeMovementY}px)` 
                }}
              >
                {/* Pupil highlight */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Eyebrows */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
            <div className="w-4 h-1 bg-gray-800 rounded-full transform -rotate-12"></div>
            <div className="w-4 h-1 bg-gray-800 rounded-full transform rotate-12"></div>
          </div>

          {/* Nose */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-gray-300 rounded-full"></div>

          {/* Mouth */}
          <div className="absolute top-11 left-1/2 transform -translate-x-1/2 w-4 h-2 border-b-2 border-gray-800 rounded-b-full"></div>
        </div>

        {/* Arms */}
        <div className="absolute top-16 -left-4 w-6 h-12 bg-gray-800 rounded-full border-2 border-white transform rotate-12"></div>
        <div className="absolute top-16 -right-4 w-6 h-12 bg-gray-800 rounded-full border-2 border-white transform -rotate-12"></div>
      </div>

      {/* Character Shadow */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-4 bg-black/20 rounded-full blur-sm"></div>
    </div>
  );
};

export default CursorFollowingCharacter;

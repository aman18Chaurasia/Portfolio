
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
    const characterElement = document.getElementById('main-character');
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
  const eyeMovementX = Math.cos(headAngle) * 4;
  const eyeMovementY = Math.sin(headAngle) * 4;
  const headRotation = headAngle * (180 / Math.PI) * 0.08; // Subtle head rotation

  return (
    <div className="relative pointer-events-none">
      <div 
        id="main-character"
        className="relative w-48 h-64 transition-transform duration-200 scale-110"
        style={{ transform: `rotate(${headRotation}deg)` }}
      >
        {/* Character Body */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-gray-800 rounded-t-3xl border-4 border-white">
          {/* Shirt/Jacket details */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 border-2 border-white rounded-lg opacity-50"></div>
          {/* Buttons */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 space-y-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Character Head */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gray-200 rounded-full border-4 border-white relative">
          {/* Hair */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-20 bg-gray-800 rounded-t-full border-4 border-white"></div>
          
          {/* Eyes Container */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex space-x-6">
            {/* Left Eye */}
            <div className="relative w-10 h-8 bg-white rounded-full border-2 border-gray-300 overflow-hidden">
              <div 
                className="absolute w-6 h-6 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                style={{ 
                  transform: `translate(${eyeMovementX}px, ${eyeMovementY}px)` 
                }}
              >
                {/* Pupil highlight */}
                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Right Eye */}
            <div className="relative w-10 h-8 bg-white rounded-full border-2 border-gray-300 overflow-hidden">
              <div 
                className="absolute w-6 h-6 bg-black rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
                style={{ 
                  transform: `translate(${eyeMovementX}px, ${eyeMovementY}px)` 
                }}
              >
                {/* Pupil highlight */}
                <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Eyebrows */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 flex space-x-8">
            <div className="w-8 h-2 bg-gray-800 rounded-full transform -rotate-12"></div>
            <div className="w-8 h-2 bg-gray-800 rounded-full transform rotate-12"></div>
          </div>

          {/* Nose */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-gray-300 rounded-full"></div>

          {/* Mouth */}
          <div className="absolute top-22 left-1/2 transform -translate-x-1/2 w-8 h-4 border-b-4 border-gray-800 rounded-b-full"></div>
        </div>

        {/* Arms */}
        <div className="absolute top-32 -left-8 w-12 h-24 bg-gray-800 rounded-full border-4 border-white transform rotate-12"></div>
        <div className="absolute top-32 -right-8 w-12 h-24 bg-gray-800 rounded-full border-4 border-white transform -rotate-12"></div>
      </div>

      {/* Character Shadow */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-black/20 rounded-full blur-sm"></div>
    </div>
  );
};

export default CursorFollowingCharacter;

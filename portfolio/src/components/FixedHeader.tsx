// src/components/FixedHeader.tsx
import React, { useEffect } from 'react';
import { animate, stagger } from 'animejs';
import './FixedHeader.css';

interface FixedHeaderProps {
  onContactClick: () => void;
  startDevAnimation: boolean; // Prop to trigger animation
}

const FixedHeader: React.FC<FixedHeaderProps> = ({ onContactClick, startDevAnimation }) => {

  // Effect for the Anime.js animation, triggered by prop
  // useEffect(() => {
  //   if (startDevAnimation) {
  //     animate('.dev-char', { // Use animate directly
  //       translateY: [10, 0],
  //       opacity: [0, 1],
  //       duration: 800,
  //       delay: stagger(100),
  //       easing: 'easeOutExpo'
  //     });
  //   }
  // }, [startDevAnimation]); // Run when the trigger prop changes to true

  return (
    <>
      {/* Top Left Banner */}
      <div className="top-left-name"> bbird.dev</div>

      {/* Top Right Contact Button */}
      <button
        type="button"
        className="top-right-contact"
        onClick={onContactClick}
      >
        Contact
      </button>
    </>
  );
};

export default FixedHeader;

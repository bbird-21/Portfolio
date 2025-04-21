import React from 'react';
import './RevealOverlay.css';

interface RevealOverlayProps {
  className?: string; // To accept the fade-out class
}

const RevealOverlay: React.FC<RevealOverlayProps> = ({ className }) => {
  // Combine the base class with any passed className (like 'fade-out')
  const combinedClassName = `reveal-overlay ${className || ''}`.trim();

  return <div className={combinedClassName}></div>;
};

export default RevealOverlay;

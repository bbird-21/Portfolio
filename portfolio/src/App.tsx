// src/App.tsx
import React from "react";
import "./App.css"; // Global styles if any remain

// Import Hooks
import { useLoadingSequence } from './hooks/useLoadingSequence';
import { useParticleInit } from './hooks/useParticleInit';

// Import Components
import Preloader from './components/Preloader';
import RevealOverlay from './components/RevealOverlay';
import FixedHeader from './components/FixedHeader';
import PageContent from './components/PageContent';

// Import Component CSS (can be done within components too)
import './components/Preloader.css';
import './components/RevealOverlay.css';
import './components/FixedHeader.css'; // Or wherever styles are defined
// import './components/PageContent.css'; // Or wherever styles are defined


function App() {
  // Get state from custom hooks
  const particlesInitialized = useParticleInit();
  const {
    loading,
    progress,
    fadeOutPreloader,
    startRevealFadeOut,
    startDevAnimation
  } = useLoadingSequence();

  // Event Handlers (can be moved elsewhere if they get complex)
  const handleContactClick = () => {
    alert("Contact functionality to be implemented!");
  };

  return (
    <div className="App">
      {/* --- Loading Sequence Components --- */}
      {loading && (
        <Preloader
          progress={progress}
          className={fadeOutPreloader ? 'fade-out' : ''}
        />
      )}

      {!loading && (
        <RevealOverlay className={startRevealFadeOut ? 'fade-out' : ''} />
      )}

      {/* --- Fixed UI Elements --- */}
      {!loading && (
        <FixedHeader
          onContactClick={handleContactClick}
          startDevAnimation={startDevAnimation} // Pass trigger prop
        />
      )}

      {/* --- Main Page Content --- */}
      {!loading && (
        <PageContent particlesInitialized={particlesInitialized} />
      )}
    </div>
  );
}

export default App;

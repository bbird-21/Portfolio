// src/hooks/useLoadingSequence.ts
import { useState, useEffect } from 'react';

interface LoadingSequence {
  loading: boolean;
  progress: number;
  fadeOutPreloader: boolean;
  startRevealFadeOut: boolean;
  startDevAnimation: boolean;
}

// --- Configuration (adjust timing here) ---
const PRELOADER_DELAY_BEFORE_FADE = 300; // ms after 100%
const PRELOADER_FADE_DURATION = 500; // ms (should match CSS)
const REVEAL_DELAY_AFTER_PRELOADER = 50; // ms after preloader is removed
const DEV_ANIM_DELAY_AFTER_REVEAL_START = 0; // ms after reveal fade starts
const PROGRESS_INTERVAL = 50; // ms for progress update speed
const PROGRESS_STEP = 5; // % increase per interval
// ---

export function useLoadingSequence(): LoadingSequence {
  // --- Initialize state based on environment ---
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [fadeOutPreloader, setFadeOutPreloader] = useState<boolean>(false);
  const [startRevealFadeOut, setStartRevealFadeOut] = useState<boolean>(false);
  const [startDevAnimation, setStartDevAnimation] = useState<boolean>(false);
  // ---

  // Effect for Preloader Simulation (only runs if initially loading)
  useEffect(() => {
    if (!loading) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + PROGRESS_STEP;
        if (newProgress >= 100) {
          clearInterval(interval);
          setProgress(100); // Ensure it hits exactly 100

          // Start fade out after delay
          setTimeout(() => {
            setFadeOutPreloader(true);
          }, PRELOADER_DELAY_BEFORE_FADE);

          // Remove preloader after fade animation completes
          setTimeout(() => {
            setLoading(false); // This triggers the next effect
          }, PRELOADER_DELAY_BEFORE_FADE + PRELOADER_FADE_DURATION);

          return 100;
        }
        return newProgress;
      });
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, []); // Run only once based on initial `loading` state


  // Effect to Trigger Reveal and Animation Timings of bbird.dev
   useEffect(() => {
     if (loading) {
         return;
     }

     let revealTimer: number | null = null;
     let devAnimTimer: number | null = null;

     // Start Reveal Overlay fade-out after a short delay
     revealTimer = setTimeout(() => {
       setStartRevealFadeOut(true);

       // Start .dev animation after reveal fade has begun
       devAnimTimer = setTimeout(() => {
         setStartDevAnimation(true);
       }, DEV_ANIM_DELAY_AFTER_REVEAL_START);

     }, REVEAL_DELAY_AFTER_PRELOADER);


     // Cleanup timers
     return () => {
       if (revealTimer) clearTimeout(revealTimer);
       if (devAnimTimer) clearTimeout(devAnimTimer);
     };
   }, [loading]); // Dependency: run when loading changes to false

  return {
    loading,
    progress,
    fadeOutPreloader,
    startRevealFadeOut,
    startDevAnimation,
  };
}

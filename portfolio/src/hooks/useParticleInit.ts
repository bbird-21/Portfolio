// src/hooks/useParticleInit.ts
import { useState, useEffect } from 'react';
import { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles"; // Or loadSlim if you use that

export function useParticleInit() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      // Load the full preset (or any other presets/shapes you need)
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []); // Runs once on mount

  return init;
}

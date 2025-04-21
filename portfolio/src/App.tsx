import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { loadFull } from "tsparticles";
import logo from "./logo.svg";
import "./App.css";
import particlesOptions from "./particles.json";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import Preloader from './components/Preloader';
import './components/Preloader.css';
// --- Import the new Reveal Overlay ---
import RevealOverlay from './components/RevealOverlay';
import './components/RevealOverlay.css'; // Import its CSS
// --- End Import ---

function App() {
    // Preloader State
    const [loading, setLoading] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const [fadeOutPreloader, setFadeOutPreloader] = useState<boolean>(false);

    // --- New State for Reveal Overlay Fade Out ---
    const [startRevealFadeOut, setStartRevealFadeOut] = useState<boolean>(false);
    // --- End New State ---

    // Particles State
    const [ init, setInit ] = useState(false);

    // Particles Initialization Effect
    useEffect(() => {
        initParticlesEngine(async (engine: Engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    // Preloader Simulation Effect
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);

                    setTimeout(() => {
                        setFadeOutPreloader(true); // Start preloader fade-out
                    }, 300); // Delay showing 100%

                    // Duration MUST accommodate preloader fade-out animation
                    setTimeout(() => {
                        setLoading(false); // Remove preloader from DOM
                                           // Main content AND RevealOverlay will now render
                    }, 800); // (300ms delay + 500ms fade)

                    return 100;
                }
                return prevProgress + 5;
            });
        }, 30);

        return () => clearInterval(interval);
    }, []);

    // --- Effect to Trigger Reveal Overlay Fade Out ---
    useEffect(() => {
        // This effect runs when `loading` becomes false
        if (!loading) {
            // Use a minimal timeout to ensure the RevealOverlay is rendered
            // before we trigger its fade-out transition.
            const timer = setTimeout(() => {
                setStartRevealFadeOut(true);
            }, 50); // Adjust delay if needed (e.g., 0, 100)

            return () => clearTimeout(timer);
        }
    }, [loading]); // Dependency: run when loading changes
    // --- End Reveal Overlay Effect ---


    return (
        <div className="App">
            {/* --- Preloader --- */}
            {/* Rendered only while loading=true */}
            {loading && (
                 <Preloader
                    progress={progress}
                    className={fadeOutPreloader ? 'fade-out' : ''}
                 />
            )}

            {/* --- Reveal Overlay --- */}
            {/* Rendered when loading=false, fades out based on startRevealFadeOut */}
            {!loading && (
                 <RevealOverlay className={startRevealFadeOut ? 'fade-out' : ''} />
            )}

            {/* --- Main Content --- */}
            {/* Rendered when loading=false (initially hidden by RevealOverlay) */}
            {/* No extra wrapper or fade-in class needed here anymore */}
            {!loading && init && (
                <Particles
                    id="tsparticles"
                    options={particlesOptions as ISourceOptions}
                    // Ensure particles are behind the RevealOverlay
                    // style={{ zIndex: 0 }} // If needed
                />
            )}
            {!loading && (


                <Parallax pages={4}>
                     {/* Ensure Parallax layers are behind RevealOverlay */}
                     {/* if the default stacking order works */}
                    <ParallaxLayer offset={0} factor={4} speed={0.5} /* style={{ zIndex: 1 }} */ >
                        <div className="section">
                            <h2> Hey There</h2>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={1} factor={4} /* style={{ zIndex: 1 }} */ >
                        <div className="section">
                            <h3> bbird.dev</h3>
                        </div>
                    </ParallaxLayer>

                    <ParallaxLayer offset={2} factor={4} speed={1.5} /* style={{ zIndex: 1 }} */ >
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo"/>
                        </header>
                    </ParallaxLayer>
                </Parallax>
            )}
            {/* --- End Main Content --- */}
        </div>
    );
}

export default App;

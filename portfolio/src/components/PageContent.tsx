// src/components/PageContent.tsx
import React from 'react';
import Particles from "@tsparticles/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { ISourceOptions } from "@tsparticles/engine";
import logo from "../logo.svg"; // Adjust path if necessary
import particlesOptions from "../particles.json"; // Adjust path if necessary
// import './PageContent.css'; // Add styles if needed for .section, App-header etc.

import { animate, stagger } from 'animejs';

interface PageContentProps {
  particlesInitialized: boolean;
}

const PageContent: React.FC<PageContentProps> = ({ particlesInitialized }) => {

    animate('.dev-char', {
      translateY: [10, 0], // Slide up from 10px below
      opacity: [0, 1],     // Fade in
      duration: 800,       // Duration of each character animation
      delay: stagger(100, { start: 100 }), // Delay between each character starting (ms)
      easing: 'easeOutExpo', // Animation easing function
      loop: false
    });


    // animate('.dev-char', {
    //   translateY: [10, 0], // Slide up from 10px below
    //   opacity: [0, 1],     // Fade in
    //   duration: 800,       // Duration of each character animation
    //   delay: stagger(100, { start: 100 }), // Delay between each character starting (ms)
    //   easing: 'easeOutExpo', // Animation easing function
    //   loop: true
    // });


  return (
    <>

      <Parallax pages={4}>
      <ParallaxLayer
        offset={0}
        speed={1}
        factor={4}
      >
        {particlesInitialized && (
          <Particles
            id="tsparticles"
            options={particlesOptions as ISourceOptions}
          />
        )}
      </ParallaxLayer>


        <ParallaxLayer offset={0} factor={4} speed={0.5}>
          <div className="section">
            <h2>
              <span className="dev-char">H</span><span className="dev-char">e</span><span className="dev-char">y</span>

              <span className="dev-char"> T</span><span className="dev-char">h</span><span className="dev-char">e</span><span className="dev-char">r</span><span className="dev-char">e</span>
            </h2>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} factor={4}>
          <div className="section">
            <h3> bbird.dev</h3>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} factor={4} speed={1.5}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
          </header>
        </ParallaxLayer>
        {/* Add more layers as needed */}
      </Parallax>
    </>
  );
};

export default PageContent;

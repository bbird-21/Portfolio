// src/components/PageContent.tsx
import React from 'react';
import Particles from "@tsparticles/react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import type { ISourceOptions } from "@tsparticles/engine";
import logo from "../logo.svg"; // Adjust path if necessary
import particlesOptions from "../particles.json"; // Adjust path if necessary
// import './PageContent.css'; // Add styles if needed for .section, App-header etc.

interface PageContentProps {
  particlesInitialized: boolean;
}

const PageContent: React.FC<PageContentProps> = ({ particlesInitialized }) => {
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
            <h2> Hey There</h2>
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

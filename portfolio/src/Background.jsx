import React from 'react'
import Particles from 'react-tsparticles'

const Background = ({entered}) => {
  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    background: {
      color: {
        value: "#0d47a1"
      }
    },
    particles: {
      number: {
        value: 120,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5,
        random: false
      },
      size: {
        value: 3,
        random: true
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "out"
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse" // Valid mode
        },
        onClick: {
          enable: true,
          mode: "push" // Valid mode
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    detectRetina: true
  };

    return (
        <div>
            <Particles
                id='tsparticles'
                options={options}
            />
        </div>
    )
}

export default Background

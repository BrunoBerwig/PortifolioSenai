import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BackgroundWeb = ({ theme }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: {
          color: theme === "dark" ? "#0d0d0d" : "#ffffff"
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: theme === "dark" ? "#00ffff" : "#000000"
          },
          links: {
            enable: true,
            distance: 150,
            color: theme === "dark" ? "#00ffff" : "#000000",
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: {
              default: "bounce"
            }
          },
          size: {
            value: 2
          }
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 100
            }
          }
        }
      }}
    />
  );
};

export default BackgroundWeb;

import type { OutMode } from "@tsparticles/engine";
import type { MoveDirection } from "@tsparticles/engine";

const starryNightConfig = {
  fullScreen: {
    enable: false,
  },
  background: {
    color: {
      value: "#000000", // black background
    },
  },
  fpsLimit: 60,
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        area: 800,
      },
    },
    color: {
      value: "#00ff99", // soft green tint for stars
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.8,
      random: true,
      animation: {
        enable: true,
        speed: 0.2,
        minimumValue: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      animation: {
        enable: true,
        speed: 2,
        minimumValue: 0.1,
        sync: false,
      },
    },
    links: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none" as MoveDirection,
      random: true,
      straight: false,
      outModes: {
        default: "out" as OutMode,
      },
      bounce: false,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble", // slightly enlarge
      },
      onClick: {
        enable: true,
        mode: "repulse", // simulate shooting star with fast move
      },
      resize: {
        enable: true,
      },
    },
    modes: {
      bubble: {
        distance: 100,
        size: 4, // slightly larger on hover
        duration: 0.4,
        opacity: 1,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.8, // simulate shooting effect
      },
    },
  },
  detectRetina: true,
};

export default starryNightConfig;

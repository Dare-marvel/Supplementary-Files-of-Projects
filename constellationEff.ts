import type { OutMode } from "@tsparticles/engine";
import type { MoveDirection } from "@tsparticles/engine";

const starryNightConfig = {
    fullScreen: {
        enable: false,
    },
    background: {
        color: {
            value: "#000000", // Pure black background
        },
        gradient: {
            enable: true,
            stops: [
                { offset: 0, color: "#000000" }, // Black at the top
                { offset: 0.5, color: "#001a00" }, // Dark green in the middle
                { offset: 1, color: "#000000" } // Black at the bottom
            ]
        }
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
            value: "#ffffff",
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
            trail: {
                enable: false, // Initially no trail
                length: 0,
                fillColor: "#ffffff"
            }
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab", // Changed to grab for better hover effect
            },
            onClick: {
                enable: true,
                mode: "push", // Will use this to create shooting stars
            },
            resize: {
                enable: true,
            },
        },
        modes: {
            grab: {
                distance: 100,
                links: {
                    opacity: 0.5
                },
                size: {
                    value: 4 // Makes stars slightly larger on hover
                }
            },
            push: {
                quantity: 1, // Only affect one particle when clicked
                particles: {
                    move: {
                        speed: 10, // High speed for shooting star effect
                        outModes: {
                            default: "destroy" as OutMode // Destroy when out of canvas
                        },
                        trail: {
                            enable: true, // Enable trail for shooting star
                            length: 30, // Length of the trail
                            fillColor: "#00ff00" // Green tinted trail
                        },
                        straight: true, // Move in straight line
                        direction: "random" as MoveDirection // Random direction but straight
                    },
                    size: {
                        value: 3 // Slightly larger when shooting
                    },
                    opacity: {
                        value: 1 // Fully visible when shooting
                    }
                }
            },
            bubble: {
                distance: 200,
                size: 3.5,
                duration: 2,
                opacity: 1,
                speed: 3,
            },
        },
    },
    detectRetina: true,
};

export default starryNightConfig;

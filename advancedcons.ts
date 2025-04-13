import type { OutMode } from "@tsparticles/engine";
import type { MoveDirection } from "@tsparticles/engine";

const starryNightConfig = {
    fullScreen: {
        enable: false,
    },
    background: {
        color: {
            value: "#000000",
        },
        gradient: {
            enable: true,
            stops: [
                { offset: 0, color: "#000000" },
                { offset: 0.5, color: "#001a00" },
                { offset: 1, color: "#000000" }
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
            enable: false, // Disabled by default
            distance: 150, // Maximum distance for links
            color: "#00ff77", // Greenish tint for constellation lines
            opacity: 0.4,
            width: 1
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
                enable: false,
                length: 0,
                fillColor: "#ffffff"
            }
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "connect", // This will show constellation lines
            },
            onClick: {
                enable: true,
                mode: "push", // This will create shooting stars
            },
            resize: {
                enable: true,
            },
        },
        modes: {
            connect: {
                distance: 150,
                links: {
                    opacity: 0.5,
                    color: "#00ff99", // Brighter green for hover connections
                    width: 1
                },
                radius: 150
            },
            push: {
                quantity: 1,
                particles: {
                    move: {
                        speed: 15, // Faster speed for shooting star
                        outModes: {
                            default: "destroy" as OutMode
                        },
                        trail: {
                            enable: true,
                            length: 50, // Longer trail
                            fillColor: "#00ff88" // Greenish trail
                        },
                        straight: true,
                        direction: "random" as MoveDirection
                    },
                    size: {
                        value: 3 // Slightly larger when shooting
                    },
                    opacity: {
                        value: 1 // Full visibility
                    },
                    links: {
                        enable: false // No connections for shooting stars
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

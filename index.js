tsParticles.load("tsparticles", {
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: { enable: true, mode: "repulse", },
            resize: true
        },
        modes: {
            repulse: { distance: 200, duration: 0.4 }
        }
    },
    particles: {
        color: { value: "#fff" },
        move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 2,
            straight: false
        },
        number: {
            density: { enable: true, area: 700 },
            value: 90,
        },
        opacity: {
            value: { min: 0, max: 0.5 }
        },
        size: {
            value: { min: 1, max: 5 }
        }
    }
});
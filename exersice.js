//background effect
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

//back to top
const backToTopButton = document.getElementById('back');
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
backToTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});


//cursor
document.addEventListener('mousemove', function (e) {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});


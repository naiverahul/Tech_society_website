// Slider functionality
let sliderIndex = 0;
const sliderItems = document.querySelectorAll('.slider-item');
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function showNextSlide() {
    sliderItems.forEach((item, index) => {
        item.style.transform = `translateX(-${sliderIndex * 100}%)`;
    });
    sliderIndex = (sliderIndex + 1) % sliderItems.length;
}

setInterval(showNextSlide, 3000);  // Change slides every 3 seconds

// Particles.js Configuration
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#ffffff"
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 3,
            "random": true
        },
        "line_linked": {
            "enable": true,
            "distance": 120,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 5,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "repulse": {
                "distance": 100,
                "duration": 0.4
            }
        }
    },
    "retina_detect": true
});

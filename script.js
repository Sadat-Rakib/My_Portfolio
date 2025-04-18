function toggleMenu(e) {
    if (e) e.preventDefault();
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');

    navbar.classList.toggle('open');
    navLinks.classList.toggle('active');

   
    if (navbar.classList.contains('open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}


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
            "value": "#64ffda" 
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 6
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#64ffda",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
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
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 0.5
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 120,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});


document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active'); 
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    revealElements.forEach(el => revealObserver.observe(el));
});


document.querySelectorAll('.glitch').forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('glitch-effect');
        setTimeout(() => {
            element.classList.remove('glitch-effect');
        }, 500); 
    });
});


window.addEventListener("scroll", () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}, { passive: true });

const eduContainer = document.querySelector('.education-container');
let isDown = false;
let startX;
let scrollLeft;

eduContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    eduContainer.classList.add('active');
    startX = e.pageX - eduContainer.offsetLeft;
    scrollLeft = eduContainer.scrollLeft;
});
eduContainer.addEventListener('mouseleave', () => {
    isDown = false;
    eduContainer.classList.remove('active');
});
eduContainer.addEventListener('mouseup', () => {
    isDown = false;
    eduContainer.classList.remove('active');
});
eduContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - eduContainer.offsetLeft;
    const walk = (x - startX) * 3;
    eduContainer.scrollLeft = scrollLeft - walk;
});




if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}


window.addEventListener('load', () => {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
});


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.addEventListener('load', () => {
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
  
    if (document.activeElement && document.activeElement !== document.body) {
        document.activeElement.blur();
    }
});

let scrollTimeout;
window.addEventListener('wheel', () => {
    document.documentElement.style.scrollBehavior = 'auto';
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, 250);
});

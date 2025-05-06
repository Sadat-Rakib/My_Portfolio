document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('nav');
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    const closeMenu = () => {
        navbar.classList.remove('open');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    };

    const openMenu = () => {
        navbar.classList.add('open');
        navLinks.classList.add('active');
        document.body.style.overflow = 'hidden';
    };


    if (hamburger) {
        hamburger.addEventListener('click', (e) => {
            e.preventDefault();
            if (navbar.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

  
    document.addEventListener('click', (e) => {
        if (
            navbar.classList.contains('open') &&
            !e.target.closest('.nav-links') &&
            !e.target.closest('.hamburger')
        ) {
            closeMenu();
        }
    });


    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (navbar.classList.contains('open') && Math.abs(currentScroll - lastScrollTop) > 10) {
            closeMenu();
        }
        lastScrollTop = currentScroll;
    }, { passive: true });


    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener('touchstart', e => {
        touchStartY = e.changedTouches[0].screenY;
    });

    document.addEventListener('touchend', e => {
        touchEndY = e.changedTouches[0].screenY;
        if (Math.abs(touchEndY - touchStartY) > 50 && navbar.classList.contains('open')) {
            closeMenu();
        }
    });

    // Reveal effects
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

// Glitch effect
document.querySelectorAll('.glitch').forEach(element => {
    element.addEventListener('click', () => {
        element.classList.add('glitch-effect');
        setTimeout(() => {
            element.classList.remove('glitch-effect');
        }, 500);
    });
});

// Sticky nav on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}, { passive: true });

// Drag-scroll
const eduContainer = document.querySelector('.education-container');
let isDown = false, startX, scrollLeft;

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

// ParticlesJS
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 150, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#64ffda" },
        "shape": {
            "type": "circle",
            "stroke": { "width": 0, "color": "#fff" },
            "polygon": { "nb_sides": 6 }
        },
        "opacity": {
            "value": 0.5, "random": true,
            "anim": { "enable": true, "speed": 1, "opacity_min": 0, "sync": false }
        },
        "size": {
            "value": 4, "random": true,
            "anim": { "enable": true, "speed": 20, "size_min": 0.1, "sync": false }
        },
        "line_linked": { "enable": false },
        "move": {
            "enable": true, "speed": 3, "random": true,
            "straight": false, "out_mode": "out", "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "repulse" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 200, "line_linked": { "opacity": 0.5 } },
            "bubble": { "distance": 250, "size": 0, "duration": 2, "opacity": 0, "speed": 3 },
            "repulse": { "distance": 120, "duration": 0.4 },
            "push": { "particles_nb": 4 },
            "remove": { "particles_nb": 2 }
        }
    },
    "retina_detect": true
});

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

window.addEventListener('load', () => {
    if (window.location.hash) history.replaceState(null, null, ' ');
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


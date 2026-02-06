const cursor = document.querySelector('.cursor');

function initCursor() {
    if (!cursor) return;
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });

    const interactiveElements = 'a, button, .skill-card, .stat, .project, .sidebar-link';
    document.querySelectorAll(interactiveElements).forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        }
    });
});

let currentLang = 'en';
const langToggle = document.getElementById('lang-toggle');

const translations = {
    about_p1_en: '<strong>Dylan Manogil, 20 years old.</strong> No diploma, no traditional academic background, just a passion for coding and hundreds of hours spent learning by doing.',
    about_p1_fr: '<strong>Dylan Manogil, 20 ans.</strong> Aucun diplôme, aucun parcours académique traditionnel, juste une passion pour le code et des centaines d\'heures passées à apprendre en faisant.',
    about_p2_en: '<strong>100% Self-Taught.</strong> I learned through tutorials, personal projects, mistakes, and a lot of self-reflection. Practical experience before theory.',
    about_p2_fr: '<strong>100% Autodidacte.</strong> J\'ai appris à travers des tutoriels, des projets personnels, des erreurs et beaucoup d\'auto-réflexion. L\'expérience pratique avant la théorie.',
    about_p3_en: 'Today, I carry out projects for clients, transforming their ideas into <strong>reliable and effective technical solutions.</strong>',
    about_p3_fr: 'Aujourd\'hui, je réalise des projets pour des clients, transformant leurs idées en <strong>solutions techniques fiables et efficaces.</strong>'
};

if (langToggle) {
    langToggle.addEventListener('click', (e) => {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        langToggle.textContent = currentLang === 'en' ? 'FR' : 'EN';
        
        document.querySelectorAll('[data-en][data-fr]').forEach(el => {
            const translation = el.getAttribute(`data-${currentLang}`);
            if (translation) {
                el.textContent = translation;
            }
        });
        
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        if (aboutParagraphs.length >= 3) {
            aboutParagraphs[0].innerHTML = translations[`about_p1_${currentLang}`];
            aboutParagraphs[1].innerHTML = translations[`about_p2_${currentLang}`];
            aboutParagraphs[2].innerHTML = translations[`about_p3_${currentLang}`];
        }
    });
}

function showProject(projectName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const projectPage = document.getElementById(`${projectName}-page`);
    if (projectPage) {
        projectPage.classList.add('active');
        window.scrollTo(0, 0);
        setTimeout(() => {
            initCursor();
            initGallery();
        }, 100);
    }
}

function showHome() {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById('home-page').classList.add('active');
    window.scrollTo(0, 0);
    setTimeout(() => initCursor(), 100);
}

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .project, .skill-card, .stat').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.includes(current) && current !== '') {
            link.classList.add('active');
        }
    });
});

let currentImageIndex = 0;
let galleryImages = [];
let indicators = [];

function initGallery() {
    galleryImages = document.querySelectorAll('.gallery-img');
    indicators = document.querySelectorAll('.indicator');
    if (galleryImages.length > 0) {
        showImage(0);
    }
}

function showImage(index) {
    if (galleryImages.length === 0) return;
    galleryImages.forEach(img => img.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    if (galleryImages[index]) {
        galleryImages[index].classList.add('active');
        if (indicators[index]) {
            indicators[index].classList.add('active');
        }
    }
    currentImageIndex = index;
}

function goToImage(index) {
    showImage(index);
}

document.addEventListener('keydown', (e) => {
    const projectPage = document.getElementById('quenora-page');
    if (projectPage && projectPage.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            let newIndex = currentImageIndex - 1;
            if (newIndex < 0) newIndex = galleryImages.length - 1;
            showImage(newIndex);
        } else if (e.key === 'ArrowRight') {
            let newIndex = currentImageIndex + 1;
            if (newIndex >= galleryImages.length) newIndex = 0;
            showImage(newIndex);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    initCursor();
});

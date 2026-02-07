var cursor = document.querySelector('.cursor');
var currentLang = 'en';
var langToggle = document.getElementById('lang-toggle');
var currentImageIndex = 0;
var galleryImages = [];
var indicators = [];

var translations = {
    about_p1_en: '<strong>Dylan Manogil, 20 years old.</strong> No diploma, no traditional academic background, just a passion for coding and hundreds of hours spent learning by doing.',
    about_p1_fr: '<strong>Dylan Manogil, 20 ans.</strong> Aucun diplôme, aucun parcours académique traditionnel, juste une passion pour le code et des centaines d\'heures passées à apprendre en faisant.',
    about_p2_en: '<strong>100% Self-Taught.</strong> I learned through tutorials, personal projects, mistakes, and a lot of self-reflection. Practical experience before theory.',
    about_p2_fr: '<strong>100% Autodidacte.</strong> J\'ai appris à travers des tutoriels, des projets personnels, des erreurs et beaucoup d\'auto-réflexion. L\'expérience pratique avant la théorie.',
    about_p3_en: 'Today, I carry out projects for clients, transforming their ideas into <strong>reliable and effective technical solutions.</strong>',
    about_p3_fr: 'Aujourd\'hui, je réalise des projets pour des clients, transformant leurs idées en <strong>solutions techniques fiables et efficaces.</strong>'
};

function initCursor() {
    if (!cursor) return;
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
        cursor.style.opacity = '1';
    });
    document.addEventListener('mouseleave', function() {
        cursor.style.opacity = '0';
    });
    var interactiveElements = 'a, button, .skill-card, .stat, .project, .sidebar-link';
    document.querySelectorAll(interactiveElements).forEach(function(el) {
        el.addEventListener('mouseenter', function() { cursor.classList.add('hover'); });
        el.addEventListener('mouseleave', function() { cursor.classList.remove('hover'); });
    });
}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        var href = this.getAttribute('href');
        if (href && href.startsWith('#') && href !== '#') {
            e.preventDefault();
            var target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

if (langToggle) {
    langToggle.addEventListener('click', function(e) {
        e.preventDefault();
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        langToggle.textContent = currentLang === 'en' ? 'FR' : 'EN';
        document.querySelectorAll('[data-en][data-fr]').forEach(function(el) {
            var translation = el.getAttribute('data-' + currentLang);
            if (translation) {
                el.textContent = translation;
            }
        });
        var aboutParagraphs = document.querySelectorAll('.about-text p');
        if (aboutParagraphs.length >= 3) {
            aboutParagraphs[0].innerHTML = translations['about_p1_' + currentLang];
            aboutParagraphs[1].innerHTML = translations['about_p2_' + currentLang];
            aboutParagraphs[2].innerHTML = translations['about_p3_' + currentLang];
        }
    });
}

function showProject(projectName) {
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });
    var projectPage = document.getElementById(projectName + '-page');
    if (projectPage) {
        projectPage.classList.add('active');
        window.scrollTo(0, 0);
        setTimeout(function() {
            initCursor();
            initGallery();
        }, 100);
    }
}

function showHome() {
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });
    document.getElementById('home-page').classList.add('active');
    window.scrollTo(0, 0);
    setTimeout(function() { initCursor(); }, 100);
}

var observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .project, .skill-card, .stat').forEach(function(el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    var current = '';
    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(function(link) {
        link.classList.remove('active');
        var href = link.getAttribute('href');
        if (href && href.includes(current) && current !== '') {
            link.classList.add('active');
        }
    });
});

function initGallery() {
    galleryImages = document.querySelectorAll('.gallery-img');
    indicators = document.querySelectorAll('.indicator');
    if (galleryImages.length > 0) {
        showImage(0);
    }
}

function showImage(index) {
    if (galleryImages.length === 0) return;
    galleryImages.forEach(function(img) { img.classList.remove('active'); });
    indicators.forEach(function(ind) { ind.classList.remove('active'); });
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

document.addEventListener('keydown', function(e) {
    var projectPage = document.getElementById('quenora-page');
    if (projectPage && projectPage.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            var newIndex = currentImageIndex - 1;
            if (newIndex < 0) newIndex = galleryImages.length - 1;
            showImage(newIndex);
        } else if (e.key === 'ArrowRight') {
            var newIndex = currentImageIndex + 1;
            if (newIndex >= galleryImages.length) newIndex = 0;
            showImage(newIndex);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    initCursor();
});

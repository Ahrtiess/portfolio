// Translations
const translations = {
    en: {
        // Navigation
        navAbout: "About",
        navSkills: "Skills",
        navContact: "Contact",
        
        // Hero
        heroLabel: "my name is",
        heroName1: "Dylan",
        heroName2: "Manogil",
        heroTitle: "developer & web designer",
        heroDesc: "20 years old, self-taught developer forged on the job. I transform ideas into concrete and effective digital experiences.",
        heroCta1: "Contact me",
        heroCta2: "Learn more",
        scrollText: "Scroll",
        
        // About
        aboutTitle: "About",
        aboutText1: "<strong>Dylan Manogil, 20 years old.</strong> No diploma, no traditional academic background, just a passion for coding and hundreds of hours spent learning by doing.",
        aboutText2: "<strong>100% Self-Taught.</strong> I learned through tutorials, personal projects, mistakes, and a lot of self-reflection. Practical experience before theory.",
        aboutText3: "Today, I carry out projects for clients, transforming their ideas into <strong>reliable and effective technical solutions.</strong>",
        statLabel1: "Years old",
        statLabel2: "Self-taught",
        statLabel3: "Motivation",
        
        // Skills
        skillsTitle: "Skills",
        skill1Name: "Frontend",
        skill1Desc: "React, Vue.js, Next.js, TypeScript, Tailwind CSS, animations & micro-interactions",
        skill2Name: "Backend",
        skill2Desc: "Node.js, Express, FastAPI, REST APIs, GraphQL, server architecture",
        skill3Name: "Web Design",
        skill3Desc: "Figma, UI/UX design, prototyping, wireframing, responsive design, design systems",
        skill4Name: "Database",
        skill4Desc: "PostgreSQL, MongoDB, Redis, query optimization, data modeling",
        skill5Name: "Python",
        skill5Desc: "Scripts, automation, APIs, Django/Flask, data processing, bots",
        
        // Contact
        contactTitle: "Contact",
        contactHeading1: "Let's",
        contactHeading2: "build",
        contactHeading3: "together?",
        contactText: "A project? An idea? A collaboration? I'm available to discuss it.",
        socialGithub: "GitHub",
        socialTwitter: "Twitter",
        socialDiscord: "Discord",
        
        // Footer
        footerCopyright: "© 2025 — All rights reserved",
        footerMade: "Designed with",
        footerCoffee: "and lots of coffee"
    },
    fr: {
        // Navigation
        navAbout: "À propos",
        navSkills: "Compétences",
        navContact: "Contact",
        
        // Hero
        heroLabel: "je m'appelle",
        heroName1: "Dylan",
        heroName2: "Manogil",
        heroTitle: "développeur & web designer",
        heroDesc: "20 ans, développeur autodidacte forgé sur le terrain. Je transforme les idées en expériences digitales concrètes et efficaces.",
        heroCta1: "Me contacter",
        heroCta2: "En savoir plus",
        scrollText: "Défiler",
        
        // About
        aboutTitle: "À propos",
        aboutText1: "<strong>Dylan Manogil, 20 ans.</strong> Aucun diplôme, aucun parcours académique traditionnel, juste une passion pour le code et des centaines d'heures passées à apprendre en faisant.",
        aboutText2: "<strong>100% Autodidacte.</strong> J'ai appris à travers des tutoriels, des projets personnels, des erreurs et beaucoup d'auto-réflexion. L'expérience pratique avant la théorie.",
        aboutText3: "Aujourd'hui, je réalise des projets pour des clients, en transformant leurs idées en <strong>solutions techniques fiables et efficaces.</strong>",
        statLabel1: "Ans",
        statLabel2: "Autodidacte",
        statLabel3: "Motivation",
        
        // Skills
        skillsTitle: "Compétences",
        skill1Name: "Frontend",
        skill1Desc: "React, Vue.js, Next.js, TypeScript, Tailwind CSS, animations & micro-interactions",
        skill2Name: "Backend",
        skill2Desc: "Node.js, Express, FastAPI, REST APIs, GraphQL, architecture serveur",
        skill3Name: "Web Design",
        skill3Desc: "Figma, design UI/UX, prototypage, wireframing, design responsive, design systems",
        skill4Name: "Base de données",
        skill4Desc: "PostgreSQL, MongoDB, Redis, optimisation de requêtes, modélisation de données",
        skill5Name: "Python",
        skill5Desc: "Scripts, automatisation, APIs, Django/Flask, traitement de données, bots",
        
        // Contact
        contactTitle: "Contact",
        contactHeading1: "Construisons",
        contactHeading2: "ensemble",
        contactHeading3: "?",
        contactText: "Un projet ? Une idée ? Une collaboration ? Je suis disponible pour en discuter.",
        socialGithub: "GitHub",
        socialTwitter: "Twitter",
        socialDiscord: "Discord",
        
        // Footer
        footerCopyright: "© 2025 — Tous droits réservés",
        footerMade: "Conçu avec",
        footerCoffee: "et beaucoup de café"
    }
};

// Current language
let currentLang = 'en';

// Translation function
function translatePage(lang) {
    currentLang = lang;
    const t = translations[lang];
    
    // Navigation
    document.querySelector('.nav-links a[href="#about"]').textContent = t.navAbout;
    document.querySelector('.nav-links a[href="#skills"]').textContent = t.navSkills;
    document.querySelector('.nav-links a[href="#contact"]').textContent = t.navContact;
    
    // Hero
    document.querySelector('.hero-label').innerHTML = `<span>${t.heroLabel}</span>`;
    document.querySelector('.hero-label::before') || document.querySelector('.hero-label').insertAdjacentHTML('afterbegin', '');
    document.querySelectorAll('.hero-title .line')[0].querySelector('span').textContent = t.heroName1;
    document.querySelectorAll('.hero-title .line')[1].querySelector('span').textContent = t.heroName2;
    document.querySelectorAll('.hero-title .line')[2].querySelector('span').textContent = t.heroTitle;
    document.querySelector('.hero-description').textContent = t.heroDesc;
    document.querySelector('.btn-primary').textContent = t.heroCta1;
    document.querySelector('.btn-secondary').textContent = t.heroCta2;
    document.querySelector('.scroll-indicator span').textContent = t.scrollText;
    
    // About
    document.querySelector('#about .section-title').textContent = t.aboutTitle;
    const aboutParagraphs = document.querySelectorAll('.about-text p');
    aboutParagraphs[0].innerHTML = t.aboutText1;
    aboutParagraphs[1].innerHTML = t.aboutText2;
    aboutParagraphs[2].innerHTML = t.aboutText3;
    document.querySelectorAll('.stat-label')[0].textContent = t.statLabel1;
    document.querySelectorAll('.stat-label')[1].textContent = t.statLabel2;
    document.querySelectorAll('.stat-label')[2].textContent = t.statLabel3;
    
    // Skills
    document.querySelector('#skills .section-title').textContent = t.skillsTitle;
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards[0].querySelector('.skill-name').textContent = t.skill1Name;
    skillCards[0].querySelector('.skill-desc').textContent = t.skill1Desc;
    skillCards[1].querySelector('.skill-name').textContent = t.skill2Name;
    skillCards[1].querySelector('.skill-desc').textContent = t.skill2Desc;
    skillCards[2].querySelector('.skill-name').textContent = t.skill3Name;
    skillCards[2].querySelector('.skill-desc').textContent = t.skill3Desc;
    skillCards[3].querySelector('.skill-name').textContent = t.skill4Name;
    skillCards[3].querySelector('.skill-desc').textContent = t.skill4Desc;
    skillCards[4].querySelector('.skill-name').textContent = t.skill5Name;
    skillCards[4].querySelector('.skill-desc').textContent = t.skill5Desc;
    
    // Contact
    document.querySelector('#contact .section-title').textContent = t.contactTitle;
    const contactSpans = document.querySelectorAll('.contact-title span');
    contactSpans[0].textContent = t.contactHeading1;
    contactSpans[1].textContent = t.contactHeading2;
    contactSpans[2].textContent = t.contactHeading3;
    document.querySelector('.contact-text').textContent = t.contactText;
    document.querySelectorAll('.social-link')[0].textContent = t.socialGithub;
    document.querySelectorAll('.social-link')[1].textContent = t.socialTwitter;
    document.querySelectorAll('.social-link')[2].textContent = t.socialDiscord;
    
    // Footer
    document.querySelectorAll('.footer-text')[0].textContent = t.footerCopyright;
    const footerSpans = document.querySelectorAll('.footer-text')[1].querySelectorAll('span');
    footerSpans[0].textContent = t.footerMade;
    footerSpans[2].textContent = t.footerCoffee;
    
    // Update button text
    updateLangButton();
    
    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// Update language button
function updateLangButton() {
    const langBtn = document.querySelector('.lang-toggle');
    if (langBtn) {
        langBtn.textContent = currentLang === 'en' ? 'FR' : 'EN';
    }
}

// Custom cursor
const cursor = document.querySelector('.cursor');

if (cursor) {
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    document.querySelectorAll('a, button, .skill-card, .stat, .project, .feature-item, .gallery-item, .lang-toggle').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Intersection Observer for animations
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

document.querySelectorAll('.section, .project, .skill-card, .stat, .feature-item, .content-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add active state to navigation on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current) && current !== '') {
            link.classList.add('active');
        }
    });
});

// Initialize language toggle button
document.addEventListener('DOMContentLoaded', () => {
    // Create language toggle button
    const langToggle = document.createElement('button');
    langToggle.className = 'lang-toggle';
    langToggle.textContent = 'FR';
    document.querySelector('nav').appendChild(langToggle);
    
    // Toggle language on click
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'fr' : 'en';
        translatePage(newLang);
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang && savedLang !== 'en') {
        translatePage(savedLang);
    }
});

const I18n = {
    currentLang: CONFIG.defaultLang,
    button: null,
    
    updateContent(lang) {
        const t = LANG[lang.toUpperCase()];
        
        // Navigation
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks[0].textContent = t.nav.about;
        navLinks[1].textContent = t.nav.skills;
        navLinks[2].textContent = t.nav.contact;
        
        // Hero
        document.querySelector('.hero-label').innerHTML = `<span>${t.hero.label}</span>`;
        const heroLines = document.querySelectorAll('.hero-title .line span');
        heroLines[0].textContent = t.hero.name1;
        heroLines[1].textContent = t.hero.name2;
        heroLines[2].textContent = t.hero.title;
        document.querySelector('.hero-description').textContent = t.hero.desc;
        document.querySelector('.btn-primary').textContent = t.hero.cta1;
        document.querySelector('.btn-secondary').textContent = t.hero.cta2;
        document.querySelector('.scroll-indicator span').textContent = t.hero.scroll;
        
        // About
        document.querySelector('#about .section-title').textContent = t.about.title;
        const aboutParagraphs = document.querySelectorAll('.about-text p');
        aboutParagraphs[0].innerHTML = t.about.text1;
        aboutParagraphs[1].innerHTML = t.about.text2;
        aboutParagraphs[2].innerHTML = t.about.text3;
        const statLabels = document.querySelectorAll('.stat-label');
        statLabels[0].textContent = t.about.stat1;
        statLabels[1].textContent = t.about.stat2;
        statLabels[2].textContent = t.about.stat3;
        
        // Skills
        document.querySelector('#skills .section-title').textContent = t.skills.title;
        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach((card, i) => {
            card.querySelector('.skill-name').textContent = t.skills.items[i].name;
            card.querySelector('.skill-desc').textContent = t.skills.items[i].desc;
        });
        
        // Contact
        document.querySelector('#contact .section-title').textContent = t.contact.title;
        const contactSpans = document.querySelectorAll('.contact-title span');
        contactSpans[0].textContent = t.contact.heading[0];
        contactSpans[1].textContent = t.contact.heading[1];
        contactSpans[2].textContent = t.contact.heading[2];
        document.querySelector('.contact-text').textContent = t.contact.text;
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach((link, i) => {
            link.textContent = t.contact.social[i];
        });
        
        // Footer
        const footerTexts = document.querySelectorAll('.footer-text');
        footerTexts[0].textContent = t.footer.copyright;
        const footerSpans = footerTexts[1].querySelectorAll('span');
        footerSpans[0].textContent = t.footer.made;
        footerSpans[2].textContent = t.footer.coffee;
        
        this.currentLang = lang;
        this.updateButton();
        this.save();
    },
    
    updateButton() {
        if (this.button) {
            this.button.textContent = this.currentLang === 'en' ? 'FR' : 'EN';
        }
    },
    
    toggle() {
        const newLang = this.currentLang === 'en' ? 'fr' : 'en';
        this.updateContent(newLang);
    },
    
    save() {
        localStorage.setItem(CONFIG.storageKey, this.currentLang);
    },
    
    load() {
        const saved = localStorage.getItem(CONFIG.storageKey);
        if (saved && saved !== CONFIG.defaultLang) {
            this.updateContent(saved);
        }
    },
    
    createButton() {
        this.button = document.createElement('button');
        this.button.className = 'lang-toggle';
        this.button.textContent = this.currentLang === 'en' ? 'FR' : 'EN';
        this.button.addEventListener('click', () => this.toggle());
        document.querySelector('nav').appendChild(this.button);
    },
    
    init() {
        this.createButton();
        this.load();
    }
};

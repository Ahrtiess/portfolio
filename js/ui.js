const UI = {
    cursor: null,
    
    initCursor() {
        this.cursor = document.querySelector('.cursor');
        if (!this.cursor) return;
        
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = `${e.clientX - 10}px`;
            this.cursor.style.top = `${e.clientY - 10}px`;
        });
        
        const interactiveElements = 'a, button, .skill-card, .stat, .lang-toggle';
        document.querySelectorAll(interactiveElements).forEach(el => {
            el.addEventListener('mouseenter', () => this.cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => this.cursor.classList.remove('hover'));
        });
    },
    
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    },
    
    initNavHighlight() {
        window.addEventListener('scroll', () => {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a');
            
            let activeId = '';
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 200 && rect.bottom >= 200) {
                    activeId = section.id;
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('active');
                }
            });
        });
    },
    
    init() {
        this.initCursor();
        this.initSmoothScroll();
        this.initNavHighlight();
    }
};

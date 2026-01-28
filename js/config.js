const LANG = {
    EN: {
        nav: {
            about: "About",
            skills: "Skills",
            contact: "Contact"
        },
        hero: {
            label: "my name is",
            name1: "Dylan",
            name2: "Manogil",
            title: "developer & web designer",
            desc: "20 years old, self-taught developer forged on the job. I transform ideas into concrete and effective digital experiences.",
            cta1: "Contact me",
            cta2: "Learn more",
            scroll: "Scroll"
        },
        about: {
            title: "About",
            text1: "<strong>Dylan Manogil, 20 years old.</strong> No diploma, no traditional academic background, just a passion for coding and hundreds of hours spent learning by doing.",
            text2: "<strong>100% Self-Taught.</strong> I learned through tutorials, personal projects, mistakes, and a lot of self-reflection. Practical experience before theory.",
            text3: "Today, I carry out projects for clients, transforming their ideas into <strong>reliable and effective technical solutions.</strong>",
            stat1: "Years old",
            stat2: "Self-taught",
            stat3: "Motivation"
        },
        skills: {
            title: "Skills",
            items: [
                {
                    name: "Frontend",
                    desc: "React, Vue.js, Next.js, TypeScript, Tailwind CSS, animations & micro-interactions"
                },
                {
                    name: "Backend",
                    desc: "Node.js, Express, FastAPI, REST APIs, GraphQL, server architecture"
                },
                {
                    name: "Web Design",
                    desc: "Figma, UI/UX design, prototyping, wireframing, responsive design, design systems"
                },
                {
                    name: "Database",
                    desc: "PostgreSQL, MongoDB, Redis, query optimization, data modeling"
                },
                {
                    name: "Python",
                    desc: "Scripts, automation, APIs, Django/Flask, data processing, bots"
                }
            ]
        },
        contact: {
            title: "Contact",
            heading: ["Let's", "build", "together?"],
            text: "A project? An idea? A collaboration? I'm available to discuss it.",
            social: ["GitHub", "Twitter", "Discord"]
        },
        footer: {
            copyright: "© 2025 – All rights reserved",
            made: "Designed with",
            coffee: "and lots of coffee"
        }
    },
    FR: {
        nav: {
            about: "À propos",
            skills: "Compétences",
            contact: "Contact"
        },
        hero: {
            label: "je m'appelle",
            name1: "Dylan",
            name2: "Manogil",
            title: "développeur & web designer",
            desc: "20 ans, développeur autodidacte forgé sur le terrain. Je transforme les idées en expériences digitales concrètes et efficaces.",
            cta1: "Me contacter",
            cta2: "En savoir plus",
            scroll: "Scroll"
        },
        about: {
            title: "À propos",
            text1: "<strong>Dylan Manogil, 20 ans.</strong> Aucun diplôme, juste une passion pour le code et des centaines d'heures passées à apprendre.",
            text2: "<strong>100% Autodidacte.</strong> J'ai appris à travers des tutoriels, des projets personnel, et des erreurs.",
            text3: "Aujourd'hui, je réalise des projets pour des clients, en transformant leurs idées en <strong>solutions fiables et efficaces.</strong>",
            stat1: "Ans",
            stat2: "Autodidacte",
            stat3: "Motivation"
        },
        skills: {
            title: "Compétences",
            items: [
                {
                    name: "Frontend",
                    desc: "React, Vue.js, Next.js, TypeScript, Tailwind CSS, Animations & Micro-interactions"
                },
                {
                    name: "Backend",
                    desc: "Node.js, Express, FastAPI, REST API, GraphQL, Architecture Serveur"
                },
                {
                    name: "Web Design",
                    desc: "Figma, Design UI/UX, Prototypage, Wireframing, Design Responsive, Design Systems"
                },
                {
                    name: "Base de données",
                    desc: "PostgreSQL, MongoDB, Redis, Optimisation De Requêtes, Modélisation De Données"
                },
                {
                    name: "Python",
                    desc: "Scripts, Automatisation, APIs, Django/Flask, Traitement De Données, Bots"
                }
            ]
        },
        contact: {
            title: "Contact",
            heading: ["Construisons", "ensemble", "?"],
            text: "Un projet ? Une idée ? Une collaboration ? Je suis disponible pour en discuter.",
            social: ["GitHub", "Twitter", "Discord"]
        },
        footer: {
            copyright: "© 2025 – Tous droits réservés",
            made: "Conçu avec",
            coffee: "et beaucoup de café"
        }
    }
};

const CONFIG = {
    defaultLang: 'en',
    storageKey: 'lang',
    observerOptions: {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    }
};

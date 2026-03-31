document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const root = document.documentElement;
    const body = document.body;
    const loader = document.getElementById('loader');
    const scrollProgress = document.getElementById('scroll-progress');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle?.querySelector('i');
    const mnav = document.getElementById('mnav');
    const scrollTopBtn = document.getElementById('scrollTop');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileClose = document.getElementById('mobileClose');
    const langToggle = document.getElementById('langToggle');

    const translations = {
        es: {
            "nav-about": "Sobre mi",
            "nav-skills": "Habilidades",
            "nav-resume": "Trayectoria",
            "nav-portfolio": "Portafolio",
            "nav-services": "Servicios",
            "nav-contact": "Contacto",
            "nav-cta": "Hablemos",
            "hero-tag": "Disponible para proyectos freelance",
            "hero-title": "Ingeniero de Sistemas <em>orientado a soluciones</em>",
            "hero-copy": "Ingeniero en Sistemas con experiencia en <strong>arquitectura de software, automatización de procesos y despliegue de aplicaciones</strong>. Desarrollo soluciones útiles para negocio, operación y producto con foco en ejecución real.",
            "hero-btn-portfolio": "Ver portafolio",
            "hero-stat-exp": "años de experiencia",
            "hero-stat-tech": "automatización e integraciones",
            "hero-stat-time": "tiempo de respuesta",
            "about-label": "01 - Sobre mi",
            "about-title": "Tecnología con foco en <em>impacto real</em>",
            "about-copy": "He liderado la implementación de soluciones tecnológicas en entornos reales, incluyendo la dirección de infraestructura digital en EXIA S.A.S dentro del sector de energía solar, donde integré sensores, monitoreo en tiempo real y automatización de reportes operativos. Mi experiencia abarca desde desarrollo backend hasta integraciones empresariales y análisis de datos.",
            "about-meta-email": "Email",
            "about-meta-avail": "Disponibilidad",
            "about-meta-avail-v": "Disponible",
            "about-meta-city": "Ciudad",
            "about-meta-city-v": "Cartagena, Colombia",
            "about-meta-edu": "Formación",
            "about-meta-edu-v": "Ingeniería en Sistemas + Master IA",
            "skills-label": "02 - Habilidades",
            "skills-title": "Stack técnico <em>y herramientas</em>",
            "skills-copy": "Mi conjunto de herramientas se centra en la eficiencia, escalabilidad y automatización inteligente para resolver problemas operativos reales.",
            "skills-group-1": "Core & Backend",
            "skills-group-2": "Frontend & Mobile",
            "skills-group-3": "Cloud & Tools",
            "resume-label": "03 - Trayectoria",
            "resume-exp-title": "Experiencia Laboral",
            "resume-exp-1-title": "Dirección de Infraestructura Digital",
            "resume-exp-1-org": "EXIA S.A.S - Energía Solar",
            "resume-exp-1-desc": "Liderazgo técnico en la integración de sensores IoT, monitoreo en tiempo real y automatización de procesos operativos.",
            "resume-exp-2-title": "Consultoría en TI & Automatización",
            "resume-exp-2-org": "Independiente / Freelance",
            "resume-exp-2-desc": "Desarrollo de soluciones personalizadas en Python y arquitecturas web para clientes en diversos sectores.",
            "resume-edu-title": "Educación",
            "resume-edu-1-title": "Máster en Inteligencia Artificial",
            "resume-edu-1-org": "Universidad Internacional de Valencia",
            "resume-edu-1-desc": "Especialización en modelos generativos, agentes autónomos y visión por computadora.",
            "resume-edu-2-title": "Ingeniería en Sistemas",
            "resume-edu-2-org": "Universidad de San Buenaventura",
            "resume-edu-2-desc": "Formación integral en algoritmos, arquitectura de software y gestión de proyectos tecnológicos.",
            "portfolio-label": "04 - Portafolio",
            "portfolio-title": "Proyectos <em>y Certificaciones</em>",
            "portfolio-filter-cert": "Certificaciones",
            "portfolio-filter-tech": "Tecnologías",
            "portfolio-proof-title": "Engineering Presence · Social Proof",
            "portfolio-github-status": "GitHub Status",
            "portfolio-github-cta": "Acceder al código",
            "portfolio-trailhead-cta": "Ver perfil oficial",
            "portfolio-mobile-title": "Mobile & Multiplatform",
            "portfolio-ai-title": "AI Operations & Multi-Agent Systems",
            "portfolio-ai-project-tag": "AI Operations Hub · Featured Project",
            "portfolio-ai-project-title": "DevTeams: Multi-Agent 3D Simulation",
            "portfolio-ai-project-status": "System Live",
            "portfolio-ai-feature-1-title": "Planner A*",
            "portfolio-ai-feature-1-desc": "Pathfinding en Web Workers.",
            "portfolio-ai-feature-2-title": "Privacy",
            "portfolio-ai-feature-2-desc": "File System Access API.",
            "portfolio-ai-project-copy": "Orquestación de 8 agentes especializados en un entorno 3D inmersivo con <strong>Three.js</strong> y <strong>Groq Llama 3.3</strong>.",
            "portfolio-ai-project-cta": "Arquitectura en GitHub",
            "services-label": "05 - Servicios",
            "services-title": "Lo que puedo <em>aportar</em>",
            "services-copy": "Soluciones pensadas para operar mejor, lanzar más rápido y sostener crecimiento con base técnica sólida.",
            "services-1-title": "Transformación Digital",
            "services-1-desc": "Herramientas y flujos que mejoran productividad, control operativo y calidad de entrega.",
            "services-2-title": "Desarrollo Web & Python",
            "services-2-desc": "Apps, APIs, scripts y soluciones a medida para procesos internos y automatización.",
            "services-3-title": "Integraciones & Arq.",
            "services-3-desc": "Conexión entre sistemas y decisiones de arquitectura pensadas para escalar.",
            "contact-label": "06 - Contacto",
            "contact-title": "¿Listo para <em>ejecutar?</em>",
            "contact-copy": "Si tienes un problema complejo de software o un proceso que necesita IA y automatización, hablemos. Mi enfoque es la entrega de soluciones técnicas reales.",
            "contact-cta-whatsapp": "WhatsApp Directo",
            "contact-cta-cv": "Descargar Full Resume",
            "contact-status-title": "Disponibilidad Técnica",
            "contact-status-base": "Base",
            "contact-status-resp": "Respuesta",
            "contact-status-resp-v": "< 24 Horas",
            "contact-status-focus": "Enfoque",
            "contact-status-focus-v": "Software & IA",
            "contact-status-mod": "Modalidad",
            "contact-status-mod-v": "Freelance / Consultoría",
            "contact-status-signal": "Sistemas listos para nuevas integraciones y despliegues.",
            "github-scroll-hint": "Desliza para ver meses",
            "github-chart-header": "Contribuciones en GitHub",
            "github-chart-range": "Enero - Diciembre 2026",
            "footer-copy": "Construido por"
        },
        en: {
            "nav-about": "About me",
            "nav-skills": "Skills",
            "nav-resume": "Resume",
            "nav-portfolio": "Portfolio",
            "nav-services": "Services",
            "nav-contact": "Contact",
            "nav-cta": "Let's Talk",
            "hero-tag": "Available for freelance projects",
            "hero-title": "Systems Engineer <em>solution-oriented</em>",
            "hero-copy": "Systems Engineer with experience in <strong>software architecture, process automation, and application deployment</strong>. I develop useful solutions for business, operations, and products with a focus on real execution.",
            "hero-btn-portfolio": "View Portfolio",
            "hero-stat-exp": "years of experience",
            "hero-stat-tech": "automation & integrations",
            "hero-stat-time": "response time",
            "about-label": "01 - About me",
            "about-title": "Technology with focus on <em>real impact</em>",
            "about-copy": "I have led the implementation of technological solutions in real environments, including the digital infrastructure management at EXIA S.A.S in the solar energy sector, where I integrated IoT sensors, real-time monitoring, and operational report automation. My experience ranges from backend development to enterprise integrations and data analysis.",
            "about-meta-email": "Email",
            "about-meta-avail": "Availability",
            "about-meta-avail-v": "Available",
            "about-meta-city": "City",
            "about-meta-city-v": "Cartagena, Colombia",
            "about-meta-edu": "Education",
            "about-meta-edu-v": "Systems Engineering + Master AI",
            "skills-label": "02 - Skills",
            "skills-title": "Tech Stack <em>& tools</em>",
            "skills-copy": "My toolkit focuses on efficiency, scalability, and intelligent automation to solve real operational problems.",
            "skills-group-1": "Core & Backend",
            "skills-group-2": "Frontend & Mobile",
            "skills-group-3": "Cloud & Tools",
            "resume-label": "03 - Resume",
            "resume-exp-title": "Work Experience",
            "resume-exp-1-title": "Digital Infrastructure Management",
            "resume-exp-1-org": "EXIA S.A.S - Solar Energy",
            "resume-exp-1-desc": "Technical leadership in IoT sensor integration, real-time monitoring, and operational process automation.",
            "resume-exp-2-title": "IT Consulting & Automation",
            "resume-exp-2-org": "Independent / Freelance",
            "resume-exp-2-desc": "Development of custom solutions in Python and web architectures for clients in various sectors.",
            "resume-edu-title": "Education",
            "resume-edu-1-title": "Master in Artificial Intelligence",
            "resume-edu-1-org": "International University of Valencia",
            "resume-edu-1-desc": "Specialization in generative models, autonomous agents, and computer vision.",
            "resume-edu-2-title": "Systems Engineering",
            "resume-edu-2-org": "San Buenaventura University",
            "resume-edu-2-desc": "Comprehensive training in algorithms, software architecture, and technology project management.",
            "portfolio-label": "04 - Portfolio",
            "portfolio-title": "Projects <em>and Certifications</em>",
            "portfolio-filter-cert": "Certifications",
            "portfolio-filter-tech": "Technologies",
            "portfolio-proof-title": "Engineering Presence · Social Proof",
            "portfolio-github-status": "GitHub Status",
            "portfolio-github-cta": "Access Code",
            "portfolio-trailhead-cta": "View Official Profile",
            "portfolio-mobile-title": "Mobile & Multiplatform",
            "portfolio-ai-title": "AI Operations & Multi-Agent Systems",
            "portfolio-ai-project-tag": "AI Operations Hub · Featured Project",
            "portfolio-ai-project-title": "DevTeams: Multi-Agent 3D Simulation",
            "portfolio-ai-project-status": "System Live",
            "portfolio-ai-feature-1-title": "Planner A*",
            "portfolio-ai-feature-1-desc": "Pathfinding in Web Workers.",
            "portfolio-ai-feature-2-title": "Privacy",
            "portfolio-ai-feature-2-desc": "File System Access API.",
            "portfolio-ai-project-copy": "Orchestration of 8 specialized agents in an immersive 3D environment with <strong>Three.js</strong> and <strong>Groq Llama 3.3</strong>.",
            "portfolio-ai-project-cta": "Architecture on GitHub",
            "services-label": "05 - Services",
            "services-title": "What I can <em>offer</em>",
            "services-copy": "Solutions designed to operate better, launch faster, and sustain growth with a solid technical foundation.",
            "services-1-title": "Digital Transformation",
            "services-1-desc": "Tools and workflows that improve productivity, operational control, and delivery quality.",
            "services-2-title": "Web & Python Development",
            "services-2-desc": "Apps, APIs, scripts, and custom solutions for internal processes and automation.",
            "services-3-title": "Integrations & Architecture",
            "services-3-desc": "Connection between systems and architectural decisions designed to scale.",
            "contact-label": "06 - Contact",
            "contact-title": "Ready to <em>execute?</em>",
            "contact-copy": "If you have a complex software problem or a process that needs AI and automation, let's talk. My focus is the delivery of real technical solutions.",
            "contact-cta-whatsapp": "Direct WhatsApp",
            "contact-cta-cv": "Download Full Resume",
            "contact-status-title": "Technical Availability",
            "contact-status-base": "Base",
            "contact-status-resp": "Response",
            "contact-status-resp-v": "< 24 Hours",
            "contact-status-focus": "Focus",
            "contact-status-focus-v": "Software & AI",
            "contact-status-mod": "Modality",
            "contact-status-mod-v": "Freelance / Consulting",
            "contact-status-signal": "Systems ready for new integrations and deployments.",
            "github-scroll-hint": "Swipe for months",
            "github-chart-header": "GitHub Contributions",
            "github-chart-range": "January - December 2026",
            "footer-copy": "Built by"
        }
    };

    const updateLanguage = (lang) => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        if (langToggle) langToggle.textContent = lang === 'es' ? 'EN' : 'ES';
        root.setAttribute('lang', lang);
        localStorage.setItem('devyhb-lang', lang);
    };

    langToggle?.addEventListener('click', () => {
        const currentLang = localStorage.getItem('devyhb-lang') || 'es';
        const nextLang = currentLang === 'es' ? 'en' : 'es';
        updateLanguage(nextLang);
    });

    // Inicializar idioma
    const savedLang = localStorage.getItem('devyhb-lang') || 'es';
    updateLanguage(savedLang);

    const sections = [...document.querySelectorAll('section[id]')];
    const navLinks = [...document.querySelectorAll('.nlinks a')];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- 1. Barra de Progreso de Lectura ---
    const updateScrollProgress = () => {
        const winScroll = body.scrollTop || root.scrollTop;
        const height = root.scrollHeight - root.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollProgress) scrollProgress.style.width = scrolled + "%";
        
        if (mnav) mnav.classList.toggle('scrolled', window.scrollY > 40);
        if (scrollTopBtn) scrollTopBtn.classList.toggle('vis', window.scrollY > 420);

        // Active Link on Scroll
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 120) current = section.id;
        });
        navLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + current));
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });

    // --- 2. Gestión de Temas ---
    const syncThemeIcon = () => {
        if (!themeIcon) return;
        const isDark = root.getAttribute('data-theme') === 'dark';
        themeIcon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
    };

    themeToggle?.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        localStorage.setItem('devyhb-theme', next);
        syncThemeIcon();
    });

    syncThemeIcon();

    // --- 3. Menú Móvil ---
    const toggleMenu = () => {
        const isOpen = mobileMenu?.classList.contains('open');
        if (isOpen) {
            mobileMenu?.classList.remove('open');
            body.classList.remove('menu-open');
        } else {
            mobileMenu?.classList.add('open');
            body.classList.add('menu-open');
        }
    };

    const closeMenu = () => {
        mobileMenu?.classList.remove('open');
        body.classList.remove('menu-open');
    };

    hamburgerBtn?.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    mobileClose?.addEventListener('click', closeMenu);
    document.querySelectorAll('.mobile-link').forEach(link => link.addEventListener('click', closeMenu));
    
    document.addEventListener('click', (e) => {
        if (!mobileMenu?.classList.contains('open')) return;
        if (e.target.closest('.mobile-menu') || e.target.closest('#hamburgerBtn')) return;
        closeMenu();
    });

    // --- 4. Flutter Gallery & Modal ---
    const flutterImages = [
        'assets/img/flutter/1.jpeg', 'assets/img/flutter/2.jpeg',
        'assets/img/flutter/3.jpeg', 'assets/img/flutter/4.jpeg',
        'assets/img/flutter/5.jpeg', 'assets/img/flutter/6.jpeg'
    ];
    let currentFlutterIdx = 0;
    const fmodal = document.getElementById('flutterModal');
    const fmodalImg = document.getElementById('fmodal-img');

    window.openFlutterModal = (idx) => {
        currentFlutterIdx = idx;
        if (fmodalImg) fmodalImg.src = flutterImages[currentFlutterIdx];
        fmodal?.classList.add('active');
        body.style.overflow = 'hidden';
    };

    window.closeFlutterModal = () => {
        fmodal?.classList.remove('active');
        body.style.overflow = '';
    };

    // Cerrar al hacer clic en el fondo (backdrop)
    fmodal?.addEventListener('click', (e) => {
        if (e.target === fmodal) closeFlutterModal();
    });

    window.changeFlutterImg = (dir) => {
        currentFlutterIdx = (currentFlutterIdx + dir + flutterImages.length) % flutterImages.length;
        if (fmodalImg) fmodalImg.src = flutterImages[currentFlutterIdx];
    };

    document.addEventListener('keydown', (e) => {
        if (!fmodal?.classList.contains('active')) return;
        if (e.key === 'ArrowLeft') changeFlutterImg(-1);
        if (e.key === 'ArrowRight') changeFlutterImg(1);
        if (e.key === 'Escape') closeFlutterModal();
    });

    // --- 5. Animación Reveal ---
    if (reducedMotion) {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    } else {
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    }

    // --- 6. Filtro de Portafolio ---
    const certGrid = document.getElementById('cgrid');
    const techGrid = document.getElementById('tgrid');
    document.querySelectorAll('.pfbtn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.pfbtn').forEach(item => item.classList.remove('active'));
            btn.classList.add('active');
            const techMode = btn.dataset.f === 'tech';
            if (certGrid) certGrid.style.display = techMode ? 'none' : 'grid';
            techGrid?.classList.toggle('vis', techMode);
        });
    });

    // --- 7. Inicialización Final ---
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    window.addEventListener('load', () => {
        setTimeout(() => {
            loader?.classList.add('hide');
            body.classList.remove('is-loading');
        }, reducedMotion ? 100 : 800);
    });

    scrollTopBtn?.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

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
    const closeMenu = () => {
        mobileMenu?.classList.remove('open');
        body.classList.remove('menu-open');
    };

    hamburgerBtn?.addEventListener('click', () => {
        mobileMenu?.classList.add('open');
        body.classList.add('menu-open');
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

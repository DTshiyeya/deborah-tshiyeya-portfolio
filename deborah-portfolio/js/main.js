document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuBtn = document.querySelector('.menu-btn');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        navbar.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            navbar.classList.remove('active');
        });
    });
    
    // Active Navigation Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').slice(1) === current) {
                item.classList.add('active');
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        }
    });
    
    // Counter Animation
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    const countUp = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.innerText;
                const count = +counter.innerText;
                const inc = target / speed;
                
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            
            updateCount();
        });
    };
    
    // Intersection Observer for Counter Animation
    const statsSection = document.querySelector('.hero-stats');
    
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            countUp();
            statsObserver.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
    
    // Skill Bar Animation
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        });
    };
    
    // Intersection Observer for Skill Bars
    const skillsSection = document.querySelector('.skills');
    
    const skillsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            animateSkillBars();
            skillsObserver.unobserve(skillsSection);
        }
    }, { threshold: 0.5 });
    
    skillsObserver.observe(skillsSection);
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });
    
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Scroll Animations
    const animateElements = document.querySelectorAll('.fade-in, .scale-in, .slide-in-left, .slide-in-right');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(element => {
        scrollObserver.observe(element);
    });
    
    // Section Header Animation
    const sectionHeaders = document.querySelectorAll('.section-header');
    
    const headerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    sectionHeaders.forEach(header => {
        headerObserver.observe(header);
    });
    
    // Lightbox
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const lightboxCaption = document.querySelector('.lightbox-caption');
    const closeLightbox = document.querySelector('.close-lightbox');
    
    document.querySelectorAll('.portfolio-lightbox').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const portfolioItem = this.closest('.portfolio-item');
            const imgSrc = portfolioItem.querySelector('.portfolio-img img').src;
            const caption = portfolioItem.querySelector('.portfolio-details h3').textContent;
            
            lightboxImg.src = imgSrc;
            lightboxCaption.textContent = caption;
            lightbox.classList.add('active');
        });
    });
    
    closeLightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});
// ===== TYPED TEXT ANIMATION =====
const phrases = [
    "Développeur Full Stack",
    "Data Scientist en formation",
    "Passionné par la Data",
    "Créateur de solutions innovantes"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById('typed-text');
const speed = 100;
const deleteSpeed = 50;
const pauseTime = 2000;

function typeText() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }
    
    typedElement.textContent = currentPhrase.substring(0, charIndex);
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        setTimeout(typeText, pauseTime);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, isDeleting ? deleteSpeed : speed);
    }
}

setTimeout(typeText, 500);

// ===== SCROLL PROGRESS BAR =====
const progressBar = document.getElementById('progress-bar');

window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observer tous les éléments avec la classe reveal
document.querySelectorAll('.reveal').forEach(element => {
    observer.observe(element);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== CONTACT FORM TABS =====
function showTab(tabName) {
    // Cacher tous les contenus
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.add('hidden'));
    
    // Désactiver tous les boutons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active', 'border-lavande-primaire', 'text-gris-fonce-texte');
        button.classList.add('text-gray-500', 'border-transparent');
    });
    
    // Afficher le contenu sélectionné
    const selectedContent = document.getElementById('tab-' + tabName);
    if (selectedContent) {
        selectedContent.classList.remove('hidden');
    }
    
    // Activer le bouton cliqué
    event.target.classList.add('active', 'border-lavande-primaire', 'text-gris-fonce-texte');
    event.target.classList.remove('text-gray-500', 'border-transparent');
}

// Rendre showTab global pour les onclick
window.showTab = showTab;

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    const increment = target / (duration / 50);
    let current = 0;
    const counter = element.querySelector('.counter');
    
    const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(interval);
        }
        counter.textContent = Math.floor(current);
    }, 50);
}

// Observe les cartes de statistiques pour déclencher les compteurs
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
            counterObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter-card').forEach(card => {
    counterObserver.observe(card);
});

// ===== 3D TILT EFFECT =====
document.querySelectorAll('[style*="perspective"]').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const rotateX = ((e.clientY - centerY) / (rect.height / 2)) * 10;
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * -10;
        
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});

// ===== BACK TO TOP BUTTON =====
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== DARK MODE TOGGLE =====
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
const html = document.documentElement;
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const sunIconMobile = document.getElementById('sun-icon-mobile');
const moonIconMobile = document.getElementById('moon-icon-mobile');

// Charger le mode sauvegardé
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    enableDarkMode();
}

function enableDarkMode() {
    html.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
    moonIcon?.classList.add('hidden');
    sunIcon?.classList.remove('hidden');
    moonIconMobile?.classList.add('hidden');
    sunIconMobile?.classList.remove('hidden');
}

function disableDarkMode() {
    html.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
    moonIcon?.classList.remove('hidden');
    sunIcon?.classList.add('hidden');
    moonIconMobile?.classList.remove('hidden');
    sunIconMobile?.classList.add('hidden');
}

function toggleDarkMode() {
    if (html.classList.contains('dark-mode')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

darkModeToggle?.addEventListener('click', toggleDarkMode);
darkModeToggleMobile?.addEventListener('click', toggleDarkMode);

// ===== ACTIVE NAV HIGHLIGHT =====
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-nav') === currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav(); // Initialiser au chargement

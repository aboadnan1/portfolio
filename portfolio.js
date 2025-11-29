// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Particle animation
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = `rgba(6, 182, 212, ${Math.random() * 0.5 + 0.2})`;
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 20 + 10}s infinite linear`;
        container.appendChild(particle);
    }
}

// Create particles on page load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createParticles);
} else {
    createParticles();
}

// Add float animation to stylesheet
const style = document.createElement('style');
style.innerHTML = `
    @keyframes float {
        0% {
            transform: translateY(0px) translateX(0px);
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
        }
    }
    
    .skills-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 0.75rem;
        margin-top: 1rem;
    }
    
    .skill-badge {
        background: rgba(6, 182, 212, 0.15);
        color: #06b6d4;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        font-size: 0.85rem;
        font-weight: 600;
        border: 1px solid rgba(6, 182, 212, 0.3);
        transition: all 0.3s ease;
        display: inline-block;
    }
    
    .skill-badge:hover {
        background: rgba(6, 182, 212, 0.25);
        transform: translateY(-2px);
    }
    
    .skills-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: #cbd5e1;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    
    .about-image-container {
        position: relative;
    }
    
    .about-image-wrapper {
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        border: 2px solid rgba(6, 182, 212, 0.3);
    }
    
    .about-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 10px;
    }
    
    .about-image-wrapper::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(6, 182, 212, 0.1), transparent);
        border-radius: 12px;
        z-index: 1;
    }
    
    .bg-section {
        background: rgba(30, 58, 138, 0.2);
    }
    
    .bg-gradient-1 {
        background: linear-gradient(135deg, #2563eb 0%, #06b6d4 100%);
    }
    
    .bg-gradient-2 {
        background: linear-gradient(135deg, #06b6d4 0%, #0891b2 100%);
    }
    
    .bg-gradient-3 {
        background: linear-gradient(135deg, #0891b2 0%, #00d4ff 100%);
    }
    
    .bg-gradient-4 {
        background: linear-gradient(135deg, #2563eb 0%, #0891b2 100%);
    }
    
    .bg-gradient-5 {
        background: linear-gradient(135deg, #06b6d4 0%, #2563eb 100%);
    }
    
    .bg-gradient-6 {
        background: linear-gradient(135deg, #1e40af 0%, #06b6d4 100%);
    }
    
    .contact-subtitle {
        text-align: center;
        color: #cbd5e1;
        font-size: 1.1rem;
        margin-top: 1rem;
    }
    
    .contact-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 3rem;
    }
    
    .contact-item {
        background: rgba(30, 58, 138, 0.5);
        backdrop-filter: blur(10px);
        padding: 2rem;
        border-radius: 12px;
        border: 1px solid rgba(6, 182, 212, 0.2);
        text-align: center;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
    
    .contact-item:hover {
        background: rgba(30, 58, 138, 0.7);
        border-color: #06b6d4;
        transform: translateY(-5px);
    }
    
    .contact-icon {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        color: white;
    }
    
    .contact-info {
        text-align: center;
    }
    
    .contact-label {
        color: #cbd5e1;
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
    
    .contact-value {
        color: #06b6d4;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s ease;
    }
    
    .contact-value:hover {
        color: #0891b2;
    }
    
    .footer-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
    }
    
    .footer-info {
        text-align: center;
    }
    
    .footer-name {
        font-size: 1.1rem;
        font-weight: 700;
        color: #06b6d4;
    }
    
    .footer-role {
        color: #94a3b8;
        font-size: 0.9rem;
    }
    
    .footer-copyright {
        color: #64748b;
        flex-grow: 1;
        text-align: center;
    }
    
    .footer-social {
        display: flex;
        gap: 1rem;
    }
    
    .footer-icon {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: rgba(6, 182, 212, 0.15);
        color: #06b6d4;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        text-decoration: none;
    }
    
    .footer-icon:hover {
        background: #06b6d4;
        color: #0f172a;
    }
`;
document.head.appendChild(style);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    });
}, observerOptions);

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

console.log('Portfolio loaded successfully!');

/**
 * Navigation Component
 * Handles navbar scroll effects and mobile menu
 */
class Navigation {
    constructor() {
        this.nav = document.querySelector('nav');
        this.init();
    }

    init() {
        // Scroll effect
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Smooth scroll for nav links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => this.handleNavClick(e));
        });
    }

    handleScroll() {
        if (window.scrollY > 50) {
            this.nav.style.background = 'rgba(5, 5, 8, 0.95)';
        } else {
            this.nav.style.background = 'rgba(5, 5, 8, 0.8)';
        }
    }

    handleNavClick(e) {
        e.preventDefault();
        const target = document.querySelector(e.currentTarget.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

export default Navigation;
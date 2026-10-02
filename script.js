document.addEventListener('DOMContentLoaded', () => {
    // 1. Accordion Toggle untuk Rincian Syafaat
    const accordionBtn = document.querySelector('.accordion-btn');
    const accordionContent = document.querySelector('.accordion-content');

    if (accordionBtn) {
        accordionBtn.addEventListener('click', () => {
            const isVisible = accordionContent.style.display === 'block';
            accordionContent.style.display = isVisible ? 'none' : 'block';
            accordionBtn.textContent = isVisible 
                ? 'Rincian Pembagian Syafaat (Klik untuk membuka)' 
                : 'Rincian Pembagian Syafaat (Klik untuk menutup)';
        });
    }

    // 2. Smooth Scroll untuk Link Navigasi dan Peta Pikiran (Roadmap)
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

    // 3. Effect Fade-in saat Scroll (Scroll Animation)
    const cards = document.querySelectorAll('.card');
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
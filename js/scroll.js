let lastScrollTop = 0;

// Função para verificar se um elemento está visível na viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

// Função para revelar elementos
function reveal() {
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('active');
        }
    });
}

// Revelar elementos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    reveal();
});

// Revelar elementos durante o scroll
window.addEventListener('scroll', reveal);

// Revelar elementos quando a página for redimensionada
window.addEventListener('resize', reveal);

// Revelar elementos quando o usuário clicar em links do menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Revelar elementos após a animação de scroll
            setTimeout(() => {
                reveal();
            }, 1000);
        }
    });
}); 
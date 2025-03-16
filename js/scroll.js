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

// Função para rolagem suave
function smoothScroll(targetId) {
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
}

// Revelar elementos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    reveal();
    
    // Adicionar evento de clique para todos os links com âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            smoothScroll(targetId);
            
            // Fechar o menu móvel se estiver aberto
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });
});

// Revelar elementos durante o scroll
window.addEventListener('scroll', reveal);

// Revelar elementos quando a página for redimensionada
window.addEventListener('resize', reveal); 
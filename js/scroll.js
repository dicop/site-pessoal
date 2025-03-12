let lastScrollTop = 0;

function reveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollingDown = currentScrollTop > lastScrollTop;
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
            if (scrollingDown || currentScrollTop === 0) {
                element.classList.add('active');
            }
        }
    });
    
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal); 
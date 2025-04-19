document.addEventListener('DOMContentLoaded', function() {
    // Criar o elemento do botão
    const scrollButton = document.createElement('button');
    scrollButton.className = 'scroll-to-top';
    scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollButton);

    // Mostrar/ocultar botão com base na posição de rolagem
    function toggleScrollButton() {
        if (window.scrollY > 200) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    }

    // Rolar para o topo quando o botão for clicado
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Ouvir eventos de rolagem
    window.addEventListener('scroll', toggleScrollButton);
}); 
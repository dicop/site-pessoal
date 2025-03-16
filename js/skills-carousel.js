document.addEventListener('DOMContentLoaded', function() {
    const skillsSwiper = new Swiper('.skills-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
            rows: 2,
            fill: 'row'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // Quando a largura da tela for >= 768px
            768: {
                slidesPerView: 3,
                grid: {
                    rows: 2,
                    fill: 'row'
                }
            }
        }
    });
}); 
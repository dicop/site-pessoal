document.addEventListener('DOMContentLoaded', () => {
    // Initialize all carousels on the page
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        const projectsGrid = carousel.querySelector('.projects-grid');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const dotsContainer = carousel.closest('section').querySelector('.carousel-dots');
        
        let currentIndex = 0;
        let startX;
        let currentX;
        let isDragging = false;

        // Calculate the number of slides and create dots
        const slideWidth = projectsGrid.clientWidth;
        const numSlides = Math.ceil(projectsGrid.scrollWidth / slideWidth);
        
        // Create dots
        for (let i = 0; i < numSlides; i++) {
            const dot = document.createElement('button');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        // Update dots
        function updateDots() {
            const dots = dotsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        // Go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            const slideWidth = projectsGrid.clientWidth;
            const offset = -(currentIndex * slideWidth);
            projectsGrid.style.transform = `translateX(${offset}px)`;
            updateDots();
        }

        // Event Listeners
        prevButton.addEventListener('click', () => {
            currentIndex = Math.max(currentIndex - 1, 0);
            goToSlide(currentIndex);
        });

        nextButton.addEventListener('click', () => {
            currentIndex = Math.min(currentIndex + 1, numSlides - 1);
            goToSlide(currentIndex);
        });

        // Touch events for mobile
        projectsGrid.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });

        projectsGrid.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            currentX = e.touches[0].clientX;
            const diff = currentX - startX;
            const slideWidth = projectsGrid.clientWidth;
            const offset = -(currentIndex * slideWidth) + diff;
            projectsGrid.style.transform = `translateX(${offset}px)`;
        });

        projectsGrid.addEventListener('touchend', () => {
            isDragging = false;
            if (!currentX) return;
            
            const diff = currentX - startX;
            if (Math.abs(diff) > 100) {
                if (diff > 0 && currentIndex > 0) {
                    currentIndex--;
                } else if (diff < 0 && currentIndex < numSlides - 1) {
                    currentIndex++;
                }
            }
            goToSlide(currentIndex);
            currentX = null;
        });

        // Window resize handler
        window.addEventListener('resize', () => {
            goToSlide(currentIndex);
        });

        // Initialize carousel
        goToSlide(0);
    });
}); 
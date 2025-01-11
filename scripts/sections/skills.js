document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    const popups = document.querySelectorAll('.popup');


    popups.forEach(popup => {
        initializeCarousel(popup);
    });

    function initializeCarousel(popup) {
        const carousel = popup.querySelector('.carousel');
        if (!carousel) return; 

        const container = carousel.querySelector('.carousel-container');
        const slides = container.querySelectorAll('.skills-category');
        const dotsContainer = carousel.querySelector('.carousel-dots');
        const prevButton = carousel.querySelector('.carousel-prev');
        const nextButton = carousel.querySelector('.carousel-next');


        if (slides.length > 1 && dotsContainer) {
            dotsContainer.innerHTML = '';
            slides.forEach((_, i) => {
                const dot = document.createElement('div');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => updateSlide(container, slides, i));
                dotsContainer.appendChild(dot);
            });
        }

        updateSlide(container, slides, 0);

        if (prevButton) {
            prevButton.addEventListener('click', () => prevSlide(popup.id));
        }
        if (nextButton) {
            nextButton.addEventListener('click', () => nextSlide(popup.id));
        }
    }

    function showPopup(id) {
        const popup = document.getElementById(id);
        if (popup) {
            popup.style.display = 'flex';
            popup.classList.remove('hide');
            popup.classList.add('show');

            const associatedCategory = document.querySelector(`.category[data-popup-target="${id}"]`);
            if (associatedCategory) {
                associatedCategory.classList.add('active');
            }
        }
    }

    function closePopup(popupId) {
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.remove('show');
            popup.classList.add('hide');

            popup.addEventListener('transitionend', () => {
                if (popup.classList.contains('hide')) {
                    popup.style.display = 'none';
                    popup.classList.remove('hide');
                }
            }, { once: true });

            const associatedCategory = document.querySelector(`.category[data-popup-target="${popupId}"]`);
            if (associatedCategory) {
                associatedCategory.classList.remove('active');
            }
        }
    }


    categories.forEach(category => {
        category.addEventListener('click', () => {
            const targetId = category.getAttribute('data-popup-target');
            showPopup(targetId);
        });
    });

    popups.forEach(popup => {
        const closeButton = popup.querySelector('.close-button');
        if (closeButton) {
            closeButton.addEventListener('click', () => closePopup(popup.id));
        }
    });

    document.addEventListener('click', (e) => {
        popups.forEach(popup => {
            if (e.target === popup) {
                closePopup(popup.id);
            }
        });
    });

    document.querySelectorAll('.skill-circle').forEach(circle => {
        const progress = circle.getAttribute('data-progress');
        circle.style.setProperty('--progress', progress);
    });

    function updateSlide(container, slides, index) {
        const offset = -(index * 100);
        container.style.transform = `translateX(${offset}%)`;

        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });

        const dots = container.parentElement.querySelector('.carousel-dots');
        if (dots) {
            Array.from(dots.children).forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }
    }

    function prevSlide(popupId) {
        const popup = document.getElementById(popupId);
        const container = popup.querySelector('.carousel-container');
        const slides = container.querySelectorAll('.skills-category');
        let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
        const newIndex = (activeIndex - 1 + slides.length) % slides.length; 
        updateSlide(container, slides, newIndex);
    }

    function nextSlide(popupId) {
        const popup = document.getElementById(popupId);
        const container = popup.querySelector('.carousel-container');
        const slides = container.querySelectorAll('.skills-category');
        let activeIndex = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
        const newIndex = (activeIndex + 1) % slides.length; 
        updateSlide(container, slides, newIndex);
    }

});
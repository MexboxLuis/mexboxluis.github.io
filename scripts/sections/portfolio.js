document.addEventListener('DOMContentLoaded', () => {
    const popups = document.querySelectorAll('.reading-popup');
    const openButtons = document.querySelectorAll('.open-popup');
    const closeButtons = document.querySelectorAll('.read-ok');
    const sectionsMap = {};
    let currentPopup = null;
    let currentSectionIndex = 0;

    popups.forEach(popup => {
        const sections = popup.querySelectorAll('.popup-section');
        const id = popup.getAttribute('id');
        sectionsMap[id] = sections;
    });

    const updateScrollButtons = (popup) => {
        const sections = sectionsMap[popup.getAttribute('id')];
        const upButton = popup.querySelector('.scroll-btn.up');
        const downButton = popup.querySelector('.scroll-btn.down');

        upButton.style.display = currentSectionIndex === 0 ? 'none' : 'block';
        downButton.style.display = currentSectionIndex === sections.length - 1 ? 'none' : 'block';
    };

    const scrollToSection = (popup, index) => {
        const sections = sectionsMap[popup.getAttribute('id')];
        sections.forEach((section, i) => {
            section.classList.toggle('active', i === index);
        });
        updateScrollButtons(popup);
    };

    const openPopup = (button) => {
        const card = button.closest('.project-card');
        const popupId = card.getAttribute('data-popup');
        const popup = document.getElementById(popupId);

        if (popup) {
            card.classList.add('popup-active');
            popup.style.display = 'flex';
            currentPopup = popup;
            currentSectionIndex = 0;

            setTimeout(() => {
                popup.classList.add('active');
                scrollToSection(popup, currentSectionIndex);
            }, 10);
        }
    };

    const closePopup = (popup) => {
        popup.classList.remove('active');
        popup.classList.add('closing');

        setTimeout(() => {
            popup.style.display = 'none';
            popup.classList.remove('closing');
            document.querySelector('.project-card.popup-active')?.classList.remove('popup-active');
            currentPopup = null;
        }, 750);
    };

    openButtons.forEach(button => {
        button.addEventListener('click', () => openPopup(button));
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => closePopup(button.closest('.reading-popup')));
    });

    document.body.addEventListener('click', (event) => {
        if (currentPopup && event.target === currentPopup) {
            closePopup(currentPopup);
        }
    });

    document.querySelectorAll('.scroll-btn').forEach(button => {
        button.addEventListener('click', () => {
            if (currentPopup) {
                const direction = button.dataset.target;
                const sections = sectionsMap[currentPopup.getAttribute('id')];
                currentSectionIndex = direction === 'up' ? Math.max(0, currentSectionIndex - 1) : Math.min(sections.length - 1, currentSectionIndex + 1);
                scrollToSection(currentPopup, currentSectionIndex);
            }
        });
    });

    popups.forEach(popup => {
        popup.querySelector('.popup-text').addEventListener('wheel', (event) => {
            if (currentPopup) {
                const sections = sectionsMap[currentPopup.getAttribute('id')];
                currentSectionIndex = event.deltaY > 0
                    ? Math.min(sections.length - 1, currentSectionIndex + 1)
                    : Math.max(0, currentSectionIndex - 1);
                scrollToSection(currentPopup, currentSectionIndex);
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const viewButtons = document.querySelectorAll('.view-button');

    viewButtons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            const gifPath = button.dataset.gif;
            const gifContainer = button.closest('.project-card').nextElementSibling; 
            const gifImage = gifContainer.querySelector('.hover-gif'); 

            if (gifContainer && gifImage) {
                gifImage.src = gifPath; 
                gifContainer.style.display = 'flex'; 
            }
        });

        button.addEventListener('mouseleave', () => {
            const gifContainer = button.closest('.project-card').nextElementSibling; 

            if (gifContainer) {
                gifContainer.style.display = 'none'; 
            }
        });
    });
});

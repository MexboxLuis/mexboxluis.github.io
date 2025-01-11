const header = document.querySelector('header');
const contactSection = document.getElementById('contact');
const exitButton = document.getElementById('exit-contact');

function toggleHeaderVisibility(visible) {
    if (visible) {
        header.classList.remove('hidden');
        contactSection.classList.remove('expanded');
    } else {
        header.classList.add('hidden');
        contactSection.classList.add('expanded');
        
    }
}


const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            toggleHeaderVisibility(false); 
        } else {
            toggleHeaderVisibility(true); 
        }
    });
}, { threshold: 0.5 });


contactObserver.observe(contactSection);

exitButton.addEventListener('click', () => {
    toggleHeaderVisibility(true); 
    contactSection.classList.remove('expanded'); 

    const firstSection = document.querySelector('#about');
    if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth' });
    }

    const goodbyeContainer = document.createElement('div');
    goodbyeContainer.id = 'goodbye-container';
    document.body.appendChild(goodbyeContainer);

    const goodbyes = [
        'Goodbye',
        'Adiós',
        'Au revoir',
        'Auf Wiedersehen',
        'Arrivederci',
        'さようなら',
        '再见',
        '안녕히 가세요',
        'नमस्ते',
        'До свидания'
    ];

    goodbyes.forEach((text) => {
        const goodbyeElement = document.createElement('span');
        goodbyeElement.classList.add('goodbye-text');
        goodbyeElement.textContent = text;

        goodbyeElement.style.left = `${Math.random() * 100}%`;
        goodbyeElement.style.top = `${Math.random() * 100}%`;

        goodbyeContainer.appendChild(goodbyeElement);

        setTimeout(() => {
            goodbyeElement.style.opacity = '0';
        }, 1500);

        setTimeout(() => {
            goodbyeContainer.remove();
        }, 3000);
    });
});



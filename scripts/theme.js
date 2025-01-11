document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");
    const themeIcon = document.getElementById("theme-icon");

    let darkmode = localStorage.getItem('darkmode');

    const enableDarkmode = () => {
        document.body.classList.add('darkmode');
        themeIcon.src = "images/dark_mode.png";
        localStorage.setItem('darkmode', 'active');
        document.body.style.transition = "background-color 0.3s ease";
    };
    
    const disableDarkmode = () => {
        document.body.classList.remove('darkmode');
        themeIcon.src = "images/light_mode.svg";
        localStorage.setItem('darkmode', null);
        document.body.style.transition = "background-color 0.3s ease";
    };
    

    if (darkmode === 'active') {
        enableDarkmode();
    } else {
        disableDarkmode();
    }

    themeSwitch.addEventListener('click', () => {
        darkmode = localStorage.getItem('darkmode');
        darkmode !== 'active' ? enableDarkmode() : disableDarkmode();
    });
});


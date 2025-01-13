const headerContentToggle = document.querySelector(".header-content-toggle");
const headerToggle = document.getElementById("header-toggle");
const nameSpan = document.getElementById("name");

headerContentToggle.style.display = "none";

headerToggle.addEventListener("click", () => {
    const isVisible = headerContentToggle.style.display === "flex";
    headerContentToggle.style.display = isVisible ? "none" : "flex";
    headerToggle.textContent = isVisible ? "☰" : "✖";
});


nameSpan.addEventListener("click", () => {
    const helloContainer = document.createElement('div');
    helloContainer.id = 'hello-container';
    document.body.appendChild(helloContainer);

    const messages = [
        'Hello',        // Inglés
        'Bienvenue',    // Francés (Bienvenido)
        'Ciao',         // Italiano
        'こんにちは',      // Japonés (Hola)
        '欢迎',          // Chino (Mandarín) (Bienvenido)
        '환영합니다',    // Coreano (Bienvenido)
        'नमस्ते',        // Hindi (Hola)
        'Привет',       // Ruso (Hola)
        'Olá',          // Portugués (Hola)
        'Добродошли',   // Serbio (Bienvenido)
        'Welkom',       // Neerlandés (Bienvenido)
        'مرحبا',        // Árabe (Hola)
        'Salve',        // Latín (Hola)
        'Sveiki',       // Letón (Hola)
        'Hei',          // Finés (Hola)
        'שלום',         // Hebreo (Hola)
        'Helo',         // Galés (Hola)
        'Aloha',        // Hawaiano (Hola)
        'Merhaba',      // Turco (Bienvenido)
        'Sawasdee',     // Tailandés (Hola)
        'Kamusta',      // Filipino (Hola)
        'Ahilan',       // Tamil (Hola)
        'Kumusta',      // Cebuano (Hola)
        'Szia',         // Húngaro (Hola)
        'Zdravo',       // Búlgaro (Hola)
        'Saluton',      // Esperanto (Hola)
        'Selamat datang', // Malayo (Bienvenido)
        'Welkom',       // Afrikaans (Bienvenido)
        'Vítejte',      // Checo (Bienvenido)
        'Benvenuto',    // Italiano (Bienvenido)
        'Benvingut',    // Catalán (Bienvenido)
        'Bine ați venit', // Rumano (Bienvenido)
        'Karibu',       // Suajili (Bienvenido)
        'Icha',         // Quechua (Bienvenido)
        'Haere mai',    // Maorí (Bienvenido)
        'Fáilte',       // Irlandés (Bienvenido)
        'Tere tulemast' // Estonio (Bienvenido)
    ];
    

    messages.forEach((text, index) => {
        const messageElement = document.createElement('span');
        messageElement.classList.add('hello-text');
        messageElement.textContent = text;

        const messageStyle = index % 2 === 0 ? 'greeting' : 'welcome';
        messageElement.classList.add(messageStyle);

        messageElement.style.left = `${Math.random() * 100}%`;
        messageElement.style.top = `${Math.random() * 100}%`;

        helloContainer.appendChild(messageElement);

        setTimeout(() => {
            messageElement.style.opacity = '0';
        }, 1500);

        setTimeout(() => {
            helloContainer.remove();
        }, 3000);
    });
});

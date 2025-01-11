const translations = {
  es: {
    // header translation
    name: "Luis Alfredo <br> Cuamatzi Flores",
    description:
      "Ingeniero en Inteligencia Artificial en formación, desarrollador móvil y entusiasta de IA",
    nav: {
      about: "Yo",
      education: "Educación",
      portfolio: "Portafolio",
      skills: "Habilidades",
      contact: "Contacto",
    },
    // about section translation
    about: {
      title: "Sobre Mí",
      description:
        "Soy Luis Alfredo Cuamatzi Flores, estudiante de Ingeniería en Inteligencia Artificial, durante mi desarrollo he adquirido experiencia en áreas como machine learning, visión por computadora y procesamiento de lenguaje natural. Me apasiona aplicar estos conocimientos para desarrollar soluciones innovadoras que resuelvan problemas del mundo real.",
      "download-cv": "Descargar CV",
      "copy-email": "Copiar",
      copied: "Copiado!",
    },
    // education section translation
    education: {
      title: "Educación",
      ipn: {
        name: "Instituto Politécnico Nacional",
        location: "México [🇲🇽]",
        dates: "Agosto 2021 - Diciembre 2025",
        program: "Ingeniería en Inteligencia Artificial",
        description:
          "Actualmente en 7° semestre, donde he desarrollado habilidades en aprendizaje automático, visión artificial y procesamiento de lenguaje natural.",
      },
      qmul: {
        name: "Queen Mary University of London",
        location: "Londres, Reino Unido [🇬🇧]",
        dates: "Agosto 2024",
        program: "Programa de Formación de Líderes (PFL)",
        description:
          "Participé en el PFL, donde desarrollé una idea de negocio en equipo y un prototipo durante un mes en Londres.",
      },
    },
    // portfolio section translation
    portfolio: {
      sectionTitle: "Portafolio",
      projects: {
        PIT: {
          title:
            "Sistema para el Programa Institucional de Tutorías del Instituto Politécnico Nacional",
          description:
            "Una aplicación móvil diseñada con Jetpack Compose para modernizar la gestión de asistencias y tutorías en el IPN.",
          tech: ["Jetpack Compose", "Kotlin", "Firebase"],
          buttons: {
            github: "Ver en GitHub",
            preview: "Vista previa",
            about: "Acerca de",
          },
        },    
        SmartCrops: {
          title: "SmartCrops - Agricultura Urbana Inteligente",
          description: "Una aplicación móvil diseñada con Jetpack Compose para simular el monitoreo y control de un invernadero inteligente como parte del proyecto SmartCrops.",
          tech: ["Jetpack Compose", "Kotlin"],
          buttons: {
            github: "Ver en GitHub",
            preview: "Vista previa",
            about: "Acerca de",
          },
        },    
        LEXFY: {
          title: "LEXFY: OCR, Generación de Imágenes y Gestión de Datos",
          description:
            "Una aplicación innovadora para la extracción precisa de texto, generación de imágenes y gestión segura de datos utilizando tecnologías de vanguardia.",
          tech: ["TensorFlow", "EasyOCR", "Together AI", "Jetpack Compose", "Flask", "Firebase"],
          buttons: {
            github: "Ver en GitHub",
            preview: "Vista previa",
            about: "Acerca de",
          },
        },              
        SmartEMG: {
          title: "SmartEMG Vision",
          description:
            "Un prototipo de sistema basado en Android que utiliza el análisis de señales EMG y la detección de objetos en tiempo real con IA para apoyar la rehabilitación de discapacidades motoras.",
          tech: ["Jetpack Compose", "Flask", "TensorFlow"],
          buttons: {
            github: "Ver en GitHub",
            preview: "Vista previa",
            about: "Acerca de",
          },
        },        
      },
      popups: {
        PIT: {
          sections: {
            tech: {
              title: "Tecnologías",
              content:
                "Este proyecto utiliza tecnologías modernas como Jetpack Compose para el diseño intuitivo de la aplicación móvil y Firebase para la sincronización en tiempo real y gestión de datos en la nube.",
            },
            purpose: {
              title: "Propósito",
              content:
                "El propósito de este proyecto es modernizar la gestión de tutorías del Programa Institucional de Tutorías (PIT) del IPN, proporcionando una solución tecnológica eficiente y accesible para el registro y consulta de asistencias.",
            },
            how: {
              title: "Cómo lo hace",
              content:
                "Desarrollando una aplicación móvil basada en Android con Jetpack Compose que permite a los profesores registrar asistencias en tiempo real y acceder a la información centralizada gracias a la integración con Firebase.",
            },
          },
          "read-ok": "OK",
        },  
        SmartCrops: {
          sections: {
            tech: {
              title: "Tecnologías",
              content:
                "Diseñé esta aplicación utilizando Jetpack Compose y Kotlin, enfocándome en el diseño de UX/UI. Aunque la app es una simulación, integra pantallas y botones que representan una experiencia completa de usuario pensada para gestionar sensores, cámaras y algoritmos de detección de enfermedades en un invernadero inteligente.",
            },
            purpose: {
              title: "Propósito",
              content:
                "El objetivo del proyecto es ofrecer una solución tecnológica innovadora para la agricultura urbana, facilitando a los usuarios la posibilidad de monitorear y gestionar invernaderos inteligentes desde la comodidad de su hogar.",
            },
            how: {
              title: "Cómo lo hace",
              content:
                "Aunque esta versión es solo un prototipo de UX/UI, la idea es que la app pueda recibir datos de sensores (como temperatura, humedad y luz) y mostrar alertas mediante algoritmos de inteligencia artificial. Todo esto estaría diseñado para conectarse a un sistema centralizado que gestione las condiciones del invernadero en tiempo real.",
            },
          },
          "read-ok": "OK",
        },      
        LEXFY: {
          sections: {
            tech: {
              title: "Tecnologías",
              content:
                "Se utilizan TensorFlow (transformers) y EasyOCR para el reconocimiento de texto, la API de Together AI para la generación de imágenes, Jetpack Compose (Kotlin) para el diseño de la aplicación móvil, Flask (Python) para los servidores, y Firebase (Kotlin) para la sincronización de datos en tiempo real y la gestión de cuentas.",
            },
            purpose: {
              title: "Propósito",
              content:
                "Proveer una herramienta poderosa para la extracción precisa de texto, la generación de imágenes a partir de texto y la persistencia segura de datos mediante tecnologías avanzadas.",
            },
            how: {
              title: "Cómo lo hace",
              content:
                "Desarrollando un sistema móvil basado en Android con Jetpack Compose que permite la extracción de texto mediante OCR, la generación de imágenes a partir de texto y la gestión de cuentas y datos en tiempo real, respaldado por servidores Flask y Firebase para un almacenamiento seguro y sincronizado.",
            },
          },
          "read-ok": "OK",
        },               
        SmartEMG: {
          sections: {
            tech: {
              title: "Tecnologías",
              content:
                "El proyecto combina Android con Jetpack Compose para la interfaz, Flask para la integración del modelo de IA (YOLOv8 y nuestra red neuronal personalizada), y PyTorch para el entrenamiento de modelos y tareas de clasificación.",
            },
            purpose: {
              title: "Propósito",
              content:
                "Ayudar a personas con discapacidades motoras mediante la detección de movimientos de la mano a través del análisis de señales EMG y la detección de objetos en tiempo real.",
            },
            how: {
              title: "Cómo funciona",
              content:
                "Las señales se capturan y procesan utilizando modelos de IA personalizados y YOLOv8, mientras que una aplicación Android proporciona una interfaz para visualización e interacción en tiempo real. Flask actúa como el middleware para la comunicación entre la aplicación y los modelos de IA.",
            },
          },
          "read-ok": "OK",
        },        
      },
    },
    // skills section translation
    skills: {
      title: "Habilidades",
      ai: "Inteligencia Artificial",
      mobile: "Desarrollo Móvil",
      web: "Desarrollo Web",
      softSkills: "Habilidades Blandas",
      db: "Bases de Datos",
      popups: {
        ai: {
          title: "Inteligencia Artificial",
          tensorflow: "TensorFlow",
          pytorch: "PyTorch",
        },
        mobile: {
          title: "Desarrollo Móvil",
          android: "Android",
          androidViews: "Android Views",
          jetpackCompose: "Jetpack Compose",
          ios: "iOS",
          swiftUI: "SwiftUI",
          uikit: "UIKit",
          multiplatform: "Multiplataforma",
          reactNative: "React Native",
          flutter: "Flutter",
        },
        web: {
          title: "Desarrollo Web",
          native: "Nativo",
          htmlCss: "HTML & CSS",
          javascript: "JavaScript",
          frameworks: "Frameworks",
          react: "React",
          nodejs: "Node.js",
        },
        softSkills: {
          title: "Habilidades Blandas",
          xp: "Extreme Programming",
          kanban: "Kanban",
        },
        db: {
          title: "Bases de Datos",
          sql: "SQL",
          mysql: "MySQL",
          sqlite: "SQLite",
          nosql: "NOSQL",
          firebase: "Firebase",
          mongodb: "MongoDB",
        },
      },
    },
    // contact section translation
    contact: {
      title: "Contacto",
      intro: "Yo soy Luis Alfredo, y me puedes encontrar en",
      nickname: "Me puedes encontrar como @mexboxluis.",
      thankYou: "¡Gracias por visitar mi portafolio! Espero su mensaje.",
      madeWith: "Sitio realizado con",
      exit: "Salir"
    },
  },
  en: {
    // header translation
    name: "Luis Alfredo <br> Cuamatzi Flores",
    description: "AI Engineering student, mobile developer, and AI enthusiast",
    nav: {
      about: "Bio",
      education: "Education",
      portfolio: "Portfolio",
      skills: "Skills",
      contact: "Contact",
    },
    // about section translation
    about: {
      title: "About Me",
      description:
        "I am Luis Alfredo Cuamatzi Flores, a student of Artificial Intelligence Engineering, throughout my development, I have gained experience in areas such as machine learning, computer vision, and natural language processing. I am passionate about applying this knowledge to develop innovative solutions that address real-world problems.",
      "download-cv": "Download CV",
      "copy-email": "Copy",
      copied: "Copied!",
    },
    // education section translation
    education: {
      title: "Education",
      ipn: {
        name: "Instituto Politécnico Nacional (National Polytechnic Institute)",
        location: "Mexico [🇲🇽]",
        dates: "August 2021 - December 2025",
        program: "Artificial Intelligence Engineering",
        description:
          "Currently in the 7th semester, where I have developed skills in machine learning, computer vision, and natural language processing.",
      },
      qmul: {
        name: "Queen Mary University of London",
        location: "London, United Kingdom [🇬🇧]",
        dates: "August 2024",
        program: "Leader Formation Program (PFL)",
        description:
          "I participated in the PFL, where I developed a business idea in a team and a prototype during a month in London.",
      },
    },
    // portfolio section translation
    portfolio: {
      sectionTitle: "Portfolio",
      projects: {
        PIT: {
          title:
            "System for the Institutional Tutoring Program of the National Polytechnic Institute",
          description:
            "A mobile application designed with Jetpack Compose to modernize attendance and tutoring management at IPN.",
          tech: ["Jetpack Compose", "Kotlin", "Firebase"],
          buttons: {
            github: "View on GitHub",
            preview: "Preview",
            about: "About",
          },
        },  
        SmartCrops: {
          title: "SmartCrops - Intelligent Urban Agriculture",
          description: "A mobile app designed with Jetpack Compose to simulate the monitoring and control of an intelligent greenhouse for the SmartCrops project.",
          tech: ["Jetpack Compose", "Kotlin"],
          buttons: {
            github: "View on GitHub",
            preview: "Preview",
            about: "About",
          },
        },      
        LEXFY: {
          title: "LEXFY: OCR, Image Generation, and Data Management",
          description:
            "An innovative application for precise text extraction, image generation, and secure data management using cutting-edge technologies.",
          tech: ["TensorFlow", "EasyOCR", "Together AI", "Jetpack Compose", "Flask", "Firebase"],
          buttons: {
            github: "View on GitHub",
            preview: "Preview",
            about: "About",
          },
        },        
        SmartEMG: {
          title: "SmartEMG Vision",
          description:
            "A prototype system based on Android. that uses EMG signal analysis and real-time object detection with AI to support rehabilitation for motor disabilities.",
          tech: ["Jetpack Compose", "Flask", "TensorFlow"],
          buttons: {
            github: "View on GitHub",
            preview: "Preview",
            about: "About",
          },
        },
        
      },
      popups: {
        PIT: {
          sections: {
            tech: {
              title: "Technologies",
              content:
                "This project uses modern technologies such as Jetpack Compose for the intuitive design of the mobile application and Firebase for real-time synchronization and data management in the cloud.",
            },
            purpose: {
              title: "Purpose",
              content:
                "The purpose of this project is to modernize the tutoring management of the Institutional Tutoring Program (PIT) at IPN, providing an efficient and accessible technological solution for attendance registration and consultation.",
            },
            how: {
              title: "How it works",
              content:
                "By developing an Android-based mobile application using Jetpack Compose that allows teachers to register attendance in real-time and access centralized information thanks to Firebase integration.",
            },
          },
          "read-ok": "OK",
        }, 
        SmartCrops: {
          sections: {
            tech: {
              title: "Technologies",
              content:
                "I designed this app using Jetpack Compose and Kotlin, focusing on UX/UI design. Although the app is a simulation, it includes screens and buttons that represent a complete user experience for managing sensors, cameras, and disease detection algorithms in an intelligent greenhouse.",
            },
            purpose: {
              title: "Purpose",
              content:
                "The purpose of this project is to provide an innovative technological solution for urban agriculture, enabling users to monitor and manage intelligent greenhouses from the comfort of their homes.",
            },
            how: {
              title: "How it works",
              content:
                "While this version is a UX/UI prototype, the idea is that the app would eventually receive sensor data (e.g., temperature, humidity, and light) and display alerts using artificial intelligence algorithms. It would connect to a centralized system managing the greenhouse conditions in real-time.",
            },
          },
          "read-ok": "OK",
        },       
        LEXFY: {
          sections: {
            tech: {
              title: "Technologies",
              content:
                "TensorFlow (transformers) and EasyOCR are used for text recognition, Together AI API for image generation, Jetpack Compose (Kotlin) for mobile application design, Flask (Python) for servers, and Firebase (Kotlin) for real-time data synchronization and account management.",
            },
            purpose: {
              title: "Purpose",
              content:
                "To provide a powerful tool for precise text extraction, image generation from text, and secure data persistence through advanced technologies.",
            },
            how: {
              title: "How it works",
              content:
                "By developing an Android-based mobile system with Jetpack Compose that enables OCR for text extraction, text-to-image generation, and real-time account and data management, supported by Flask servers and Firebase for secure and synchronized storage.",
            },
          },
          "read-ok": "OK",
        },                
        SmartEMG: {
          sections: {
            tech: {
              title: "Technologies",
              content:
                "The project combines Android with Jetpack Compose for the interface, Flask for AI model integration (YOLOv8 and our custom neural network), and PyTorch for model training and classification tasks.",
            },
            purpose: {
              title: "Purpose",
              content:
                "To aid people with motor disabilities by detecting hand movements through EMG signal analysis and real-time object detection.",
            },
            how: {
              title: "How it works",
              content:
                "Signals are captured and processed using custom AI models and YOLOv8, while an Android app provides an interface for real-time visualization and interaction. Flask acts as the middleware for communication between the application and the AI models.",
            },
          },
          "read-ok": "OK",
        },
      },
    },
    // skills section translation
    skills: {
      title: "Skills",
      ai: "Artificial Intelligence",
      mobile: "Mobile Development",
      web: "Web Development",
      softSkills: "Soft Skills",
      db: "Databases",
      popups: {
        ai: {
          title: "Artificial Intelligence",
          tensorflow: "TensorFlow",
          pytorch: "PyTorch",
        },
        mobile: {
          title: "Mobile Development",
          android: "Android",
          androidViews: "Android Views",
          jetpackCompose: "Jetpack Compose",
          ios: "iOS",
          swiftUI: "SwiftUI",
          uikit: "UIKit",
          multiplatform: "Multiplatform",
          reactNative: "React Native",
          flutter: "Flutter",
        },
        web: {
          title: "Web Development",
          native: "Native",
          htmlCss: "HTML & CSS",
          javascript: "JavaScript",
          frameworks: "Frameworks",
          react: "React",
          nodejs: "Node.js",
        },
        softSkills: {
          title: "Soft Skills",
          xp: "Extreme Programming",
          kanban: "Kanban",
        },
        db: {
          title: "Databases",
          sql: "SQL",
          mysql: "MySQL",
          sqlite: "SQLite",
          nosql: "NOSQL",
          firebase: "Firebase",
          mongodb: "MongoDB",
        },
      },
    },
    // contact section translation
    contact: {
      title: "Contact",
      intro: "I'm Luis Alfredo, and you can find me on",
      nickname: "You can find me as @mexboxluis.",
      thankYou: "Thank you for visiting my portfolio! I look forward to your message.",
      madeWith: "Site made with",
      exit: "Exit"
    }
  },
};

let currentLanguage = "en"; 

document.addEventListener("DOMContentLoaded", () => {
  //* header
  const nameElement = document.getElementById("name");
  const dropdownDescriptionElement = document.getElementById(
    "dropdown-description"
  );
  const navLinks = document.querySelectorAll(".nav-link");
  const languageSwitchButton = document.getElementById("language-switch");

  //* about
  const aboutTitleElement = document.getElementById("about-title");
  const aboutDescriptionElement = document.getElementById("about-description");
  const downloadCvElement = document.getElementById("download-cv-text");
  const copyEmailButton = document.getElementsByClassName("copy-email");
  const downloadCVLink = document.getElementById("download-cv");
  //* education
  const educationTitleElement = document.getElementById("education-title");
  const ipnNameElement = document.getElementById("ipn-name");
  const ipnLocationElement = document.getElementById("ipn-location");
  const ipnDatesElement = document.getElementById("ipn-dates");
  const ipnProgramElement = document.getElementById("ipn-program");
  const ipnDescriptionElement = document.getElementById("ipn-description");
  const qmulNameElement = document.getElementById("qmul-name");
  const qmulLocationElement = document.getElementById("qmul-location");
  const qmulDatesElement = document.getElementById("qmul-dates");
  const qmulProgramElement = document.getElementById("qmul-program");
  const qmulDescriptionElement = document.getElementById("qmul-description");

  //* portfolio
  const portfolioTitleElement = document.getElementById("portfolio-title");
//   const projectCards = document.querySelectorAll(".project-card");
  const pitGithubLink = document.getElementById("pit-github-link");
  const pitPreviewLink = document.getElementById("pit-preview-link");
  const pitAboutButton = document.getElementById("pit-about-button");
  const pitTitleElement = document.getElementById("pit-title");
  const pitDescriptionElement = document.getElementById("pit-description");

  const smartCropsGithubLink = document.getElementById("smartcrops-github-link");
  const smartCropsPreviewLink = document.getElementById("smartcrops-preview-link");
  const smartCropsAboutButton = document.getElementById("smartcrops-about-button");
  const smartCropsTitleElement = document.getElementById("smartcrops-title");
  const smartCropsDescriptionElement = document.getElementById("smartcrops-description");
  const smartCropsTechTitleElement = document.getElementById("smartcrops-tech-title");
  const smartCropsTechContentElement = document.getElementById("smartcrops-tech-content");
  const smartCropsPurposeTitleElement = document.getElementById("smartcrops-purpose-title");
  const smartCropsPurposeContentElement = document.getElementById("smartcrops-purpose-content");
  const smartCropsHowTitleElement = document.getElementById("smartcrops-how-title");
  const smartCropsHowContentElement = document.getElementById("smartcrops-how-content");
  const smartCropsReadOkButton = document.getElementById("smartcrops-read-ok");




  const lexfyGithubLink = document.getElementById("lexfy-github-link");
  const lexfyPreviewLink = document.getElementById("lexfy-preview-link");
  const lexfyAboutButton = document.getElementById("lexfy-about-button");
  const lexfyTitleElement = document.getElementById("lexfy-title");
  const lexfyDescriptionElement = document.getElementById("lexfy-description");

  const smartemgGithubLink = document.getElementById("smartemg-github-link");
  const smartemgPreviewLink = document.getElementById("smartemg-preview-link");
  const smartemgAboutButton = document.getElementById("smartemg-about-button");
  const smartemgTitleElement = document.getElementById("smartemg-title");
  const smartemgDescriptionElement = document.getElementById(
    "smartemg-description"
  );

  const pitTechTitleElement = document.getElementById("pit-tech-title");
  const pitTechContentElement = document.getElementById("pit-tech-content");
  const pitPurposeTitleElement = document.getElementById("pit-purpose-title");
  const pitPurposeContentElement = document.getElementById(
    "pit-purpose-content"
  );
  const pitHowTitleElement = document.getElementById("pit-how-title");
  const pitHowContentElement = document.getElementById("pit-how-content");
  const pitReadOkButton = document.getElementById("pit-read-ok");

  const lexfyTechTitleElement = document.getElementById("lexfy-tech-title");
  const lexfyTechContentElement = document.getElementById("lexfy-tech-content");
  const lexfyPurposeTitleElement = document.getElementById(
    "lexfy-purpose-title"
  );
  const lexfyPurposeContentElement = document.getElementById(
    "lexfy-purpose-content"
  );
  const lexfyHowTitleElement = document.getElementById("lexfy-how-title");
  const lexfyHowContentElement = document.getElementById("lexfy-how-content");
  const lexfyReadOkButton = document.getElementById("lexfy-read-ok");

  const smartemgTechTitleElement = document.getElementById(
    "smartemg-tech-title"
  );
  const smartemgTechContentElement = document.getElementById(
    "smartemg-tech-content"
  );
  const smartemgPurposeTitleElement = document.getElementById(
    "smartemg-purpose-title"
  );
  const smartemgPurposeContentElement = document.getElementById(
    "smartemg-purpose-content"
  );
  const smartemgHowTitleElement = document.getElementById("smartemg-how-title");
  const smartemgHowContentElement = document.getElementById(
    "smartemg-how-content"
  );
  const smartemgReadOkButton = document.getElementById("smartemg-read-ok");

  //* skills
  const skillsTitleElement = document.getElementById("skills-title");


  const aiCategoryTitleElement = document.getElementById("ai-category-title");
  const mobileCategoryTitleElement = document.getElementById(
    "mobile-category-title"
  );
  const webCategoryTitleElement = document.getElementById("web-category-title");
  const softSkillsCategoryTitleElement = document.getElementById(
    "soft-skills-category-title"
  );
  const dbCategoryTitleElement = document.getElementById("db-category-title");

  const aiPopupTitleElement = document.getElementById("ai-popup-title");
  const tensorflowLabelElement = document.getElementById("tensorflow-label");
  const pytorchLabelElement = document.getElementById("pytorch-label");

  const mobilePopupTitleElement = document.getElementById("mobile-popup-title");
  const androidTitleElement = document.getElementById("android-title");
  const androidViewsLabelElement = document.getElementById(
    "android-views-label"
  );
  const jetpackComposeLabelElement = document.getElementById(
    "jetpack-compose-label"
  );
  const iosTitleElement = document.getElementById("ios-title");
  const swiftUILabelElement = document.getElementById("swift-ui-label");
  const uikitLabelElement = document.getElementById("uikit-label");
  const multiplatformTitleElement = document.getElementById(
    "multiplatform-title"
  );
  const reactNativeLabelElement = document.getElementById("react-native-label");
  const flutterLabelElement = document.getElementById("flutter-label");

  const webPopupTitleElement = document.getElementById("web-popup-title");
  const nativeTitleElement = document.getElementById("native-title");
  const htmlCssLabelElement = document.getElementById("html-css-label");
  const javascriptLabelElement = document.getElementById("javascript-label");
  const frameworksTitleElement = document.getElementById("frameworks-title");
  const reactLabelElement = document.getElementById("react-label");
  const nodejsLabelElement = document.getElementById("nodejs-label");

  const softSkillsPopupTitleElement = document.getElementById(
    "soft-skills-popup-title"
  );
  const xpLabelElement = document.getElementById("xp-label");
  const kanbanLabelElement = document.getElementById("kanban-label");

  const dbPopupTitleElement = document.getElementById("db-popup-title");
  const sqlTitleElement = document.getElementById("sql-title");
  const mysqlLabelElement = document.getElementById("mysql-label");
  const sqliteLabelElement = document.getElementById("sqlite-label");
  const nosqlTitleElement = document.getElementById("nosql-title");
  const firebaseLabelElement = document.getElementById("firebase-label");
  const mongodbLabelElement = document.getElementById("mongodb-label");

  //* contact
  const contactTitleElement = document.getElementById("contact-title");
  const contactIntroMessageElement = document.getElementById("contact-intro-message");
  const contactNicknameElement = document.getElementById("contact-nickname");
  const contactThankYouElement = document.getElementById("contact-thank-you");
  const contactMadeWithElement = document.getElementById("contact-made-with");
  const exitContactButton = document.getElementById("exit-contact");


  function detectSystemLanguage() {
    const systemLang = navigator.language || navigator.userLanguage; 
    if (systemLang.startsWith("es")) {
      return "es";
    }
    if (systemLang.startsWith("en")) {
      return "en";
    }
    return "en"; 
  }


  function loadTranslations(lang) {
    const langData = translations[lang];

    if (langData) {
      // ? header
      if (nameElement) {
        nameElement.innerHTML = langData.name;
      }
      if (dropdownDescriptionElement) {
        dropdownDescriptionElement.textContent = langData.description;
      }

      navLinks.forEach((link) => {
        const section = link.getAttribute("href").substring(1);
        if (langData.nav[section]) {
          link.textContent = langData.nav[section];
          link.setAttribute("id", `nav-${section}`);
        }
      });

      if (languageSwitchButton) {
        languageSwitchButton.textContent = lang === "es" ? "[🇲🇽]" : "[🇺🇸]";
      }

      // ? about
      if (aboutTitleElement) {
        aboutTitleElement.textContent = langData.about.title;
      }

      if (downloadCVLink) {
        if (lang === "es") {
          downloadCVLink.href = "assets/LuisCV_ES.pdf";
        } else {
          downloadCVLink.href = "assets/LuisCV_EN.pdf";
        }
      }
      
      if (aboutDescriptionElement) {
        aboutDescriptionElement.textContent = langData.about.description;
      }
      if (downloadCvElement) {
        downloadCvElement.textContent = langData.about["download-cv"];
      }
      if (copyEmailButton.length > 0) {
        for (let i = 0; i < copyEmailButton.length; i++) {
            copyEmailButton[i].textContent = langData.about["copy-email"];
        }
      }

      // ? education
      if (educationTitleElement) {
        educationTitleElement.textContent = langData.education.title;
      }
      if (ipnNameElement) {
        ipnNameElement.textContent = langData.education.ipn.name;
      }
      if (ipnLocationElement) {
        ipnLocationElement.textContent = langData.education.ipn.location;
      }
      if (ipnDatesElement) {
        ipnDatesElement.textContent = langData.education.ipn.dates;
      }
      if (ipnProgramElement) {
        ipnProgramElement.textContent = langData.education.ipn.program;
      }
      if (ipnDescriptionElement) {
        ipnDescriptionElement.textContent = langData.education.ipn.description;
      }
      if (qmulNameElement) {
        qmulNameElement.textContent = langData.education.qmul.name;
      }
      if (qmulLocationElement) {
        qmulLocationElement.textContent = langData.education.qmul.location;
      }
      if (qmulDatesElement) {
        qmulDatesElement.textContent = langData.education.qmul.dates;
      }
      if (qmulProgramElement) {
        qmulProgramElement.textContent = langData.education.qmul.program;
      }
      if (qmulDescriptionElement) {
        qmulDescriptionElement.textContent =
          langData.education.qmul.description;
      }

      // ? portfolio
      if (portfolioTitleElement) {
        portfolioTitleElement.textContent = langData.portfolio.sectionTitle;
      }

      if (pitGithubLink) {
        pitGithubLink.querySelector("img").alt =
          langData.portfolio.projects.PIT.buttons.github;
      }
      if (pitPreviewLink) {
        pitPreviewLink.querySelector("img").alt =
          langData.portfolio.projects.PIT.buttons.preview;
      }
      if (pitAboutButton) {
        pitAboutButton.textContent =
          langData.portfolio.projects.PIT.buttons.about;
      }
      if (pitTitleElement) {
        pitTitleElement.textContent = langData.portfolio.projects.PIT.title;
      }
      if (pitDescriptionElement) {
        pitDescriptionElement.textContent =
          langData.portfolio.projects.PIT.description;
      }
      if (smartCropsGithubLink) {
        smartCropsGithubLink.querySelector("img").alt =
          langData.portfolio.projects.SmartCrops.buttons.github;
      }
      if (smartCropsPreviewLink) {
        smartCropsPreviewLink.querySelector("img").alt =
          langData.portfolio.projects.SmartCrops.buttons.preview;
      }
      if (smartCropsAboutButton) {
        smartCropsAboutButton.textContent =
          langData.portfolio.projects.SmartCrops.buttons.about;
      }
      if (smartCropsTitleElement) {
        smartCropsTitleElement.textContent =
          langData.portfolio.projects.SmartCrops.title;
      }
      if (smartCropsDescriptionElement) {
        smartCropsDescriptionElement.textContent =
          langData.portfolio.projects.SmartCrops.description;
      }
      if (smartCropsTechTitleElement) {
        smartCropsTechTitleElement.textContent =
          langData.portfolio.popups.SmartCrops.sections.tech.title;
      }
      if (smartCropsTechContentElement) {
        smartCropsTechContentElement.textContent =
          langData.portfolio.popups.SmartCrops.sections.tech.content;
      }
      if (smartCropsPurposeTitleElement) {
        smartCropsPurposeTitleElement.textContent =
          langData.portfolio.popups.SmartCrops.sections.purpose.title;
      }
      if (smartCropsPurposeContentElement) {
        smartCropsPurposeContentElement.textContent =
          langData.portfolio.popups.SmartCrops.sections.purpose.content;
      }
      if (smartCropsHowTitleElement) {
        smartCropsHowTitleElement.textContent =
          langData.portfolio.popups.SmartCrops.sections.how.title;
      }
      if (smartCropsHowContentElement) {
        smartCropsHowContentElement.textContent =
          langData.portfolio.popups.SmartCrops.sections.how.content;
      }
      if (smartCropsReadOkButton) {
        smartCropsReadOkButton.textContent = langData.portfolio.popups.SmartCrops["read-ok"];
      }

      if (lexfyGithubLink) {
        lexfyGithubLink.querySelector("img").alt =
          langData.portfolio.projects.LEXFY.buttons.github;
      }
      if (lexfyPreviewLink) {
        lexfyPreviewLink.querySelector("img").alt =
          langData.portfolio.projects.LEXFY.buttons.preview;
      }
      if (lexfyAboutButton) {
        lexfyAboutButton.textContent =
          langData.portfolio.projects.LEXFY.buttons.about;
      }
      if (lexfyTitleElement) {
        lexfyTitleElement.textContent = langData.portfolio.projects.LEXFY.title;
      }
      if (lexfyDescriptionElement) {
        lexfyDescriptionElement.textContent =
          langData.portfolio.projects.LEXFY.description;
      }

      if (smartemgGithubLink) {
        smartemgGithubLink.querySelector("img").alt =
          langData.portfolio.projects.SmartEMG.buttons.github;
      }
      if (smartemgPreviewLink) {
        smartemgPreviewLink.querySelector("img").alt =
          langData.portfolio.projects.SmartEMG.buttons.preview;
      }
      if (smartemgAboutButton) {
        smartemgAboutButton.textContent =
          langData.portfolio.projects.SmartEMG.buttons.about;
      }
      if (smartemgTitleElement) {
        smartemgTitleElement.textContent =
          langData.portfolio.projects.SmartEMG.title;
      }
      if (smartemgDescriptionElement) {
        smartemgDescriptionElement.textContent =
          langData.portfolio.projects.SmartEMG.description;
      }

      if (pitTechTitleElement) {
        pitTechTitleElement.textContent =
          langData.portfolio.popups.PIT.sections.tech.title;
      }
      if (pitTechContentElement) {
        pitTechContentElement.textContent =
          langData.portfolio.popups.PIT.sections.tech.content;
      }
      if (pitPurposeTitleElement) {
        pitPurposeTitleElement.textContent =
          langData.portfolio.popups.PIT.sections.purpose.title;
      }
      if (pitPurposeContentElement) {
        pitPurposeContentElement.textContent =
          langData.portfolio.popups.PIT.sections.purpose.content;
      }
      if (pitHowTitleElement) {
        pitHowTitleElement.textContent =
          langData.portfolio.popups.PIT.sections.how.title;
      }
      if (pitHowContentElement) {
        pitHowContentElement.textContent =
          langData.portfolio.popups.PIT.sections.how.content;
      }
      if (pitReadOkButton) {
        pitReadOkButton.textContent = langData.portfolio.popups.PIT["read-ok"];
      }

      if (lexfyTechTitleElement) {
        lexfyTechTitleElement.textContent =
          langData.portfolio.popups.LEXFY.sections.tech.title;
      }
      if (lexfyTechContentElement) {
        lexfyTechContentElement.textContent =
          langData.portfolio.popups.LEXFY.sections.tech.content;
      }
      if (lexfyPurposeTitleElement) {
        lexfyPurposeTitleElement.textContent =
          langData.portfolio.popups.LEXFY.sections.purpose.title;
      }
      if (lexfyPurposeContentElement) {
        lexfyPurposeContentElement.textContent =
          langData.portfolio.popups.LEXFY.sections.purpose.content;
      }
      if (lexfyHowTitleElement) {
        lexfyHowTitleElement.textContent =
          langData.portfolio.popups.LEXFY.sections.how.title;
      }
      if (lexfyHowContentElement) {
        lexfyHowContentElement.textContent =
          langData.portfolio.popups.LEXFY.sections.how.content;
      }
      if (lexfyReadOkButton) {
        lexfyReadOkButton.textContent =
          langData.portfolio.popups.LEXFY["read-ok"];
      }

      if (smartemgTechTitleElement) {
        smartemgTechTitleElement.textContent =
          langData.portfolio.popups.SmartEMG.sections.tech.title;
      }
      if (smartemgTechContentElement) {
        smartemgTechContentElement.textContent =
          langData.portfolio.popups.SmartEMG.sections.tech.content;
      }
      if (smartemgPurposeTitleElement) {
        smartemgPurposeTitleElement.textContent =
          langData.portfolio.popups.SmartEMG.sections.purpose.title;
      }
      if (smartemgPurposeContentElement) {
        smartemgPurposeContentElement.textContent =
          langData.portfolio.popups.SmartEMG.sections.purpose.content;
      }
      if (smartemgHowTitleElement) {
        smartemgHowTitleElement.textContent =
          langData.portfolio.popups.SmartEMG.sections.how.title;
      }
      if (smartemgHowContentElement) {
        smartemgHowContentElement.textContent =
          langData.portfolio.popups.SmartEMG.sections.how.content;
      }
      if (smartemgReadOkButton) {
        smartemgReadOkButton.textContent =
          langData.portfolio.popups.SmartEMG["read-ok"];
      }
      // ? skills
      if (skillsTitleElement) {
        skillsTitleElement.textContent = langData.skills.title;
      }
      if (aiCategoryTitleElement) {
        aiCategoryTitleElement.textContent = langData.skills.ai;
      }
      if (mobileCategoryTitleElement) {
        mobileCategoryTitleElement.textContent = langData.skills.mobile;
      }
      if (webCategoryTitleElement) {
        webCategoryTitleElement.textContent = langData.skills.web;
      }
      if (softSkillsCategoryTitleElement) {
        softSkillsCategoryTitleElement.textContent = langData.skills.softSkills;
      }
      if (dbCategoryTitleElement) {
        dbCategoryTitleElement.textContent = langData.skills.db;
      }
      if (aiPopupTitleElement)
        aiPopupTitleElement.textContent = langData.skills.popups.ai.title;
      if (tensorflowLabelElement)
        tensorflowLabelElement.textContent =
          langData.skills.popups.ai.tensorflow;
      if (pytorchLabelElement)
        pytorchLabelElement.textContent = langData.skills.popups.ai.pytorch;

      if (mobilePopupTitleElement)
        mobilePopupTitleElement.textContent =
          langData.skills.popups.mobile.title;
      if (androidTitleElement)
        androidTitleElement.textContent = langData.skills.popups.mobile.android;
      if (androidViewsLabelElement)
        androidViewsLabelElement.textContent =
          langData.skills.popups.mobile.androidViews;
      if (jetpackComposeLabelElement)
        jetpackComposeLabelElement.textContent =
          langData.skills.popups.mobile.jetpackCompose;
      if (iosTitleElement)
        iosTitleElement.textContent = langData.skills.popups.mobile.ios;
      if (swiftUILabelElement)
        swiftUILabelElement.textContent = langData.skills.popups.mobile.swiftUI;
      if (uikitLabelElement)
        uikitLabelElement.textContent = langData.skills.popups.mobile.uikit;
      if (multiplatformTitleElement)
        multiplatformTitleElement.textContent =
          langData.skills.popups.mobile.multiplatform;
      if (reactNativeLabelElement)
        reactNativeLabelElement.textContent =
          langData.skills.popups.mobile.reactNative;
      if (flutterLabelElement)
        flutterLabelElement.textContent = langData.skills.popups.mobile.flutter;

      if (webPopupTitleElement)
        webPopupTitleElement.textContent = langData.skills.popups.web.title;
      if (nativeTitleElement)
        nativeTitleElement.textContent = langData.skills.popups.web.native;
      if (htmlCssLabelElement)
        htmlCssLabelElement.textContent = langData.skills.popups.web.htmlCss;
      if (javascriptLabelElement)
        javascriptLabelElement.textContent =
          langData.skills.popups.web.javascript;
      if (frameworksTitleElement)
        frameworksTitleElement.textContent =
          langData.skills.popups.web.frameworks;
      if (reactLabelElement)
        reactLabelElement.textContent = langData.skills.popups.web.react;
      if (nodejsLabelElement)
        nodejsLabelElement.textContent = langData.skills.popups.web.nodejs;

      if (softSkillsPopupTitleElement)
        softSkillsPopupTitleElement.textContent =
          langData.skills.popups.softSkills.title;
      if (xpLabelElement)
        xpLabelElement.textContent = langData.skills.popups.softSkills.xp;
      if (kanbanLabelElement)
        kanbanLabelElement.textContent =
          langData.skills.popups.softSkills.kanban;

      if (dbPopupTitleElement)
        dbPopupTitleElement.textContent = langData.skills.popups.db.title;
      if (sqlTitleElement)
        sqlTitleElement.textContent = langData.skills.popups.db.sql;
      if (mysqlLabelElement)
        mysqlLabelElement.textContent = langData.skills.popups.db.mysql;
      if (sqliteLabelElement)
        sqliteLabelElement.textContent = langData.skills.popups.db.sqlite;
      if (nosqlTitleElement)
        nosqlTitleElement.textContent = langData.skills.popups.db.nosql;
      if (firebaseLabelElement)
        firebaseLabelElement.textContent = langData.skills.popups.db.firebase;
      if (mongodbLabelElement)
        mongodbLabelElement.textContent = langData.skills.popups.db.mongodb;

      // ? contact
      if (contactTitleElement) {
        contactTitleElement.textContent = langData.contact.title;
      }
      if (contactIntroMessageElement) {
        contactIntroMessageElement.textContent = langData.contact.intro;
      }
      if (contactNicknameElement) {
        contactNicknameElement.textContent = langData.contact.nickname;
      }
      if (contactThankYouElement) {
        contactThankYouElement.textContent = langData.contact.thankYou;
      }
      if (contactMadeWithElement) {
        contactMadeWithElement.textContent = langData.contact.madeWith;
      }
      if (exitContactButton) {
        exitContactButton.textContent = langData.contact.exit;
      }

      localStorage.setItem("preferredLanguage", lang);
    } else {
      console.error(`No se encontraron traducciones para el idioma: ${lang}`);
    }
  }


  currentLanguage =
    localStorage.getItem("preferredLanguage") || detectSystemLanguage();
  loadTranslations(currentLanguage);

  if (languageSwitchButton) {
    languageSwitchButton.addEventListener("click", () => {
      currentLanguage = currentLanguage === "es" ? "en" : "es";
      loadTranslations(currentLanguage);
    });
  }
});

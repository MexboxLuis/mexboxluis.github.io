const DB = {
  EN: {
    global: {
      name: "Luis Alfredo Cuamatzi Flores",
      role: "AI Engineer / Software Developer",
      email: "mexboxluis1@gmail.com",
      nav: {
        about: "About",
        education: "Education",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact"
      },
      labels: {
        madeWith: "Made with",
        showMore: "Show All Projects",
        showLess: "Show Less",
        techLbl: "Technologies",
        purpLbl: "Purpose",
        howLbl: "How it works",
        readMore: "Read More",
        darkMode: "Dark Mode",
        language: "Language",
        backToTop: "Back to top",
        highlightsLbl: "Key Highlights",
        repoLbl: "Open Repository",
        expandDesc: "Show more",
        collapseDesc: "Show less"
      },
      rights: ""
    },
    socials: [
      { label: "GitHub", href: "https://github.com/MexboxLuis", icon: "github", user: "@MexboxLuis" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mexboxluis", icon: "linkedin", user: "@MexboxLuis" },
      { label: "Email", href: "mailto:mexboxluis1@gmail.com", icon: "mail", user: "mexboxluis1@gmail.com" }
    ],
    hero: {
      title: ["Software &", "AI Engineering"],
      desc: "AI Engineer and Software Developer with experience in mobile applications, backend services, and AI model integration. I have worked on real-world projects combining Android, APIs, automation, data processing, and product-oriented interfaces.",
      cvBtn: "Download Resume",
      cvLink: "assets/docs/resume_en.pdf"
    },
    education: {
      title: "Education",
      desc: "My academic background",
      items: [
        {
          title: "Artificial Intelligence Engineering",
          inst: "Instituto Politécnico Nacional",
          loc: "Tlaxcala, Mexico",
          period: "Aug 2021 – Jan 2026",
          desc: "Focused on artificial intelligence, algorithms, computer vision, natural language processing, software development, and AI model integration in real applications.",
          icon: "graduation-cap"
        },
        {
          title: "Leadership Formation Program",
          inst: "Queen Mary University of London",
          loc: "London, UK",
          period: "Aug 2024",
          desc: "Interdisciplinary program focused on leadership, business, and technology proposals.",
          icon: "globe"
        }
      ]
    },
    projects: {
      title: "Projects",
      desc: "Selected projects and technical work",
      items: [
        {
          title: "Lexfy",
          desc: "Android application with OCR and image generation capabilities via a chat interface.",
          tech: ["Kotlin", "Jetpack Compose", "Flask", "Firebase", "Transformers"],
          img: "assets/img/projects/lexfy.png",
          github: "https://github.com/MexboxLuis/Lexfy",
          featured: true,
          date: "2024-12",
          details: {
            tech: "Built with Kotlin and Jetpack Compose for the UI, Python/Flask backend, EasyOCR and GOT-OCR2_0 for text extraction, and Together AI (FLUX.1-schnell) for image generation.",
            purp: "Extract text from physical documents using OCR and generate images from text prompts, all from a single app.",
            how: "The Android client sends requests via HTTP to a local Python/Flask backend that runs the AI models. User data is stored in Firebase."
          }
        },
        {
          title: "SmartEMG Vision",
          desc: "Prototype app combining EMG signal classification and YOLOv8 object detection for assistive interaction.",
          tech: ["Kotlin", "Jetpack Compose", "TensorFlow", "YOLOv8", "Flask"],
          img: "assets/img/projects/smartemg.png",
          github: "https://github.com/MexboxLuis/SmartEMG-Vision",
          featured: true,
          date: "2024-11",
          details: {
            tech: "Android client built with Jetpack Compose and CameraX, communicating with local Python servers running Ultralytics YOLOv8 and TensorFlow/Keras models.",
            purp: "Combine EMG gesture classification with object detection so the app can suggest actions based on what the user is looking at.",
            how: "Sends camera frames and simulated EMG commands via HTTP to local Python backends, rendering bounding boxes and contextual UI actions based on predictions."
          }
        },
        {
          title: "SmartCrops",
          desc: "Mobile app prototype for greenhouse monitoring, crop simulation, and a Gemini-based chatbot.",
          tech: ["Kotlin", "Jetpack Compose", "Gemini API", "CameraX"],
          img: "assets/img/projects/smartcrops.png",
          github: "https://github.com/MexboxLuis/SmartCrops",
          featured: true,
          date: "2024-08",
          details: {
            tech: "Built with Jetpack Compose, CameraX for hardware pairing via QR, OkHttp for Gemini API requests, and Coil for image loading.",
            purp: "To monitor crop conditions, simulate greenhouse variables, and provide crop-related assistance through an AI chatbot (TomaBot).",
            how: "Simulates hardware integration through crop connection states and sensor views, utilizing a single-activity architecture."
          }
        },
        {
          title: "Kuromi Adventure",
          desc: "2D/3D Unity runner game with player movement, level progression, and boss encounters.",
          tech: ["Unity", "C#", "Android"],
          img: "assets/img/projects/kuromi.png",
          github: "https://github.com/MexboxLuis/Kuromi-Adventure",
          featured: false,
          date: "2026-01",
          details: {
            tech: "Developed in Unity 2022 (LTS) using C# for scripting, with touch controls implemented for mobile support.",
            purp: "A runner-style game where the player navigates through obstacles and levels to reunite with a partner.",
            how: "Features 3 progressive levels with increasing difficulty, boss encounters in later stages, and interactive elements for player movement and obstacle avoidance."
          }
        },
        {
          title: "ABC Optimizer",
          desc: "Python implementation of the Artificial Bee Colony algorithm for non-linear optimization.",
          tech: ["Python", "NumPy"],
          img: "assets/img/projects/abc_optimizer.png",
          github: "https://github.com/MexboxLuis/Artificial-Bee-Colony",
          featured: false,
          date: "2025-01",
          details: {
            tech: "Written in Python with an OOP design. Uses NumPy for matrix operations and boundary corrections.",
            purp: "Solve constrained non-linear optimization problems using the Artificial Bee Colony algorithm.",
            how: "Simulates employed, onlooker, and scout bee phases. Uses Deb's feasibility rules to handle constraints and search for the global optimum."
          }
        },
        {
          title: "PulseReader",
          desc: "React Native app for fetching, formatting, and displaying RSS feeds.",
          tech: ["React Native", "TypeScript", "Redux", "Expo"],
          img: "assets/img/projects/pulsereader.png",
          github: "https://github.com/MexboxLuis/PulseReader",
          featured: false,
          date: "2024-06",
          details: {
            tech: "Cross-platform mobile application built with React Native, Expo SDK 55, TypeScript, and Redux Toolkit for state management.",
            purp: "A mobile RSS reader to browse feeds, read summaries, and open full articles from official sources like INEGI.",
            how: "Fetches XML data, normalizes non-standard tags, parses RSS content, and utilizes an in-app WebView to open articles directly."
          }
        },
        {
          title: "CommuniSync",
          desc: "Android community platform for reporting local issues, participating in polls and forums, and browsing local services.",
          tech: ["Android", "Jetpack Compose", "Android XML", "Firebase"],
          img: "assets/img/projects/communisync.png",
          github: "https://github.com/MexboxLuis/CommuniSync",
          featured: false,
          date: "2024-05",
          details: {
            tech: "Built with Kotlin, Jetpack Compose, Android XML, Firebase Authentication, and Firestore for real-time synchronization.",
            purp: "A platform for users to report local issues, vote in polls, join forum discussions, and explore local services.",
            how: "Uses Firebase for authentication and real-time data storage, including reports, polls, forum content, and service directory management."
          }
        },
        {
          title: "WaveRecorder",
          desc: "Android app for audio recording, playback speed filters, and local/cloud storage.",
          tech: ["Kotlin", "Jetpack Compose", "Firebase"],
          img: "assets/img/projects/waverecorder.png",
          github: "https://github.com/MexboxLuis/WaveRecorder",
          featured: false,
          date: "2024-04",
          details: {
            tech: "Built with Jetpack Compose, Android Media APIs (MediaRecorder, MediaPlayer, MediaMetadataRetriever), and Firebase Storage.",
            purp: "To record voice notes, adjust playback speed, and manage an audio history library across local and cloud environments.",
            how: "Supports saving audio on the device or uploading it to Firebase Storage. Includes playback filters (2.0x, 0.5x) and a history drawer."
          }
        },
        {
          title: "EduStream API",
          desc: "Web-based educational content management platform for uploading, categorizing, and streaming educational video content.",
          tech: ["Node.js", "Express", "MySQL", "Handlebars"],
          img: "assets/img/projects/edustream.png",
          github: "https://github.com/MexboxLuis/EduStreamAPI",
          featured: false,
          date: "2023-06",
          details: {
            tech: "Backend built with Node.js, Express, and Multer for file uploads. Uses MySQL for metadata and Handlebars/Bootstrap for dynamic views.",
            purp: "A web platform where teachers upload videos by subject and students can browse and stream educational content.",
            how: "Follows an MVC architecture to manage physical multimedia uploads on the server, synchronizing file deletions with database updates."
          }
        }
      ]
    },
    experience: {
      title: "Experience",
      desc: "Selected technical implementations and project breakdowns",
      categories: [
        {
          icon: "graduation-cap",
          title: "TutorTrack | PIT IPN",
          gradient: "grad-purple",
          role: "Android Developer",
          period: "Oct 2024 – Aug 2025",
          summary: "Native Android app for the Institutional Tutoring Program at IPN. Digitizes attendance tracking, from schedule creation to CSV report generation.",
          highlights: [
            "QR Attendance: Scan student credentials with real-time validation, duplicate detection, and active session control.",
            "Scheduling Engine: Creates weekly schedules with overlap detection for classrooms and tutors.",
            "Role Management: Three tiers (Admin, Peer Tutor, Advisor) with separate dashboards and permission controls.",
            "Device Policy: Enforces automatic time and valid Mexican timezone to prevent fraud.",
            "Offline Sync: Firestore offline cache allows attendance data to sync after connectivity is restored."
          ],
          skills: ["Kotlin", "Jetpack Compose", "Material 3", "Firebase Auth", "Firestore", "Firebase Storage", "ZXing", "MVVM"],
          github: "https://github.com/MexboxLuis/TutorTrack-IPN"
        },
        {
          icon: "shirt",
          title: "L4L | 3D Garment Reconstruction for Virtual Try-On",
          gradient: "grad-blue",
          role: "AI & Backend Engineer",
          period: "Jan 2025 – Dec 2025",
          summary: "Graduation R&D project focused on 3D garment reconstruction for Virtual Try-On. Designed a distributed client-server pipeline connecting an Android app, AI inference services, physical cloth simulation, and GLB model delivery.",
          highlights: [
            "Client-Server Architecture: Integrated an Android app built with Jetpack Compose, a Linux inference server, and a Windows server for physical cloth simulation and FBX-to-GLB conversion.",
            "FastAPI Orchestrator: Built a Python backend to coordinate image capture, avatar generation and confirmation, garment reconstruction, physical simulation, and GLB model delivery.",
            "Body Estimation Model: Integrated a single-image 2D body pose and shape estimation model (SMPLer-X), adapting its output for compatibility with the simulation pipeline.",
            "Garment Reconstruction Model: Adapted a two-level Transformer model for sewing pattern reconstruction from 2D garment images (Sewformer).",
            "Model Compression: Evaluated pruning, PTQ, and QAT variants using geometric and connectivity metrics.",
            "Performance Result: Compressed the final model with a 5.43x compression ratio and a 38.75% latency reduction, reaching 32.26 MB and 165.63 ms CPU inference time."
          ],
          skills: [
            "Artificial Intelligence",
            "Computer Vision",
            "3D Reconstruction",
            "Model Compression",
            "Transformers",
            "PyTorch",
            "FastAPI",
            "Python",
            "Kotlin",
            "Jetpack Compose",
            "SMPLer-X",
            "Sewformer",
            "PTQ",
            "QAT",
            "Pruning",
            "Maya/Qualoth",
            "Firebase",
            "OkHttp"
          ],
          github: null
        },
        {
          icon: "briefcase",
          title: "B2B Telecom Platforms | N2A",
          gradient: "grad-green",
          role: "Software & AI Developer",
          period: "Jun 2025 – Present",
          summary: "Full-stack and AI development for telecom and CRM platforms, including web calling tools, WhatsApp integration, and call analysis features. Collaborated in an agile team using Jira and GitHub.",
          highlights: [
            "Call Analysis Backend: Built a FastAPI service integrated with AWS SageMaker for sentiment analysis and automated PDF summaries from call transcripts.",
            "WhatsApp CRM Integration: Developed a responsive messaging client over WebSockets with multimedia support, real-time notifications, and agent transfers.",
            "Embedded Calling Module: Built a floating calling component that can be integrated into external systems.",
            "Admin Dashboards: Implemented CRUD operations, role-based access control, audit logging, and financial reporting modules.",
            "Agile Workflow: Participated in proposals, UI/UX redesigns, and task tracking with Kanban boards."
          ],
          skills: ["FastAPI", "WebSockets", "Python", "PHP", "JavaScript", "AWS SageMaker", "REST APIs", "CRM", "Role-Based Access Control", "Figma", "Jira", "GitHub"],
          github: null
        }
      ]
    },
    contact: {
      title: "Contact",
      sub: "Open to professional opportunities and technical collaborations.",
      desc: "Feel free to reach out for opportunities related to software development, mobile applications, backend, or applied AI."
    }
  },
  ES: {
    global: {
      name: "Luis Alfredo Cuamatzi Flores",
      role: "Ingeniero en Inteligencia Artificial / Desarrollador de Software",
      email: "mexboxluis1@gmail.com",
      nav: {
        about: "Sobre mí",
        education: "Educación",
        projects: "Proyectos",
        experience: "Experiencia",
        contact: "Contacto"
      },
      labels: {
        madeWith: "Hecho con",
        showMore: "Ver todos los proyectos",
        showLess: "Ver menos",
        techLbl: "Tecnologías",
        purpLbl: "Propósito",
        howLbl: "Cómo funciona",
        readMore: "Leer más",
        darkMode: "Modo oscuro",
        language: "Idioma",
        backToTop: "Volver arriba",
        highlightsLbl: "Puntos destacados",
        repoLbl: "Abrir repositorio",
        expandDesc: "Ver más",
        collapseDesc: "Ver menos"
      },
      rights: ""
    },
    socials: [
      { label: "GitHub", href: "https://github.com/MexboxLuis", icon: "github", user: "@MexboxLuis" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/mexboxluis", icon: "linkedin", user: "@MexboxLuis" },
      { label: "Email", href: "mailto:mexboxluis1@gmail.com", icon: "mail", user: "mexboxluis1@gmail.com" }
    ],
    hero: {
      title: ["Software e", "Inteligencia Artificial"],
      desc: "Ingeniero en Inteligencia Artificial y desarrollador de software con experiencia en aplicaciones móviles, servicios backend e integración de modelos de IA. He trabajado en proyectos reales combinando Android, APIs, automatización, procesamiento de datos e interfaces orientadas a producto.",
      cvBtn: "Descargar CV",
      cvLink: "assets/docs/resume_es.pdf"
    },
    education: {
      title: "Educación",
      desc: "Mi formación académica",
      items: [
        {
          title: "Ingeniería en Inteligencia Artificial",
          inst: "Instituto Politécnico Nacional",
          loc: "Tlaxcala, México",
          period: "Ago 2021 – Ene 2026",
          desc: "Enfocado en inteligencia artificial, algoritmos, visión artificial, procesamiento de lenguaje natural, desarrollo de software e integración de modelos de IA en aplicaciones reales.",
          icon: "graduation-cap"
        },
        {
          title: "Programa de Formación de Líderes",
          inst: "Queen Mary University of London",
          loc: "Londres, Reino Unido",
          period: "Ago 2024",
          desc: "Programa interdisciplinario enfocado en liderazgo, negocios y propuestas tecnológicas.",
          icon: "globe"
        }
      ]
    },
    projects: {
      title: "Proyectos",
      desc: "Proyectos seleccionados y trabajo técnico",
      items: [
        {
          title: "Lexfy",
          desc: "Aplicación Android con OCR y generación de imágenes a través de una interfaz de chat.",
          tech: ["Kotlin", "Jetpack Compose", "Flask", "Firebase", "Transformers"],
          img: "assets/img/projects/lexfy.png",
          github: "https://github.com/MexboxLuis/Lexfy",
          featured: true,
          date: "2024-12",
          details: {
            tech: "Construida con Kotlin y Jetpack Compose para la UI, backend en Python/Flask, EasyOCR y GOT-OCR2_0 para extracción de texto, y Together AI para generación de imágenes.",
            purp: "Extraer texto de documentos físicos con OCR y generar imágenes a partir de prompts, todo desde una sola app.",
            how: "El cliente Android envía peticiones HTTP a un backend local en Python/Flask que ejecuta los modelos de IA. Los datos del usuario se guardan en Firebase."
          }
        },
        {
          title: "SmartEMG Vision",
          desc: "Prototipo que combina clasificación de señales EMG y detección de objetos con YOLOv8 para interacción asistida.",
          tech: ["Kotlin", "Jetpack Compose", "TensorFlow", "YOLOv8", "Flask"],
          img: "assets/img/projects/smartemg.png",
          github: "https://github.com/MexboxLuis/SmartEMG-Vision",
          featured: true,
          date: "2024-11",
          details: {
            tech: "Cliente Android con Jetpack Compose y CameraX, que se comunica con servidores locales en Python ejecutando modelos Ultralytics YOLOv8 y TensorFlow/Keras.",
            purp: "Combinar clasificación de gestos EMG con detección de objetos para que la app sugiera acciones según lo que el usuario ve.",
            how: "Envía fotogramas de la cámara y comandos EMG simulados vía HTTP a los backends, renderizando cajas delimitadoras y acciones de UI contextuales."
          }
        },
        {
          title: "SmartCrops",
          desc: "Prototipo de app móvil para monitoreo de invernaderos, simulación de cultivos y un chatbot basado en Gemini.",
          tech: ["Kotlin", "Jetpack Compose", "Gemini API", "CameraX"],
          img: "assets/img/projects/smartcrops.png",
          github: "https://github.com/MexboxLuis/SmartCrops",
          featured: true,
          date: "2024-08",
          details: {
            tech: "Construida con Jetpack Compose, CameraX para emparejamiento de hardware, OkHttp para peticiones a la API de Gemini, y Coil.",
            purp: "Monitorear condiciones de cultivos, simular variables de invernadero y proveer asistencia a través del chatbot de IA (TomaBot).",
            how: "Simula la integración de hardware a través de estados de conexión y vistas de sensores, utilizando una arquitectura de actividad única."
          }
        },
        {
          title: "Kuromi Adventure",
          desc: "Juego runner 2D/3D en Unity con movimiento de jugador, progresión de niveles y encuentros con jefes.",
          tech: ["Unity", "C#", "Android"],
          img: "assets/img/projects/kuromi.png",
          github: "https://github.com/MexboxLuis/Kuromi-Adventure",
          featured: false,
          date: "2026-01",
          details: {
            tech: "Desarrollado en Unity 2022 (LTS) usando C# para scripting, con controles táctiles implementados para soporte móvil.",
            purp: "Un juego estilo runner donde el jugador esquiva obstáculos y atraviesa niveles para reunirse con su compañero.",
            how: "Presenta 3 niveles progresivos con dificultad creciente, encuentros con jefes en etapas posteriores y elementos interactivos."
          }
        },
        {
          title: "ABC Optimizer",
          desc: "Implementación en Python del algoritmo de la Colonia Artificial de Abejas para optimización no lineal.",
          tech: ["Python", "NumPy"],
          img: "assets/img/projects/abc_optimizer.png",
          github: "https://github.com/MexboxLuis/Artificial-Bee-Colony",
          featured: false,
          date: "2025-01",
          details: {
            tech: "Escrito en Python con diseño orientado a objetos. Usa NumPy para operaciones matriciales y correcciones de límites.",
            purp: "Resolver problemas de optimización no lineal con restricciones usando el algoritmo de la Colonia Artificial de Abejas.",
            how: "Simula las fases de abejas empleadas, observadoras y exploradoras. Usa las reglas de factibilidad de Deb para manejar restricciones y buscar el óptimo global."
          }
        },
        {
          title: "PulseReader",
          desc: "App React Native para obtener, formatear y mostrar feeds RSS.",
          tech: ["React Native", "TypeScript", "Redux", "Expo"],
          img: "assets/img/projects/pulsereader.png",
          github: "https://github.com/MexboxLuis/PulseReader",
          featured: false,
          date: "2024-06",
          details: {
            tech: "Aplicación móvil multiplataforma construida con React Native, Expo SDK 55, TypeScript y Redux Toolkit.",
            purp: "Un lector RSS móvil para explorar feeds, leer resúmenes y abrir artículos completos de fuentes oficiales como INEGI.",
            how: "Obtiene datos XML, normaliza etiquetas, analiza contenido RSS y utiliza un WebView integrado para abrir artículos directamente."
          }
        },
        {
          title: "CommuniSync",
          desc: "Plataforma comunitaria Android para reportar problemas locales, participar en encuestas y foros, y consultar servicios cercanos.",
          tech: ["Android", "Jetpack Compose", "Android XML", "Firebase"],
          img: "assets/img/projects/communisync.png",
          github: "https://github.com/MexboxLuis/CommuniSync",
          featured: false,
          date: "2024-05",
          details: {
            tech: "Construida con Kotlin, Jetpack Compose, Android XML, Firebase Authentication y Firestore para sincronización en tiempo real.",
            purp: "Una plataforma para que los usuarios reporten problemas locales, voten en encuestas, participen en foros y exploren servicios locales.",
            how: "Utiliza Firebase para autenticación y almacenamiento de datos en tiempo real, incluyendo reportes, encuestas, contenido de foros y directorio de servicios."
          }
        },
        {
          title: "WaveRecorder",
          desc: "App de Android para grabación de audio, filtros de velocidad de reproducción y almacenamiento local/nube.",
          tech: ["Kotlin", "Jetpack Compose", "Firebase"],
          img: "assets/img/projects/waverecorder.png",
          github: "https://github.com/MexboxLuis/WaveRecorder",
          featured: false,
          date: "2024-04",
          details: {
            tech: "Construida con Jetpack Compose, APIs multimedia de Android y Firebase Storage.",
            purp: "Grabar notas de voz, ajustar la velocidad de reproducción y gestionar un historial de audio local y en la nube.",
            how: "Permite guardar el audio en el dispositivo o subirlo a Firebase. Incluye filtros de reproducción (2.0x, 0.5x) y un panel de historial."
          }
        },
        {
          title: "EduStream API",
          desc: "Plataforma web de gestión de contenidos educativos para subir, categorizar y transmitir contenido de video educativo.",
          tech: ["Node.js", "Express", "MySQL", "Handlebars"],
          img: "assets/img/projects/edustream.png",
          github: "https://github.com/MexboxLuis/EduStreamAPI",
          featured: false,
          date: "2023-06",
          details: {
            tech: "Backend en Node.js, Express y Multer. Utiliza MySQL para metadatos y Handlebars/Bootstrap para vistas dinámicas.",
            purp: "Una plataforma web donde los profesores suben videos por materia y los alumnos pueden explorar y reproducir contenido educativo.",
            how: "Sigue una arquitectura MVC para gestionar subidas multimedia en el servidor, sincronizando borrados de archivos con la base de datos."
          }
        }
      ]
    },
    experience: {
      title: "Experiencia",
      desc: "Implementaciones técnicas seleccionadas y desglose de proyectos",
      categories: [
        {
          icon: "graduation-cap",
          title: "TutorTrack | PIT IPN",
          gradient: "grad-purple",
          role: "Desarrollador Android",
          period: "Oct 2024 – Ago 2025",
          summary: "App nativa Android para el Programa Institucional de Tutorías del IPN. Digitaliza el control de asistencia, desde la creación de horarios hasta la exportación en CSV.",
          highlights: [
            "Asistencia por QR: Escaneo de credenciales con validación en tiempo real, detección de duplicados y control de sesiones activas.",
            "Motor de horarios: Crea horarios semanales con detección de traslapes para aulas y tutores.",
            "Gestión de roles: Tres niveles (Admin, Tutor Par, Asesor) con paneles separados y control de permisos.",
            "Política de dispositivo: Requiere zona horaria válida de México y hora automática para prevenir fraudes.",
            "Sincronización offline: El caché de Firestore permite guardar la asistencia y sincronizarla al recuperar la conexión."
          ],
          skills: ["Kotlin", "Jetpack Compose", "Material 3", "Firebase Auth", "Firestore", "Firebase Storage", "ZXing", "MVVM"],
          github: "https://github.com/MexboxLuis/TutorTrack-IPN"
        },
        {
          icon: "shirt",
          title: "L4L | Reconstrucción 3D de Prendas de Vestir para Virtual Try-On",
          gradient: "grad-blue",
          role: "Ingeniero Backend e IA",
          period: "Ene 2025 – Dic 2025",
          summary: "Proyecto de titulación e I+D enfocado en reconstrucción 3D de prendas para Virtual Try-On. Diseño de un pipeline cliente-servidor que conecta una app Android, servicios de inferencia de IA, simulación física de tela y entrega de modelos GLB.",
          highlights: [
            "Arquitectura cliente-servidor: Integración de una app Android construida con Jetpack Compose, un servidor Linux de inferencia y un servidor Windows para simulación física de tela y conversión FBX a GLB.",
            "Orquestador FastAPI: Construcción de un backend en Python para coordinar captura de imagen, generación y confirmación de avatar, reconstrucción de prendas, simulación física y entrega de modelos GLB.",
            "Modelo de estimación corporal: Integración de un modelo de estimación de pose y forma corporal desde una sola imagen 2D (SMPLer-X), adaptando su salida para compatibilidad con el pipeline de simulación.",
            "Modelo de reconstrucción de prendas: Adaptación de un modelo Transformer de dos niveles para reconstrucción de patrones de costura desde imágenes 2D de prendas (Sewformer).",
            "Compresión de modelos: Evaluación de variantes con poda, PTQ y QAT usando métricas geométricas y de conectividad.",
            "Resultado de rendimiento: Compresión del modelo final con una razón de compresión de 5.43x y reducción de latencia de 38.75%, alcanzando 32.26 MB y 165.63 ms de inferencia en CPU."
          ],
          skills: [
            "Inteligencia Artificial",
            "Visión por Computadora",
            "Reconstrucción 3D",
            "Compresión de Modelos",
            "Transformers",
            "PyTorch",
            "FastAPI",
            "Python",
            "Kotlin",
            "Jetpack Compose",
            "SMPLer-X",
            "Sewformer",
            "PTQ",
            "QAT",
            "Poda",
            "Maya/Qualoth",
            "Firebase",
            "OkHttp"
          ],
          github: null
        },
        {
          icon: "briefcase",
          title: "Plataformas B2B Telecom | N2A",
          gradient: "grad-green",
          role: "Desarrollador de Software e IA",
          period: "Jun 2025 – Presente",
          summary: "Desarrollo full-stack y de IA para plataformas de telecomunicaciones y CRM, incluyendo herramientas de llamadas web, integración con WhatsApp y funciones de análisis de llamadas. Trabajo colaborativo en un equipo ágil con Jira y GitHub.",
          highlights: [
            "Backend de análisis de llamadas: Construcción de un servicio en FastAPI integrado con AWS SageMaker para análisis de sentimientos y generación automática de resúmenes en PDF a partir de transcripciones.",
            "Integración CRM para WhatsApp: Desarrollo de un cliente de mensajería responsivo sobre WebSockets, con soporte multimedia, notificaciones en tiempo real y transferencias entre agentes.",
            "Módulo de llamadas embebido: Desarrollo de un componente flotante de llamadas integrable en sistemas externos.",
            "Paneles administrativos: Implementación de operaciones CRUD, control de acceso por roles, auditoría y módulos de reportes financieros.",
            "Flujo ágil de trabajo: Participación en propuestas, rediseños de UI/UX y seguimiento de tareas con tableros Kanban."
          ],
          skills: ["FastAPI", "WebSockets", "Python", "PHP", "JavaScript", "AWS SageMaker", "APIs REST", "CRM", "Control de Acceso por Roles", "Figma", "Jira", "GitHub"],
          github: null
        }
      ]
    },
    contact: {
      title: "Contacto",
      sub: "Disponible para oportunidades profesionales y colaboraciones técnicas.",
      desc: "Puedes contactarme para oportunidades relacionadas con desarrollo de software, aplicaciones móviles, backend o IA aplicada."
    }
  }
};

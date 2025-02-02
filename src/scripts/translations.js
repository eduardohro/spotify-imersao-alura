function toggleDropdown() {
    const dropdown = document.getElementById("languageDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

const translations = {
    "Português do Brasil": {
        home: "Início",
        search: "Buscar",
        library: "Sua biblioteca",
        createPlaylist: "Criar playlist",
        createFirstPlaylist: "Crie sua primeira playlist",
        easyHelp: "É fácil, vamos te ajudar.",
        welcome: "Boas vindas",
        browseSections: "Navegar por todas as seções",
        subscribe: "Inscreva-se",
        login: "Entrar",
        freePremium: "Testar o Premium de graça",
        freePremiumSubtitle: "Inscreva-se para curtir música ilimitada e podcasts só com alguns anúncios. Não precisa de cartão de crédito.",
        freeSignup: "Inscreva-se grátis",
        cardTitles: [
            "Boas festas",
            "Feitos para você",
            "Lançamentos",
            "Creators",
            "Para treinar",
            "Podcasts",
            "Sertanejo",
            "Samba e pagode",
            "Funk",
            "MPB",
            "Rock",
            "Hip Hop",
            "Indie",
            "Relax",
            "Música Latina"
        ],
    },
    English: {
        home: "Home",
        search: "Search",
        library: "Your Library",
        createPlaylist: "Create Playlist",
        createFirstPlaylist: "Create your first playlist",
        easyHelp: "It's easy, let's help you.",
        welcome: "Welcome",
        browseSections: "Browse all sections",
        subscribe: "Subscribe",
        login: "Login",
        freePremium: "Try Premium for free",
        freePremiumSubtitle: "Sign up to enjoy unlimited music and podcasts with only a few ads. No credit card required.",
        freeSignup: "Sign up free",
        cardTitles: [
            "Happy Holidays",
            "Made for You",
            "New Releases",
            "Creators",
            "For Training",
            "Podcasts",
            "Country Music",
            "Samba and Pagode",
            "Funk",
            "Brazilian Pop",
            "Rock",
            "Hip Hop",
            "Indie",
            "Relax",
            "Latin Music"
        ],
    },
    Español: {
        home: "Inicio",
        search: "Buscar",
        library: "Tu Biblioteca",
        createPlaylist: "Crear Playlist",
        createFirstPlaylist: "Crea tu primera playlist",
        easyHelp: "Es fácil, déjanos ayudarte.",
        welcome: "Bienvenido",
        browseSections: "Explora todas las secciones",
        subscribe: "Suscribirse",
        login: "Iniciar sesión",
        freePremium: "Prueba Premium gratis",
        freePremiumSubtitle: "Regístrate para disfrutar de música y podcasts ilimitados con solo algunos anuncios. No se requiere tarjeta de crédito.",
        freeSignup: "Regístrate gratis",
        cardTitles: [
            "Felices Fiestas",
            "Hecho para ti",
            "Nuevos Lanzamientos",
            "Creadores",
            "Para Entrenar",
            "Podcasts",
            "Música Country",
            "Samba y Pagode",
            "Funk",
            "Música Brasileña",
            "Rock",
            "Hip Hop",
            "Indie",
            "Relajarse",
            "Música Latina"
        ],
    },
    Français: {
        home: "Accueil",
        search: "Rechercher",
        library: "Votre bibliothèque",
        createPlaylist: "Créer une playlist",
        createFirstPlaylist: "Créez votre première playlist",
        easyHelp: "C'est facile, laissez-nous vous aider.",
        welcome: "Bienvenue",
        browseSections: "Parcourir toutes les sections",
        subscribe: "S'abonner",
        login: "Connexion",
        freePremium: "Essayez Premium gratuitement",
        freePremiumSubtitle: "Inscrivez-vous pour profiter de musique et de podcasts illimités avec seulement quelques publicités. Aucune carte de crédit requise.",
        freeSignup: "Inscrivez-vous gratuitement",
        cardTitles: [
            "Joyeuses fêtes",
            "Fait pour vous",
            "Nouveautés",
            "Créateurs",
            "Pour s'entraîner",
            "Podcasts",
            "Musique country",
            "Samba et pagode",
            "Funk",
            "Pop brésilienne",
            "Rock",
            "Hip Hop",
            "Indie",
            "Relaxation",
            "Musique latine"
        ],
    },
    Deutsch: {
        home: "Startseite",
        search: "Suchen",
        library: "Deine Bibliothek",
        createPlaylist: "Playlist erstellen",
        createFirstPlaylist: "Erstelle deine erste Playlist",
        easyHelp: "Es ist einfach, lass uns dir helfen.",
        welcome: "Willkommen",
        browseSections: "Alle Kategorien durchsuchen",
        subscribe: "Abonnieren",
        login: "Anmelden",
        freePremium: "Teste Premium kostenlos",
        freePremiumSubtitle: "Melde dich an, um unbegrenzte Musik und Podcasts mit nur wenigen Anzeigen zu genießen. Keine Kreditkarte erforderlich.",
        freeSignup: "Kostenlos anmelden",
        cardTitles: [
            "Frohe Feiertage",
            "Für dich gemacht",
            "Neuerscheinungen",
            "Ersteller",
            "Zum Trainieren",
            "Podcasts",
            "Country-Musik",
            "Samba und Pagode",
            "Funk",
            "Brasilianische Popmusik",
            "Rock",
            "Hip Hop",
            "Indie",
            "Entspannen",
            "Lateinamerikanische Musik"
        ],
    },
};

function changeLanguage(language) {
    document.getElementById("language-name").textContent = language;

    // Atualiza os textos principais.
    document.querySelector(".fa-home + span").textContent = translations[language].home;
    document.querySelector(".fa-search + span").textContent = translations[language].search;
    document.querySelector(".fa-book + span").textContent = translations[language].library;
    document.querySelector(".section-playlist__button span").textContent = translations[language].createPlaylist;
    document.querySelector(".section-playlist__content .title").textContent = translations[language].createFirstPlaylist;
    document.querySelector(".section-playlist__content .subtitle").textContent = translations[language].easyHelp;
    document.getElementById("greeting").textContent = translations[language].welcome;
    document.querySelector(".session").textContent = translations[language].browseSections;
    document.querySelector(".subscribe").textContent = translations[language].subscribe;
    document.querySelector(".login").textContent = translations[language].login;
    document.querySelector(".disclaimer-premium__title").textContent = translations[language].freePremium;
    document.querySelector(".disclaimer-premium__subtitle").textContent = translations[language].freePremiumSubtitle;

    // Atualiza o botão no rodapé.
    document.querySelector(".footer-button").textContent = translations[language].freeSignup;

    // Atualiza os textos dos cards.
    const cardElements = document.querySelectorAll(".cards span");
    const cardTitles = translations[language].cardTitles;

    cardElements.forEach((card, index) => {
        if (cardTitles[index]) {
            card.textContent = cardTitles[index];
        }
    });

    // Fecha o dropdown após a seleção.
    document.getElementById("languageDropdown").style.display = "none";
    
    console.log("Idioma selecionado:", language);
}

document.addEventListener("click", function (event) {
    const dropdown = document.getElementById("languageDropdown");
    const button = document.querySelector(".languages__button");

    if (!button.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = "none";
    }
});

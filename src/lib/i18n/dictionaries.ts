import type { Dictionary, Locale } from "./types";

export const dictionaries: Record<Locale, Dictionary> = {
  es: {
    nav: {
      howItWorks: "Cómo funciona",
      pricing: "Planes",
      start: "Empezar",
      assistant: "Asistente",
      menu: "Menú",
    },
    hero: {
      title: "Tu planta necesita ayuda. BotanicHelp te orienta.",
      subtitle:
        "Sube una foto y recibe consejos claros sobre riego, luz, plagas y carencias. Ideal para huerto, balcón, frutas, verduras y plantas de interior en Europa.",
      ctaPrimary: "Empezar gratis",
      ctaSecondary: "Probar el asistente",
      badge: "IA para el cuidado de plantas",
      imageAlts: [
        "Tomates maduros en la planta",
        "Verduras frescas del huerto",
        "Frutas de temporada",
      ],
    },
    howItWorks: {
      title: "Cómo funciona",
      subtitle: "Tres pasos sencillos para cuidar mejor tus plantas",
      steps: [
        {
          title: "1. Sube una foto",
          description:
            "Captura tu tomatera, lechuga, limonero o cualquier planta de interior o exterior.",
        },
        {
          title: "2. Describe el problema",
          description:
            "Hojas amarillas, manchas, plagas, crecimiento lento… cuéntanos qué observas.",
        },
        {
          title: "3. Recibe orientación clara",
          description:
            "Consejos prácticos de riego, luz, nutrientes y prevención, fáciles de aplicar.",
        },
      ],
    },
    features: {
      title: "Para todo tipo de cultivos",
      subtitle:
        "Frutas, verduras, huerto urbano, balcón y plantas de interior en climas europeos",
      imageAlt: "Huerto con verduras y plantas",
      tags: ["Tomates", "Lechugas", "Hierbas", "Cítricos"],
      items: [
        {
          title: "Riego y humedad",
          description:
            "Saber cuándo regar y cuánto, según especie, maceta y estación del año.",
        },
        {
          title: "Luz y ubicación",
          description:
            "Orientación de balcón, invernadero o ventana: sol, sombra y protección.",
        },
        {
          title: "Plagas y carencias",
          description:
            "Identifica señales comunes y actúa a tiempo con remedios seguros.",
        },
        {
          title: "Huerto y balcón",
          description:
            "Tomates, pimientos, hierbas aromáticas, cítricos y mucho más.",
        },
      ],
    },
    pricing: {
      title: "Planes sencillos",
      subtitle: "Empieza gratis y crece cuando lo necesites",
      perMonth: "/mes",
      free: "Gratis",
      popular: "Más popular",
      cta: "Elegir plan",
      plans: [
        {
          name: "Gratis",
          price: "0 €",
          description: "Para empezar a cuidar tus plantas",
          features: [
            "3 análisis de fotos al mes",
            "Consejos básicos de riego y luz",
            "Guía de plantas populares",
            "Soporte por email",
          ],
        },
        {
          name: "Huerto",
          price: "9,99 €",
          description: "Para aficionados con varias plantas",
          features: [
            "30 análisis de fotos al mes",
            "Diagnóstico de plagas y carencias",
            "Historial de tus plantas",
            "Consejos por estación en Europa",
            "Soporte prioritario",
          ],
          highlighted: true,
        },
        {
          name: "Ilimitado",
          price: "19,99 €",
          description: "Para huertos y colecciones amplias",
          features: [
            "Análisis de fotos ilimitados",
            "Chat de IA sin límites",
            "Planes de cultivo personalizados",
            "Alertas de riego y temporada",
            "Soporte prioritario 24/7",
          ],
        },
      ],
    },
    cta: {
      title: "¿Listo para que tus plantas prosperen?",
      subtitle:
        "Regístrate en segundos y recibe tu primera orientación gratuita.",
      button: "Crear cuenta gratis",
    },
    assistant: {
      title: "Asistente BotanicHelp",
      subtitle:
        "Pregunta sobre riego, luz, plagas o carencias. También puedes subir una foto de tu planta.",
      uploadTitle: "Foto de tu planta",
      uploadHint: "JPG, PNG o WEBP · se comprime en el navegador",
      uploadButton: "Subir foto",
      chatTitle: "Chat de plantas",
      chatPlaceholder: "Ej.: Hojas de tomate con manchas amarillas…",
      chatSend: "Enviar",
      chatWelcome:
        "¡Hola! Soy el asistente de BotanicHelp. Puedo orientarte con frutas, verduras, huerto, balcón y plantas de interior: riego, luz, plagas y carencias. ¿Qué le pasa a tu planta?",
      comingSoon: "La IA no está conectada todavía. Añade XAI_API_KEY en .env.local.",
      clearChat: "Vaciar chat",
      removePhoto: "Quitar foto",
      typing: "Pensando…",
      apiReady: "IA lista",
      apiMissing: "IA sin clave",
      apiChecking: "Comprobando IA…",
      usageMessages: "Mensajes hoy",
      usagePhotos: "Fotos este mes",
      unlimited: "Ilimitado",
      planLabel: "Plan",
      planFree: "Gratis",
      planHuerto: "Huerto 9,99 €",
      planUnlimited: "Ilimitado 19,99 €",
      limitMessages: "Has agotado los mensajes de hoy de tu plan. Mejora de plan o vuelve mañana.",
      limitPhotos: "Has agotado los análisis de foto de este mes en tu plan.",
      limitPhotosPerMsg: "Tu plan no permite tantas fotos en un solo mensaje.",
      errorGeneric: "No pude completar la respuesta. ¿Lo intentamos de nuevo?",
      errorImage: "No se pudo procesar la imagen.",
      quickPrompts: [
        "¿Cada cuánto regar tomates en balcón?",
        "Hojas amarillas: ¿falta de riego o de nutrientes?",
        "¿Cuánta luz necesita un limonero en maceta?",
        "Tengo pulgón en pimientos: ¿qué hago?",
      ],
      topicsHint: "Riego · Luz · Plagas · Carencias · Huerto · Balcón",
      disclaimer:
        "Información orientativa. Tú eres responsable del cuidado de tus plantas.",
    },
    footer: {
      tagline: "Ayuda con IA para el cuidado de plantas en Europa",
      disclaimer:
        "Información orientativa. El usuario es responsable del cuidado de sus plantas.",
      rights: "Todos los derechos reservados.",
      links: {
        privacy: "Privacidad",
        terms: "Términos",
        contact: "Contacto",
      },
    },
    language: {
      label: "Idioma",
      es: "Español",
      de: "Deutsch",
      en: "English",
    },
    auth: {
      login: "Entrar",
      logout: "Salir",
      loginTitle: "Iniciar sesión",
      loginSubtitle: "Accede a tu cuenta de BotanicHelp",
      signupTitle: "Crear cuenta",
      signupSubtitle: "Regístrate gratis en segundos",
      email: "Email",
      password: "Contraseña",
      loginButton: "Entrar",
      signupButton: "Registrarme",
      magicButton: "Enviar enlace mágico",
      loading: "Un momento…",
      or: "o",
      noAccount: "¿No tienes cuenta?",
      hasAccount: "¿Ya tienes cuenta?",
      goSignup: "Regístrate",
      goLogin: "Inicia sesión",
      showPassword: "Ver",
      hidePassword: "Ocultar",
      emailRequired: "Introduce tu email para el enlace mágico.",
      magicSent: "Enlace enviado. Abre el email para entrar.",
      signupCheckEmail:
        "Cuenta creada. Si hace falta confirmar el email, revisa tu bandeja y luego inicia sesión.",
      errorGeneric: "Error de autenticación",
      errorCallback: "No se pudo completar el acceso. Prueba de nuevo.",
      supabaseMissingTitle: "Supabase no configurado",
      supabaseMissingBody:
        "Falta NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY en .env.local",
    },
  },
  de: {
    nav: {
      howItWorks: "So funktioniert's",
      pricing: "Preise",
      start: "Loslegen",
      assistant: "Assistent",
      menu: "Menü",
    },
    hero: {
      title: "Deine Pflanze braucht Hilfe. BotanicHelp zeigt den Weg.",
      subtitle:
        "Lade ein Foto hoch und erhalte klare Tipps zu Gießen, Licht, Schädlingen und Nährstoffmängeln. Ideal für Garten, Balkon, Obst, Gemüse und Zimmerpflanzen in Europa.",
      ctaPrimary: "Kostenlos starten",
      ctaSecondary: "Assistent ausprobieren",
      badge: "KI für die Pflanzenpflege",
      imageAlts: [
        "Reife Tomaten an der Pflanze",
        "Frisches Gemüse aus dem Garten",
        "Saisonales Obst",
      ],
    },
    howItWorks: {
      title: "So funktioniert's",
      subtitle: "Drei einfache Schritte zu gesünderen Pflanzen",
      steps: [
        {
          title: "1. Foto hochladen",
          description:
            "Fotografiere Tomaten, Salat, Zitronenbäume oder jede Zimmer- und Freilandpflanze.",
        },
        {
          title: "2. Problem beschreiben",
          description:
            "Gelbe Blätter, Flecken, Schädlinge, schwaches Wachstum — sag uns, was du siehst.",
        },
        {
          title: "3. Klare Tipps erhalten",
          description:
            "Praktische Hinweise zu Wasser, Licht, Nährstoffen und Vorbeugung — leicht umsetzbar.",
        },
      ],
    },
    features: {
      title: "Für alle Arten von Kulturen",
      subtitle:
        "Obst, Gemüse, Stadtgarten, Balkon und Zimmerpflanzen im europäischen Klima",
      imageAlt: "Garten mit Gemüse und Pflanzen",
      tags: ["Tomaten", "Salat", "Kräuter", "Zitrus"],
      items: [
        {
          title: "Gießen & Feuchtigkeit",
          description:
            "Wann und wie viel gießen — je nach Art, Topf und Jahreszeit.",
        },
        {
          title: "Licht & Standort",
          description:
            "Balkon, Gewächshaus oder Fenster: Sonne, Schatten und Schutz.",
        },
        {
          title: "Schädlinge & Mängel",
          description:
            "Häufige Anzeichen erkennen und rechtzeitig mit sicheren Maßnahmen handeln.",
        },
        {
          title: "Garten & Balkon",
          description:
            "Tomaten, Paprika, Kräuter, Zitrusfrüchte und vieles mehr.",
        },
      ],
    },
    pricing: {
      title: "Übersichtliche Pläne",
      subtitle: "Kostenlos starten und bei Bedarf mehr nutzen",
      perMonth: "/Monat",
      free: "Kostenlos",
      popular: "Am beliebtesten",
      cta: "Plan wählen",
      plans: [
        {
          name: "Kostenlos",
          price: "0 €",
          description: "Der Einstieg in die Pflanzenpflege",
          features: [
            "3 Fotoanalysen pro Monat",
            "Basis-Tipps zu Gießen und Licht",
            "Leitfaden beliebter Pflanzen",
            "Support per E-Mail",
          ],
        },
        {
          name: "Garten",
          price: "9,99 €",
          description: "Für Hobbygärtner mit mehreren Pflanzen",
          features: [
            "30 Fotoanalysen pro Monat",
            "Diagnose von Schädlingen und Mängeln",
            "Verlauf deiner Pflanzen",
            "Saisontipps für Europa",
            "Priorisierter Support",
          ],
          highlighted: true,
        },
        {
          name: "Unbegrenzt",
          price: "19,99 €",
          description: "Für große Gärten und umfangreiche Sammlungen",
          features: [
            "Unbegrenzte Fotoanalysen",
            "KI-Chat ohne Limit",
            "Persönliche Anbaupläne",
            "Erinnerungen zu Gießen und Saison",
            "Priorisierter Support rund um die Uhr",
          ],
        },
      ],
    },
    cta: {
      title: "Bereit für gesündere Pflanzen?",
      subtitle:
        "In wenigen Sekunden registrieren und die erste Orientierung kostenlos erhalten.",
      button: "Kostenloses Konto anlegen",
    },
    assistant: {
      title: "BotanicHelp-Assistent",
      subtitle:
        "Frag zu Gießen, Licht, Schädlingen oder Mängeln. Du kannst auch ein Foto hochladen.",
      uploadTitle: "Foto deiner Pflanze",
      uploadHint: "JPG, PNG oder WEBP · wird im Browser komprimiert",
      uploadButton: "Foto hochladen",
      chatTitle: "Pflanzen-Chat",
      chatPlaceholder: "z. B.: Tomatenblätter mit gelben Flecken…",
      chatSend: "Senden",
      chatWelcome:
        "Hallo! Ich bin der BotanicHelp-Assistent. Ich helfe bei Obst, Gemüse, Garten, Balkon und Zimmerpflanzen: Gießen, Licht, Schädlinge und Nährstoffmängel. Was ist mit deiner Pflanze los?",
      comingSoon:
        "KI noch nicht verbunden. XAI_API_KEY in .env.local eintragen.",
      clearChat: "Chat leeren",
      removePhoto: "Foto entfernen",
      typing: "Denke nach…",
      apiReady: "KI bereit",
      apiMissing: "KI ohne Schlüssel",
      apiChecking: "KI wird geprüft…",
      usageMessages: "Nachrichten heute",
      usagePhotos: "Fotos diesen Monat",
      unlimited: "Unbegrenzt",
      planLabel: "Plan",
      planFree: "Kostenlos",
      planHuerto: "Garten 9,99 €",
      planUnlimited: "Unbegrenzt 19,99 €",
      limitMessages:
        "Du hast die heutigen Nachrichten deines Plans aufgebraucht. Upgrade oder morgen erneut.",
      limitPhotos:
        "Du hast die Foto-Analysen dieses Monats deines Plans aufgebraucht.",
      limitPhotosPerMsg:
        "Dein Plan erlaubt so viele Fotos pro Nachricht nicht.",
      errorGeneric: "Antwort fehlgeschlagen. Nochmal versuchen?",
      errorImage: "Bild konnte nicht verarbeitet werden.",
      quickPrompts: [
        "Wie oft Tomaten auf dem Balkon gießen?",
        "Gelbe Blätter: Wasser oder Nährstoffe?",
        "Wie viel Licht braucht ein Zitronenbaum im Topf?",
        "Blattläuse an Paprika: was tun?",
      ],
      topicsHint: "Gießen · Licht · Schädlinge · Mängel · Garten · Balkon",
      disclaimer:
        "Orientierende Informationen. Du bist für die Pflege deiner Pflanzen verantwortlich.",
    },
    footer: {
      tagline: "KI-Hilfe für die Pflanzenpflege in Europa",
      disclaimer:
        "Orientierende Informationen. Du bist für die Pflege deiner Pflanzen selbst verantwortlich.",
      rights: "Alle Rechte vorbehalten.",
      links: {
        privacy: "Datenschutz",
        terms: "AGB",
        contact: "Kontakt",
      },
    },
    language: {
      label: "Sprache",
      es: "Español",
      de: "Deutsch",
      en: "English",
    },
    auth: {
      login: "Anmelden",
      logout: "Abmelden",
      loginTitle: "Anmelden",
      loginSubtitle: "Melde dich bei BotanicHelp an",
      signupTitle: "Konto erstellen",
      signupSubtitle: "In Sekunden kostenlos registrieren",
      email: "E-Mail",
      password: "Passwort",
      loginButton: "Anmelden",
      signupButton: "Registrieren",
      magicButton: "Magic Link senden",
      loading: "Einen Moment…",
      or: "oder",
      noAccount: "Noch kein Konto?",
      hasAccount: "Bereits ein Konto?",
      goSignup: "Registrieren",
      goLogin: "Anmelden",
      showPassword: "Zeigen",
      hidePassword: "Verbergen",
      emailRequired: "E-Mail für den Magic Link eingeben.",
      magicSent: "Link gesendet. Öffne die E-Mail zum Anmelden.",
      signupCheckEmail:
        "Konto erstellt. Falls E-Mail-Bestätigung nötig ist: Posteingang prüfen, dann anmelden.",
      errorGeneric: "Authentifizierungsfehler",
      errorCallback: "Anmeldung fehlgeschlagen. Bitte erneut versuchen.",
      supabaseMissingTitle: "Supabase nicht konfiguriert",
      supabaseMissingBody:
        "NEXT_PUBLIC_SUPABASE_URL oder NEXT_PUBLIC_SUPABASE_ANON_KEY fehlt in .env.local",
    },
  },
  en: {
    nav: {
      howItWorks: "How it works",
      pricing: "Pricing",
      start: "Get started",
      assistant: "Assistant",
      menu: "Menu",
    },
    hero: {
      title: "Your plant needs help. BotanicHelp guides you.",
      subtitle:
        "Upload a photo and get clear advice on watering, light, pests and nutrient issues. Built for gardens, balconies, fruit, vegetables and houseplants across Europe.",
      ctaPrimary: "Start for free",
      ctaSecondary: "Try the assistant",
      badge: "AI plant care support",
      imageAlts: [
        "Ripe tomatoes on the plant",
        "Fresh garden vegetables",
        "Seasonal fruit",
      ],
    },
    howItWorks: {
      title: "How it works",
      subtitle: "Three simple steps to healthier plants",
      steps: [
        {
          title: "1. Upload a photo",
          description:
            "Snap your tomato plant, lettuce, lemon tree or any indoor or outdoor plant.",
        },
        {
          title: "2. Describe the issue",
          description:
            "Yellow leaves, spots, pests, slow growth… tell us what you see.",
        },
        {
          title: "3. Get clear guidance",
          description:
            "Practical tips on watering, light, nutrients and prevention — easy to follow.",
        },
      ],
    },
    features: {
      title: "For every kind of plant",
      subtitle:
        "Fruit, vegetables, urban gardens, balconies and houseplants in European climates",
      imageAlt: "Garden with vegetables and plants",
      tags: ["Tomatoes", "Lettuce", "Herbs", "Citrus"],
      items: [
        {
          title: "Watering & moisture",
          description:
            "Know when and how much to water by species, pot size and season.",
        },
        {
          title: "Light & placement",
          description:
            "Balcony, greenhouse or window: sun, shade and weather protection.",
        },
        {
          title: "Pests & deficiencies",
          description:
            "Spot common warning signs early and act with safer remedies.",
        },
        {
          title: "Garden & balcony",
          description:
            "Tomatoes, peppers, herbs, citrus and much more.",
        },
      ],
    },
    pricing: {
      title: "Simple pricing",
      subtitle: "Start free and upgrade only when you need more",
      perMonth: "/month",
      free: "Free",
      popular: "Most popular",
      cta: "Choose plan",
      plans: [
        {
          name: "Free",
          price: "€0",
          description: "A gentle start to plant care",
          features: [
            "3 photo analyses per month",
            "Basic watering and light tips",
            "Guide to popular plants",
            "Email support",
          ],
        },
        {
          name: "Garden",
          price: "€9.99",
          description: "For hobby growers with several plants",
          features: [
            "30 photo analyses per month",
            "Pest and deficiency diagnosis",
            "Your plant history",
            "Seasonal tips for Europe",
            "Priority support",
          ],
          highlighted: true,
        },
        {
          name: "Unlimited",
          price: "€19.99",
          description: "For larger gardens and collections",
          features: [
            "Unlimited photo analyses",
            "Unlimited AI chat",
            "Personalised growing plans",
            "Watering and season reminders",
            "Priority support around the clock",
          ],
        },
      ],
    },
    cta: {
      title: "Ready for thriving plants?",
      subtitle: "Sign up in seconds and get your first free guidance.",
      button: "Create a free account",
    },
    assistant: {
      title: "BotanicHelp Assistant",
      subtitle:
        "Ask about watering, light, pests or deficiencies. You can also upload a plant photo.",
      uploadTitle: "Photo of your plant",
      uploadHint: "JPG, PNG or WEBP · compressed in the browser",
      uploadButton: "Upload photo",
      chatTitle: "Plant chat",
      chatPlaceholder: "e.g. Tomato leaves with yellow spots…",
      chatSend: "Send",
      chatWelcome:
        "Hi! I'm the BotanicHelp assistant. I help with fruit, vegetables, gardens, balconies and houseplants: watering, light, pests and nutrient issues. What's going on with your plant?",
      comingSoon:
        "AI not connected yet. Add XAI_API_KEY to .env.local.",
      clearChat: "Clear chat",
      removePhoto: "Remove photo",
      typing: "Thinking…",
      apiReady: "AI ready",
      apiMissing: "AI key missing",
      apiChecking: "Checking AI…",
      usageMessages: "Messages today",
      usagePhotos: "Photos this month",
      unlimited: "Unlimited",
      planLabel: "Plan",
      planFree: "Free",
      planHuerto: "Garden €9.99",
      planUnlimited: "Unlimited €19.99",
      limitMessages:
        "You've used today's messages on your plan. Upgrade or try again tomorrow.",
      limitPhotos:
        "You've used this month's photo analyses on your plan.",
      limitPhotosPerMsg:
        "Your plan doesn't allow that many photos in one message.",
      errorGeneric: "Couldn't complete the reply. Try again?",
      errorImage: "Couldn't process the image.",
      quickPrompts: [
        "How often should I water balcony tomatoes?",
        "Yellow leaves: water or nutrients?",
        "How much light does a potted lemon tree need?",
        "Aphids on peppers: what should I do?",
      ],
      topicsHint: "Watering · Light · Pests · Deficiencies · Garden · Balcony",
      disclaimer:
        "Guidance only. You are responsible for the care of your plants.",
    },
    footer: {
      tagline: "AI help for plant care across Europe",
      disclaimer:
        "Guidance only. You are responsible for the care of your plants.",
      rights: "All rights reserved.",
      links: {
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
      },
    },
    language: {
      label: "Language",
      es: "Español",
      de: "Deutsch",
      en: "English",
    },
    auth: {
      login: "Log in",
      logout: "Log out",
      loginTitle: "Log in",
      loginSubtitle: "Access your BotanicHelp account",
      signupTitle: "Create account",
      signupSubtitle: "Sign up free in seconds",
      email: "Email",
      password: "Password",
      loginButton: "Log in",
      signupButton: "Sign up",
      magicButton: "Send magic link",
      loading: "One moment…",
      or: "or",
      noAccount: "No account yet?",
      hasAccount: "Already have an account?",
      goSignup: "Sign up",
      goLogin: "Log in",
      showPassword: "Show",
      hidePassword: "Hide",
      emailRequired: "Enter your email for the magic link.",
      magicSent: "Link sent. Open the email to sign in.",
      signupCheckEmail:
        "Account created. If email confirmation is required, check your inbox, then log in.",
      errorGeneric: "Authentication error",
      errorCallback: "Could not complete sign-in. Please try again.",
      supabaseMissingTitle: "Supabase not configured",
      supabaseMissingBody:
        "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local",
    },
  },
};

export const defaultLocale: Locale = "es";

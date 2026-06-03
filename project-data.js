/**
 * UNIVERS CONSTRUCTION - Project Data
 * Données structurées des projets avec support multilingue
 */

const PROJECTS_DATA = {
  1: {
    id: 1,
    title: {
      fr: "Complexe Commercial Downtown",
      en: "Downtown Commercial Complex",
      ln: "Kompleksi ya Komersi"
    },
    category: {
      fr: "Construction Commerciale",
      en: "Commercial Construction",
      ln: "Kambiti ya Komersi"
    },
    description: {
      fr: "Un complexe commercial de 15 étages combinant boutiques, bureaux et espaces de loisirs. Projet phare de modernisation urbaine en cœur de ville.",
      en: "A 15-story commercial complex combining shops, offices and leisure spaces. Flagship project for urban modernization in the heart of the city.",
      ln: "Kompleksi ya komersi ya bangi 15 ilaka yengo ibuku, maofisi na mapafu ya malezi. Polojeti ya mokonzi ya kobosa ya engumba"
    },
    shortDesc: {
      fr: "Complexe commercial 15 étages",
      en: "15-story commercial complex",
      ln: "Kompleksi ya komersi"
    },
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545269865-cbf461f3eb4a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576528925874-22d08ce32842?w=600&h=400&fit=crop"
    ],
    features: {
      fr: ["15 étages", "Parkings souterrains", "Ascenseurs modernes", "Espaces verts", "Normes écologiques"],
      en: ["15 floors", "Underground parking", "Modern elevators", "Green spaces", "Ecological standards"],
      ln: ["bangi 15", "Palaki ya pansi", "Lifti ya sika", "Mapafu ya palata", "Mienge ya mbele"]
    },
    budget: "$2.5M",
    duration: {
      fr: "24 mois",
      en: "24 months",
      ln: "Eleko 24"
    },
    location: "Kinshasa, RDC",
    client: {
      fr: "Investisseurs Privés",
      en: "Private Investors",
      ln: "Baseki ba Privé"
    },
    status: {
      fr: "Terminé",
      en: "Completed",
      ln: "Kofini"
    }
  },
  2: {
    id: 2,
    title: {
      fr: "Résidence Prestige Plateau",
      en: "Prestige Residence Plateau",
      ln: "Motema ya Prestige"
    },
    category: {
      fr: "Construction Résidentielle",
      en: "Residential Construction",
      ln: "Kambiti ya Motema"
    },
    description: {
      fr: "Immeuble résidentiel de luxe avec 60 appartements haut de gamme, équipements premium et services concierge 24h/24.",
      en: "Luxury residential building with 60 high-end apartments, premium facilities and 24/7 concierge services.",
      ln: "Ndako ya basantisi yengo 60 ya likambi, ikolambu ya liboya, na serbisi ya bosangi 24/24"
    },
    shortDesc: {
      fr: "Immeuble résidentiel 60 appartements",
      en: "Residential building 60 apartments",
      ln: "Ndako ya 60 mo"
    },
    image: "https://images.unsplash.com/photo-1512207736139-c586b29953a5?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1512207736139-c586b29953a5?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1545269865-cbf461f3eb4a?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1515346637789-40444e2b9019?w=600&h=400&fit=crop"
    ],
    features: {
      fr: ["60 appartements", "Piscine chauffée", "Gym 24/7", "Conciergerie", "Sécurité avancée"],
      en: ["60 apartments", "Heated pool", "24/7 gym", "Concierge", "Advanced security"],
      ln: ["mo 60", "Basengo ya chalipo", "Seti ya kimvuka", "Bosangi", "Libanga ya mpata"]
    },
    budget: "$4.2M",
    duration: {
      fr: "30 mois",
      en: "30 months",
      ln: "Eleko 30"
    },
    location: "Gombe, Kinshasa",
    client: {
      fr: "Groupe Immobilier Elite",
      en: "Elite Real Estate Group",
      ln: "Gulu ya Nyumba Elite"
    },
    status: {
      fr: "Terminé",
      en: "Completed",
      ln: "Kofini"
    }
  },
  3: {
    id: 3,
    title: {
      fr: "Hôpital Régional Moderne",
      en: "Modern Regional Hospital",
      ln: "Hopitale ya Lokale"
    },
    category: {
      fr: "Construction Sanitaire",
      en: "Healthcare Construction",
      ln: "Kambiti ya Malela"
    },
    description: {
      fr: "Établissement médical de 200 lits avec bloc opératoire dernier cri, laboratoires et services d'urgence.",
      en: "Medical facility with 200 beds, state-of-the-art operating rooms, laboratories and emergency services.",
      ln: "Ndako ya malela yengo 200 na serbisi ya lopela"
    },
    shortDesc: {
      fr: "Hôpital régional 200 lits",
      en: "Regional hospital 200 beds",
      ln: "Hopitale ya 200"
    },
    image: "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1576091160550-112173f7f869?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576091160394-112173f7f869?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576091160994-112173f7f869?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1576091160444-112173f7f869?w=600&h=400&fit=crop"
    ],
    features: {
      fr: ["200 lits", "4 blocs opératoires", "Urgences 24/7", "Laboratoires modernes", "Normes sanitaires"],
      en: ["200 beds", "4 operating rooms", "24/7 emergency", "Modern labs", "Health standards"],
      ln: ["litele 200", "Nsungu 4 ya lopela", "Lopela 24/24", "Laboratoriya", "Mienge ya malela"]
    },
    budget: "$3.8M",
    duration: {
      fr: "32 mois",
      en: "32 months",
      ln: "Eleko 32"
    },
    location: "Lubumbashi, RDC",
    client: {
      fr: "Ministère de la Santé",
      en: "Ministry of Health",
      ln: "Minisitele ya Malela"
    },
    status: {
      fr: "En cours",
      en: "Ongoing",
      ln: "Mbangu"
    }
  },
  4: {
    id: 4,
    title: {
      fr: "Université Campus Moderne",
      en: "Modern University Campus",
      ln: "Skulu ya Mbongwasini"
    },
    category: {
      fr: "Construction Éducative",
      en: "Educational Construction",
      ln: "Kambiti ya Matendo"
    },
    description: {
      fr: "Campus universitaire complet avec amphithéâtres, bibliothèques, résidences et installations sportives modernes.",
      en: "Complete university campus with amphitheaters, libraries, residences and modern sports facilities.",
      ln: "Kambusi ya skolela yengo matongo, biblioteka, ndako, na mapafu ya likambi"
    },
    shortDesc: {
      fr: "Campus universitaire moderne",
      en: "Modern university campus",
      ln: "Skulu ya sika"
    },
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=600&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-cddf194bbb20?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600&h=400&fit=crop"
    ],
    features: {
      fr: ["5 amphithéâtres", "Bibliothèque centrale", "500 lits résidences", "Terrain de sport", "Cafétéria"],
      en: ["5 amphitheaters", "Central library", "500 bed residences", "Sports field", "Cafeteria"],
      ln: ["matongo 5", "Biblioteka", "ndako 500", "Likambi", "Esitele"]
    },
    budget: "$5.1M",
    duration: {
      fr: "36 mois",
      en: "36 months",
      ln: "Eleko 36"
    },
    location: "Kinshasa, RDC",
    client: {
      fr: "Université Nationale",
      en: "National University",
      ln: "Universiter ya Nkusa"
    },
    status: {
      fr: "En cours",
      en: "Ongoing",
      ln: "Mbangu"
    }
  }
};

/**
 * Obtient les données d'un projet par son ID
 */
function getProjectById(projectId) {
  return PROJECTS_DATA[projectId] || null;
}

/**
 * Obtient tous les projets
 */
function getAllProjects() {
  return Object.values(PROJECTS_DATA);
}

/**
 * Obtient un texte multilingue
 */
function getTranslatedText(textObj, lang = 'fr') {
  return textObj[lang] || textObj['fr'] || '';
}

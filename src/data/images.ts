/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
 * To customize for a new company: replace the URLs below.
 *
 * Recommended dimensions per slot:
 *   hero.background       — 1400×800+ (wide, dark works best with overlay text)
 *   services.*            — 900×600 (landscape, subject-focused)
 *   gallery[]             — 800×800 (square crop)
 *   cta.banner            — 600×420 (portrait/square, shown in right column)
 *   cta.midSection        — 1400×600 (wide, used as background with dark overlay)
 *   about.hero            — 600×750 (portrait, team or company)
 *   about.teamMember      — 300×300 (square, headshot)
 *   whyChooseUs           — 600×auto (portrait or landscape, detail shot)
 *   ideaToResult          — 600×auto (landscape, process/progress shot)
 *   portfolio[]           — 800×600 (landscape, finished project photos)
 *   servicePages.*        — see individual slots below
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  hero: {
    background: ImageSlot;
  };
  services: {
    renoveringOmbyggnad: ImageSlot;
    installationService: ImageSlot;
    specialistarbeteEntreprenad: ImageSlot;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
  servicePages: {
    renoveringOmbyggnad: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    installationService: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
    specialistarbeteEntreprenad: {
      hero: ImageSlot;
      section1: ImageSlot;
      section2: ImageSlot;
    };
  };
}

const images: SiteImages = {
  logo: {
    url: '/logo-transparent.png',
    alt: 'Master Trade & Contracting',
  },

  hero: {
    background: {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920',
      alt: 'Högkvalitativt industri- och hantverksarbete',
    },
  },

  services: {
    renoveringOmbyggnad: {
      url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000',
      alt: 'Professionell renovering och ombyggnad',
    },
    installationService: {
      url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000',
      alt: 'Teknisk installation och industriservice',
    },
    specialistarbeteEntreprenad: {
      url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1000',
      alt: 'Specialistarbete och entreprenaduppdrag',
    },
  },

  gallery: [
    { url: '/portfolio-facade.webp', alt: 'Fasad & Byggnation' },
    { url: '/portfolio-extension.webp', alt: 'Industrimontage & Ombyggnad' },
    { url: '/gallery-deck.webp', alt: 'Precision i trä & snickeri' },
    { url: '/portfolio-roofing.webp', alt: 'Tak & Konstruktion' },
  ],

  cta: {
    banner: {
      url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1400',
      alt: 'Kvalitativt yrkesarbete',
    },
    midSection: {
      url: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1400',
      alt: 'Industri- och entreprenadprojekt',
    },
  },

  about: {
    hero: {
      url: '/logo-transparent.png',
      alt: 'Hantverk & Entreprenad logotyp',
    },
    teamMember: {
      url: '/logo-transparent.png',
      alt: 'Teammedlem',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant hantverk i detalj',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från idé till färdigt resultat',
  },

  portfolio: [
    {
      image: { url: '/portfolio-facade.webp', alt: 'Fasad och stålkonstruktion' },
      title: 'Fasad & Entreprenad',
      category: 'Specialistarbete',
    },
    {
      image: { url: '/portfolio-extension.webp', alt: 'Tillbyggnad & Industriutrymme' },
      title: 'Tillbyggnad & Montage',
      category: 'Ombyggnad',
    },
    {
      image: { url: '/portfolio-roofing.webp', alt: 'Tak & Tätskikt' },
      title: 'Tak & Konstruktion',
      category: 'Installation & Service',
    },
    {
      image: { url: '/gallery-deck.webp', alt: 'Finmekanik & Snickeri' },
      title: 'Precisionssnickeri',
      category: 'Renovering',
    },
  ],

  servicePages: {
    renoveringOmbyggnad: {
      hero: {
        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
        alt: 'Renovering och ombyggnad',
      },
      section1: {
        url: '/portfolio-extension.webp',
        alt: 'Planering och strukturell renovering',
      },
      section2: {
        url: '/gallery-deck.webp',
        alt: 'Färdigställd renovering med precision',
      },
    },
    installationService: {
      hero: {
        url: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
        alt: 'Installation och service',
      },
      section1: {
        url: '/portfolio-roofing.webp',
        alt: 'Teknisk montageservice och översyn',
      },
      section2: {
        url: '/why-choose-us.webp',
        alt: 'Driftsäkra installationer',
      },
    },
    specialistarbeteEntreprenad: {
      hero: {
        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200',
        alt: 'Specialistarbete och entreprenad',
      },
      section1: {
        url: '/portfolio-facade.webp',
        alt: 'Specialiserat hantverks- och industrientreprenad',
      },
      section2: {
        url: '/idea-to-result.webp',
        alt: 'Genomförande av komplexa entreprenader',
      },
    },
  },
};

export default images;

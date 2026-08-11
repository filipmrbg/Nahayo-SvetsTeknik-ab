export interface ServiceSection {
  heading: string;
  text?: string;
  bullets?: string[];
  image?: string;
  subsections?: { subheading: string; text: string }[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  heroText: string;
  heroImage: string;
  highlights: string[];
  sections: ServiceSection[];
  faq: FAQItem[];
}

export const services: ServiceItem[] = [
  {
    slug: 'renovering-ombyggnad',
    title: 'Renovering & Ombyggnad',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1000',
    href: '/tjanster/renovering-ombyggnad',
    tag: 'Totalentreprenad & Förnyelse',
    badge: 'Mest Efterfrågad',
    heroText: 'Helhetslösningar för renovering, ombyggnad och lokalanpassning. Vi förvandlar befintliga ytor och fastigheter med högsta hantverkskvalitet och precision.',
    heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Totalentreprenad från idé till nyckelfärdigt',
      'Fast kalkyl och tydlig tidsplan',
      'Erfarna och certifierade hantverkare',
    ],
    sections: [
      {
        heading: 'Bred kompetens inom renovering & ombyggnad',
        text: 'Oavsett om det gäller en omfattande fastighetsrenovering, anpassning av kommersiella lokaler eller ombyggnad av bostäder, ser vårt erfarna team till att alla moment utförs med precision.',
        bullets: [
          'Strukturella ändringar – planlösningar och väggförflyttningar',
          'Ytskikt & Snickeri – golvläggning, platsbyggda lösningar och finsnickeri',
          'Våtrum & Kök – certifierade installationer med kvalitetssäkring',
          'Projektledning – en trygg kontaktperson genom hela processen',
        ],
        image: '/portfolio-extension.webp',
        subsections: [
          {
            subheading: 'Planering & Rådgivning',
            text: 'Vi går noggrant igenom projektets förutsättningar och tar fram en detaljerad projektplan inför byggstart.',
          },
          {
            subheading: 'Certifierat Utförande',
            text: 'Alla arbeten utförs av behöriga yrkesarbetare med fokus på hållbarhet och säkerhet.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Hur går en offertförfrågan till?',
        answer: 'Vi bokar ett kostnadsfritt besök eller går igenom dina ritningar, och återkopplar med en specifierad kalkyl inom 24–48 timmar.',
      },
      {
        question: 'Erbjuder ni fast pris på ombyggnationer?',
        answer: 'Ja, vi arbetar i största möjliga utsträckning med fasta priser så att du har full kontroll över din budget.',
      },
    ],
  },
  {
    slug: 'installation-service',
    title: 'Installation & Service',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1000',
    href: '/tjanster/installation-service',
    tag: 'Driftsäkerhet & Montage',
    badge: 'Hög Precision',
    heroText: 'Professionella tekniska installationer, montage och löpande servicetjänster för både privata och kommersiella fastigheter.',
    heroImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Behöriga montörer & tekniker',
      'Förebyggande service & underhåll',
      'Snabb insats & jour vid behov',
    ],
    sections: [
      {
        heading: 'Tekniska installationer och montage',
        text: 'Våra montörer och tekniker garanterar att alla installationer genomförs enligt gällande regler och säkerhetskrav.',
        bullets: [
          'Systeminstallationer – tekniska montage för industri och fastighet',
          'Förebyggande Service – regelbundet underhåll som förlänger livslängden',
          'Felsökning & Reparation – snabb åtgärd vid avbrott eller driftstörningar',
        ],
        image: '/portfolio-roofing.webp',
        subsections: [
          {
            subheading: 'Hög Standard',
            text: 'Vi använder enbart godkända komponenter från etablerade leverantörer.',
          },
          {
            subheading: 'Serviceavtal',
            text: 'Vi erbjuder löpande serviceavtal för kontinuerlig tillsyn och förebyggande underhåll.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Kan ni hjälpa till med akut service?',
        answer: 'Ja, vi prioriterar akuta ärenden och försöker alltid skicka en tekniker så snabbt som möjligt.',
      },
      {
        question: 'Utför ni installationer åt både företag och privatpersoner?',
        answer: 'Absolut, vi har bred erfarenhet av både industriella montage och installationer i hemmiljö.',
      },
    ],
  },
  {
    slug: 'specialistarbete-entreprenad',
    title: 'Specialistarbete & Entreprenad',
    image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1000',
    href: '/tjanster/specialistarbete-entreprenad',
    tag: 'Specialistkompetens & Entreprenad',
    badge: 'Specialistteam',
    heroText: 'Specialiserade yrkesarbeten, avancerade konstruktioner och skräddarsydda entreprenaduppdrag med höga krav på hållfasthet och utförande.',
    heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&q=80&w=1200',
    highlights: [
      'Skräddarsydda lösningar för unika utmaningar',
      'Specialistkompetens inom svets, stål & konstruktion',
      'Totalansvar för komplexa entreprenader',
    ],
    sections: [
      {
        heading: 'Specialiserade entreprenadlösningar',
        text: 'När projekt kräver unik specialistkompetens, stålkonstruktioner, svetsning eller specialanpassade montage levererar vi lösningar av högsta standard.',
        bullets: [
          'Specialistmontage – avancerade bygg- och industrimoment',
          'Konstruktion & Stål – tillverkning och montering av bärande element',
          'Specialanpassade Lösningar – skräddarsydda efter ritning och specifikation',
        ],
        image: '/portfolio-facade.webp',
        subsections: [
          {
            subheading: 'Kvalitetsgaranti',
            text: 'Alla moment noggrannskontrolleras och dokumenteras enligt rådande byggnormer.',
          },
          {
            subheading: 'Totalentreprenad',
            text: 'Vi kan ta helhetsansvar och samordna alla yrkesgrupper i projektet.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Krävs specialcertifikat för era uppdrag?',
        answer: 'Våra yrkesmän besitter nödvändiga licenser och certifikat för svetsning, hetarbeten och tunga montage.',
      },
      {
        question: 'Hur hanterar ni komplexa projekt?',
        answer: 'Vi tilldelar en dedikerad projektledare som koordinerar alla moment och säkerställer kvalitet och säkerhet.',
      },
    ],
  },
];

export default services;

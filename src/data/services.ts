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
    slug: 'faltservice-akutjobb',
    title: 'Fältservice',
    image: '/service-1.jpg',
    href: '/tjanster/faltservice-akutjobb',
    tag: 'Snabb insats på plats',
    badge: 'Akutinsatser',
    heroText: 'Pålitlig och snabb fältservice med akutinsatser för industriella och mekaniska system. Vi lokaliserar och åtgärdar problemen direkt på plats för att minimera kostsamma driftstopp.',
    heroImage: '/service-1.jpg',
    highlights: [
      'Snabb mobil fältservice i Gällivare med omnejd',
      'Akut felavhjälpning vid obearbetade maskinstopp',
      'Förebyggande underhåll och kontroll på plats',
    ],
    sections: [
      {
        heading: 'Effektiv fältservice när varje sekund räknas',
        text: 'När oförutsedda maskinstopp inträffar är en snabb insats helt avgörande. Vårt erfarna team rycker ut direkt med välutrustade servicefordon och verktyg för att utföra reparationer och felsökning direkt på plats.',
        bullets: [
          'Felsökning och Diagnostik – noggrann analys av mekaniska och tekniska fel',
          'Akuta Svets- och Mekanikinsatser – snabba reparationer direkt på anläggningen',
          'Komponentbyten och Slitdelar – utbyte av slitna delar för säkrad drift',
          'Minimerade Driftstopp – skräddarsydda lösningar för ökad livslängd',
        ],
        image: '/service-1.jpg',
        subsections: [
          {
            subheading: 'Snabb Respons',
            text: 'Vi står redo att hjälpa ditt företag snabbt när akuta mekaniska eller svetsrelaterade problem uppstår.',
          },
          {
            subheading: 'Säker Drift',
            text: 'Vårt mål är alltid att återställa din anläggning till maximal driftsäkerhet med hållbara lösningar.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Hur snabbt kan ni vara på plats för fältservice?',
        answer: 'Vi prioriterar akuta driftstopp och försöker alltid skicka servicetekniker så snabbt som möjligt i Gällivareregionen.',
      },
      {
        question: 'Vilken utrustning har ni med er vid fältservice?',
        answer: 'Våra servicefordon är utrustade med mobila svetsaggregat, verktyg och diagnostik för att lösa de flesta mekaniska problem direkt på plats.',
      },
    ],
  },
  {
    slug: 'maskinreparation-service',
    title: 'Maskinreparation',
    image: '/service-2.jpg',
    href: '/tjanster/maskinreparation-service',
    tag: 'Förebyggande underhåll',
    badge: 'Hög Teknisk Kompetens',
    heroText: 'Vi är experter på maskinreparationer och löpande underhåll av industrimaskiner. Vi ser till att dina maskiner och anläggningar fungerar i absolut toppskick.',
    heroImage: '/service-2.jpg',
    highlights: [
      'Komplett reparation och översyn av industrimaskiner',
      'Förebyggande serviceavtal för kontinuerlig tillsyn',
      'Renovering och byte av slitna komponenter',
    ],
    sections: [
      {
        heading: 'Professionell maskinreparation och underhåll',
        text: 'När maskiner och industrianläggningar krånglar innebär det kostsamma hinder. Vi hanterar allt från mindre justeringar och reservdelsbyten till omfattande maskinöverhalningar på plats.',
        bullets: [
          'Maskinrenovering och Överhalning – återställer maskinernas ursprungliga prestanda',
          'Förebyggande Service – regelbundna inspektioner som förhindrar oväntade haverier',
          'Tillverkning av Slitdelar – skräddarsydda ersättningskomponenter vid behov',
        ],
        image: '/service-2.jpg',
        subsections: [
          {
            subheading: 'Kvalitetssäkrad Service',
            text: 'Vi arbetar med moderna verktyg och hög teknisk kunskap för bästa resultat.',
          },
          {
            subheading: 'Anpassade Avtal',
            text: 'Vi erbjuder flexibla serviceavtal anpassade efter din verksamhets underhållsbehov.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Erbjuder ni regelbundet underhållsavtal?',
        answer: 'Ja, vi skräddarsyr underhållsavtal för löpande tillsyn så att ni undviker oförutsedda haverier.',
      },
      {
        question: 'Vilka typer av maskiner reparerar ni?',
        answer: 'Vi arbetar med allt från industrimaskiner och produktionsutrustning till tunga industrimaskiner, mobila enheter och anläggningar.',
      },
    ],
  },
  {
    slug: 'svetsning-svetsteknik',
    title: 'Svetsning',
    image: '/service-3.jpg',
    href: '/tjanster/svetsning-svetsteknik',
    tag: 'Stål och rostfritt stål',
    badge: 'Certifierade Svetsare',
    heroText: 'Professionella svetsningstjänster med höga krav på hållfasthet och kvalitet. Vi utför licenssvetsning i stål och rostfritt stål för alla typer av industrier och projekt.',
    heroImage: '/service-3.jpg',
    highlights: [
      'Certifierad licenssvetsning (MIG/MAG, MMA / pinnsvetsning)',
      'Svetsning i stål och rostfritt stål',
      'Reparationssvetsning och konstruktionsförstärkningar',
    ],
    sections: [
      {
        heading: 'Kvalificerad svetsning för hållbara konstruktioner',
        text: 'Oavsett om det gäller nyproduktion, stålkonstruktioner eller reparation av spruckna och slitna metalldelar garanterar våra certifierade svetsare hållfasta och stabila fogar.',
        bullets: [
          'Licenssvetsning – garanterad hållfasthet enligt gällande krav och standarder',
          'Mångsidiga Material – expertis inom stål och rostfritt stål',
          'Reparationssvetsning – förstärkning och lagning av belastade komponenter',
        ],
        image: '/service-3.jpg',
        subsections: [
          {
            subheading: 'Högsta Hållfasthet',
            text: 'Alla svetsförband utförs med noggrannhet och precision för maximal säkerhet.',
          },
          {
            subheading: 'Mobil Fältsvetsning',
            text: 'Vi utför kvalificerade svetsarbeten mobilt och direkt på plats ute hos kund.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Vilka svetsmetoder använder ni?',
        answer: 'Vi utför MIG/MAG och MMA (pinnsvetsning) för optimalt resultat i stål och rostfritt stål.',
      },
      {
        question: 'Svetsar ni både åt företag och privatpersoner?',
        answer: 'Ja, vi tar oss an uppdrag i alla storlekar – från industriella stålkonstruktioner till mindre laga-uppdrag.',
      },
    ],
  },
];

export default services;

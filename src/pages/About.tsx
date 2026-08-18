import { ShieldCheck, Truck, Wrench, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const accentLine: React.CSSProperties = {
  display: 'block',
  width: '60px',
  height: '3px',
  background: 'var(--color-primary)',
  borderRadius: '2px',
  margin: '14px auto 0',
};

const capabilities = [
  {
    icon: ShieldCheck,
    title: 'Certifierad licenssvetsning',
    desc: 'Bred kompetens inom MIG/MAG och MMA svetsning för stål och rostfritt stål.',
  },
  {
    icon: Truck,
    title: 'Mobil fältservice',
    desc: 'Välutrustade servicefordon redo för snabba utryckningar och felavhjälpning på plats.',
  },
  {
    icon: Wrench,
    title: 'Maskinreparation och service',
    desc: 'Reparation, överhalning och förebyggande underhåll av industrimaskiner och utrustning.',
  },
];

const teamMembers = [
  {
    role: 'Grundare, Ägare & Licenssvetsare',
    name: 'Orly Nahayo',
    photo: '',
  },
];

export default function About() {
  usePageTitle(
    'Om oss | Nahayo SvetsTeknik ab',
    'Läs mer om Nahayo SvetsTeknik ab i Gällivare. Grundat av Orly med fokuserad expertis inom licenssvetsning, fältservice och maskinreparationer.'
  );

  return (
    <main style={{ fontFamily: 'var(--font-family)', background: '#ffffff' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/welder-cta-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '150px',
        paddingBottom: '80px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(7, 8, 10, 0.82)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="blur-in">
            <span style={{
              color: 'var(--color-primary)',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '12px',
              display: 'block',
            }}>
              GÄLLIVARE MED OMNEJD
            </span>
            <h1 style={{
              color: '#ffffff',
              fontWeight: 800,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
            }}>
              Om Nahayo SvetsTeknik ab
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <p style={{ color: 'rgba(255, 255, 255, 0.85)', fontSize: '1.1rem', margin: '0 auto', maxWidth: '640px', lineHeight: 1.6 }}>
              Certifierade svetsare och mekaniker för industri, företag och privatpersoner.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION B: COMPANY STORY ─────────────────────────── */}
      <section style={{ background: '#ffffff', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div style={{ ...container, maxWidth: '1000px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: '220px 1fr',
            gap: '50px',
            alignItems: 'center',
          }}>

            {/* Left: Company Logo */}
            <ScrollReveal animation="scale-in">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src={images.about.hero.url}
                  alt={images.about.hero.alt}
                  style={{
                    width: '100%',
                    maxWidth: '220px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '12px',
                    display: 'block',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Story Text */}
            <div>
              <ScrollReveal animation="fade-right">
                <span style={{
                  color: 'var(--color-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  display: 'block',
                }}>
                  ERFARENHET OCH NOGGRANNHET
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                  lineHeight: 1.25,
                  margin: '0 0 20px 0',
                }}>
                  Specialister på svetsning och maskinreparation
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" delay={100}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 16px 0',
                }}>
                  Nahayo SvetsTeknik ab drivs av Orly och är ett etablerat företag med säte i Gällivare. Vi erbjuder licenssvetsning, mobil fältservice och reparationer av industrimaskiner och utrustning.
                </p>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 28px 0',
                }}>
                  Vårt mål är alltid att leverera hållfasta konstruktioner och säkerställa att dina maskiner fungerar med maximal driftsäkerhet. Med rätt kompetens och välutrustade servicefordon löser vi uppdrag mobilt direkt på plats i fält.
                </p>
                <Button variant="primary" size="lg" href="/kontakt">
                  Kontakta oss
                </Button>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION C: TEAM (ORIGINAL STYLE) ───────────────────── */}
      <section style={{ background: '#f8fafc', padding: '100px 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px, 5vw, 40px)' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <ScrollReveal animation="blur-in">
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                margin: '0 0 14px 0',
              }}>
                Möt teamet
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="scale-x-center" delay={200} duration={0.6}>
              <span style={{ ...accentLine, margin: '14px auto 16px' }} />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: '560px',
                margin: '0 auto',
              }}>
                Yrkesarbetare som brinner för sitt jobb och värnar om kunden lika mycket som resultatet.
              </p>
            </ScrollReveal>
          </div>

          <div className="team-grid" style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '40px',
            flexWrap: 'wrap',
          }}>
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} animation="slide-up-fade" delay={i * 150}>
                <div style={{ textAlign: 'center', minWidth: '200px' }}>
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                      style={{
                        width: '160px',
                        height: '160px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        display: 'block',
                        margin: '0 auto 20px',
                        border: '3px solid var(--color-primary)',
                      }}
                    />
                  ) : (
                    <div style={{
                      width: '160px',
                      height: '160px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      border: '3px dashed var(--color-gray-400)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      color: 'var(--color-primary)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
                    }}>
                      <span style={{ fontSize: '2.5rem', fontWeight: 700, fontFamily: 'var(--font-family)' }}>
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <p style={{
                    color: 'var(--color-primary)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    margin: '0 0 8px 0',
                  }}>
                    {member.role}
                  </p>
                  <h3 style={{
                    color: 'var(--color-text-dark)',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    margin: '0 0 8px 0',
                  }}>
                    {member.name}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION D: CAPABILITIES & VALUES ──────────────────── */}
      <section style={{ background: '#ffffff', padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div style={container}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <ScrollReveal animation="blur-in">
              <span style={{
                color: 'var(--color-primary)',
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '10px',
                display: 'block',
              }}>
                VÅR EXPERTIS
              </span>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                margin: 0,
              }}>
                Varför välja Nahayo SvetsTeknik ab
              </h2>
            </ScrollReveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
          }}>
            {capabilities.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={i} animation="scale-in" delay={i * 120}>
                <div style={{
                  background: '#ffffff',
                  borderRadius: '16px',
                  padding: '36px 28px',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '12px',
                    background: 'rgba(245, 124, 0, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    marginBottom: '20px',
                  }}>
                    <Icon size={28} />
                  </div>
                  <h3 style={{
                    color: 'var(--color-text-dark)',
                    fontWeight: 700,
                    fontSize: '1.2rem',
                    margin: '0 0 12px 0',
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Highlights checklist */}
          <ScrollReveal animation="fade-up" delay={250}>
            <div style={{
              marginTop: '50px',
              background: '#ffffff',
              borderRadius: '16px',
              padding: '30px 40px',
              border: '1px solid rgba(0,0,0,0.06)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '24px 40px',
              justifyContent: 'center',
            }}>
              {[
                'Certifierad licenssvetsning enligt krav',
                'Fältservice med korta inställelsetider',
                'Noggrant utförande och fasta prisuppgifter',
                'Arbeten i stål och rostfritt stål',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                  <span style={{ color: 'var(--color-text-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION E: CTA BANNER ─────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 768px) {
          .about-content-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .about-content-grid > *:first-child {
            max-width: 180px;
            margin: 0 auto;
          }
          .team-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

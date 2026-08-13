import { useEffect, useRef, useState } from 'react';
import {
  Star,
  Phone,
  Wrench,
  FileText,
  ArrowRight,
} from 'lucide-react';
import { FieldServiceIcon, MachineRepairIcon, WeldingIcon } from '../components/ServiceIcons';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import ReviewCard from '../components/ReviewCard';
import SocialBanner from '../components/SocialBanner';
import CallModal from '../components/CallModal';
import { usePageTitle } from '../hooks/usePageTitle';
import services from '../data/services';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function Home() {
  usePageTitle(
    'Nahayo SvetsTeknik ab | Licenssvetsning, Fältservice och Maskinreparation',
    'Professionella tjänster inom svetsning, mobil fältservice, maskinreparation och industrimontage i Gällivare med omnejd.'
  );

  const heroBgRef = useRef<HTMLDivElement>(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroBgRef.current) {
            heroBgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.3}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section className="home-hero" style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
        boxSizing: 'border-box',
        backgroundColor: '#07080a',
      }}>
        {/* Hero Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            backgroundColor: '#07080a',
          }}
        >
          <source src="/hero-bg-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.82) 100%)',
          zIndex: 1,
        }} />

        <div style={{ ...container, position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: '780px',
          }}>
            {/* Top Eyebrow Badge */}
            <ScrollReveal animation="fade-up" delay={0} duration={0.8}>
              <span style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)',
                marginBottom: '16px',
                display: 'block',
              }}>
                GÄLLIVARE  /  REPARATION  /  SERVICE  /  MONTAGE
              </span>
            </ScrollReveal>

            {/* Display Title */}
            <ScrollReveal animation="fade-up" delay={100} duration={0.8}>
              <h1 style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
                color: '#ffffff',
                textTransform: 'uppercase',
                margin: '0 0 20px 0',
                fontFamily: "'Montserrat', var(--font-family), sans-serif",
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
              }}>
                NAHAYO<br />
                SVETSTEKNIK AB
              </h1>
            </ScrollReveal>

            {/* Subtitle / Value Proposition Text */}
            <ScrollReveal animation="fade-up" delay={200} duration={0.8}>
              <p style={{
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)',
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: 1.6,
                margin: '0 0 36px 0',
                maxWidth: '620px',
                fontWeight: 500,
              }}>
                Experter på Svets, Industrimontage &amp; Service i Gällivare med omnejd. Hantverk som syns i varje detalj.
              </p>
            </ScrollReveal>

            {/* Action Buttons Left-Aligned */}
            <ScrollReveal animation="fade-up" delay={300} duration={0.7}>
              <div className="hero-actions" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                flexWrap: 'wrap',
              }}>
                <Button variant="primary" size="lg" href="/offert">
                  Begär kostnadsfri offert
                </Button>

                <Button variant="outline" size="lg" onClick={() => setIsCallModalOpen(true)}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={18} />
                    Ring 073-724 86 67
                  </span>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CALL MODAL POPUP ────────────────────────────────────── */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      {/* ── SECTION 2: THREE STEP PROCESS ───────────────────────── */}
      <section style={{
        background: 'linear-gradient(180deg, #f0f7f7 0%, #ffffff 100%)',
        padding: 'clamp(60px, 8vw, 100px) 0',
      }}>
        <div style={container}>
          <div className="steps-grid-wrapper" style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '0',
            textAlign: 'center',
          }}>
            {[
              { icon: Phone, title: 'Kontakta oss', desc: 'Beskriv ditt behov, oavsett om det gäller fältservice, maskinreparation eller svetsarbeten.' },
              { icon: FileText, title: 'Planering och offert', desc: 'Vi går igenom specifikationerna och lämnar en tydlig offert anpassad för ditt uppdrag.' },
              { icon: Wrench, title: 'Utförande och leverans', desc: 'Våra svetsare och mekaniker utför arbetet med högsta noggrannhet i fält eller i verkstaden.' },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <ScrollReveal animation="scale-in" easing="spring" delay={i * 150}>
                  <div className="step-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1', maxWidth: '280px' }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      background: 'var(--color-primary)',
                      borderRadius: 'var(--border-radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}>
                      <Icon size={28} color="#1a1f2e" />
                    </div>
                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 700,
                      fontSize: '1.1rem',
                      margin: '0 0 12px 0',
                    }}>
                      {title}
                    </h3>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      margin: 0,
                      maxWidth: '260px',
                    }}>
                      {desc}
                    </p>
                  </div>
                </ScrollReveal>
                {i < 2 && (
                  <div className="step-arrow">
                    <svg width="65" height="24" viewBox="0 0 65 24" fill="none" stroke="#C4C4C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.75 }}>
                      <path d="M 5 12 C 20 10, 40 10, 58 11" />
                      <path d="M 49 5 C 52 8, 56 10, 58 11" />
                      <path d="M 48 18 C 51 15, 56 12, 58 11" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: OM OSS (KLAS MEK 4-IMAGE MOSAIC GRID STYLE) ──── */}
      <section style={{
        background: '#07080a',
        padding: 'clamp(60px, 8vw, 100px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={container}>
          <div className="about-grid-wrapper" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(30px, 5vw, 60px)',
            alignItems: 'center',
          }}>
            {/* Left: 4-Image Mosaic Grid */}
            <ScrollReveal animation="fade-left" duration={0.8}>
              <div className="about-mosaic" style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '10px',
                width: '100%',
              }}>
                {/* Column 1 (Left): Tall welder (top) + Wide plate (bottom) */}
                <div className="about-mosaic-column" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <img
                    className="about-mosaic-image"
                    src="/grid-1.jpg"
                    alt="Svetsare i arbete"
                    style={{
                      width: '100%',
                      height: '320px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                  <img
                    className="about-mosaic-image"
                    src="/grid-2.jpg"
                    alt="Svetsad stålkonstruktion"
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                </div>

                {/* Column 2 (Right): Wide sparks (top) + Tall tractor & bucket (bottom) */}
                <div className="about-mosaic-column" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <img
                    className="about-mosaic-image"
                    src="/grid-3.jpg"
                    alt="Gnistregn från vinkelslip och svets"
                    style={{
                      width: '100%',
                      height: '180px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                  <img
                    className="about-mosaic-image"
                    src="/grid-4.jpg"
                    alt="Maskinreparation och grävskopa"
                    style={{
                      width: '100%',
                      height: '320px',
                      objectFit: 'cover',
                      borderRadius: '4px',
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Text & Action Content */}
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 2 }}>
              <ScrollReveal animation="fade-right" duration={0.8}>
                <h2 style={{
                  color: '#ffffff',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
                  lineHeight: 1.25,
                  margin: '0 0 12px 0',
                }}>
                  Kvalitetsarbete i varje svetsfog
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" duration={0.8} delay={50}>
                <span style={{
                  color: 'var(--color-primary)',
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginBottom: '20px',
                  display: 'block',
                }}>
                  REPARATIONSSTJÄNSTER OCH SVETSTEKNIK
                </span>
              </ScrollReveal>

              <ScrollReveal animation="fade-right" duration={0.8} delay={100}>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.78)',
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  margin: '0 0 16px 0',
                }}>
                  Hos Nahayo SvetsTeknik ab får du professionell hjälp med svetsning, maskinreparationer och industrimontage. Vi arbetar med allt från akuta utryckningar i fält till skräddarsydda tillverkningar i verkstaden.
                </p>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.78)',
                  fontSize: '0.95rem',
                  lineHeight: 1.75,
                  margin: '0 0 20px 0',
                }}>
                  Vi sätter alltid noggrannhet och hållbarhet i första rummet. Med rätt kompetens och utrustning ser vi till att dina maskiner och stålkonstruktioner fungerar felfritt.
                </p>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  margin: '0 0 28px 0',
                }}>
                  Hör av dig till oss så hittar vi den bästa lösningen för dina behov.
                </p>
              </ScrollReveal>

              {/* Action Pill Buttons */}
              <ScrollReveal animation="fade-right" duration={0.8} delay={200}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setIsCallModalOpen(true)}
                    style={{
                      padding: '10px 24px',
                      borderRadius: '999px',
                      border: '1.5px solid var(--color-primary)',
                      background: 'transparent',
                      color: 'var(--color-primary)',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-primary)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                  >
                    RING OSS
                  </button>

                  <a
                    href="/kontakt"
                    style={{
                      padding: '10px 24px',
                      borderRadius: '999px',
                      border: '1.5px solid var(--color-primary)',
                      background: 'transparent',
                      color: 'var(--color-primary)',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--color-primary)';
                      e.currentTarget.style.color = '#ffffff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--color-primary)';
                    }}
                  >
                    MAILA OSS
                  </a>
                </div>
              </ScrollReveal>

              {/* Watermark Logo (Bottom Right) */}
              <div style={{
                position: 'absolute',
                right: '-20px',
                bottom: '-40px',
                opacity: 0.05,
                pointerEvents: 'none',
                zIndex: -1,
              }}>
                <WeldingIcon size={240} color="var(--color-primary)" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: SERVICES GRID ──── */}
      <section
        id="tjanster"
        style={{
          background: 'var(--color-dark)',
          padding: 'clamp(80px, 10vw, 120px) 0',
          color: '#ffffff',
        }}
      >
        <div style={container}>
          <div style={{ marginBottom: '48px' }}>
            <ScrollReveal animation="blur-in">
              <h2 style={{
                color: '#ffffff',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.02em',
                margin: '0 0 16px 0',
                textTransform: 'uppercase',
              }}>
                Våra Tjänster
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={100}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: '1.05rem',
                maxWidth: '640px',
                lineHeight: 1.7,
                margin: 0,
              }}>
                På Nahayo SvetsTeknik AB erbjuder vi professionella tjänster inom fältservice, maskinreparation och svetsning. Vi säkerställer hållbara och effektiva lösningar för företag och industrier.
              </p>
            </ScrollReveal>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {services.map((svc, idx) => {
              const iconComponents = [FieldServiceIcon, MachineRepairIcon, WeldingIcon];
              const IconComp = iconComponents[idx % iconComponents.length];
              return (
                <ScrollReveal key={svc.slug} animation="fade-up" delay={idx * 120}>
                  <a href={svc.href} className="service-card-link">
                    <div className="service-card-el">
                      <div className="service-card-img-wrap">
                        <img
                          src={svc.heroImage}
                          alt={svc.title}
                          className="service-card-img"
                          loading="lazy"
                        />
                        <div className="service-card-img-overlay" />
                        <div style={{
                          position: 'absolute',
                          top: '16px',
                          left: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: 'rgba(245, 124, 0, 0.15)',
                          border: '1px solid rgba(245, 124, 0, 0.3)',
                          backdropFilter: 'blur(8px)',
                          zIndex: 2,
                        }}>
                          <IconComp size={26} color="var(--color-primary)" />
                        </div>
                      </div>
                      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
                        <h3 style={{
                          color: '#ffffff',
                          fontSize: '1.25rem',
                          fontWeight: 800,
                          margin: 0,
                          letterSpacing: '-0.01em',
                        }}>
                          {svc.title}
                        </h3>
                        <p style={{
                          color: 'rgba(255, 255, 255, 0.6)',
                          fontSize: '0.9rem',
                          lineHeight: 1.6,
                          margin: 0,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}>
                          {svc.heroText}
                        </p>
                        <div style={{
                          marginTop: 'auto',
                          paddingTop: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: 'var(--color-primary)',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                        }}>
                          Läs mer
                          <span className="service-card-arrow">
                            <ArrowRight size={16} color="var(--color-primary)" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: MID CTA ──────────────────────────────────── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(50px, 7vw, 80px) 0',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/mid-cta-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,31,46,0.88)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="scale-in">
            <h2 style={{
              color: 'var(--color-white)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              margin: '0 0 12px 0',
            }}>
              Nyfiken på vad ditt projekt kostar?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1rem',
              margin: '0 0 32px 0',
              lineHeight: 1.7,
            }}>
              Vi skickar en kostnadsfri offert inom 24 timmar.
            </p>
            <Button variant="primary" size="lg" href="/offert">
              Begär offert
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 8: KUNDRECENSIONER ──────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div style={container}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <ScrollReveal animation="fade-up">
              <p style={{
                color: 'var(--color-primary)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                margin: '0 0 12px 0',
              }}>
                Kundrecensioner
              </p>
            </ScrollReveal>
            <ScrollReveal animation="blur-in" delay={50}>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                margin: '0 0 12px 0',
                lineHeight: 1.2,
              }}>
                Vad säger våra kunder?
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="scale-x-center" delay={200} duration={0.6}>
              <span style={{ display: 'block', width: '60px', height: '3px', background: 'var(--color-primary)', borderRadius: '2px', margin: '0 auto 24px auto' }} />
            </ScrollReveal>

            {/* Simple Google Rating Summary */}
            <ScrollReveal animation="fade-up" delay={100}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                margin: '0 auto 32px auto',
                fontSize: '0.9rem',
                color: '#4b5563',
                fontWeight: 500,
                flexWrap: 'wrap',
              }}>
                <svg viewBox="0 0 24 24" width="16" height="16" style={{ marginRight: '4px', flexShrink: 0 }}>
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69a5.74 5.74 0 0 1-2.49 3.77v3.13h4.01c2.34-2.16 3.69-5.32 3.69-8.75z" />
                  <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-4.01-3.13c-1.11.75-2.53 1.19-3.95 1.19-3.04 0-5.61-2.05-6.53-4.82H1.31v3.23A12 12 0 0 0 12 24z" />
                  <path fill="#FBBC05" d="M5.47 14.33A7.16 7.16 0 0 1 5 12c0-.8.14-1.58.39-2.33V6.44H1.31A11.96 11.96 0 0 0 0 12c0 2.05.52 4 1.31 5.67l4.16-3.34z" />
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.22 0 12 0A12 12 0 0 0 1.31 6.44l4.16 3.23a7.18 7.18 0 0 1 6.53-4.92z" />
                </svg>
                <span style={{ fontWeight: 700, color: '#111827' }}>4.9 / 5</span>
                <div style={{ display: 'flex', gap: '1px' }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="#FBBC05" color="#FBBC05" />
                  ))}
                </div>
                <span>baserat på 48 Google-omdömen</span>
              </div>
            </ScrollReveal>
          </div>

          <div className="reviews-grid">
            {[
              {
                name: 'Johan Kvist',
                location: 'Stockholm',
                text: 'Utmärkt utfört arbete och fantastisk precision. Montörerna höll tidsplanen och kommunikationen var i absolut toppklass från start till mål. Kan varmt rekommenderas!',
                stars: 5,
                date: 'för 2 veckor sedan',
                authorSub: 'Lokal guide • 8 omdömen',
                avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120'
              },
              {
                name: 'Karin Wallin',
                location: 'Nacka',
                text: 'Vi anlitade teamet för ett mer komplext specialistarbete. Mycket kunniga yrkesmän som löste alla utmaningar på ett supersnyggt sätt.',
                stars: 5,
                date: 'för en månad sedan',
                authorSub: '5 omdömen',
                avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120'
              },
              {
                name: 'Anders Gustavsson',
                location: 'Täby',
                text: 'Proffsigt utförd installation. Tydlig offert utan konstigheter och arbetet genomfördes med högsta noggrannhet. Kommer definitivt anlita dem igen.',
                stars: 5,
                date: 'för 2 månader sedan',
                authorSub: 'Lokal guide • 14 omdömen',
                avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
              },
            ].map((review, i) => {
              const delay = i * 150;
              return (
                <ScrollReveal key={i} animation="fade-up" delay={delay}>
                  <ReviewCard review={review} />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SOCIAL MEDIA BANNER ─────────────────────────────────── */}
      <SocialBanner />

      {/* ── SECTION 11: CTA BANNER ───────────────────────────────── */}
      <CTABanner />

      {/* ── TWEAKED SPACED STYLES ───────────────────────────────── */}
      <style>{`
        .spaced-screenshot-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(16px, 2.5vw, 24px);
        }
        .spaced-tile {
          position: relative;
          display: block;
          text-decoration: none;
          aspect-ratio: 16/10;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .spaced-tile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .spaced-tile-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 30%, rgba(0, 0, 0, 0.88) 100%);
          transition: background 0.4s ease;
        }
        .spaced-tile:hover {
          transform: translateY(-6px);
          border-color: rgba(217, 119, 6, 0.45);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.16);
        }
        .spaced-tile:hover .spaced-tile-img {
          transform: scale(1.06);
        }
        .spaced-tile:hover .spaced-tile-overlay {
          background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.92) 100%);
        }
        .spaced-tile-content {
          position: absolute;
          inset: auto 0 0 0;
          padding: 24px 24px 22px 24px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          z-index: 2;
        }
        .spaced-tile-left {
          display: flex;
          flex-direction: column;
        }
        .spaced-tile-title {
          color: #ffffff;
          font-weight: 700;
          font-size: clamp(1.1rem, 1.8vw, 1.4rem);
          margin: 0;
          line-height: 1.2;
          letter-spacing: -0.01em;
          text-shadow: 0 2px 8px rgba(0,0,0,0.8);
        }
        .spaced-tile-right {
          flex-shrink: 0;
          margin-left: 12px;
        }
        .spaced-tile-action {
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.82rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .spaced-tile:hover .spaced-tile-action {
          color: var(--color-primary);
        }

        .steps-grid-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .review-card-el {
          background: var(--color-white);
          border: 1px solid #EDE8E0;
          border-radius: var(--border-radius-lg);
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .review-card-el:hover {
          transform: translateY(-5px) rotate(-0.5deg);
          box-shadow: 0 16px 40px rgba(28,21,16,0.10);
        }
        .step-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 70px;
        }
        @media (max-width: 1024px) {
          .spaced-screenshot-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .spaced-screenshot-grid { grid-template-columns: 1fr !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .steps-grid-wrapper { flex-direction: column !important; align-items: center !important; gap: 24px !important; }
          .step-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </main>
  );
}

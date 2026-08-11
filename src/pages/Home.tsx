import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Phone,
  MapPin,
  Wrench,
  CheckCircle2,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import ReviewCard from '../components/ReviewCard';
import SocialBanner from '../components/SocialBanner';
import CallModal from '../components/CallModal';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';
import services, { ServiceItem } from '../data/services';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function Home() {
  usePageTitle(
    'Kvalitet & Precision | Professionella Hantverks- & Industritjänster',
    'Vi utför alla typer av renovering, installation, ombyggnad och specialiserade yrkesarbeten med högsta kvalitet och precision. Kontakta oss för en kostnadsfri offert!'
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
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
        boxSizing: 'border-box',
      }}>
        {/* Parallax Background Image */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            inset: '-10% 0',
            zIndex: 0,
            willChange: 'transform',
            backgroundImage: `url(${images.hero.background.url})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Dark overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.75) 0%, rgba(15, 23, 42, 0.85) 100%)',
          zIndex: 1,
        }} />

        <div style={{ ...container, position: 'relative', zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '24px',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            {/* Centered Logo Emblem */}
            <ScrollReveal animation="fade-down" delay={0} duration={0.8}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px',
              }}>
                <img
                  src={images.logo.url}
                  alt={images.logo.alt}
                  style={{
                    width: 'clamp(260px, 45vw, 420px)',
                    height: 'auto',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 3px 10px rgba(0, 0, 0, 0.85))',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Action Buttons Centered directly under logo */}
            <ScrollReveal animation="fade-up" delay={200} duration={0.7}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                marginTop: '8px',
              }}>
                <Button variant="primary" size="lg" href="/offert">
                  Begär kostnadsfri offert
                </Button>

                <Button variant="outline" size="lg" onClick={() => setIsCallModalOpen(true)}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={18} />
                    Ring
                  </span>
                </Button>
              </div>
            </ScrollReveal>

            {/* Tagline / Sub-heading directly under buttons */}
            <ScrollReveal animation="fade-up" delay={350} duration={0.7}>
              <p style={{
                color: 'rgba(255, 255, 255, 0.95)',
                fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
                letterSpacing: '0.04em',
                fontWeight: 700,
                margin: '12px 0 0 0',
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.95), 0 0 16px rgba(0, 0, 0, 0.6)',
              }}>
                Quality, Precision &amp; Professional Trade Services
              </p>
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
              { icon: Phone, title: 'Ring oss', desc: 'Berätta om ditt projekt, så hjälper vi dig avgöra vad som krävs och vad det kostar.' },
              { icon: MapPin, title: 'Kostnadsfritt platsbesök', desc: 'Vi besöker er tomt för att mäta höjdskillnader, bedöma marken och ta fram en offert.' },
              { icon: Wrench, title: 'Vi utför', desc: 'Vi utför arbetet på ett tryggt och professionellt sätt med fokus på kvalitet.' },
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

      {/* ── SECTION 3: OM OSS-BLURB ────────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div style={container}>
          <div className="two-col" style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(280px, 35%, 400px) 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            {/* Left: Logo */}
            <ScrollReveal animation="fade-left" duration={0.8}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src={images.logo.url}
                  alt="Hantverk &amp; Entreprenad logotyp"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    maxWidth: '380px',
                    height: 'auto',
                    objectFit: 'contain',
                    borderRadius: '16px',
                    backgroundColor: '#ffffff',
                    padding: '24px',
                    boxShadow: '0 12px 32px rgba(0, 0, 0, 0.1)',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: text */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ScrollReveal animation="fade-right" duration={0.8}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 14px 0',
                }}>
                  Precision &amp; Kvalitet i varje detalj
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="scale-x-left" delay={200} duration={0.6}>
                <span style={{ display: 'block', width: '60px', height: '3px', background: 'var(--color-primary)', borderRadius: '2px', margin: '0 0 24px' }} />
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={100}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 32px 0',
                }}>
                  Vi erbjuder professionella yrkes- och entreprenadtjänster med högsta fokus på noggrannhet, punktlighet och hållbarhet. Oavsett om det gäller tekniska installationer, ombyggnationer eller specialiserade entreprenaduppdrag ser vi till att dina projekt genomförs med kompromisslös precision.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={200}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Certifierade yrkesarbetare och specialistkunskap',
                    'Fasta prisuppgifter och transparens från start',
                    'Högsta kvalitet på material och utförande',
                    'Modern utrustning anpassad för alla projekt',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 size={24} color="var(--color-primary)" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={250}>
                <div style={{ marginTop: '32px' }}>
                  <Button variant="dark" href="/om-oss">
                    Läs mer om oss
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: CLEAN SPACED TILE GRID ────────────────────── */}
      <section
        id="tjanster"
        style={{
          background: '#f4f3ef',
          padding: 'clamp(80px, 10vw, 120px) 0',
        }}
      >
        <div style={container}>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <ScrollReveal animation="blur-in">
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                letterSpacing: '-0.02em',
                margin: '0 0 14px 0',
              }}>
                Vad vi kan hjälpa dig med
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="scale-x-center" delay={150} duration={0.6}>
              <span style={{ display: 'block', width: '50px', height: '3px', background: 'var(--color-primary)', borderRadius: '2px', margin: '0 auto 16px auto' }} />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1.05rem',
                maxWidth: '620px',
                margin: '0 auto',
                lineHeight: 1.7,
              }}>
                Kommunicera dina behov – vi levererar skräddarsydda lösningar inom renovering, installation och specialistentreprenad.
              </p>
            </ScrollReveal>
          </div>

          {/* Spaced Tile Grid (Sentence case titles, warm off-white background) */}
          <div className="spaced-screenshot-grid">
            {services.map((svc: ServiceItem, index: number) => (
              <ScrollReveal key={svc.slug} animation="fade-up" delay={(index % 3) * 80}>
                <Link to={svc.href} className="spaced-tile">
                  {/* Image */}
                  <img
                    src={svc.image}
                    alt={svc.title}
                    loading="lazy"
                    className="spaced-tile-img"
                  />
                  {/* Overlay */}
                  <div className="spaced-tile-overlay" />

                  {/* Content Container */}
                  <div className="spaced-tile-content">
                    <div className="spaced-tile-left">
                      <h3 className="spaced-tile-title">
                        {svc.title}
                      </h3>
                    </div>
                    <div className="spaced-tile-right">
                      <span className="spaced-tile-action">Begär offert</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
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
          backgroundImage: `url(/cta-mid-section.webp)`,
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

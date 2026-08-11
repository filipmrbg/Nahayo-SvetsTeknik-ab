import { CheckCircle } from 'lucide-react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import images from '../data/images';

interface Props {
  heading?: string;
  checkItems?: string[];
}

const defaultHeading = 'Begär en kostnadsfri offert';
const defaultCheckItems = [
  'Kostnadsfritt hembesök och offert',
  'Snabb återkoppling inom 24 timmar',
  'Tryggt utförande & fasta priser',
];

export default function CTABanner({ heading = defaultHeading, checkItems = defaultCheckItems }: Props) {
  return (
    <section style={{ 
      position: 'relative', 
      background: 'var(--color-dark)', 
      overflow: 'hidden',
      padding: 'clamp(60px, 8vw, 80px) 0',
    }}>
      {/* Background Image */}
      <img
        src={images.cta.banner.url}
        alt={images.cta.banner.alt}
        loading="lazy"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Dark Premium Fading Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.85) 50%, rgba(15, 23, 42, 0.6) 100%)',
        zIndex: 1,
      }} className="cta-overlay" />

      {/* Dot grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 clamp(20px, 5vw, 40px)',
        position: 'relative',
        zIndex: 3,
      }}>
        <div className="cta-grid" style={{
          display: 'grid',
          gridTemplateColumns: '60% 40%',
          gap: '40px',
          alignItems: 'center',
        }}>
          {/* Left: Text Content */}
          <ScrollReveal animation="fade-left" duration={0.8}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{
                color: 'var(--color-primary)',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                marginBottom: '12px',
                display: 'block',
                fontFamily: 'var(--font-family)',
              }}>
                Vi hjälper er!
              </span>

              <h2 style={{
                color: 'var(--color-white)',
                fontWeight: 800,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                lineHeight: 1.2,
                margin: '0 0 24px 0',
                fontFamily: 'var(--font-family)',
                letterSpacing: '-0.02em',
              }}>
                {heading}
              </h2>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 36px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                {checkItems.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.88)',
                      fontFamily: 'var(--font-family)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="cta-btn-wrap" style={{ display: 'inline-block' }}>
                <Button variant="primary" size="lg" href="/offert">
                  Kom igång
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Empty Column to let background video display unobstructed */}
          <div className="cta-video-focus-space" aria-hidden="true" />
        </div>
      </div>

      <style>{`
        .cta-btn-wrap {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .cta-btn-wrap:hover {
          transform: scale(1.05);
        }
        @media (max-width: 991px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .cta-video-focus-space {
            display: none !important;
          }
          .cta-overlay {
            background: rgba(15, 23, 42, 0.88) !important;
          }
        }
      `}</style>
    </section>
  );
}

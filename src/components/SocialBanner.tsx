import { Instagram } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function SocialBanner() {
  return (
    <section style={{
      background: 'linear-gradient(180deg, #fdf8f2 0%, #f7f1e8 100%)',
      padding: '75px 20px',
      borderTop: '1px solid rgba(28, 21, 16, 0.06)',
      borderBottom: '1px solid rgba(28, 21, 16, 0.06)',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: 'var(--font-family)',
    }}>
      {/* Dot grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(28, 21, 16, 0.02) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '24px',
      }}>
        
        <ScrollReveal animation="fade-up" duration={0.6}>
          <h3 style={{
            color: 'var(--color-text-dark)',
            fontSize: 'clamp(1.4rem, 3vw, 1.8rem)',
            fontWeight: 800,
            margin: 0,
            letterSpacing: '-0.02em',
          }}>
            Följ vårt arbete &amp; projekt
          </h3>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" duration={0.6} delay={100}>
          <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', maxWidth: '560px', margin: 0, lineHeight: 1.65 }}>
            Se bilder från våra senaste uppdrag, montagedetaljer och färdiga projekt direkt på sociala medier.
          </p>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" duration={0.6} delay={180}>
          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginTop: '8px',
          }}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-banner-btn instagram"
            >
              <Instagram size={18} className="social-banner-icon" />
              <span>Följ oss på Instagram</span>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        .social-banner-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(28, 21, 16, 0.08);
          color: var(--color-text-dark);
          padding: 14px 30px;
          border-radius: var(--border-radius-pill);
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(28, 21, 16, 0.02);
          cursor: pointer;
        }

        .social-banner-btn:hover {
          transform: translateY(-3px);
          background: var(--color-white);
        }

        .social-banner-btn.instagram:hover {
          border-color: #E1306C;
          box-shadow: 0 8px 24px rgba(225, 48, 108, 0.12);
          color: #E1306C;
        }

        .social-banner-icon {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .social-banner-btn:hover .social-banner-icon {
          transform: scale(1.1);
        }

        @media (max-width: 480px) {
          .social-banner-btn {
            width: 100%;
            justify-content: center;
            padding: 14px 28px;
          }
        }
      `}</style>
    </section>
  );
}

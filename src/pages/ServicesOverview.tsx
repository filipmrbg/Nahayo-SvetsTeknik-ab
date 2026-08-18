import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import services, { ServiceItem } from '../data/services';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function ServicesOverview() {
  usePageTitle(
    'Våra Tjänster | Nahayo SvetsTeknik ab',
    'Utforska våra tjänster inom svetsning, licenssvetsning och industrisvetsning hos Nahayo SvetsTeknik ab i Gällivare.'
  );

  return (
    <main style={{ fontFamily: 'var(--font-family)', background: '#f4f3ef' }}>

      {/* ── HERO HEADER (DEDICATED SERVICES HERO IMAGE) ──────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1920)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        paddingTop: '140px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.75)' }} />

        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                Våra Tjänster
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="scale-x-center" delay={150} duration={0.6}>
              <span style={{ display: 'block', width: '60px', height: '3px', background: 'var(--color-primary)', borderRadius: '2px', margin: '14px auto 0' }} />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.05rem',
                maxWidth: '640px',
                margin: '20px auto 0',
                lineHeight: 1.65,
              }}>
                Kompletta yrkestjänster inom licenssvetsning, mobil fältservice och maskinreparationer.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SPACED TILE GRID SECTION ────────────────────────────── */}
      <section style={{ padding: '60px 0 110px 0', background: '#f4f3ef', position: 'relative' }}>
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div className="spaced-screenshot-grid">
            {services.map((svc: ServiceItem, index: number) => (
              <ScrollReveal key={svc.slug} animation="fade-up" delay={(index % 3) * 80}>
                <Link to={svc.href} className="spaced-tile">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    loading="lazy"
                    className="spaced-tile-img"
                  />
                  <div className="spaced-tile-overlay" />

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

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <CTABanner />

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

        @media (max-width: 1024px) {
          .spaced-screenshot-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .spaced-screenshot-grid { grid-template-columns: 1fr !important; gap: 16px; }
          .spaced-tile {
            aspect-ratio: auto;
            min-height: 0;
            display: flex;
            flex-direction: column;
            background: #ffffff;
          }
          .spaced-tile-img {
            height: 220px;
            object-fit: cover;
          }
          .spaced-tile-overlay { display: none; }
          .spaced-tile-content {
            position: static;
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
            padding: 20px;
            background: #ffffff;
          }
          .spaced-tile-right { margin-left: 0; }
          .spaced-tile-title {
            color: var(--color-text-dark);
            font-size: 1.2rem;
            text-shadow: none;
          }
          .spaced-tile-action {
            background: var(--color-primary);
            color: #ffffff;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.78rem;
            font-weight: 700;
            display: inline-block;
          }
        }
      `}</style>
    </main>
  );
}

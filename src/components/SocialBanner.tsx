import { Instagram, ArrowUpRight } from 'lucide-react';

export default function SocialBanner() {
  return (
    <section style={{
      background: '#ffffff',
      padding: '24px 20px',
      borderTop: '1px solid rgba(0, 0, 0, 0.08)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
      fontFamily: 'var(--font-family)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '16px',
        flexWrap: 'wrap',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          color: 'var(--color-text-dark)',
          fontSize: '0.95rem',
          fontWeight: 600,
        }}>
          <Instagram size={20} color="var(--color-primary)" style={{ flexShrink: 0 }} />
          <span>Följ våra senast genomförda projekt på Instagram</span>
        </div>

        <a
          href="https://www.instagram.com/nahayo_svetsteknik"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--color-primary)',
            fontSize: '0.9rem',
            fontWeight: 800,
            textDecoration: 'none',
            letterSpacing: '0.02em',
            transition: 'opacity 0.2s ease',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.75'; }}
          onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
        >
          <span>@nahayo_svetsteknik</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

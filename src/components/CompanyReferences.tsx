import React from 'react';
import ScrollReveal from './ScrollReveal';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function CompanyReferences() {
  return (
    <section
      id="referenser"
      style={{
        background: '#ffffff',
        padding: 'clamp(48px, 6vw, 72px) 0',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}
    >
      <div style={container}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <ScrollReveal animation="fade-up">
            <p
              style={{
                color: 'var(--color-primary)',
                fontSize: '0.8rem',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                margin: '0 0 10px 0',
              }}
            >
              REFERENSER
            </p>
          </ScrollReveal>

          <ScrollReveal animation="blur-in" delay={50}>
            <h2
              style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 2.8vw, 2.2rem)',
                margin: '0 0 12px 0',
                lineHeight: 1.2,
                fontFamily: "'Montserrat', var(--font-family), sans-serif",
              }}
            >
              Företag vi utfört uppdrag åt
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="scale-x-center" delay={150} duration={0.5}>
            <span
              style={{
                display: 'block',
                width: '44px',
                height: '3px',
                background: 'var(--color-primary)',
                borderRadius: '2px',
                margin: '0 auto',
              }}
            />
          </ScrollReveal>
        </div>

        {/* Clean, Seamless Transparent Logo Row */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 'clamp(32px, 8vw, 80px)',
              flexWrap: 'wrap',
              padding: '10px 0',
            }}
          >
            {/* Enerco Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 20px',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <img
                src="/client-logo-1-transparent.png"
                alt="Enerco"
                style={{
                  maxHeight: '44px',
                  maxWidth: '190px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>

            {/* Molar Logo */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 20px',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <img
                src="/client-logo-2-transparent.png"
                alt="Molar"
                style={{
                  maxHeight: '48px',
                  maxWidth: '190px',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

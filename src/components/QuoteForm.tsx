import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface QuoteFormProps {
  title?: string;
  defaultService?: string;
  className?: string;
  style?: React.CSSProperties;
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  background: '#fafafa',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text-dark)',
  outline: 'none',
  boxSizing: 'border-box',
  marginBottom: '16px',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  display: 'block',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  marginBottom: '4px',
  fontSize: '0.85rem',
  fontWeight: 600,
  color: 'var(--color-text-dark)',
};

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = 'var(--color-primary)';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(217,119,6,0.15)';
}

function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = '#e5e7eb';
  e.currentTarget.style.boxShadow = 'none';
}

export default function QuoteForm({
  title = 'Fyll i dina uppgifter',
  defaultService = '',
  className,
  style,
}: QuoteFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className={className}
      style={{
        background: '#ffffff',
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: 'clamp(24px, 4vw, 40px)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
        ...style,
      }}
    >
      <h2
        style={{
          color: 'var(--color-text-dark)',
          fontWeight: 700,
          fontSize: '1.4rem',
          margin: '0 0 24px 0',
        }}
      >
        {title}
      </h2>

      {submitted ? (
        <div
          style={{
            textAlign: 'center',
            padding: '36px 16px',
            background: '#f0fdf4',
            borderRadius: '12px',
            border: '1px solid #bbf7d0',
          }}
        >
          <CheckCircle size={48} color="#16a34a" style={{ margin: '0 auto 16px' }} />
          <h3
            style={{
              color: '#14532d',
              fontSize: '1.25rem',
              fontWeight: 700,
              margin: '0 0 8px 0',
            }}
          >
            Tack för din förfrågan!
          </h3>
          <p
            style={{
              color: '#166534',
              fontSize: '0.95rem',
              lineHeight: 1.6,
              margin: '0 0 20px 0',
            }}
          >
            Vi har tagit emot dina uppgifter och återkommer med en kostnadsfri offert och kalkyl inom 24 timmar.
          </p>
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setName('');
              setEmail('');
              setPhone('');
              setMessage('');
            }}
            style={{
              padding: '10px 20px',
              background: '#16a34a',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
            }}
          >
            Skicka en ny förfrågan
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>Namn *</label>
          <input
            type="text"
            placeholder="Ditt för- och efternamn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
            onFocus={focusInput}
            onBlur={blurInput}
            required
          />

          <label style={labelStyle}>E-postadress *</label>
          <input
            type="email"
            placeholder="din.epost@doman.se"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            onFocus={focusInput}
            onBlur={blurInput}
            required
          />

          <label style={labelStyle}>Telefonnummer *</label>
          <input
            type="tel"
            placeholder="07X-XXX XX XX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={inputStyle}
            onFocus={focusInput}
            onBlur={blurInput}
            required
          />

          <label style={labelStyle}>Typ av tjänst</label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            style={{ ...inputStyle, cursor: 'pointer' }}
            onFocus={focusInput}
            onBlur={blurInput}
          >
            <option value="">Välj tjänst...</option>
            <option value="faltservice-akutinsatser">Fältservice &amp; Akutinsatser</option>
            <option value="maskinreparation-service">Maskinreparation &amp; Underhåll</option>
            <option value="svetsning-svetsteknik">Svetsning &amp; Licenssvetsning</option>
            <option value="annat">Annat uppdrag</option>
          </select>

          <label style={labelStyle}>Projektbeskrivning *</label>
          <textarea
            rows={5}
            placeholder="Beskriv ditt projekt eller reparationsbehov (t.ex. typ av arbete, maskin/anläggning, adress, önskad starttid)..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ ...inputStyle, resize: 'vertical', marginBottom: '24px' }}
            onFocus={focusInput}
            onBlur={blurInput}
            required
          />

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '16px',
              background: 'var(--color-primary)',
              color: 'var(--color-text-dark)',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(-2px)';
              el.style.boxShadow = '0 6px 20px rgba(217,119,6,0.3)';
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = 'none';
            }}
          >
            <Send size={18} /> Skicka offertförfrågan
          </button>
        </form>
      )}
    </div>
  );
}

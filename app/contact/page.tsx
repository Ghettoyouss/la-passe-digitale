'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  'Site vitrine',
  'Site e-commerce',
  'SEO & Référencement',
  'Logo & Identité visuelle',
  'Flyers & Print',
  'Cartes de visite',
  'Autre',
]

export default function ContactPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    budget: '',
  })

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap')

      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.1 }
        )
      }
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.25 }
        )
      }
    }
    initGsap()
  }, [])

  const toggleService = (s: string) => {
    setSelected((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, services: selected }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous appeler directement.')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--surface)',
    border: '1px solid var(--line)',
    borderRadius: '6px',
    padding: '14px 18px',
    fontFamily: 'var(--font-body)',
    fontSize: '15px',
    color: 'var(--text)',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  }

  const labelStyle: React.CSSProperties = {
    fontFamily: 'var(--font-body)',
    fontSize: '12px',
    fontWeight: 600,
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    display: 'block',
    marginBottom: '8px',
  }

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left : info */}
          <div ref={headerRef} style={{ opacity: 0, position: 'sticky', top: '100px' }}>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
              Contact
            </span>
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                marginBottom: '20px',
              }}
            >
              Parlons de
              <br />
              <span style={{ color: 'var(--accent)' }}>votre projet.</span>
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--text-dim)',
                lineHeight: '1.7',
                marginBottom: '48px',
              }}
            >
              Remplissez le formulaire ou appelez-nous directement. Nous vous répondons sous 24h avec une proposition sur mesure.
            </p>

            {/* Contact details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <a
                href="tel:0787135144"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  padding: '20px',
                  background: 'var(--surface)',
                  borderRadius: '8px',
                  border: '1px solid var(--line)',
                  transition: 'border-color 0.2s ease',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'var(--accent-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 14.375c0 .375-.083.742-.258 1.1-.175.342-.425.659-.742.942-.542.466-1.125.691-1.742.691-.441 0-.916-.1-1.416-.308-.5-.209-1-.5-1.5-.875-.5-.375-.975-.784-1.433-1.234-.45-.45-.859-.916-1.234-1.408-.366-.5-.658-.992-.866-1.492-.209-.5-.317-.975-.317-1.417 0-.433.092-.85.267-1.225.175-.383.433-.741.783-1.058.4-.35.842-.525 1.317-.525.183 0 .367.042.533.117.175.075.334.191.459.358l1.533 2.159c.125.166.217.316.275.458.066.133.1.267.1.391 0 .159-.042.317-.133.475-.084.159-.209.317-.367.475l-.5.525c-.075.075-.108.166-.108.275 0 .05.008.1.025.15.025.05.05.091.075.133.225.408.483.8.775 1.158.3.358.616.691.95 1 .342.308.7.591 1.075.858.375.258.75.5 1.133.692.042.025.092.05.142.066.05.025.108.034.158.034.117 0 .217-.05.292-.133l.5-.5c.166-.167.333-.3.491-.384.159-.083.317-.133.475-.133.125 0 .259.033.4.1.133.067.283.158.45.284l2.191 1.541c.159.117.275.259.35.434.059.175.1.366.1.583z" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Téléphone</p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '16px', color: 'var(--text)' }}>07 87 13 51 44</p>
                </div>
              </a>

              <a
                href="mailto:contact@lapassedigitale.com"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  textDecoration: 'none',
                  padding: '20px',
                  background: 'var(--surface)',
                  borderRadius: '8px',
                  border: '1px solid var(--line)',
                }}
              >
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'var(--accent-dim)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent)',
                    flexShrink: 0,
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.5 5.5h13a1 1 0 011 1v8a1 1 0 01-1 1h-13a1 1 0 01-1-1v-8a1 1 0 011-1z" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M3 6l7 5.5L17 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '4px' }}>Email</p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px', color: 'var(--text)' }}>contact@lapassedigitale.com</p>
                </div>
              </a>

              {/* Response time */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px 20px',
                  borderRadius: '8px',
                  background: 'rgba(226,30,81,0.08)',
                  border: '1px solid rgba(226,30,81,0.2)',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#4ade80',
                    flexShrink: 0,
                    boxShadow: '0 0 6px rgba(74,222,128,0.6)',
                  }}
                />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-dim)' }}>
                  Réponse garantie sous <strong style={{ color: 'var(--text)' }}>24 heures</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Right : form */}
          <div ref={formRef} style={{ opacity: 0 }}>
            {submitted ? (
              <div
                style={{
                  padding: '64px 48px',
                  background: 'var(--surface)',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(74,222,128,0.1)',
                    border: '2px solid rgba(74,222,128,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '28px',
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    marginBottom: '12px',
                  }}
                >
                  Message envoyé !
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--text-dim)',
                    lineHeight: '1.7',
                  }}
                >
                  Merci pour votre message. Nous vous répondrons dans les 24 heures avec une proposition personnalisée.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  background: 'var(--surface)',
                  borderRadius: '16px',
                  border: '1px solid var(--line)',
                  padding: 'clamp(28px, 4vw, 48px)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '16px',
                  }}
                  className="form-row"
                >
                  <div>
                    <label style={labelStyle}>Nom & Prénom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Entreprise</label>
                    <input
                      type="text"
                      placeholder="Votre entreprise"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
                  className="form-row"
                >
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="vous@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Téléphone</label>
                    <input
                      type="tel"
                      placeholder="06 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                {/* Services */}
                <div>
                  <label style={labelStyle}>Services souhaités</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => toggleService(s)}
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '13px',
                          padding: '8px 16px',
                          borderRadius: '4px',
                          border: '1px solid',
                          borderColor: selected.includes(s) ? 'var(--accent)' : 'var(--line)',
                          background: selected.includes(s) ? 'var(--accent)' : 'transparent',
                          color: selected.includes(s) ? '#fff' : 'var(--text-dim)',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label style={labelStyle}>Budget estimé</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    style={{
                      ...inputStyle,
                      cursor: 'pointer',
                    }}
                  >
                    <option value="" style={{ background: '#ffffff' }}>Sélectionner une fourchette</option>
                    <option value="<500" style={{ background: '#ffffff' }}>Moins de 500€</option>
                    <option value="500-1000" style={{ background: '#ffffff' }}>500€ – 1 000€</option>
                    <option value="1000-3000" style={{ background: '#ffffff' }}>1 000€ – 3 000€</option>
                    <option value="3000-5000" style={{ background: '#ffffff' }}>3 000€ – 5 000€</option>
                    <option value=">5000" style={{ background: '#ffffff' }}>Plus de 5 000€</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle}>Votre projet *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Décrivez votre projet, vos objectifs, votre délai..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      minHeight: '120px',
                    }}
                  />
                </div>

                {error && (
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--accent)' }}>{error}</p>
                )}
                <button type="submit" className="btn-primary" disabled={loading} style={{ alignSelf: 'flex-start', padding: '16px 40px', fontSize: '15px', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  {!loading && (
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-grid > div:first-child {
            position: static !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-muted);
        }
        input:focus, textarea:focus, select:focus {
          border-color: rgba(226,30,81,0.5) !important;
        }
      `}</style>
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    quote:
      "La Passe Digitale a transformé notre boutique en ligne. Professionnels, réactifs et vraiment créatifs. Nos ventes ont augmenté de 65% en seulement 3 mois. Je recommande sans hésitation.",
    name: 'Amina Khelifa',
    role: 'Fondatrice, Aurore Beauté',
    initials: 'AK',
    color: '#D4A0A0',
  },
  {
    quote:
      "Un partenaire de confiance qui comprend les enjeux d'une entreprise sérieuse. Ils ont su capturer parfaitement l'image que je voulais projeter pour mon cabinet. Résultat bluffant.",
    name: 'Maître Jean-François Leroux',
    role: 'Cabinet Leroux & Associés',
    initials: 'JL',
    color: '#8BA3C7',
  },
  {
    quote:
      "Équipe réactive, créative et à l'écoute. La landing page qu'ils ont conçue pour NovaTech a multiplié nos conversions par 3 dès le premier mois. Exactement ce qu'on cherchait.",
    name: 'Thomas Morin',
    role: 'CEO, NovaTech',
    initials: 'TM',
    color: '#7B9E87',
  },
]

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }
    initGsap()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{
        padding: '120px 0',
        background: 'var(--bg-2)',
        opacity: 0,
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'center',
          }}
          className="testimonials-grid"
        >
          {/* Left : label & quote display */}
          <div>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
              Témoignages
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 1,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                marginBottom: '48px',
              }}
            >
              Ce que disent
              <br />
              nos clients.
            </h2>

            {/* Active testimonial */}
            <div key={active} style={{ transition: 'opacity 0.4s ease' }}>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(16px, 1.5vw, 20px)',
                  color: 'var(--text-dim)',
                  lineHeight: '1.7',
                  marginBottom: '32px',
                  fontStyle: 'italic',
                }}
              >
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: testimonials[active].color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '14px',
                    color: '#040037',
                    flexShrink: 0,
                  }}
                >
                  {testimonials[active].initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '15px',
                      color: 'var(--text)',
                    }}
                  >
                    {testimonials[active].name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {testimonials[active].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right : selector cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                style={{
                  textAlign: 'left',
                  background: active === i ? 'var(--surface-2)' : 'var(--surface)',
                  border: `1px solid ${active === i ? 'rgba(226,30,81,0.35)' : 'var(--line)'}`,
                  borderRadius: '8px',
                  padding: '20px 24px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: t.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '12px',
                    color: '#040037',
                    flexShrink: 0,
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '14px',
                      color: active === i ? 'var(--text)' : 'var(--text-dim)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {t.role}
                  </p>
                </div>
                {/* Stars */}
                <div
                  style={{
                    marginLeft: 'auto',
                    display: 'flex',
                    gap: '2px',
                  }}
                >
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} width="12" height="12" viewBox="0 0 12 12" fill={active === i ? '#E21E51' : 'rgba(248,249,250,0.2)'}>
                      <path d="M6 1l1.39 2.82L10.5 4.27l-2.25 2.19.53 3.1L6 8.02l-2.78 1.54.53-3.1L1.5 4.27l3.11-.45L6 1z"/>
                    </svg>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}

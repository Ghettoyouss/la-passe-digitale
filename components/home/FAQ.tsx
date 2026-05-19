'use client'

import { useEffect, useRef, useState } from 'react'

const faqs = [
  {
    q: 'Combien coûte la création d\'un site vitrine ?',
    a: 'Nos sites vitrines démarrent à partir de 600€. Le tarif final dépend du nombre de pages, des fonctionnalités et du niveau de personnalisation. Contactez-nous pour un devis gratuit et personnalisé sous 24h.',
  },
  {
    q: 'Quel est le délai de création ?',
    a: "En moyenne, un site vitrine est livré en 2 à 3 semaines. Un site e-commerce prend généralement 3 à 6 semaines selon sa complexité. Nous nous engageons à respecter les délais convenus.",
  },
  {
    q: 'Est-ce que mon site sera bien référencé sur Google ?',
    a: "Tous nos sites intègrent les bases du SEO dès la conception : structure technique, balises, performance et responsive. Pour aller plus loin, nous proposons des prestations SEO dédiées avec suivi mensuel.",
  },
  {
    q: 'Proposez-vous un suivi après la livraison ?',
    a: "Oui. Nous proposons des forfaits de maintenance mensuelle : mises à jour, sécurité, sauvegardes et support. Vous n'êtes jamais seul après la livraison.",
  },
  {
    q: 'Puis-je modifier mon site moi-même après livraison ?',
    a: "Selon vos besoins, nous pouvons intégrer un CMS (WordPress, Strapi, etc.) qui vous permet de modifier vos textes, images et produits sans aucune connaissance technique.",
  },
  {
    q: 'Travaillez-vous avec des clients partout en France ?',
    a: "Oui, nous travaillons avec des clients sur toute la France et à l'international. Nos échanges se font par téléphone, email et visioconférence pour un suivi optimal quel que soit votre localisation.",
  },
]

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const faqItems = sectionRef.current?.querySelectorAll('.faq-item')
      if (faqItems) {
        gsap.fromTo(
          faqItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
          }
        )
      }

      const faqHeader = sectionRef.current?.querySelector('.faq-header')
      if (faqHeader) {
        gsap.fromTo(
          faqHeader,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
          }
        )
      }
    }
    initGsap()
  }, [])

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section
      ref={sectionRef}
      id="faq"
      style={{ padding: '120px 0' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="faq-grid"
        >
          {/* Left */}
          <div className="faq-header" style={{ opacity: 0, position: 'sticky', top: '100px' }}>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
              FAQ
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(36px, 3vw, 48px)',
                lineHeight: 1,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                marginBottom: '16px',
              }}
            >
              Questions
              <br />
              fréquentes.
            </h2>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--text-dim)',
                lineHeight: '1.7',
              }}
            >
              Une autre question ? Contactez-nous directement au{' '}
              <a
                href="tel:0787135144"
                style={{ color: 'var(--accent)', textDecoration: 'none', whiteSpace: 'nowrap' }}
              >
                07 87 13 51 44
              </a>
            </p>
          </div>

          {/* Right */}
          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="faq-item"
                style={{
                  opacity: 0,
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <button
                  onClick={() => toggle(i)}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: '28px 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    gap: '24px',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: 'clamp(16px, 1.5vw, 18px)',
                      color: openIndex === i ? 'var(--text)' : 'var(--text-dim)',
                      letterSpacing: '-0.01em',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {faq.q}
                  </span>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      border: `1px solid ${openIndex === i ? 'var(--accent)' : 'var(--line)'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'border-color 0.3s ease, background 0.3s ease, transform 0.3s ease',
                      background: openIndex === i ? 'var(--accent)' : 'transparent',
                      transform: openIndex === i ? 'rotate(45deg)' : 'none',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1v10M1 6h10" stroke={openIndex === i ? '#fff' : 'var(--text-dim)'} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: openIndex === i ? '300px' : '0',
                    transition: 'max-height 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '15px',
                      color: 'var(--text-dim)',
                      lineHeight: '1.75',
                      paddingBottom: '28px',
                      maxWidth: '600px',
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
          .faq-header {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}

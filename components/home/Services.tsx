'use client'

import { useEffect, useRef, useState } from 'react'

const services = [
  {
    num: '01',
    title: 'Sites Vitrines',
    short: 'Présence professionnelle',
    desc: "Un site web professionnel et percutant qui reflète l'image de votre marque. Responsive, rapide et optimisé, il devient votre meilleur commercial en ligne.",
    tags: ['Design sur mesure', 'Responsive', 'SEO intégré'],
  },
  {
    num: '02',
    title: 'E-commerce',
    short: 'Boutiques en ligne',
    desc: "Des boutiques en ligne performantes et optimisées pour la conversion. Interface intuitive, paiement sécurisé, gestion des stocks — tout pour vendre efficacement.",
    tags: ['Shopify', 'WooCommerce', 'Sur mesure'],
  },
  {
    num: '03',
    title: 'SEO & Référencement',
    short: 'Visibilité Google',
    desc: "Apparaissez en première page de Google et attirez des clients qualifiés. Audit technique, optimisation on-page, netlinking et suivi mensuel de vos positions.",
    tags: ['Audit SEO', 'Optimisation', 'Suivi mensuel'],
  },
  {
    num: '04',
    title: 'Création de Logos',
    short: 'Identité visuelle',
    desc: "Une identité visuelle unique et mémorable qui vous distingue de la concurrence. Logo, charte graphique, déclinaisons — votre marque prend vie.",
    tags: ['Branding', 'Charte graphique', 'Fichiers HD'],
  },
  {
    num: '05',
    title: 'Flyers & Print',
    short: 'Supports imprimés',
    desc: "Des supports print percutants pour vos événements, promotions et campagnes marketing. Conception créative et fichiers prêts pour l'impression.",
    tags: ['Flyers', 'Affiches', 'Bannières'],
  },
  {
    num: '06',
    title: 'Cartes de Visite',
    short: 'Premier contact',
    desc: "Des cartes de visite qui laissent une impression durable. Design professionnel, formats originaux, papiers premium — donnez envie qu'on vous rappelle.",
    tags: ['Design pro', 'Formats variés', 'Impression'],
  },
]

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const items = sectionRef.current?.querySelectorAll('.service-item')
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
            },
          }
        )
      }

      const sectionHeader = sectionRef.current?.querySelector('.section-header')
      if (sectionHeader) {
        gsap.fromTo(
          sectionHeader,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
            },
          }
        )
      }
    }
    initGsap()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services"
      style={{ padding: '120px 0' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div
          className="section-header"
          style={{ opacity: 0, marginBottom: '72px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}
        >
          <div>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
              Nos Services
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: '1',
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                maxWidth: '520px',
              }}
            >
              Tout ce dont votre marque a besoin.
            </h2>
          </div>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--text-dim)',
              lineHeight: '1.7',
              maxWidth: '360px',
            }}
          >
            De la création de votre identité digitale à votre référencement Google, on s'occupe de tout.
          </p>
        </div>

        {/* Services list */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((service, i) => (
            <div
              key={i}
              className="service-item"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              style={{
                opacity: 0,
                display: 'grid',
                gridTemplateColumns: '60px 1fr auto',
                alignItems: 'center',
                gap: '32px',
                padding: '32px 0',
                borderBottom: '1px solid var(--line)',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
            >
              {/* Number */}
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '12px',
                  fontWeight: 600,
                  color: activeIndex === i ? 'var(--accent)' : 'var(--text-muted)',
                  letterSpacing: '2px',
                  transition: 'color 0.3s ease',
                }}
              >
                {service.num}
              </span>

              {/* Content */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '10px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: 'clamp(20px, 2.5vw, 28px)',
                      letterSpacing: '-0.02em',
                      color: 'var(--text)',
                      lineHeight: 1,
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {service.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {service.short}
                  </span>
                </div>

                {/* Tags — toujours visibles */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        fontWeight: 600,
                        color: 'var(--accent)',
                        background: 'rgba(226,30,81,0.08)',
                        border: '1px solid rgba(226,30,81,0.22)',
                        padding: '4px 10px',
                        borderRadius: '20px',
                        letterSpacing: '0.3px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description revealed on hover */}
                <div
                  style={{
                    overflow: 'hidden',
                    maxHeight: activeIndex === i ? '60px' : '0',
                    transition: 'max-height 0.4s ease',
                  }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-dim)',
                      lineHeight: '1.65',
                      marginTop: '8px',
                      maxWidth: '580px',
                    }}
                  >
                    {service.desc}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1px solid',
                  borderColor: activeIndex === i ? 'var(--accent)' : 'var(--line)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'border-color 0.3s ease, background 0.3s ease, transform 0.3s ease',
                  background: activeIndex === i ? 'var(--accent)' : 'transparent',
                  transform: activeIndex === i ? 'rotate(-45deg)' : 'none',
                  flexShrink: 0,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7h12M8 3l4 4-4 4" stroke={activeIndex === i ? '#fff' : 'var(--text-dim)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef } from 'react'

const steps = [
  {
    num: '01',
    title: 'Brief & Stratégie',
    desc: "On écoute votre vision, analysons vos besoins et définissons ensemble la meilleure stratégie digitale pour atteindre vos objectifs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Design & Développement',
    desc: "Nos créatifs conçoivent une expérience sur mesure, puis nos développeurs donnent vie à votre projet avec les meilleures technologies.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Livraison & Suivi',
    desc: "On lance votre projet et restons à vos côtés pour assurer son succès. Maintenance, mises à jour, et support réactif inclus.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        sectionRef.current?.querySelector('.process-header'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      const cards = sectionRef.current?.querySelectorAll('.process-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
            scrollTrigger: { trigger: sectionRef.current, start: 'top 65%' },
          }
        )
      }
    }
    initGsap()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: '120px 0' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div
          className="process-header"
          style={{ opacity: 0, textAlign: 'center', marginBottom: '80px' }}
        >
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
            Notre Méthode
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 4vw, 56px)',
              lineHeight: 1,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
            }}
          >
            Simple, rapide, efficace.
          </h2>
        </div>

        {/* Steps */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2px',
          }}
        >
          {steps.map((step, i) => (
            <div
              key={i}
              className="process-card"
              style={{
                opacity: 0,
                padding: '48px 40px',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                borderRadius: i === 0 ? '8px 0 0 8px' : i === steps.length - 1 ? '0 8px 8px 0' : '0',
                position: 'relative',
              }}
            >
              {/* Accent top line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: '40px',
                  right: '40px',
                  height: '2px',
                  background: 'var(--accent)',
                  opacity: 0.5,
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  background: 'var(--accent-dim)',
                  border: '1px solid rgba(226,30,81,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: '24px',
                }}
              >
                {step.icon}
              </div>

              {/* Number */}
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '3px',
                  color: 'var(--accent)',
                  display: 'block',
                  marginBottom: '12px',
                }}
              >
                ÉTAPE {step.num}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '22px',
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  marginBottom: '12px',
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--text-dim)',
                  lineHeight: '1.7',
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

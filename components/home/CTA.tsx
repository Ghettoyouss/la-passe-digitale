'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        sectionRef.current?.querySelector('.cta-inner'),
        { opacity: 0, y: 50, scale: 0.97 },
        {
          opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
    }
    initGsap()
  }, [])

  return (
    <section
      ref={sectionRef}
      style={{ padding: '120px 32px' }}
    >
      <div
        className="cta-inner"
        style={{
          opacity: 0,
          maxWidth: '1280px',
          margin: '0 auto',
          background: 'var(--accent)',
          borderRadius: '16px',
          padding: 'clamp(48px, 6vw, 80px)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}
      >
        {/* Background texture */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '11px',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.65)',
              display: 'block',
              marginBottom: '20px',
            }}
          >
            Prêt à démarrer ?
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 64px)',
              lineHeight: '1',
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: '20px',
            }}
          >
            Transformez votre
            <br />
            présence digitale.
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(15px, 1.5vw, 18px)',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: '1.6',
              maxWidth: '480px',
              margin: '0 auto 40px',
            }}
          >
            Discutons de votre projet. Devis gratuit, réponse sous 24h.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <Link
              href="/contact"
              style={{
                background: '#fff',
                color: 'var(--accent)',
                padding: '16px 36px',
                borderRadius: '4px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '0.02em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                transition: 'transform 0.2s ease, background 0.2s ease',
              }}
            >
              Demander un devis gratuit
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a
              href="tel:0787135144"
              style={{
                background: 'transparent',
                color: '#fff',
                padding: '15px 36px',
                borderRadius: '4px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '0.02em',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                border: '1px solid rgba(255,255,255,0.4)',
                transition: 'background 0.2s ease, border-color 0.2s ease',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 11.5c0 .3-.07.6-.21.87-.14.27-.34.52-.59.72-.43.37-.9.55-1.39.55-.35 0-.73-.08-1.13-.25-.41-.17-.82-.4-1.22-.7-.4-.3-.78-.63-1.14-.99-.36-.36-.69-.74-.99-1.14-.3-.4-.53-.8-.7-1.2-.17-.4-.25-.78-.25-1.13 0-.34.07-.67.21-.97.14-.3.35-.58.63-.83.32-.28.68-.42 1.06-.42.15 0 .3.03.43.09.14.06.26.15.36.28l1.23 1.73c.1.13.17.25.22.37.05.11.08.22.08.32 0 .13-.04.26-.11.38-.07.13-.17.26-.3.39l-.4.42c-.06.06-.09.13-.09.22 0 .04.01.08.02.12.02.04.04.07.06.1.18.33.39.64.62.93.24.28.49.55.76.8.28.25.56.48.86.69.3.21.6.4.91.56.03.02.06.04.11.05.04.02.09.02.13.02.1 0 .17-.04.23-.1l.4-.4c.14-.14.27-.24.4-.31.13-.07.25-.11.38-.11.1 0 .2.02.32.07.11.05.23.12.36.22l1.75 1.24c.13.1.22.22.28.36.05.14.08.29.08.46z" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              07 87 13 51 44
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

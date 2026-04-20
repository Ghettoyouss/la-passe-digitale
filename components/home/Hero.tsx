'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let gsap: typeof import('gsap').gsap
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger

    const initGsap = async () => {
      const gsapModule = await import('gsap')
      const stModule = await import('gsap/ScrollTrigger')
      gsap = gsapModule.gsap
      ScrollTrigger = stModule.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      const tl = gsap.timeline({ delay: 0.1 })

      // Label reveal
      const heroLabel = heroRef.current?.querySelector('.hero-label')
      if (heroLabel) {
        tl.fromTo(
          heroLabel,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }
        )
      }

      // Title lines reveal
      const lines = titleRef.current?.querySelectorAll('.line-inner')
      if (lines) {
        tl.fromTo(
          lines,
          { y: '105%' },
          { y: '0%', duration: 0.9, stagger: 0.12, ease: 'power4.out' },
          '-=0.3'
        )
      }

      // Sub reveal
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )

      // CTA reveal
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
        '-=0.5'
      )

      // Stats counter
      const statItems = statsRef.current?.querySelectorAll('.stat-item')
      if (statItems) {
        tl.fromTo(
          statItems,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' },
          '-=0.4'
        )
      }

      // Parallax on scroll
      if (heroRef.current) {
        const heroBg = heroRef.current.querySelector('.hero-bg')
        if (heroBg) {
          gsap.to(heroBg, {
            y: '25%',
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          })
        }
      }
    }

    initGsap()
  }, [])

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* Background elements */}
      <div
        className="hero-bg"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
        }}
      >
        {/* Grid */}
        <div
          className="grid-bg"
          style={{ position: 'absolute', inset: 0, opacity: 0.6 }}
        />
        {/* Gradient blobs */}
        <div
          style={{
            position: 'absolute',
            top: '15%',
            right: '-5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(226,30,81,0.08) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '10%',
            left: '-10%',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(4,0,55,0.06) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        {/* Label */}
        <div
          className="hero-label"
          style={{ opacity: 0, marginBottom: '28px' }}
        >
          <span className="section-label">Agence Digitale Créative</span>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw + 12px, 96px)',
            lineHeight: '0.97',
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '28px',
            maxWidth: '900px',
          }}
        >
          {['On propulse', 'votre marque', 'dans l\'ère digitale.'].map((line, i) => (
            <span
              key={i}
              className="reveal-line"
              style={{ display: 'block' }}
            >
              <span
                className="line-inner"
                style={{
                  display: 'inline-block',
                  color: i === 2 ? 'var(--accent)' : 'var(--text)',
                }}
              >
                {line}
              </span>
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          style={{
            opacity: 0,
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            color: 'var(--text-dim)',
            lineHeight: '1.6',
            maxWidth: '520px',
            marginBottom: '40px',
          }}
        >
          Sites vitrines, e-commerce, SEO, logos, flyers et cartes de visite.
          Votre réussite digitale commence ici.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{
            opacity: 0,
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '72px',
          }}
        >
          <Link href="/contact" className="btn-primary">
            Demander un devis
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
          <Link href="/portfolio" className="btn-outline">
            Voir nos réalisations
          </Link>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="stats-grid"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0',
            borderTop: '1px solid var(--line)',
            paddingTop: '40px',
          }}
        >
          {[
            { value: '50+', label: 'Projets réalisés' },
            { value: '3 ans', label: "d'expérience" },
            { value: '98%', label: 'Clients satisfaits' },
            { value: '72h', label: 'Délai moyen de réponse' },
          ].map((stat, i) => (
            <div
              key={i}
              className="stat-item"
              style={{
                opacity: 0,
                flex: '1 1 140px',
                padding: '0 40px 0 0',
                borderRight: i < 3 ? '1px solid var(--line)' : 'none',
                marginRight: i < 3 ? '40px' : '0',
                paddingLeft: i > 0 ? '0' : '0',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: 'clamp(28px, 3vw, 40px)',
                  color: 'var(--text)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '11px',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(248,249,250,0.4), transparent)',
            animation: 'pulse 2s infinite',
          }}
        />
      </div>
    </section>
  )
}

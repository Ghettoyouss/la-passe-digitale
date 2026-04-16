'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const projects = [
  {
    id: 1,
    title: 'Aurore Beauté',
    category: 'E-commerce',
    tags: ['Site e-commerce', 'SEO', 'Logo'],
    desc: 'Boutique en ligne premium pour une marque de cosmétiques naturels parisienne.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    accent: '#D4A0A0',
    year: '2024',
  },
  {
    id: 2,
    title: 'Cabinet Leroux',
    category: 'Site Vitrine',
    tags: ['Site vitrine', 'SEO', 'Carte de visite'],
    desc: "Refonte complète de l'identité digitale d'un cabinet d'avocats parisien.",
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    accent: '#8BA3C7',
    year: '2024',
  },
  {
    id: 3,
    title: 'NovaTech',
    category: 'Landing Page',
    tags: ['Site', 'Logo', 'Identité visuelle'],
    desc: 'Landing page haut de gamme pour une startup SaaS en pleine croissance.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
    accent: '#6E86C8',
    year: '2024',
  },
  {
    id: 4,
    title: 'Maison Dubois',
    category: 'Site Vitrine',
    tags: ['Site vitrine', 'SEO local', 'Flyers'],
    desc: 'Présence digitale complète pour une boulangerie lyonnaise au savoir-faire centenaire.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80',
    accent: '#D4B896',
    year: '2023',
  },
]

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null)
  const [hovered, setHovered] = useState<number | null>(null)

  useEffect(() => {
    const initGsap = async () => {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      gsap.fromTo(
        sectionRef.current?.querySelector('.portfolio-header'),
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )

      const cards = sectionRef.current?.querySelectorAll('.portfolio-card')
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
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
      style={{ padding: '120px 0', background: 'var(--bg-2)' }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>
        {/* Header */}
        <div
          className="portfolio-header"
          style={{
            opacity: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '64px',
          }}
        >
          <div>
            <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
              Portfolio
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
              Nos dernières
              <br />
              <span style={{ color: 'var(--accent)' }}>réalisations.</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="btn-outline"
            style={{ flexShrink: 0 }}
          >
            Voir tout
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="portfolio-card"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                opacity: 0,
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                cursor: 'pointer',
                transition: 'transform 0.4s ease, border-color 0.3s ease',
                transform: hovered === i ? 'translateY(-6px)' : 'none',
                borderColor: hovered === i ? 'rgba(226,30,81,0.3)' : 'var(--line)',
              }}
            >
              {/* Image */}
              <div
                style={{
                  position: 'relative',
                  aspectRatio: '16/10',
                  overflow: 'hidden',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    transform: hovered === i ? 'scale(1.06)' : 'scale(1)',
                    filter: hovered === i ? 'brightness(0.85)' : 'brightness(0.75)',
                  }}
                />
                {/* Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(to bottom, transparent 40%, rgba(4,0,55,0.7) 100%)`,
                  }}
                />
                {/* Category badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    background: 'rgba(226,30,81,0.85)',
                    padding: '4px 10px',
                    borderRadius: '2px',
                  }}
                >
                  {project.category}
                </span>
                <span
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '12px',
                    color: 'rgba(248,249,250,0.6)',
                  }}
                >
                  {project.year}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: '24px' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '22px',
                    letterSpacing: '-0.02em',
                    color: 'var(--text)',
                    marginBottom: '8px',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    color: 'var(--text-dim)',
                    lineHeight: '1.6',
                    marginBottom: '16px',
                  }}
                >
                  {project.desc}
                </p>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '11px',
                        color: 'var(--text-muted)',
                        background: 'var(--surface-2)',
                        padding: '3px 10px',
                        borderRadius: '2px',
                        border: '1px solid var(--line)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

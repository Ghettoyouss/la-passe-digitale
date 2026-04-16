'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const allProjects = [
  {
    id: 1,
    title: 'Aurore Beauté',
    category: 'E-commerce',
    tags: ['Site e-commerce', 'SEO', 'Logo'],
    desc: 'Boutique en ligne premium pour une marque de cosmétiques naturels parisienne. Refonte complète de l\'identité de marque et développement Shopify sur mesure.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=900&q=80',
    year: '2024',
    results: '+65% de ventes en 3 mois',
  },
  {
    id: 2,
    title: 'Cabinet Leroux & Associés',
    category: 'Site Vitrine',
    tags: ['Site vitrine', 'SEO', 'Carte de visite'],
    desc: "Refonte complète de l'identité digitale d'un cabinet d'avocats parisien. Design sobre et professionnel qui inspire confiance et génère des contacts qualifiés.",
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    year: '2024',
    results: '+40 contacts/mois depuis le site',
  },
  {
    id: 3,
    title: 'NovaTech',
    category: 'Landing Page',
    tags: ['Site', 'Logo', 'Identité visuelle'],
    desc: 'Landing page haut de gamme pour une startup SaaS en pleine croissance. Animations modernes, copywriting optimisé et tunnel de conversion performant.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80',
    year: '2024',
    results: 'Conversions ×3 dès le premier mois',
  },
  {
    id: 4,
    title: 'Maison Dubois',
    category: 'Site Vitrine',
    tags: ['Site vitrine', 'SEO local', 'Flyers'],
    desc: 'Présence digitale complète pour une boulangerie lyonnaise au savoir-faire centenaire. SEO local optimisé, photos professionnelles et flyers pour les événements.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=80',
    year: '2023',
    results: 'Page 1 Google « boulangerie Lyon »',
  },
  {
    id: 5,
    title: 'Studio Iris',
    category: 'Portfolio',
    tags: ['Site portfolio', 'Identité visuelle'],
    desc: 'Portfolio immersif pour une photographe de mode internationale. Galeries plein écran, transitions fluides et identité visuelle épurée qui met les photos en valeur.',
    image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=900&q=80',
    year: '2023',
    results: '3 nouvelles collaborations en 2 mois',
  },
  {
    id: 6,
    title: 'Brasserie Le Comptoir',
    category: 'Site Vitrine',
    tags: ['Site vitrine', 'Flyers', 'Cartes de visite'],
    desc: 'Présence digitale chaleureuse pour une brasserie du 11ème arrondissement de Paris. Réservation en ligne intégrée et supports print pour toutes les saisons.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80',
    year: '2024',
    results: '+200 réservations en ligne par mois',
  },
]

const categories = ['Tous', 'Site Vitrine', 'E-commerce', 'Landing Page', 'Portfolio']

export default function PortfolioPage() {
  const [filter, setFilter] = useState('Tous')
  const [hovered, setHovered] = useState<number | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const filtered = filter === 'Tous'
    ? allProjects
    : allProjects.filter((p) => p.category === filter)

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
    }
    initGsap()
  }, [])

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div
          ref={headerRef}
          style={{ opacity: 0, marginBottom: '64px' }}
        >
          <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
            Portfolio
          </span>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
            }}
          >
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: 'clamp(40px, 5vw, 72px)',
                lineHeight: '0.97',
                letterSpacing: '-0.03em',
                color: 'var(--text)',
              }}
            >
              Nos réalisations.
            </h1>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '15px',
                color: 'var(--text-dim)',
                lineHeight: '1.7',
                maxWidth: '360px',
              }}
            >
              Chaque projet est une collaboration unique, pensée pour atteindre vos objectifs.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            marginBottom: '48px',
            paddingBottom: '32px',
            borderBottom: '1px solid var(--line)',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '8px 18px',
                borderRadius: '4px',
                border: '1px solid',
                borderColor: filter === cat ? 'var(--accent)' : 'var(--line)',
                background: filter === cat ? 'var(--accent)' : 'transparent',
                color: filter === cat ? '#fff' : 'var(--text-dim)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
            gap: '24px',
          }}
        >
          {filtered.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                background: 'var(--surface)',
                border: '1px solid var(--line)',
                cursor: 'default',
                transition: 'transform 0.4s ease, border-color 0.3s ease',
                transform: hovered === project.id ? 'translateY(-6px)' : 'none',
                borderColor: hovered === project.id ? 'rgba(226,30,81,0.35)' : 'var(--line)',
              }}
            >
              {/* Image */}
              <div
                style={{ position: 'relative', aspectRatio: '16/10', overflow: 'hidden' }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    transform: hovered === project.id ? 'scale(1.06)' : 'scale(1)',
                    filter: 'brightness(0.75)',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(4,0,55,0.7) 100%)',
                  }}
                />
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
                    color: '#fff',
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
              <div style={{ padding: '28px' }}>
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
                    lineHeight: '1.65',
                    marginBottom: '20px',
                  }}
                >
                  {project.desc}
                </p>

                {/* Result badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--accent-dim)',
                    border: '1px solid rgba(226,30,81,0.2)',
                    borderRadius: '4px',
                    padding: '6px 12px',
                    marginBottom: '20px',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10l3-3 2 2 3-5" stroke="#E21E51" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '12px',
                      color: 'var(--accent)',
                      fontWeight: 500,
                    }}
                  >
                    {project.results}
                  </span>
                </div>

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

        {/* CTA */}
        <div
          style={{
            textAlign: 'center',
            paddingTop: '80px',
            marginTop: '80px',
            borderTop: '1px solid var(--line)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: 'clamp(28px, 3vw, 40px)',
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '16px',
            }}
          >
            Votre projet est le prochain ?
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '15px',
              color: 'var(--text-dim)',
              marginBottom: '32px',
            }}
          >
            Contactez-nous pour discuter de votre projet.
          </p>
          <Link href="/contact" className="btn-primary">
            Démarrer un projet
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

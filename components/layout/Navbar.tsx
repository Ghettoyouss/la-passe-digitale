'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/#services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease',
          background: scrolled ? 'rgba(255,255,255,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(4,0,55,0.08)' : '1px solid transparent',
        }}
      >
        <nav
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 32px',
            height: '72px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
            }}
          >
            <Image
              src="/logo.png"
              alt="La Passe Digitale"
              width={220}
              height={64}
              style={{ objectFit: 'contain', height: '64px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul
            style={{
              alignItems: 'center',
              gap: '36px',
              listStyle: 'none',
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '14px',
                    fontWeight: 500,
                    color:
                      pathname === link.href
                        ? 'var(--text)'
                        : 'var(--text-dim)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    letterSpacing: '0.01em',
                  }}
                  className="link-underline"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className="btn-primary hidden md:inline-flex"
            style={{ fontSize: '13px', padding: '11px 24px' }}
          >
            Devis gratuit
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              color: 'var(--text)',
              display: 'flex',
              flexDirection: 'column',
              gap: '5px',
            }}
            aria-label="Menu"
          >
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'var(--text)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none',
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'var(--text)',
                transition: 'opacity 0.3s ease',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: 'block',
                width: '24px',
                height: '1.5px',
                background: 'var(--text)',
                transition: 'transform 0.3s ease, opacity 0.3s ease',
                transform: menuOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none',
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          background: 'var(--bg)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '32px',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
          opacity: menuOpen ? 1 : 0,
          transform: menuOpen ? 'translateY(0)' : 'translateY(-20px)',
          pointerEvents: menuOpen ? 'all' : 'none',
        }}
      >
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 8vw, 48px)',
                  fontWeight: 700,
                  color: 'var(--text)',
                  textDecoration: 'none',
                  letterSpacing: '-0.02em',
                  display: 'block',
                  transition: 'color 0.2s ease',
                  transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '48px', borderTop: '1px solid var(--line)', paddingTop: '32px' }}>
          <a
            href="tel:0787135144"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '16px',
              color: 'var(--text-dim)',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14 11.5c0 .3-.07.6-.21.87-.14.27-.34.52-.59.72-.43.37-.9.55-1.39.55-.35 0-.73-.08-1.13-.25-.41-.17-.82-.4-1.22-.7-.4-.3-.78-.63-1.14-.99-.36-.36-.69-.74-.99-1.14-.3-.4-.53-.8-.7-1.2-.17-.4-.25-.78-.25-1.13 0-.34.07-.67.21-.97.14-.3.35-.58.63-.83.32-.28.68-.42 1.06-.42.15 0 .3.03.43.09.14.06.26.15.36.28l1.23 1.73c.1.13.17.25.22.37.05.11.08.22.08.32 0 .13-.04.26-.11.38-.07.13-.17.26-.3.39l-.4.42c-.06.06-.09.13-.09.22 0 .04.01.08.02.12.02.04.04.07.06.1.18.33.39.64.62.93.24.28.49.55.76.8.28.25.56.48.86.69.3.21.6.4.91.56.03.02.06.04.11.05.04.02.09.02.13.02.1 0 .17-.04.23-.1l.4-.4c.14-.14.27-.24.4-.31.13-.07.25-.11.38-.11.1 0 .2.02.32.07.11.05.23.12.36.22l1.75 1.24c.13.1.22.22.28.36.05.14.08.29.08.46z" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            07 87 13 51 44
          </a>
        </div>
      </div>
    </>
  )
}

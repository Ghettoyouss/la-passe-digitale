import Link from 'next/link'
import Image from 'next/image'

const services = [
  'Sites vitrines',
  'E-commerce',
  'SEO & Référencement',
  'Création de logos',
  'Flyers & print',
  'Cartes de visite',
]

const links = [
  { href: '/', label: 'Accueil' },
  { href: '/#services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        background: 'var(--bg-2)',
        borderTop: '1px solid var(--line)',
        paddingTop: '80px',
        paddingBottom: '32px',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 32px',
        }}
      >
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            paddingBottom: '64px',
            borderBottom: '1px solid var(--line)',
            textAlign: 'center',
          }}
        >
          {/* Brand */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                marginBottom: '16px',
              }}
            >
              <Image
                src="/logo.png"
                alt="La Passe Digitale"
                width={240}
                height={72}
                style={{ objectFit: 'contain', height: '72px', width: 'auto' }}
              />
            </Link>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                color: 'var(--text-dim)',
                lineHeight: '1.7',
                maxWidth: '280px',
              }}
            >
              Agence digitale créative spécialisée dans la création de sites internet et l'identité visuelle.
            </p>
            <a
              href="tel:0787135144"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginTop: '20px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '15px',
                color: 'var(--accent)',
                textDecoration: 'none',
              }}
            >
              07 87 13 51 44
            </a>
          </div>

          {/* Navigation */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="section-label" style={{ marginBottom: '20px' }}>Navigation</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-underline"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-dim)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="section-label" style={{ marginBottom: '20px' }}>Services</p>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              {services.map((s) => (
                <li key={s}>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      color: 'var(--text-dim)',
                    }}
                  >
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p className="section-label" style={{ marginBottom: '20px' }}>Contactez-nous</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
              <a
                href="mailto:contact@lapassedigitale.com"
                className="link-underline"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--text-dim)',
                  textDecoration: 'none',
                }}
              >
                contact@lapassedigitale.com
              </a>
              <a
                href="tel:0787135144"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '14px',
                  color: 'var(--text-dim)',
                  textDecoration: 'none',
                }}
              >
                07 87 13 51 44
              </a>
            </div>
            <Link
              href="/contact"
              className="btn-primary"
              style={{ marginTop: '24px', fontSize: '13px', padding: '11px 24px', whiteSpace: 'nowrap' }}
            >
              Devis gratuit
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '16px',
            paddingTop: '32px',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--text-muted)',
            }}
          >
            © {year} La Passe Digitale. Tous droits réservés.
          </p>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              color: 'var(--text-muted)',
            }}
          >
            Fait avec passion en France 🇫🇷
          </p>
        </div>
      </div>
    </footer>
  )
}

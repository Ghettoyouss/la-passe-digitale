import Link from 'next/link'

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '32px',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-heading)',
          fontSize: '120px',
          fontWeight: 700,
          color: 'rgba(226,30,81,0.15)',
          lineHeight: 1,
          letterSpacing: '-0.04em',
        }}
      >
        404
      </span>
      <h1
        style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: 'clamp(28px, 4vw, 48px)',
          letterSpacing: '-0.025em',
          color: 'var(--text)',
          marginTop: '-24px',
          marginBottom: '16px',
        }}
      >
        Page introuvable
      </h1>
      <p
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '15px',
          color: 'var(--text-dim)',
          marginBottom: '40px',
        }}
      >
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <Link href="/" className="btn-primary">
        Retour à l&apos;accueil
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </Link>
    </div>
  )
}

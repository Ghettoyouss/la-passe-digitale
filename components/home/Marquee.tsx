export default function Marquee() {
  const items = [
    'Sites Vitrines',
    'E-commerce',
    'SEO & Référencement',
    'Logos & Identité',
    'Flyers & Print',
    'Cartes de Visite',
  ]

  const doubled = [...items, ...items]

  return (
    <div
      style={{
        overflow: 'hidden',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        padding: '20px 0',
        background: 'var(--bg-2)',
      }}
    >
      <div
        style={{
          display: 'flex',
          animation: 'marquee 24s linear infinite',
          whiteSpace: 'nowrap',
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: '13px',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: i % 2 === 0 ? 'var(--text-dim)' : 'var(--accent)',
              paddingRight: '48px',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '48px',
              flexShrink: 0,
            }}
          >
            {item}
            <span
              style={{
                display: 'inline-block',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: 'var(--accent)',
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  )
}

export default function MentionsLegales() {
  return (
    <div style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 32px' }}>

        <span className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
          Informations légales
        </span>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1,
            letterSpacing: '-0.03em',
            color: 'var(--text)',
            marginBottom: '64px',
          }}
        >
          Mentions légales
        </h1>

        {[
          {
            title: 'Éditeur du site',
            content: [
              'Raison sociale : La Passe Digitale',
              'Forme juridique : Auto-entrepreneur',
              'SIRET : 924 011 927 00010',
              'Email : contact@lapassedigitale.com',
              'Téléphone : 07 87 13 51 44',
            ],
          },
          {
            title: 'Hébergement',
            content: [
              'Vercel Inc.',
              '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
              'Site : vercel.com',
            ],
          },
          {
            title: 'Propriété intellectuelle',
            content: [
              "L'ensemble du contenu de ce site (textes, images, graphismes, logo) est la propriété exclusive de La Passe Digitale et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.",
              "Toute reproduction, représentation, modification ou exploitation sans autorisation préalable est strictement interdite.",
            ],
          },
          {
            title: 'Données personnelles',
            content: [
              "Les informations collectées via le formulaire de contact sont utilisées uniquement pour répondre à vos demandes et ne sont en aucun cas cédées à des tiers.",
              "Conformément à la loi Informatique et Libertés du 6 janvier 1978 et au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant à contact@lapassedigitale.com.",
            ],
          },
          {
            title: 'Cookies',
            content: [
              "Ce site n'utilise pas de cookies de tracking ou publicitaires. Des cookies techniques essentiels au fonctionnement du site peuvent être utilisés.",
            ],
          },
          {
            title: 'Responsabilité',
            content: [
              "La Passe Digitale s'efforce de maintenir les informations de ce site à jour et exactes mais ne peut garantir l'exhaustivité ou l'exactitude des contenus publiés.",
              "La Passe Digitale ne saurait être tenue responsable des dommages directs ou indirects résultant de l'utilisation de ce site.",
            ],
          },
        ].map((section, i) => (
          <div
            key={i}
            style={{
              marginBottom: '48px',
              paddingBottom: '48px',
              borderBottom: '1px solid var(--line)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 700,
                fontSize: '20px',
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                marginBottom: '16px',
              }}
            >
              {section.title}
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {section.content.map((line, j) => (
                <p
                  key={j}
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '15px',
                    color: 'var(--text-dim)',
                    lineHeight: '1.7',
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        ))}

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '13px',
            color: 'var(--text-muted)',
          }}
        >
          Dernière mise à jour : avril 2026
        </p>
      </div>
    </div>
  )
}

'use client';

import Link from 'next/link';

const ARTICLES = [
  {
    slug: 'reconstruction-caterpillar-c18',
    date: '15 Mars 2025',
    category: 'Retour d\'Expérience',
    title: 'Reconstruction complète d\'un Caterpillar C18 : de la réception à la livraison',
    excerpt: 'Découvrez les étapes clés de la reconstruction d\'un moteur Cat C18 de 831ch pour un client des travaux publics. Un projet de 3 semaines mené avec une précision chirurgicale.',
    readTime: '8 min',
    featured: true,
  },
  {
    slug: 'banc-essai-2000cv',
    date: '28 Février 2025',
    category: 'Équipement',
    title: 'Notre nouveau banc d\'essai 2 000 CV : capacité doublée',
    excerpt: 'M.B.I investit dans un nouveau banc d\'essai dynamométrique capable de tester des moteurs jusqu\'à 2 000 chevaux. Une première dans la région Auvergne-Rhône-Alpes.',
    readTime: '5 min',
    featured: true,
  },
  {
    slug: 'certification-bosch-2025',
    date: '10 Février 2025',
    category: 'Certification',
    title: 'Renouvellement de notre certification Bosch Diesel Center',
    excerpt: 'Pour la 12ème année consécutive, M.B.I obtient la certification Bosch Diesel Center, garantissant la conformité de nos interventions sur les systèmes injection.',
    readTime: '4 min',
  },
  {
    slug: 'demarche-rse-epuration',
    date: '22 Janvier 2025',
    category: 'RSE',
    title: 'Notre station d\'épuration interne : 98% des eaux recyclées',
    excerpt: 'Zoom sur notre engagement environnemental avec une station d\'épuration interne qui permet de recycler 98% des eaux usées de nos processus industriels.',
    readTime: '6 min',
  },
  {
    slug: 'salon-intermat-2025',
    date: '5 Janvier 2025',
    category: 'Événement',
    title: 'M.B.I au Salon Intermat 2025 — Stand B42',
    excerpt: 'Retrouvez-nous au Salon International des Matériels de Construction et du TP à Paris-Nord Villepinte. Démonstrations live de nos processus de reconstruction.',
    readTime: '3 min',
  },
  {
    slug: 'guide-maintenance-preventive',
    date: '12 Décembre 2024',
    category: 'Technique',
    title: 'Guide : 5 signes qu\'un moteur diesel nécessite une reconstruction',
    excerpt: 'Perte de puissance, fumées excessives, consommation d\'huile anormale... Apprenez à reconnaître les signes avant-coureurs pour anticiper la reconstruction.',
    readTime: '7 min',
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        padding: 'var(--space-32) var(--space-10)',
        paddingBottom: 'var(--space-20)',
        background: 'var(--surface)',
      }}>
        <div className="container">
          <span className="label-md" style={{ color: 'var(--primary)', display: 'block', marginBottom: 'var(--space-6)' }}>
            Blog / Actualités
          </span>
          <h1 className="display-md" style={{ color: 'white', maxWidth: '900px' }}>
            Actualités & Expertise
          </h1>
          <p className="body-lg" style={{ maxWidth: '640px', marginTop: 'var(--space-8)' }}>
            Innovations, retours d&apos;expérience, conseils techniques et événements — restez informé de l&apos;actualité M.B.I Engine Solutions.
          </p>
        </div>
      </section>

      {/* Featured articles */}
      <section style={{
        padding: 'var(--space-16) var(--space-10)',
        background: 'var(--surface-container-lowest)',
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-8)',
        }}>
          {ARTICLES.filter(a => a.featured).map((article) => (
            <article
              key={article.slug}
              className="reveal"
              style={{
                background: 'var(--surface-container-low)',
                padding: 'var(--space-12)',
                borderTop: '3px solid var(--primary)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '320px',
                transition: 'background 0.4s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-container)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--surface-container-low)'}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                  <span style={{
                    background: 'rgba(173, 199, 255, 0.1)',
                    color: 'var(--primary)',
                    padding: '3px 10px',
                    fontSize: '0.625rem',
                    fontFamily: 'var(--font-label)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>
                    {article.category}
                  </span>
                  <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                    {article.date}
                  </span>
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'white',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                  marginBottom: 'var(--space-6)',
                }}>
                  {article.title}
                </h2>
                <p className="body-md" style={{ maxWidth: '500px' }}>
                  {article.excerpt}
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'var(--space-8)' }}>
                <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '0.875rem', verticalAlign: 'middle', marginRight: '4px' }}>schedule</span>
                  {article.readTime} de lecture
                </span>
                <span style={{ color: 'var(--primary)', fontFamily: 'var(--font-label)', fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Lire →
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* All articles grid */}
      <section style={{
        padding: 'var(--space-20) var(--space-10)',
        background: 'var(--surface)',
      }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          <h2 className="headline-sm" style={{ color: 'white', marginBottom: 'var(--space-12)' }}>
            Tous les articles
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-1)',
          }}>
            {ARTICLES.map((article, index) => (
              <article
                key={article.slug}
                className="reveal"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr auto',
                  gap: 'var(--space-8)',
                  alignItems: 'center',
                  padding: 'var(--space-6) var(--space-8)',
                  background: index % 2 === 0 ? 'var(--surface-container-lowest)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--surface-container-low)'}
                onMouseLeave={(e) => e.currentTarget.style.background = index % 2 === 0 ? 'var(--surface-container-lowest)' : 'transparent'}
              >
                <div>
                  <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                    {article.date}
                  </span>
                </div>
                <div>
                  <span style={{
                    color: 'var(--primary)',
                    fontSize: '0.5625rem',
                    fontFamily: 'var(--font-label)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginRight: 'var(--space-4)',
                  }}>
                    {article.category}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'white',
                    textTransform: 'uppercase',
                  }}>
                    {article.title}
                  </span>
                </div>
                <div>
                  <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                    {article.readTime}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section style={{
        padding: 'var(--space-24) var(--space-10)',
        background: 'var(--surface-container-lowest)',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <span className="material-symbols-outlined reveal" style={{
            fontSize: '3rem',
            color: 'var(--primary)',
            display: 'block',
            marginBottom: 'var(--space-6)',
            fontVariationSettings: "'FILL' 1",
          }}>
            mail
          </span>
          <h2 className="headline-md reveal" style={{ color: 'white', marginBottom: 'var(--space-6)' }}>
            Restez informé
          </h2>
          <p className="body-lg reveal" style={{ marginBottom: 'var(--space-10)' }}>
            Recevez nos actualités et conseils techniques directement dans votre boîte mail.
          </p>
          <div className="reveal" style={{
            display: 'flex',
            gap: 'var(--space-2)',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            <input
              type="email"
              placeholder="votre@email.com"
              style={{
                flex: 1,
                background: 'var(--surface-container-high)',
                border: 'none',
                color: 'var(--on-surface)',
                padding: 'var(--space-4)',
                fontSize: '0.9375rem',
                outline: 'none',
                fontFamily: 'var(--font-body)',
              }}
            />
            <button className="btn-primary" style={{
              padding: 'var(--space-4) var(--space-6)',
              whiteSpace: 'nowrap',
            }}>
              S&apos;abonner
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';

export const metadata = {
  title: 'Bancs d\'essai',
  description: 'Bancs d\'essai de puissance FROUDE HOFFMAN, bancs injecteurs, pompes à injection — M.B.I Engine Solutions, Riorges.',
};

const BANCS_PUISSANCE = [
  {
    name: 'FROUDE HOFFMAN F35',
    capacity: 'jusqu\'à 1600 CV',
    desc: 'Banc d\'essai pour moteurs industriels de forte puissance. Permet le contrôle du couple et de la puissance dans les conditions réelles de fonctionnement.',
  },
  {
    name: 'FROUDE HOFFMAN F24',
    capacity: 'jusqu\'à 1000 CV',
    desc: 'Banc d\'essai pour moteurs industriels de moyenne puissance. Contrôle systématique des caractéristiques constructeur après rénovation.',
  },
];

const BANCS_INJECTION = [
  {
    name: 'Bancs d\'essai injecteurs',
    desc: 'Test complet de chaque injecteur remonté : pression, débit et qualité de pulvérisation selon les données constructeurs. Contrôle systématique avant remontage sur le moteur.',
  },
  {
    name: 'Bancs d\'essai pompes à injection',
    desc: 'Chaque pompe rénovée est testée pour garantir le respect des caractéristiques d\'origine. Équipements certifiés Bosch, Delphi, Stanadyne et Caterpillar.',
  },
  {
    name: 'Banc HARTRIDGE AVM 10/8 10CV',
    desc: 'Banc de test polyvalent pour le contrôle des pompes rotatives et en ligne. Mesure de débit, calage et pression d\'ouverture.',
  },
];

const AUTRES_EQUIPEMENTS = [
  { name: 'Nettoyage ultrasons', desc: 'Bains ultra-son pour le nettoyage de toutes les pièces, adapté aux caractéristiques métallurgiques de chaque composant.' },
  { name: 'Cellule de peinture', desc: 'Peinture sans solvant pour la finition des moteurs. Produits écoresponsables conformes aux normes environnementales.' },
  { name: 'Station d\'épuration', desc: 'Station interne de récupération et traitement des huiles et eaux usagées. Circuit fermé avec restitution au réseau.' },
];

export default function EquipementsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        padding: 'var(--space-32) var(--space-10)',
        paddingBottom: 'var(--space-16)',
        background: 'var(--surface)',
      }}>
        <div className="container">
          <span className="label-md" style={{ color: 'var(--primary)', display: 'block', marginBottom: 'var(--space-6)' }}>
            Nos équipements
          </span>
          <h1 className="display-md" style={{ color: 'white', maxWidth: '900px' }}>
            Bancs d'essai
          </h1>
          <p className="body-lg" style={{ maxWidth: '700px', marginTop: 'var(--space-8)' }}>
            4 500 m² d'ateliers équipés de bancs d'essai FROUDE HOFFMAN et de postes de contrôle certifiés. Chaque moteur rénové est testé dans les conditions réelles de fonctionnement avant livraison.
          </p>
        </div>
      </section>

      {/* Bancs de puissance */}
      <section style={{
        padding: 'var(--space-16) var(--space-10)',
        background: 'var(--surface-container-lowest)',
      }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          <h2 className="headline-md reveal" style={{ color: 'white', marginBottom: 'var(--space-12)' }}>
            Bancs d'essai de puissance
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-8)',
          }}>
            {BANCS_PUISSANCE.map((banc) => (
              <div
                key={banc.name}
                className="reveal"
                style={{
                  flex: '1 1 400px',
                  background: 'var(--surface-container-low)',
                  borderTop: '3px solid var(--primary-container)',
                  padding: 'var(--space-10)',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: 'var(--space-3)',
                }}>
                  {banc.name}
                </h3>
                <span style={{
                  display: 'inline-block',
                  background: 'var(--primary-container)',
                  color: 'white',
                  padding: 'var(--space-1) var(--space-4)',
                  fontSize: '0.8125rem',
                  fontFamily: 'var(--font-label)',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  marginBottom: 'var(--space-6)',
                }}>
                  {banc.capacity}
                </span>
                <p className="body-md">
                  {banc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bancs injection */}
      <section style={{
        padding: 'var(--space-16) var(--space-10)',
        background: 'var(--surface)',
      }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          <h2 className="headline-md reveal" style={{ color: 'white', marginBottom: 'var(--space-12)' }}>
            Bancs d'essai injection
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-6)',
          }}>
            {BANCS_INJECTION.map((banc) => (
              <div
                key={banc.name}
                className="reveal"
                style={{
                  flex: '1 1 280px',
                  background: 'var(--surface-container-low)',
                  borderLeft: '3px solid var(--outline-variant)',
                  padding: 'var(--space-8)',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: 'var(--space-4)',
                }}>
                  {banc.name}
                </h3>
                <p className="body-md">
                  {banc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres équipements */}
      <section style={{
        padding: 'var(--space-16) var(--space-10)',
        background: 'var(--surface-container-lowest)',
      }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          <h2 className="headline-md reveal" style={{ color: 'white', marginBottom: 'var(--space-12)' }}>
            Autres équipements
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-6)',
          }}>
            {AUTRES_EQUIPEMENTS.map((eq) => (
              <div
                key={eq.name}
                className="reveal"
                style={{
                  flex: '1 1 280px',
                  padding: 'var(--space-8)',
                  background: 'var(--surface-container-low)',
                  borderTop: '1px solid var(--outline-variant)',
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: 'var(--space-3)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}>
                  {eq.name}
                </h3>
                <p className="body-md">
                  {eq.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'var(--space-24) var(--space-10)',
        textAlign: 'center',
        background: 'var(--primary-container)',
      }}>
        <h2 className="headline-lg" style={{ color: 'white', maxWidth: '800px', margin: '0 auto var(--space-6)' }}>
          Besoin d'un diagnostic moteur ?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '500px', margin: '0 auto var(--space-10)', fontSize: '1rem' }}>
          Nos bancs d'essai sont disponibles pour tester et valider vos moteurs rénovés.
        </p>
        <Link href="/contact" style={{
          display: 'inline-block',
          background: 'white',
          color: 'var(--primary-container)',
          padding: 'var(--space-4) var(--space-10)',
          fontFamily: 'var(--font-headline)',
          fontWeight: 700,
          fontSize: '0.875rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>
          Demander un Devis
        </Link>
      </section>
    </>
  );
}

import Link from 'next/link';

export const metadata = {
  title: 'Nos Équipements',
  description: 'Bancs d\'essai de puissance, bancs d\'essai injecteurs, bancs d\'essai pompes à injection — Découvrez les équipements de précision M.B.I.',
};

const EQUIPMENT = [
  {
    id: '01',
    title: 'Bancs d\'essai de puissance',
    desc: 'Nos cellules d\'essai permettent le contrôle systématique de chaque moteur rénové. Capacité de test jusqu\'à 2 000 chevaux pour garantir le respect des caractéristiques constructeurs.',
    specs: ['Jusqu\'à 2000 CV', 'Contrôle couple/puissance', 'Conformité constructeur'],
    icon: 'speed',
    featured: true,
  },
  {
    id: '02',
    title: 'Bancs d\'essai injecteurs',
    desc: 'Test complet de chaque injecteur remonté selon les normes constructeur. Contrôle systématique de la pression, du débit et de la pulvérisation.',
    specs: ['Test pression/débit', 'Contrôle pulvérisation', 'Normes constructeur'],
    icon: 'bolt',
  },
  {
    id: '03',
    title: 'Bancs d\'essai pompes à injection',
    desc: 'Chaque pompe rénovée respecte les caractéristiques constructeurs. Équipements Bosch, Delphi, Stanadyne et Caterpillar certifiés.',
    specs: ['Bosch certifié', 'Delphi / Stanadyne', 'Caterpillar'],
    icon: 'science',
  },
  {
    id: '04',
    title: 'Nettoyage Ultrasons',
    desc: 'Bains ultra-son pour le nettoyage en profondeur de toutes les pièces. Gamme de nettoyage adaptée aux caractéristiques métallurgiques de chaque composant.',
    specs: ['Bains ultra-son', 'Adapté métallurgie', 'Nettoyage profond'],
    icon: 'waves',
  },
  {
    id: '05',
    title: 'Cellule de peinture',
    desc: 'Peinture sans solvant pour la finition de chaque moteur. Respect des normes environnementales avec utilisation de produits écoresponsables.',
    specs: ['Sans solvant', 'Écoresponsable', 'Finition premium'],
    icon: 'format_paint',
  },
  {
    id: '06',
    title: 'Station d\'épuration',
    desc: 'Station d\'épuration interne permettant la récupération des huiles recyclées. L\'eau est nettoyée et restituée au réseau.',
    specs: ['Recyclage huiles', 'Traitement eau', 'Circuit fermé'],
    icon: 'water_drop',
  },
];

export default function EquipementsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        padding: 'var(--space-32) var(--space-10)',
        paddingBottom: 'var(--space-20)',
        background: 'var(--surface)',
        textAlign: 'center',
      }}>
        <div className="container">
          <span className="label-md" style={{ color: 'var(--primary)', display: 'block', marginBottom: 'var(--space-6)' }}>
            Infrastructure / Équipements
          </span>
          <h1 className="display-md" style={{ color: 'white', maxWidth: '900px', margin: '0 auto' }}>
            Précision Machinale
          </h1>
          <p className="body-lg" style={{ maxWidth: '640px', margin: 'var(--space-8) auto 0' }}>
            Plus de 4 500 m² d&apos;atelier équipés des technologies de pointe pour la reconstruction de moteurs thermiques.
          </p>
        </div>
      </section>

      {/* Equipment grid */}
      <section style={{
        padding: 'var(--space-20) var(--space-10)',
        background: 'var(--surface-container-lowest)',
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 'var(--space-8)',
        }}>
          {EQUIPMENT.map((eq) => (
            <div
              key={eq.id}
              className="reveal"
              style={{
                background: 'var(--surface-container-low)',
                padding: 'var(--space-10)',
                borderTop: eq.featured ? '3px solid var(--primary)' : '1px solid rgba(65, 71, 84, 0.2)',
                gridColumn: eq.featured ? 'span 2' : 'span 1',
                transition: 'background 0.4s',
              }}
            >
              <span className="material-symbols-outlined" style={{
                fontSize: '2.5rem',
                color: eq.featured ? 'var(--primary)' : 'var(--on-surface-variant)',
                marginBottom: 'var(--space-6)',
                display: 'block',
                fontVariationSettings: "'FILL' 1",
              }}>
                {eq.icon}
              </span>
              <span className="label-md" style={{ color: 'var(--primary)', display: 'block', marginBottom: 'var(--space-2)' }}>
                {eq.id}
              </span>
              <h2 className="headline-sm" style={{ color: 'white', marginBottom: 'var(--space-6)' }}>
                {eq.title}
              </h2>
              <p className="body-md" style={{ marginBottom: 'var(--space-8)' }}>
                {eq.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {eq.specs.map((spec) => (
                  <span
                    key={spec}
                    style={{
                      background: 'var(--surface-container-high)',
                      padding: 'var(--space-1) var(--space-3)',
                      fontSize: '0.6875rem',
                      fontFamily: 'var(--font-label)',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--on-surface-variant)',
                    }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'var(--space-32) var(--space-10)',
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)',
      }}>
        <h2 className="headline-lg" style={{ color: 'var(--on-primary-container)', maxWidth: '800px', margin: '0 auto var(--space-8)' }}>
          Prêt pour un diagnostic ?
        </h2>
        <p style={{ color: 'rgba(0,46,104,0.8)', maxWidth: '500px', margin: '0 auto var(--space-10)', fontSize: '1.125rem' }}>
          Nos cellules d&apos;essai sont à votre disposition pour tester et valider vos moteurs.
        </p>
        <Link href="/contact" className="btn-cta-inverted">
          Demander un Devis
        </Link>
      </section>
    </>
  );
}

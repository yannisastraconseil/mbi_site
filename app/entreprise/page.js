import Link from 'next/link';

export const metadata = {
  title: 'L\'Entreprise',
  description: 'M.B.I (Motorop BRM Industries) — Depuis 1927, une entreprise familiale devenue référence nationale de la reconstruction de moteurs thermiques.',
};

const TIMELINE = [
  {
    year: '1927',
    title: 'Création',
    desc: 'Création de l\'entreprise familiale par M. Chuillat et M. Louis Besson.',
  },
  {
    year: '1996',
    title: 'M.B.I',
    desc: 'L\'entreprise prend le nom de M.B.I (Motorop Besson Reconstruction Moteurs Industries).',
  },
  {
    year: 'Aujourd\'hui',
    title: 'Motorop BRM Industries',
    desc: 'Une cinquantaine d\'employés, 20M€ de CA, plus de 4 500 m² d\'ateliers et plus de 500 000 moteurs rénovés.',
  },
];

const TEAMS = [
  { title: 'Bureau d\'Étude', desc: '3 personnes au bureau d\'étude, suivi des évolutions techniques', icon: 'architecture' },
  { title: 'Intervention Terrain', desc: '3 personnes interviennent sur toute la France', icon: 'engineering' },
  { title: 'Qualité & SAV', desc: '1 personne dédiée au service qualité et SAV', icon: 'verified' },
  { title: 'Commercial', desc: '3 personnes couvrent toute la France', icon: 'handshake' },
];

export default function EntreprisePage() {
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
            À Propos / L&apos;Entreprise
          </span>
          <h1 className="display-md" style={{ color: 'white', maxWidth: '900px' }}>
            Forgé dans la précision
          </h1>
          <p className="body-lg" style={{ maxWidth: '640px', marginTop: 'var(--space-8)' }}>
            Depuis 1927, M.B.I est une entreprise de reconstruction de moteurs thermiques pour les secteurs des travaux publics, transports, ferroviaire, maritime et agricole.
          </p>
        </div>
      </section>

      {/* KPI HUD */}
      <section style={{
        padding: 'var(--space-16) var(--space-10)',
        background: 'var(--surface-container-lowest)',
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-8)',
        }}>
          {[
            { value: '20M€', label: 'Chiffre d\'Affaires' },
            { value: '50', label: 'Employés' },
            { value: '4 500m²', label: 'Surface Atelier' },
            { value: '1927', label: 'Année de Création' },
          ].map((kpi) => (
            <div
              key={kpi.label}
              className="reveal"
              style={{
                flex: '1 1 200px',
                background: 'var(--surface-container-low)',
                padding: 'var(--space-10)',
                textAlign: 'center',
                borderTop: '2px solid var(--primary)',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-headline)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 900,
                color: 'var(--primary)',
                display: 'block',
                marginBottom: 'var(--space-2)',
              }}>
                {kpi.value}
              </span>
              <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                {kpi.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{
        padding: 'var(--space-32) var(--space-10)',
        background: 'var(--surface)',
      }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <span className="label-md" style={{ color: 'var(--primary)', display: 'block', marginBottom: 'var(--space-6)' }}>
            Histoire
          </span>
          <h2 className="headline-lg" style={{ color: 'white', marginBottom: 'var(--space-16)' }}>
            Près d&apos;un siècle d&apos;expertise
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-12)',
            borderLeft: '2px solid rgba(65, 71, 84, 0.3)',
            paddingLeft: 'var(--space-12)',
          }}>
            {TIMELINE.map((item) => (
              <div key={item.year} className="reveal" style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: 'calc(-1 * var(--space-12) - 7px)',
                  top: '8px',
                  width: '12px',
                  height: '12px',
                  background: 'var(--primary)',
                }} />
                <span style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: '2rem',
                  fontWeight: 900,
                  color: 'var(--primary)',
                  display: 'block',
                  marginBottom: 'var(--space-2)',
                }}>
                  {item.year}
                </span>
                <h3 className="headline-sm" style={{ color: 'white', marginBottom: 'var(--space-3)' }}>
                  {item.title}
                </h3>
                <p className="body-lg" style={{ maxWidth: '500px' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teams */}
      <section style={{
        padding: 'var(--space-24) var(--space-10)',
        background: 'var(--surface-container-lowest)',
      }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          <span className="label-md" style={{ color: 'var(--primary)', display: 'block', marginBottom: 'var(--space-6)' }}>
            Organisation
          </span>
          <h2 className="headline-lg" style={{ color: 'white', marginBottom: 'var(--space-16)' }}>
            Nos Équipes
          </h2>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-8)',
          }}>
            {TEAMS.map((team) => (
              <div
                key={team.title}
                className="reveal"
                style={{
                  flex: '1 1 220px',
                  background: 'var(--surface-container-low)',
                  padding: 'var(--space-10)',
                }}
              >
                <span className="material-symbols-outlined" style={{
                  fontSize: '2.5rem',
                  color: 'var(--primary)',
                  marginBottom: 'var(--space-6)',
                  display: 'block',
                  fontVariationSettings: "'FILL' 1",
                }}>
                  {team.icon}
                </span>
                <h3 className="title-lg" style={{ color: 'white', marginBottom: 'var(--space-4)' }}>
                  {team.title}
                </h3>
                <p className="body-md">
                  {team.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RSE */}
      <section id="rse" style={{
        padding: 'var(--space-24) var(--space-10)',
        background: 'var(--surface)',
      }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <span className="label-md" style={{ color: 'var(--primary)', display: 'block', marginBottom: 'var(--space-6)' }}>
            Environnement
          </span>
          <h2 className="headline-lg reveal" style={{ color: 'white', marginBottom: 'var(--space-8)' }}>
            Engagement RSE
          </h2>
          <div className="reveal" style={{
            background: 'var(--surface-container-low)',
            padding: 'var(--space-12)',
            borderLeft: '4px solid var(--primary)',
          }}>
            <p className="body-lg" style={{ maxWidth: '700px' }}>
              MBI intègre le respect de l&apos;environnement dans son process à différentes étapes : une station d&apos;épuration interne permet la récupération des huiles qui sont recyclées. L&apos;eau est nettoyée et restituée au réseau. Une peinture sans solvant est utilisée pour la finition des produits.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'var(--space-24) var(--space-10)',
        textAlign: 'center',
        background: 'var(--surface-container-lowest)',
      }}>
        <h2 className="headline-md reveal" style={{ color: 'white', maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
          Envie de rejoindre l&apos;aventure MBI ?
        </h2>
        <Link href="/contact" className="btn-primary reveal" style={{ padding: 'var(--space-4) var(--space-10)' }}>
          Nous contacter
        </Link>
      </section>
    </>
  );
}

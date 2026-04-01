import Link from 'next/link';

export const metadata = {
  title: 'Domaines d\'Intervention',
  description: 'Travaux publics, transports urbains, ferroviaires, maritimes, machines agricoles et engins militaires — M.B.I intervient dans tous les secteurs.',
};

const DOMAINS = [
  {
    id: '01',
    label: 'Travaux Publics',
    title: 'Travaux Publics & Mines',
    desc: 'Reconstruction de moteurs pour les engins de travaux publics et miniers. Pelleteuses, chargeuses, tombereaux, bulldozers et groupes électrogènes.',
    brands: ['Caterpillar', 'Komatsu', 'Liebherr', 'Volvo CE', 'Hitachi', 'JCB'],
    color: 'var(--primary)',
    image: '/images/expertise-tp.png',
  },
  {
    id: '02',
    label: 'Transports',
    title: 'Transports Urbains & Ferroviaires',
    desc: 'Moteurs pour autobus, tramways, autorails et locomotives. Rénovation conforme aux exigences de fiabilité et de sécurité du transport public.',
    brands: ['MAN', 'Scania', 'Iveco', 'Mercedes', 'Renault Trucks', 'Deutz'],
    color: 'var(--primary)',
    image: '/images/expertise-transport.png',
  },
  {
    id: '03',
    label: 'Maritime',
    title: 'Transports Maritimes',
    desc: 'Reconstruction de moteurs marins pour navires de commerce, bateaux de pêche et plateformes offshore. Conformité aux normes maritimes internationales.',
    brands: ['Cummins Marine', 'MTU', 'Volvo Penta', 'Baudouin', 'Wärtsilä'],
    color: 'var(--primary)',
    image: '/images/expertise-maritime.png',
  },
  {
    id: '04',
    label: 'Agricole',
    title: 'Machines Agricoles',
    desc: 'Moteurs pour tracteurs, moissonneuses-batteuses et équipements agricoles. Intervention rapide pour minimiser les temps d\'arrêt pendant les récoltes.',
    brands: ['John Deere', 'Fendt', 'Case IH', 'New Holland', 'Massey Ferguson'],
    color: 'var(--primary)',
    image: '/images/expertise-agricole.png',
  },
  {
    id: '05',
    label: 'Défense',
    title: 'Engins Militaires',
    desc: 'Reconstruction de moteurs pour véhicules de défense et engins tactiques. Respect des cahiers des charges militaires et habilitations spécifiques.',
    brands: ['Renault Trucks Defense', 'Scania Defense', 'Perkins'],
    color: 'var(--tertiary)',
    image: '/images/expertise-defense.png',
  },
];

export default function ExpertisePage() {
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
            Expertise / Secteurs
          </span>
          <h1 className="display-md" style={{ color: 'white', maxWidth: '900px' }}>
            Domaines d&apos;intervention
          </h1>
          <p className="body-lg" style={{ maxWidth: '640px', marginTop: 'var(--space-8)' }}>
            Nos techniciens sont équipés d&apos;outils performants permettant la réalisation de diagnostics sur toute la France, dans tous les secteurs industriels.
          </p>
        </div>
      </section>

      {/* Domain cards */}
      {DOMAINS.map((domain, index) => (
        <section
          key={domain.id}
          className="reveal"
          style={{
            padding: 'var(--space-16) var(--space-10)',
            background: index % 2 === 0 ? 'var(--surface-container-lowest)' : 'var(--surface)',
          }}
        >
          <div className="container" style={{ maxWidth: '1440px' }}>
            <div style={{
              display: 'flex',
              flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
              flexWrap: 'wrap',
              gap: 'var(--space-8)',
              alignItems: 'stretch',
            }}>
              {/* Image */}
              <div style={{
                flex: '1 1 400px',
                position: 'relative',
                overflow: 'hidden',
                minHeight: '320px',
              }}>
                <img
                  src={domain.image}
                  alt={domain.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(20%)',
                    position: 'absolute',
                    inset: 0,
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(9,9,11,0.9), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 'var(--space-8)',
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                    {domain.brands.map((brand) => (
                      <span
                        key={brand}
                        style={{
                          background: 'rgba(255,255,255,0.1)',
                          backdropFilter: 'blur(8px)',
                          padding: 'var(--space-1) var(--space-3)',
                          fontSize: '0.6875rem',
                          fontFamily: 'var(--font-label)',
                          color: 'white',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div style={{ flex: '1 1 400px', padding: 'var(--space-8) 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span className="label-md" style={{ color: domain.color, display: 'block', marginBottom: 'var(--space-4)' }}>
                  {domain.id} / {domain.label}
                </span>
                <h2 className="headline-lg" style={{ color: 'white', marginBottom: 'var(--space-6)' }}>
                  {domain.title}
                </h2>
                <p className="body-lg" style={{ maxWidth: '520px' }}>
                  {domain.desc}
                </p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{
        padding: 'var(--space-32) var(--space-10)',
        textAlign: 'center',
        background: 'var(--surface)',
      }}>
        <h2 className="headline-lg reveal" style={{ color: 'white', maxWidth: '800px', margin: '0 auto var(--space-8)' }}>
          Un moteur à reconstruire ?
        </h2>
        <p className="body-lg reveal" style={{ maxWidth: '500px', margin: '0 auto var(--space-12)' }}>
          Nos experts interviennent sur tous les types de moteurs thermiques, dans tous les secteurs.
        </p>
        <Link href="/contact" className="btn-primary reveal" style={{ padding: 'var(--space-4) var(--space-10)' }}>
          Demander un Devis
        </Link>
      </section>
    </>
  );
}

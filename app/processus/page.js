import Link from 'next/link';

export const metadata = {
  title: 'Notre Processus',
  description: 'Découvrez le processus de reconstruction moteur M.B.I : réception, démontage, lavage, usinage, montage, essais et finition.',
};

const STEPS = [
  {
    id: '01',
    title: 'Réception',
    desc: 'Chaque moteur est photographié, identifié et un numéro de fabrication lui est attribué. Constat de l\'état du moteur à l\'entrée de nos ateliers.',
    image: '/images/hero-engine.png',
  },
  {
    id: '02',
    title: 'Démontage',
    desc: 'Chaque moteur est soigneusement démonté avec une identification de chaque pièce maîtresse.',
    image: '/images/factory.png',
  },
  {
    id: '03',
    title: 'Lavage',
    desc: 'Toutes les pièces du moteur suivent une gamme de nettoyage adaptée à leurs caractéristiques métallurgiques.',
    image: '/images/lavage-hq.png',
  },
  {
    id: '04',
    title: 'Usinage',
    desc: 'Après un contrôle rigoureux des pièces maîtresses (bloc, villebrequin, culasse, arbre à came, bielle), elles suivent un process de rénovation conforme aux exigences constructeurs.',
    image: '/images/usinage.png',
  },
  {
    id: '05',
    title: 'Montage',
    desc: 'Chaque moteur est assemblé méthodiquement selon les données constructeurs. Toutes les pièces d\'usure sont homologuées par les constructeurs.',
    image: '/images/montage-hq.png',
  },
  {
    id: '06',
    title: 'Essais',
    desc: 'Chaque moteur rénové respecte les caractéristiques constructeurs (puissance/couple). Contrôle dans nos cellules d\'essai. Capacité jusqu\'à 2 000 chevaux.',
    image: '/images/testbench.png',
  },
  {
    id: '07',
    title: 'Finition',
    desc: 'Chaque moteur passe en cellule de peinture pour finition. Il est ensuite emballé sur palette pour expédition.',
    image: '/images/finition-hq.png',
  },
];

export default function ProcessPage() {
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
            Process / Reconstruction
          </span>
          <h1 className="display-md" style={{ color: 'white', maxWidth: '900px' }}>
            Notre processus de reconstruction
          </h1>
          <p className="body-lg" style={{ maxWidth: '640px', marginTop: 'var(--space-8)' }}>
            7 étapes rigoureuses de la réception à la finition. Chaque moteur suit un processus identique, conforme aux normes constructeurs.
          </p>
        </div>
      </section>

      {/* Process steps */}
      {STEPS.map((step, index) => (
        <section
          key={step.id}
          className="reveal"
          style={{
            padding: 'var(--space-20) var(--space-10)',
            background: index % 2 === 0 ? 'var(--surface-container-lowest)' : 'var(--surface)',
          }}
        >
          <div className="container" style={{
            display: 'flex',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
            gap: 'var(--space-12)',
            alignItems: 'center',
            maxWidth: '1440px',
            flexWrap: 'wrap',
          }}>
            <div style={{
              flex: '1 1 400px',
              position: 'relative',
              overflow: 'hidden',
              height: '360px',
              minWidth: '300px',
            }}>
              <img
                src={step.image}
                alt={step.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'grayscale(30%)',
                }}
              />
            </div>

            <div style={{ flex: '1 1 400px', padding: 'var(--space-8)' }}>
              <span className="label-lg" style={{ color: 'var(--primary)', display: 'block', marginBottom: 'var(--space-4)' }}>
                Étape {step.id}
              </span>
              <h2 className="headline-lg" style={{ color: 'white', marginBottom: 'var(--space-6)' }}>
                {step.title}
              </h2>
              <p className="body-lg" style={{ maxWidth: '480px' }}>
                {step.desc}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{
        padding: 'var(--space-32) var(--space-10)',
        textAlign: 'center',
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)',
      }}>
        <h2 className="headline-lg" style={{ color: 'var(--on-primary-container)', maxWidth: '800px', margin: '0 auto var(--space-8)' }}>
          Prêt pour un diagnostic ?
        </h2>
        <Link href="/contact" className="btn-cta-inverted">
          Demander un Devis
        </Link>
      </section>
    </>
  );
}

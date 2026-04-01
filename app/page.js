import Link from 'next/link';
import styles from './home.module.css';

export const metadata = {
  title: 'M.B.I ENGINE SOLUTIONS | Reconstruction de Moteurs Thermiques',
  description:
    'M.B.I (Motorop BRM Industries) — Reconstruction de moteurs thermiques pour les travaux publics, transports, ferroviaire, maritime et agricole. Plus de 500 000 moteurs rénovés depuis 1927.',
};

export default function HomePage() {
  return (
    <>
      {/* =========== HERO =========== */}
      <section className={styles.hero}>
        <div className={styles.hero__bg}>
          <img
            src="/images/hero-engine.png"
            alt="Moteur industriel haute performance reconstruit par M.B.I Engine Solutions"
          />
          <div className={styles.hero__overlay} />
        </div>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>
            RECONSTRUCTION DE MOTEURS THERMIQUES
          </h1>
          <p className={styles.hero__subtitle}>
            Depuis 1927, M.B.I (Motorop BRM Industries) est votre partenaire pour la reconstruction et la rénovation de moteurs thermiques haute performance pour l&apos;industrie.
          </p>
          <Link href="/contact" className={`btn-secondary ${styles.hero__cta}`}>
            DÉCOUVRIR NOTRE EXPERTISE
          </Link>
        </div>
      </section>

      {/* =========== SERVICES =========== */}
      <section className={styles.services}>
        <div className={styles.services__header}>
          <span className={styles.services__label}>Compétences Clés</span>
          <h2 className={styles.services__title}>
            Le pilier de l&apos;efficacité
          </h2>
        </div>

        <div className={styles.services__grid}>
          {/* Card 1 */}
          <div className={`${styles['service-card']} reveal`}>
            <div className={styles['service-card__icon']}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem', fontVariationSettings: "'FILL' 1" }}>
                precision_manufacturing
              </span>
            </div>
            <h3 className={styles['service-card__title']}>Assistance Technique</h3>
            <p className={styles['service-card__desc']}>
              Nos techniciens sont équipés d&apos;outils performants permettant la réalisation de diagnostics sur site. Intervention sur toute la France.
            </p>
          </div>

          {/* Card 2 */}
          <div className={`${styles['service-card']} reveal reveal-delay-1`}>
            <div className={styles['service-card__icon']}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem', fontVariationSettings: "'FILL' 1" }}>
                engineering
              </span>
            </div>
            <h3 className={styles['service-card__title']}>Pompes d&apos;Injection</h3>
            <p className={styles['service-card__desc']}>
              Révision complète de tous les systèmes d&apos;injection haute précision. Bancs d&apos;essai certifiés Bosch, Delphi, Stanadyne et Caterpillar.
            </p>
          </div>

          {/* Card 3 */}
          <div className={`${styles['service-card']} reveal reveal-delay-2`}>
            <div className={styles['service-card__icon']}>
              <span className="material-symbols-outlined" style={{ fontSize: '2rem', fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
            </div>
            <h3 className={styles['service-card__title']}>Notre Engagement</h3>
            <p className={styles['service-card__desc']}>
              Station d&apos;épuration interne, recyclage des huiles, peinture sans solvant. L&apos;excellence environnementale au cœur de notre process.
            </p>
          </div>
        </div>
      </section>

      {/* =========== PROCESS BENTO =========== */}
      <section className={styles.process}>
        <div className={styles.process__grid}>
          {/* Left: Process info */}
          <div className={`${styles.process__content} reveal`}>
            <div>
              <span className={styles.services__label}>01 / Workflow</span>
              <h2 className={styles.services__title} style={{ marginBottom: 'var(--space-8)' }}>
                Le processus de reconstruction
              </h2>
              <p className="body-lg" style={{ maxWidth: '540px', marginBottom: 'var(--space-12)' }}>
                Une approche systématique de la reconstruction moteur, de la réception à la finition. Chaque étape respecte les exigences constructeurs.
              </p>
            </div>

            <div className={styles.process__steps}>
              <div className={styles.process__step}>
                <span className={styles['process__step-title']}>Réception</span>
                <p className={styles['process__step-desc']}>
                  Chaque moteur est photographié, identifié et un numéro de fabrication lui est attribué.
                </p>
              </div>
              <div className={styles.process__step}>
                <span className={styles['process__step-title']}>Usinage</span>
                <p className={styles['process__step-desc']}>
                  Contrôle rigoureux des pièces maîtresses, rénovation conforme aux exigences constructeurs.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image with overlay */}
          <div className={`${styles.process__image} reveal reveal-delay-2`}>
            <img
              src="/images/factory.png"
              alt="Atelier de reconstruction moteur M.B.I"
            />
            <div className={styles['process__image-overlay']}>
              <span className={styles.services__label}>02 / Validation</span>
              <h3 className="headline-sm" style={{ color: 'white', marginBottom: 'var(--space-4)' }}>
                Contrôle Qualité
              </h3>
              <p className="body-md" style={{ color: 'rgba(212, 212, 216, 1)' }}>
                Chaque moteur rénové respecte les caractéristiques constructeurs. Contrôle systématique dans nos cellules d&apos;essai jusqu&apos;à 2 000 chevaux.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========== DATA HUD =========== */}
      <section className={styles.datahud}>
        <div className={styles.datahud__container}>
          <div className={styles.datahud__grid}>
            <div className={`${styles.datahud__item} reveal`}>
              <span className={styles.datahud__value}>500K+</span>
              <span className={styles.datahud__label}>Moteurs Rénovés</span>
            </div>
            <div className={`${styles.datahud__item} reveal reveal-delay-1`}>
              <span className={styles.datahud__value}>1927</span>
              <span className={styles.datahud__label}>Année de Création</span>
            </div>
            <div className={`${styles.datahud__item} reveal reveal-delay-2`}>
              <span className={styles.datahud__value}>4 500m²</span>
              <span className={styles.datahud__label}>Surface d&apos;Atelier</span>
            </div>
            <div className={`${styles.datahud__item} reveal reveal-delay-3`}>
              <span className={styles.datahud__value}>50</span>
              <span className={styles.datahud__label}>Employés</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========== CTA =========== */}
      <section className={styles.cta}>
        <h2 className={`${styles.cta__title} reveal`}>
          Votre performance ne tolère aucun compromis.
        </h2>
        <div className={`${styles.cta__buttons} reveal reveal-delay-1`}>
          <Link href="/contact" className="btn-primary" style={{ padding: 'var(--space-4) var(--space-10)' }}>
            Demander un Devis
          </Link>
          <Link href="/references" className="btn-secondary" style={{ padding: 'var(--space-4) var(--space-10)' }}>
            Consulter nos Références
          </Link>
        </div>
      </section>
    </>
  );
}

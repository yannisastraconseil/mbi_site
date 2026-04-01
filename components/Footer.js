import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__grid}>
        {/* Brand column */}
        <div className={styles.footer__brand}>
          <div className={styles['footer__brand-name']}>M.B.I ENGINE SOLUTIONS</div>
          <p className={styles['footer__brand-desc']}>
            La référence pour la rénovation et la maintenance de moteurs industriels haute performance.
          </p>
        </div>

        {/* Compétences */}
        <div className={styles.footer__column}>
          <h4 className={styles['footer__column-title']}>Compétences</h4>
          <Link href="/processus" className={styles.footer__link}>Processus</Link>
          <Link href="/expertise" className={styles.footer__link}>Expertise</Link>
          <Link href="/equipements" className={styles.footer__link}>Équipements</Link>
          <Link href="/references" className={styles.footer__link}>Spécifications</Link>
        </div>

        {/* Entreprise */}
        <div className={styles.footer__column}>
          <h4 className={styles['footer__column-title']}>Entreprise</h4>
          <Link href="/entreprise" className={styles.footer__link}>À Propos</Link>
          <Link href="/contact" className={styles.footer__link}>Contact</Link>
          <Link href="#" className={styles.footer__link}>Politique de Confidentialité</Link>
          <Link href="#" className={styles.footer__link}>Mentions Légales</Link>
        </div>

        {/* Contact */}
        <div className={styles.footer__column}>
          <h4 className={styles['footer__column-title']}>Contact</h4>
          <p className={styles['footer__brand-desc']}>
            MBI (Motorop BRM Industries)<br />
            1356 rue Louise Michel<br />
            42153 Riorges
          </p>
          <p className={styles['footer__brand-desc']} style={{ marginTop: 'var(--space-2)' }}>
            Tél. 04 77 44 25 00<br />
            Fax 04 77 44 25 29
          </p>
          <a href="mailto:contact@m-b-i.fr" className={styles.footer__link} style={{ color: 'var(--primary)' }}>
            contact@m-b-i.fr
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.footer__bottom}>
        <span>
          © {new Date().getFullYear()} M.B.I Engine Solutions. Tous droits réservés. Ingénierie de précision pour la performance.
        </span>
        <div className={styles['footer__bottom-links']}>
          <Link href="#" className={styles['footer__bottom-link']}>Conditions d&apos;Utilisation</Link>
          <Link href="#" className={styles['footer__bottom-link']}>Confidentialité</Link>
        </div>
      </div>
    </footer>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const NAV_ITEMS = [
  { href: '/processus',   label: 'Notre Processus' },
  { href: '/expertise',   label: 'Expertise' },
  { href: '/equipements', label: 'Banc d\'essai' },
  { href: '/references',  label: 'Références' },
  { href: '/entreprise',  label: 'À Propos' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className={styles.navbar} role="navigation" aria-label="Navigation principale">
        <Link href="/" className={styles.navbar__logo}>
          M.B.I ENGINE SOLUTIONS
        </Link>

        <ul className={styles.navbar__links}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`${styles.navbar__link} ${
                  pathname === item.href ? styles['navbar__link--active'] : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.navbar__actions}>
          <button className={styles.navbar__search} aria-label="Rechercher">
            <span className="material-symbols-outlined">search</span>
          </button>
          <Link href="/contact" className={`btn-primary ${styles.navbar__cta}`}>
            Demander un Devis
          </Link>
          <button
            className={styles['navbar__menu-btn']}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${styles.navbar__mobile_overlay} ${mobileOpen ? styles.open : ''}`}
        style={{ display: mobileOpen ? 'flex' : 'none' }}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navbar__mobile_link} ${
              pathname === item.href ? styles['navbar__mobile-link--active'] : ''
            }`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn-primary"
          onClick={() => setMobileOpen(false)}
          style={{ marginTop: 'var(--space-6)', textAlign: 'center' }}
        >
          Demander un Devis
        </Link>
      </div>
    </>
  );
}

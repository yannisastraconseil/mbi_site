'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

const COOKIE_KEY = 'mbi_cookie_consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) {
      // Small delay for smooth entry animation
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setVisible(false);
  }

  function handleDecline() {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setVisible(false);
  }

  return (
    <div
      className={`${styles['cookie-banner']} ${visible ? styles['cookie-banner--visible'] : ''}`}
      role="dialog"
      aria-label="Consentement cookies"
    >
      <div className={styles['cookie-banner__inner']}>
        <div className={styles['cookie-banner__text']}>
          <div className={styles['cookie-banner__title']}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '6px' }}>
              cookie
            </span>
            Cookies & Confidentialité
          </div>
          <p className={styles['cookie-banner__desc']}>
            Nous utilisons des cookies pour améliorer votre expérience de navigation et analyser le trafic du site.
            En cliquant sur « Accepter », vous consentez à l&apos;utilisation de ces cookies.{' '}
            <Link href="#">Politique de confidentialité</Link>
          </p>
        </div>
        <div className={styles['cookie-banner__actions']}>
          <button
            className={`${styles['cookie-banner__btn']} ${styles['cookie-banner__btn--decline']}`}
            onClick={handleDecline}
          >
            Refuser
          </button>
          <button
            className={`${styles['cookie-banner__btn']} ${styles['cookie-banner__btn--accept']}`}
            onClick={handleAccept}
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';

const SECTORS = ['Tous', 'Travaux Publics', 'Transports Urbains', 'Ferroviaire', 'Maritime', 'Agricole', 'Militaire'];

const BRANDS = [
  { name: 'Caterpillar', sectors: ['Travaux Publics', 'Militaire'], desc: 'Moteurs C-Series, moteurs marins' },
  { name: 'Komatsu', sectors: ['Travaux Publics'], desc: 'Moteurs SAA, SA série' },
  { name: 'Liebherr', sectors: ['Travaux Publics'], desc: 'D9xx série diesel' },
  { name: 'Volvo', sectors: ['Travaux Publics', 'Transports Urbains'], desc: 'D-Series, TAD série' },
  { name: 'MAN', sectors: ['Transports Urbains', 'Maritime'], desc: 'D08, D26, D28 série' },
  { name: 'Scania', sectors: ['Transports Urbains', 'Militaire'], desc: 'DC09, DC13, DC16' },
  { name: 'Cummins', sectors: ['Travaux Publics', 'Maritime', 'Militaire'], desc: 'ISX, QSK, K-Series marine' },
  { name: 'Perkins', sectors: ['Agricole', 'Travaux Publics'], desc: '400, 800, 1100, 2000 série' },
  { name: 'John Deere', sectors: ['Agricole'], desc: 'PowerTech série' },
  { name: 'Deutz', sectors: ['Agricole', 'Travaux Publics'], desc: 'TCD, BF série' },
  { name: 'MTU', sectors: ['Ferroviaire', 'Maritime', 'Militaire'], desc: 'Série 2000, 4000' },
  { name: 'Iveco', sectors: ['Transports Urbains'], desc: 'Cursor, Tector série' },
  { name: 'Mercedes-Benz', sectors: ['Transports Urbains'], desc: 'OM série (OM926, OM936)' },
  { name: 'Renault Trucks', sectors: ['Transports Urbains', 'Militaire'], desc: 'DTI série' },
  { name: 'Bosch', sectors: ['Travaux Publics', 'Transports Urbains', 'Agricole'], desc: 'Pompes injection, injecteurs' },
  { name: 'Delphi', sectors: ['Travaux Publics', 'Agricole'], desc: 'Systèmes injection common rail' },
];

export default function ReferencesPage() {
  const [activeSector, setActiveSector] = useState('Tous');
  const [search, setSearch] = useState('');

  const filtered = BRANDS.filter((b) => {
    const matchesSector = activeSector === 'Tous' || b.sectors.includes(activeSector);
    const matchesSearch = b.name.toLowerCase().includes(search.toLowerCase()) || 
                          b.desc.toLowerCase().includes(search.toLowerCase());
    return matchesSector && matchesSearch;
  });

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
            Spécifications / Catalogue
          </span>
          <h1 className="display-md" style={{ color: 'white', maxWidth: '900px' }}>
            Références Moteurs
          </h1>
          <div style={{ display: 'flex', gap: 'var(--space-12)', marginTop: 'var(--space-8)' }}>
            <div>
              <span className="display-md" style={{ color: 'var(--primary)', fontSize: '3rem' }}>16+</span>
              <span className="label-sm" style={{ color: 'var(--on-surface-variant)', display: 'block' }}>Marques</span>
            </div>
            <div style={{ width: '1px', background: 'rgba(65,71,84,0.3)' }} />
            <div>
              <span className="display-md" style={{ color: 'var(--primary)', fontSize: '3rem' }}>6</span>
              <span className="label-sm" style={{ color: 'var(--on-surface-variant)', display: 'block' }}>Secteurs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section style={{
        padding: 'var(--space-10)',
        background: 'var(--surface-container-lowest)',
        borderBottom: '1px solid rgba(65,71,84,0.2)',
        position: 'sticky',
        top: '80px',
        zIndex: 20,
        backdropFilter: 'blur(20px)',
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
            {SECTORS.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                style={{
                  padding: 'var(--space-2) var(--space-4)',
                  background: activeSector === sector ? 'var(--primary)' : 'var(--surface-container-high)',
                  color: activeSector === sector ? 'var(--on-primary-container)' : 'var(--on-surface-variant)',
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.6875rem',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {sector}
              </button>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <span className="material-symbols-outlined" style={{
              position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
              color: 'var(--on-surface-variant)', fontSize: '1.25rem',
            }}>
              search
            </span>
            <input
              type="text"
              placeholder="Rechercher..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                background: 'var(--surface-container-high)',
                border: 'none',
                color: 'var(--on-surface)',
                padding: 'var(--space-3) var(--space-4) var(--space-3) 40px',
                fontFamily: 'var(--font-body)',
                fontSize: '0.875rem',
                width: '240px',
                outline: 'none',
              }}
            />
          </div>
        </div>
      </section>

      {/* Brands grid */}
      <section style={{
        padding: 'var(--space-20) var(--space-10)',
        background: 'var(--surface-container-lowest)',
      }}>
        <div style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 'var(--space-6)',
        }}>
          {filtered.map((brand) => (
            <div
              key={brand.name}
              style={{
                background: 'var(--surface-container-low)',
                padding: 'var(--space-10)',
                borderTop: '2px solid transparent',
                transition: 'border-color 0.4s, background 0.4s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderTopColor = 'var(--primary)';
                e.currentTarget.style.background = 'var(--surface-container)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderTopColor = 'transparent';
                e.currentTarget.style.background = 'var(--surface-container-low)';
              }}
            >
              <h3
                className="title-lg"
                style={{ color: 'white', marginBottom: 'var(--space-3)' }}
              >
                {brand.name}
              </h3>
              <p style={{
                color: 'var(--on-surface-variant)',
                fontSize: '0.875rem',
                marginBottom: 'var(--space-6)',
              }}>
                {brand.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                {brand.sectors.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: '0.5625rem',
                      fontFamily: 'var(--font-label)',
                      fontWeight: 700,
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'var(--primary)',
                      background: 'rgba(173, 199, 255, 0.08)',
                      padding: '2px 8px',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="body-lg" style={{ textAlign: 'center', padding: 'var(--space-20)' }}>
            Aucun résultat pour cette recherche.
          </p>
        )}
      </section>

      {/* CTA */}
      <section style={{
        padding: 'var(--space-24) var(--space-10)',
        textAlign: 'center',
        background: 'var(--surface)',
      }}>
        <h2 className="headline-md reveal" style={{ color: 'white', maxWidth: '700px', margin: '0 auto var(--space-8)' }}>
          Votre moteur ne figure pas dans la liste ?
        </h2>
        <p className="body-lg reveal" style={{ maxWidth: '500px', margin: '0 auto var(--space-10)' }}>
          Contactez-nous pour une étude personnalisée de votre motorisation.
        </p>
        <Link href="/contact" className="btn-primary reveal" style={{ padding: 'var(--space-4) var(--space-10)' }}>
          Nous contacter
        </Link>
      </section>
    </>
  );
}

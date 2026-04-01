'use client';

import Link from 'next/link';

const COMMERCIAUX = [
  { zone: 'Nord / Est / Paris / Bretagne', name: 'Romain BESSON', phone: '06 20 71 47 15', email: 'besson.romain@m-b-i.fr' },
  { zone: 'Zone Centre', name: 'Jonathan TEISSIER', phone: '06 11 22 51 12', email: 'teissier.jonathan@m-b-i.fr' },
  { zone: 'Zone Sud', name: 'Baptiste BOUCHET', phone: '06 20 92 08 20', email: 'bouchet.baptiste@m-b-i.fr' },
];

const INPUT_STYLE = {
  width: '100%',
  background: 'var(--surface-container-high)',
  border: '1px solid rgba(65, 71, 84, 0.3)',
  color: 'var(--on-surface)',
  padding: 'var(--space-4) var(--space-5)',
  fontSize: '0.9375rem',
  outline: 'none',
  transition: 'border-color 0.3s',
};

export default function ContactPage() {
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
            Contact / Devis
          </span>
          <h1 className="display-md" style={{ color: 'white', maxWidth: '900px' }}>
            Demander un Devis
          </h1>
          <p className="body-lg" style={{ maxWidth: '640px', marginTop: 'var(--space-8)' }}>
            Remplissez le formulaire ci-dessous pour recevoir une proposition adaptée à vos besoins. Notre équipe commerciale vous répondra sous 48h.
          </p>
        </div>
      </section>

      {/* Commerciaux — full-width cards */}
      <section style={{
        padding: 'var(--space-12) var(--space-10)',
        paddingBottom: 'var(--space-16)',
        background: 'var(--surface-container-lowest)',
      }}>
        <div className="container" style={{ maxWidth: '1440px' }}>
          <h2 className="headline-sm reveal" style={{ color: 'white', marginBottom: 'var(--space-10)' }}>
            Vos Interlocuteurs Commerciaux
          </h2>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-6)',
          }}>
            {COMMERCIAUX.map((c) => (
              <div
                key={c.name}
                className="reveal"
                style={{
                  flex: '1 1 280px',
                  background: 'var(--surface-container-low)',
                  padding: 'var(--space-8)',
                  borderTop: '2px solid var(--primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-4)',
                }}
              >
                <span className="label-sm" style={{
                  color: 'var(--primary)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  {c.zone}
                </span>
                <p style={{ color: 'white', fontWeight: 600, fontSize: '1.125rem' }}>
                  {c.name}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)', marginTop: 'auto' }}>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, '')}`}
                    style={{ color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>call</span>
                    {c.phone}
                  </a>
                  <a
                    href={`mailto:${c.email}`}
                    style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', textDecoration: 'none' }}
                  >
                    <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>mail</span>
                    {c.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section style={{
        padding: 'var(--space-16) var(--space-10)',
        background: 'var(--surface)',
      }}>
        <div className="container" style={{
          maxWidth: '1440px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: 'var(--space-12)',
          alignItems: 'start',
        }}>
          {/* Form */}
          <div style={{
            flex: '2 1 500px',
            background: 'var(--surface-container-low)',
            padding: 'var(--space-12)',
          }}>
            <h2 className="headline-sm" style={{ color: 'white', marginBottom: 'var(--space-10)' }}>
              Formulaire de Contact
            </h2>

            <form onSubmit={(e) => e.preventDefault()} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-8)',
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <label className="label-sm" htmlFor="nom" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Nom *
                  </label>
                  <input id="nom" type="text" required style={INPUT_STYLE} />
                </div>
                <div style={{ flex: '1 1 200px' }}>
                  <label className="label-sm" htmlFor="prenom" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Prénom *
                  </label>
                  <input id="prenom" type="text" required style={INPUT_STYLE} />
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-6)' }}>
                <div style={{ flex: '1 1 200px' }}>
                  <label className="label-sm" htmlFor="societe" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Société *
                  </label>
                  <input id="societe" type="text" required style={INPUT_STYLE} />
                </div>
                <div style={{ flex: '1 1 200px' }}>
                  <label className="label-sm" htmlFor="telephone" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Téléphone *
                  </label>
                  <input id="telephone" type="tel" required style={INPUT_STYLE} />
                </div>
              </div>

              <div>
                <label className="label-sm" htmlFor="email" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                  Email *
                </label>
                <input id="email" type="email" required style={INPUT_STYLE} />
              </div>

              <div>
                <label className="label-sm" htmlFor="secteur" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                  Secteur d'activité
                </label>
                <select id="secteur" style={{ ...INPUT_STYLE, cursor: 'pointer' }}>
                  <option>Travaux Publics</option>
                  <option>Transports Urbains</option>
                  <option>Transports Ferroviaires</option>
                  <option>Maritime</option>
                  <option>Agricole</option>
                  <option>Défense</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label className="label-sm" htmlFor="message" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                  Message / Détails de la demande *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  style={{ ...INPUT_STYLE, resize: 'vertical', fontFamily: 'inherit' }}
                  placeholder="Décrivez votre besoin : type de moteur, marque, modèle, quantité..."
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'var(--primary)',
                  color: 'var(--on-primary)',
                  padding: 'var(--space-5) var(--space-10)',
                  border: 'none',
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  alignSelf: 'flex-start',
                  transition: 'opacity 0.3s',
                }}
              >
                Envoyer la Demande
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {/* Address card */}
            <div style={{
              background: 'var(--surface-container-low)',
              padding: 'var(--space-10)',
              borderTop: '2px solid var(--primary)',
            }}>
              <h3 className="headline-sm" style={{ color: 'white', marginBottom: 'var(--space-6)' }}>
                Siège Social
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.25rem', marginTop: '2px' }}>location_on</span>
                  <div>
                    <p style={{ color: 'var(--on-surface)', fontWeight: 600 }}>
                      MBI (Motorop BRM Industries)
                    </p>
                    <p className="body-md">
                      1356 rue Louise Michel<br />42153 Riorges
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>call</span>
                  <div>
                    <p className="body-md">Tél. 04 77 44 25 00</p>
                    <p className="body-md">Fax 04 77 44 25 29</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>mail</span>
                  <a href="mailto:contact@m-b-i.fr" style={{ color: 'var(--primary)' }}>
                    contact@m-b-i.fr
                  </a>
                </div>
              </div>
            </div>

            {/* Quick info */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-4)',
            }}>
              {[
                { icon: 'timer', value: '< 48h', label: 'Délai de Réponse' },
                { icon: 'support_agent', value: '24/7', label: 'Support' },
                { icon: 'map', value: 'Nationale', label: 'Couverture' },
                { icon: 'verified', value: 'ISO', label: 'Certifié' },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: 'var(--surface-container-low)',
                    padding: 'var(--space-6)',
                    textAlign: 'center',
                  }}
                >
                  <span className="material-symbols-outlined" style={{
                    color: 'var(--primary)',
                    fontSize: '1.75rem',
                    display: 'block',
                    marginBottom: 'var(--space-2)',
                    fontVariationSettings: "'FILL' 1",
                  }}>
                    {item.icon}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-headline)',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    color: 'var(--primary)',
                    display: 'block',
                  }}>
                    {item.value}
                  </span>
                  <span className="label-sm" style={{ color: 'var(--on-surface-variant)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

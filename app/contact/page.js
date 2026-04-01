'use client';

import Link from 'next/link';

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

      {/* Form + Sidebar */}
      <section style={{
        padding: 'var(--space-20) var(--space-10)',
        background: 'var(--surface-container-lowest)',
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
            flex: '1 1 500px',
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                <div>
                  <label className="label-sm" htmlFor="nom" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Nom *
                  </label>
                  <input
                    id="nom"
                    type="text"
                    required
                    style={{
                      width: '100%',
                      background: 'var(--surface-container-high)',
                      border: 'none',
                      color: 'var(--on-surface)',
                      padding: 'var(--space-4)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label className="label-sm" htmlFor="prenom" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Prénom *
                  </label>
                  <input
                    id="prenom"
                    type="text"
                    required
                    style={{
                      width: '100%',
                      background: 'var(--surface-container-high)',
                      border: 'none',
                      color: 'var(--on-surface)',
                      padding: 'var(--space-4)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="label-sm" htmlFor="entreprise" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                  Entreprise
                </label>
                <input
                  id="entreprise"
                  type="text"
                  style={{
                    width: '100%',
                    background: 'var(--surface-container-high)',
                    border: 'none',
                    color: 'var(--on-surface)',
                    padding: 'var(--space-4)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>
                <div>
                  <label className="label-sm" htmlFor="email" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    style={{
                      width: '100%',
                      background: 'var(--surface-container-high)',
                      border: 'none',
                      color: 'var(--on-surface)',
                      padding: 'var(--space-4)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>
                <div>
                  <label className="label-sm" htmlFor="telephone" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                    Téléphone
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    style={{
                      width: '100%',
                      background: 'var(--surface-container-high)',
                      border: 'none',
                      color: 'var(--on-surface)',
                      padding: 'var(--space-4)',
                      fontSize: '0.9375rem',
                      outline: 'none',
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="label-sm" htmlFor="type-moteur" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                  Type de moteur / Référence
                </label>
                <input
                  id="type-moteur"
                  type="text"
                  placeholder="Ex: Caterpillar C7, Cummins QSK60..."
                  style={{
                    width: '100%',
                    background: 'var(--surface-container-high)',
                    border: 'none',
                    color: 'var(--on-surface)',
                    padding: 'var(--space-4)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label className="label-sm" htmlFor="message" style={{ color: 'var(--on-surface-variant)', display: 'block', marginBottom: 'var(--space-2)' }}>
                  Description de votre besoin *
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    background: 'var(--surface-container-high)',
                    border: 'none',
                    color: 'var(--on-surface)',
                    padding: 'var(--space-4)',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>

              <button type="submit" className="btn-primary" style={{
                padding: 'var(--space-4) var(--space-10)',
                width: 'fit-content',
              }}>
                Envoyer la demande
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
            {/* Address card */}
            <div style={{
              background: 'rgba(32, 31, 31, 0.7)',
              backdropFilter: 'blur(20px)',
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

            {/* Commerciaux */}
            <div style={{
              background: 'rgba(32, 31, 31, 0.7)',
              backdropFilter: 'blur(20px)',
              padding: 'var(--space-10)',
              borderTop: '2px solid var(--primary)',
            }}>
              <h3 className="headline-sm" style={{ color: 'white', marginBottom: 'var(--space-8)' }}>
                Commerciaux
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                {[
                  { zone: 'Nord / Est / Paris / Bretagne', name: 'Romain BESSON', phone: '06 20 71 47 15', email: 'besson.romain@m-b-i.fr' },
                  { zone: 'Zone Centre', name: 'Jonathan TEISSIER', phone: '06 11 22 51 12', email: 'teissier.jonathan@m-b-i.fr' },
                  { zone: 'Zone Sud', name: 'Baptiste BOUCHET', phone: '06 20 92 08 20', email: 'bouchet.baptiste@m-b-i.fr' },
                ].map((c) => (
                  <div key={c.name} style={{
                    background: 'var(--surface-container-high)',
                    padding: 'var(--space-6)',
                    borderLeft: '3px solid var(--primary)',
                  }}>
                    <span className="label-sm" style={{ color: 'var(--primary)', display: 'block', marginBottom: 'var(--space-2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {c.zone}
                    </span>
                    <p style={{ color: 'var(--on-surface)', fontWeight: 600, marginBottom: 'var(--space-2)' }}>
                      {c.name}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-1)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: 'var(--on-surface-variant)' }}>call</span>
                      <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="body-sm" style={{ color: 'var(--on-surface-variant)' }}>
                        {c.phone}
                      </a>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '1rem', color: 'var(--on-surface-variant)' }}>mail</span>
                      <a href={`mailto:${c.email}`} className="body-sm" style={{ color: 'var(--primary)' }}>
                        {c.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Info cards */}
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

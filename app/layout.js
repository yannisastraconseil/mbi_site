import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import CookieBanner from '@/components/CookieBanner';

export const metadata = {
  title: {
    template: '%s | M.B.I ENGINE SOLUTIONS',
    default: 'M.B.I ENGINE SOLUTIONS | Précision Industrielle',
  },
  description:
    'Rénovation de précision et solutions moteur haute performance pour les leaders de l\'industrie. Plus de 30 ans d\'expertise en ingénierie moteur industrielle.',
  keywords: [
    'rénovation moteur',
    'maintenance industrielle',
    'pompe injection',
    'moteur diesel',
    'remanufacturation',
    'MBI Engine',
    'banc essai moteur',
  ],
  openGraph: {
    title: 'M.B.I ENGINE SOLUTIONS',
    description: 'Rénovation de précision et solutions moteur haute performance.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://m-b-i.online',
  },
  metadataBase: new URL('https://m-b-i.online'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main style={{ paddingTop: '80px' }}>
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <ScrollReveal />
      </body>
    </html>
  );
}

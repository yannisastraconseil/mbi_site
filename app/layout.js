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

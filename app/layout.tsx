import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/providers/SmoothScroll'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  title: 'La Passe Digitale — Agence Digitale Créative',
  description:
    "Agence digitale créative spécialisée dans la création de sites vitrines, e-commerce, SEO, logos, flyers et cartes de visite. Transformez votre présence digitale.",
  keywords: [
    'agence digitale',
    'création site internet',
    'site vitrine',
    'e-commerce',
    'SEO',
    'référencement',
    'logo',
    'identité visuelle',
    'flyer',
    'carte de visite',
  ],
  openGraph: {
    title: 'La Passe Digitale — Agence Digitale Créative',
    description: 'On propulse votre marque dans l\'ère digitale.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}

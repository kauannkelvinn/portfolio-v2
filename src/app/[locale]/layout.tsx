import type { Metadata } from 'next'
import '../globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import { getDictionary } from '../dictionaries/getDictionaries'
import { Analytics } from '@vercel/analytics/react'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'pt' }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: {
      default: dict.seo.title,
      template: `%s | Kauan Kelvin`,
    },
    description: dict.seo.description,
    metadataBase: new URL('https://kauankelvin.com'),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en',
        'pt-BR': '/pt',
      },
    },
    openGraph: {
      title: dict.seo.title,
      description: dict.seo.description,
      url: 'https://kauankelvin.com',
      siteName: 'Kauan Kelvin | Full Stack Software Engineer',
      locale: locale === 'pt' ? 'pt_BR' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
          alt: 'Kauan Kelvin - Full Stack Software Engineer',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.seo.title,
      description: dict.seo.description,
      images: ['/opengraph-image.png'],
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params

  return (
    <html lang={locale} className="h-full antialiased">
      <body className="bg-portfolio-white text-portfolio-black flex min-h-screen flex-col px-7.5 antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}

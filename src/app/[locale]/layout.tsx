import type { Metadata } from 'next'
import '../globals.css'
import SmoothScroll from '@/components/SmoothScroll'
import { getDictionary } from '../dictionaries/getDictionaries'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'pt' }>
}): Promise<Metadata> {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return {
    title: dict.seo.title,
    description: dict.seo.description,
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
      </body>
    </html>
  )
}

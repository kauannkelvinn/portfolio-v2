import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kauan Kelvin | Full Stack Software Engineer',
  description:
    'Portfolio de Kauan Kelvin, Engenheiro de Software focado em performance e arquiteturas escaláveis.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="bg-portfolio-white text-portfolio-black flex min-h-screen flex-col px-7.5 antialiased">
        {children}
      </body>
    </html>
  )
}

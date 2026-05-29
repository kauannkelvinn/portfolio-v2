import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Work />
    </main>
  )
}

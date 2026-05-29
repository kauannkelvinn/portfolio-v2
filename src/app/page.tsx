import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import About from '@/components/About'
import Statistics from '@/components/Statistics'

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <Work />
      <About />
      <Statistics />
    </main>
  )
}

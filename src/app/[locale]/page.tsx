import { getDictionary } from '../dictionaries/getDictionaries'
import HomeClient from '@/components/HomeClient'

export default async function Home({ params }: { params: Promise<{ locale: 'en' | 'pt' }> }) {
  const { locale } = await params

  const dict = await getDictionary(locale)

  return <HomeClient dict={dict} />
}

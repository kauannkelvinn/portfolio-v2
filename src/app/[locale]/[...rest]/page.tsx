import Link from 'next/link'
import { getDictionary } from '../../dictionaries/getDictionaries'

export default async function CatchAll({ params }: { params: Promise<{ locale: 'en' | 'pt' }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <main className="flex min-h-[85vh] w-full flex-col items-center justify-center px-7.5">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-portfolio-black tracking-tightest text-[120px] leading-none font-bold md:text-[250px]">
          {dict.notFound.title}
        </h1>

        <p className="text-portfolio-gray mt-2 max-w-100 text-[20px] leading-snug font-medium tracking-tighter md:mt-6 md:text-[25px]">
          {dict.notFound.description}
        </p>

        <Link
          href={`/${locale}`}
          className="group text-portfolio-black mt-16 flex w-max items-center gap-2 focus:outline-none md:mt-24"
        >
          <span className="relative pb-1 text-[20px] font-medium md:text-[22px]">
            {dict.notFound.back}
            <span className="bg-portfolio-black absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
          </span>
          <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
            →
          </span>
        </Link>
      </div>
    </main>
  )
}

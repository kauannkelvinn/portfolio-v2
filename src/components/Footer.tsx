'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

interface FooterProps {
  dict: {
    title: string
    subtitle: string
    links: {
      linkedin: string
      twitter: string
      github: string
      email: string
    }
    mobile: {
      home: string
      pt: string
      en: string
    }
  }
  nav: {
    work: string
    about: string
    statistics: string
  }
}

export default function Footer({ dict, nav }: FooterProps) {
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false)

  const pathname = usePathname()
  const router = useRouter()

  const switchLang = (newLocale: string) => {
    if (!pathname) return
    const segments = pathname.split('/')
    segments[1] = newLocale

    setIsLangOpen(false)
    setIsDesktopLangOpen(false)

    setTimeout(() => {
      router.push(segments.join('/'), { scroll: false })
    }, 400)
  }
  return (
    <div className="relative flex h-full w-full flex-col">
      <div className="hidden h-full w-full flex-col justify-between px-7.5 pt-27.5 pb-12.5 md:flex">
        <div className="flex w-full items-start justify-between leading-12">
          <div className="flex flex-col">
            <h2 className="text-64 tracking-tightest font-medium">{dict.title}</h2>
            <p className="text-36 mt-2 tracking-tighter">{dict.subtitle}</p>
          </div>

          <div className="text-36 text-portfolio-nav tracking-tightest flex flex-col items-end gap-3">
            <a href="#work" className="hover:text-portfolio-white transition">
              {nav.work}
            </a>
            <a href="#about" className="hover:text-portfolio-white transition">
              {nav.about}
            </a>
            <a href="#statistics" className="hover:text-portfolio-white transition">
              {nav.statistics}
            </a>
          </div>
        </div>

        <div className="mt-auto flex w-full items-end justify-between pt-8">
          <div className="flex items-center gap-6 text-[32px]">
            <span>© {new Date().getFullYear()}</span>

            <div className="ml-8 flex items-center gap-6 overflow-hidden">
              <button
                onClick={() => setIsDesktopLangOpen(!isDesktopLangOpen)}
                className="flex cursor-pointer items-center transition-opacity hover:opacity-70 focus:outline-none"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/global.png`}
                  alt="global"
                  width={43}
                  height={43}
                  loading="eager"
                  className="h-11 w-auto transform-gpu object-contain pb-2"
                />
              </button>

              <div
                className={`flex items-center gap-6 pl-3 transition-all duration-300 ease-in-out ${isDesktopLangOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none -translate-x-4 opacity-0'}`}
              >
                <button
                  onClick={() => switchLang('pt')}
                  className="cursor-pointer transition-opacity hover:opacity-70"
                >
                  {dict.mobile.pt}
                </button>
                <button
                  onClick={() => switchLang('en')}
                  className="cursor-pointer transition-opacity hover:opacity-70"
                >
                  {dict.mobile.en}
                </button>
              </div>
            </div>
          </div>

          <div className="text-36 tracking-tightest flex items-center gap-20">
            <a
              href="https://www.linkedin.com/in/kauannkelvinn/"
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              {dict.links.linkedin}
            </a>
            <a
              href="https://x.com/kevyingwashere"
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              {dict.links.twitter}
            </a>
            <a
              href="https://github.com/kauannkelvinn"
              target="_blank"
              className="transition-opacity hover:opacity-70"
            >
              {dict.links.github}
            </a>
            <a
              href="mailto:contato@kauankelvin.com"
              className="transition-opacity hover:opacity-70"
            >
              {dict.links.email}
            </a>
          </div>
        </div>
      </div>

      <div className="flex h-full w-full flex-col justify-between px-5 pt-25 pb-6 md:hidden">
        <div className="mb-auto flex w-full items-start justify-between">
          <div className="flex flex-col leading-6">
            <span className="text-30 tracking-tightest font-medium">{dict.title}</span>
            <span className="mt-1 max-w-75 text-[20px] tracking-tighter">{dict.subtitle}</span>
          </div>

          <div className="text-portfolio-nav tracking-tightest flex flex-col items-end gap-2 text-[20px]">
            <a
              href="https://www.linkedin.com/in/kauannkelvinn/"
              target="_blank"
              className="transition-opacity active:opacity-70"
            >
              {dict.links.linkedin}
            </a>
            <a
              href="https://x.com/kevyingwashere"
              target="_blank"
              className="transition-opacity active:opacity-70"
            >
              {dict.links.twitter}
            </a>
            <a
              href="https://github.com/kauannkelvinn"
              target="_blank"
              className="transition-opacity active:opacity-70"
            >
              {dict.links.github}
            </a>
            <a
              href="mailto:contato@kauankelvin.com"
              className="transition-opacity active:opacity-70"
            >
              {dict.links.email}
            </a>
          </div>
        </div>

        <div className="mt-auto flex w-full flex-col pt-8">
          <AnimatePresence>
            {isLangOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="w-full overflow-hidden"
              >
                <div className="flex flex-col items-start gap-2 pb-5 text-[18px] font-medium">
                  <button
                    onClick={() => switchLang('pt')}
                    className="transition-opacity active:opacity-70"
                  >
                    {dict.mobile.pt}
                  </button>
                  <button
                    onClick={() => switchLang('en')}
                    className="transition-opacity active:opacity-70"
                  >
                    {dict.mobile.en}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="relative flex w-full items-center justify-between">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center transition-opacity focus:outline-none active:opacity-70"
            >
              <img
                src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/global.png`}
                alt="global"
                width={24}
                height={24}
                loading="eager"
                className="h-5 w-auto transform-gpu object-contain"
              />
            </button>

            <span className="absolute left-1/2 -translate-x-1/2 text-[18px] font-medium">
              © {new Date().getFullYear()}
            </span>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-[18px] font-medium transition-opacity active:opacity-70"
            >
              {dict.mobile.home}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

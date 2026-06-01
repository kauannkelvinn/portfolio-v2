'use client'

import { useState } from 'react'

interface TranslateMenuProps {
  lang: {
    pt: string
    en: string
  }
}

export default function TranslateMenu({ lang }: TranslateMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-22 overflow-hidden">
      <div
        className={`flex items-center gap-22 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0'}`}
      >
        <button className="cursor-pointer transition-opacity hover:opacity-70">{lang.pt}</button>
        <button className="cursor-pointer transition-opacity hover:opacity-70">{lang.en}</button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="-mt-1.5 cursor-pointer transition-opacity hover:opacity-70 focus:outline-none"
        aria-label="Toggle Language"
      >
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/translate.png`}
          alt="Translate"
          width={43}
          height={43}
          loading="eager"
          className="transform-gpu"
        />
      </button>
    </div>
  )
}

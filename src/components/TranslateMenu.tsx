'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function TranslateMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-22 overflow-hidden">
      <div
        className={`flex items-center gap-22 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-4 opacity-0'}`}
      >
        <button className="cursor-pointer transition-opacity hover:opacity-70">Portuguese</button>
        <button className="cursor-pointer transition-opacity hover:opacity-70">English</button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="-mt-1.5 cursor-pointer transition-opacity hover:opacity-70 focus:outline-none"
        aria-label="Toggle Language"
      >
        <Image src="/images/translate.svg" alt="Translate" width={43} height={43} />
      </button>
    </div>
  )
}

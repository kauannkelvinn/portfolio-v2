import TranslateMenu from './TranslateMenu'

export default function Navbar() {
  return (
    <header className="border-portfolio-black text-36 tracking-tightest flex w-full items-center justify-between border-b-[3px] py-7.5">
      <nav>
        <ul className="text-portfolio-percent flex gap-22 font-medium">
          <li>
            <a href="#work" className="transition-opacity hover:opacity-70">
              Work
            </a>
          </li>
          <li>
            <a href="#about" className="transition-opacity hover:opacity-70">
              About
            </a>
          </li>
        </ul>
      </nav>

      <nav className="text-portfolio-black flex items-center gap-22 font-medium">
        <TranslateMenu />

        <ul className="text-portfolio-black flex items-center gap-22 font-medium">
          <li>
            <a href="#statistics" className="flex items-center transition-opacity hover:opacity-70">
              Statistics
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-opacity hover:opacity-70">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

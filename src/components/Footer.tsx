export default function Footer() {
  return (
    <div className="flex h-full w-full flex-col justify-between px-7.5 pt-27.5 pb-12.5">
      <div className="flex w-full items-start justify-between leading-12">
        <div className="flex flex-col">
          <h2 className="text-64 tracking-tightest font-medium">Kauan Kelvin</h2>
          <p className="text-36 mt-2 tracking-tighter">Full Stack Software Engineer</p>
        </div>

        <div className="text-36 text-portfolio-nav tracking-tightest flex flex-col items-end gap-3">
          <a href="#work" className="hover:text-portfolio-white transition">
            Work
          </a>
          <a href="#about" className="hover:text-portfolio-white transition">
            About
          </a>
          <a href="#statistics" className="hover:text-portfolio-white transition">
            Statistics
          </a>
        </div>
      </div>

      <div className="mt-auto flex w-full items-end justify-between pt-8">
        <div className="text-36 flex items-center gap-6">
          <span>© 2026</span>
          <div className="ml-8 flex items-center gap-13">
            <span className="cursor-pointer transition hover:opacity-70">Portuguese</span>
            <span className="cursor-pointer transition hover:opacity-70">English</span>
          </div>
        </div>

        <div className="text-36 tracking-tightest flex items-center gap-20">
          <a
            href="https://www.linkedin.com/in/kauannkelvinn/"
            target="_blank"
            className="transition-opacity hover:opacity-70"
          >
            Linkedin
          </a>
          <a
            href="https://x.com/kevyingwashere"
            target="_blank"
            className="transition-opacity hover:opacity-70"
          >
            Twitter
          </a>
          <a
            href="https://github.com/kauannkelvinn"
            target="_blank"
            className="transition-opacity hover:opacity-70"
          >
            Github
          </a>
          <a href="mailto:contato@kauankelvin.com" className="transition-opacity hover:opacity-70">
            Email
          </a>
        </div>
      </div>
    </div>
  )
}

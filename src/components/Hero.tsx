interface HeroProps {
  dict: {
    title: string
    subtitle: string
    description: string
    ctaWork: string
    ctaAbout: string
  }
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section
      id="hero"
      className="bg-portfolio-white border-portfolio-percent relative mt-16 flex w-full flex-col border-b-2 pb-30 md:mt-72.25"
    >
      <div className="text-hero-title text-portfolio-title md:leading-title flex flex-col leading-9 font-medium">
        <div className="overflow-hidden">
          <span className="reveal-text block">Full Stack</span>
        </div>
        <div className="overflow-hidden">
          <span className="reveal-text block">{dict.title}</span>
        </div>
        <div className="mt-4 overflow-hidden md:mt-5">
          <span className="reveal-text text-hero-title text-portfolio-gray block">
            {dict.subtitle}
          </span>
        </div>
      </div>

      <div className="mt-19.5 flex w-full">
        <div className="max-w-323.5">
          <p className="reveal-lines text-hero-body text-portfolio-black leading-8 font-medium md:leading-normal">
            {dict.description}
          </p>

          <div className="text-cta text-portfolio-black tracking-tightest mt-18 flex items-center gap-20 font-medium">
            <a
              href="#work"
              className="group text-portfolio-black flex w-max items-center gap-2 focus:outline-none"
            >
              <span>
                {dict.ctaWork}
                <span className="bg-portfolio-black absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </span>
              <span className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5">
                →
              </span>
            </a>
            <a
              href="#about"
              className="text-portfolio-gray border-trans border-portfolio-percent hover:text-portfolio-percent border-b-3 pb-1 transition-colors duration-100 ease-out"
            >
              {dict.ctaAbout}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

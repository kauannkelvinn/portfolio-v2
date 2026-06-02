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
            <a href="#work" className="text-portfolio-black">
              {dict.ctaWork}
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

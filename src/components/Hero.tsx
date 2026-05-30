export default function Hero() {
  return (
    <section className="border-portfolio-percent mt-16 flex w-full flex-col border-b-2 pb-30 md:mt-72.25">
      <div className="md:text-90 text-portfolio-title flex flex-col text-[42px] leading-9 font-medium md:leading-[0.864]">
        <span>Full Stack</span>
        <span>Software Engineer</span>
        <span className="text-portfolio-gray text-42 md:text-90 mt-4 md:mt-5">
          Building things that matter.
        </span>
      </div>

      <div className="mt-19.5 flex w-full">
        <div className="max-w-323.5">
          <p className="md:text-body text-portfolio-black text-[25px] leading-8 font-medium md:leading-normal">
            Focado em arquitetura escalável, performance de alto nível e engenharia de software de
            ponta a ponta, integrando desde interfaces limpas até sistemas complexos e APIs que
            resolvem problemas reais.
          </p>

          <div className="md:text-30 text-portfolio-black tracking-tightest mt-18 flex items-center gap-20 text-[20px] font-medium">
            <a href="#work" className="flex items-center gap-2 transition-opacity hover:opacity-70">
              Ver trabalho <span className="text-3xl">→</span>
            </a>
            <a
              href="#about"
              className="text-portfolio-gray border-portfolio-percent hover:text-portfolio-percent border-b-3 pb-1 transition-opacity"
            >
              Leia sobre mim
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      className="border-portfolio-percent w-full flex-col border-b-2 pt-12 pb-42.5"
    >
      <div className="text-40 text-portfolio-black mb-12.5 w-full text-center font-medium">
        Work
      </div>

      <div className="grid grid-cols-2 gap-x-20 gap-y-32">
        <div className="text-portfolio-black text-40 flex flex-col">
          <a
            href="https://github.com/kauannkelvinn/appresso-kaf"
            target="_blank"
            className="border-portfolio-percent hover:opacity-70t opacity w-fit border-b-2 pb-2 font-medium transition"
          >
            Appreso Kaf
          </a>
          <p className="mt-12 max-w-147.5">
            Painel SaaS (&quot;Life OS&quot;) com IA generativa e automações via WhatsApp Business
            API.
          </p>
        </div>

        <div className="text-portfolio-black text-40 flex flex-col items-end text-right">
          <a
            href="https://github.com/kauannkelvinn/appresso-kaf"
            target="_blank"
            className="border-portfolio-percent hover:opacity-70t opacity w-fit border-b-2 pb-2 font-medium transition"
          >
            Watch Party
          </a>
          <p className="mt-12 max-w-147.5">
            Plataforma de streaming social com sincronização de vídeo e chat em tempo real.
          </p>
        </div>

        <div className="text-portfolio-black text-40 flex flex-col">
          <a
            href="https://github.com/kauannkelvinn/appresso-kaf"
            target="_blank"
            className="border-portfolio-percent hover:opacity-70t opacity w-fit border-b-2 pb-2 font-medium transition"
          >
            Giromax
          </a>
          <p className="mt-12 max-w-147.5">
            Vitrine de Ofertas Inteligente focada em marketing de afiliados.
          </p>
        </div>
      </div>
    </section>
  )
}

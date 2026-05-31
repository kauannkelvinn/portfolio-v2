export default function About() {
  return (
    <section
      id="about"
      className="border-portfolio-black pb:16 flex w-full flex-col border-b-2 py-12 md:py-12.5 md:pb-26"
    >
      <div className="md:text-40 text-portfolio-black mb-12 w-full text-center text-[25px] font-medium md:mb-23">
        About
      </div>

      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2 md:gap-y-0">
        <div className="flex w-full flex-col leading-snug md:w-auto md:max-w-157 md:leading-13">
          <p className="md:text-40 text-portfolio-black text-left text-[25px] font-medium md:text-justify">
            Sou engenheiro full-stack focado em criar sistemas web rápidos. Meu foco é total em
            performance, na arquitetura limpa e na experiência de produto.
          </p>
        </div>

        <div className="flex w-full flex-col leading-snug md:w-auto md:max-w-242.5 md:leading-13">
          <p className="md:text-40 text-portfolio-black text-left text-[25px] font-medium md:text-justify">
            Unindo interfaces robustas em React e Next.js a estruturas estáveis de backend com
            Node.js e AWS, encaro código de forma analítica. Minha bagagem lidando com incidentes
            críticos sob pressão me deu disciplina para focar em causa raiz. Na prática, isso se
            traduz em caçar gargalos de renderização, otimizar fluxos de dados complexos em tempo
            real e desenhar arquiteturas multi-tenant seguras.
          </p>
        </div>
      </div>

      <div className="mt-16 flex w-full flex-col leading-snug md:mt-28 md:leading-13">
        <p className="md:text-40 text-portfolio-black text-left text-[25px] font-medium md:text-justify">
          Da entrega de dashboards de BI complexos à construção de experiências 3D interativas, me
          sinto em casa trabalhando com autonomia, deploys rápidos e alto nível de craft técnico
          através das tecnologias que formam o meu core stack:
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-8 md:mt-17.5 md:justify-start md:gap-25.5">
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/nextjs-logo.png`}
          alt="Next.js"
          width={329}
          height={67}
          loading="eager"
          className="h-7 w-auto transform-gpu md:h-16.75"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/react-logo.png`}
          alt="React"
          width={90}
          height={80}
          loading="eager"
          className="h-8 w-auto transform-gpu md:h-20"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/prisma-logo.png`}
          alt="Prisma"
          width={204}
          height={80}
          loading="eager"
          className="h-7 w-auto transform-gpu md:h-20"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/aws-logo.png`}
          alt="AWS"
          width={117}
          height={70}
          loading="eager"
          className="h-8 w-auto transform-gpu md:h-17.5"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/nodejs-logo.png`}
          alt="Node.js"
          width={131}
          height={80}
          loading="eager"
          className="h-8 w-auto transform-gpu md:h-20"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/docker-logo.png`}
          alt="Docker"
          width={272}
          height={62}
          loading="eager"
          className="h-7 w-auto transform-gpu md:h-15.5"
        />
        <img
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/typescript-logo.png`}
          alt="TypeScript"
          width={88}
          height={88}
          loading="eager"
          className="h-8 w-auto transform-gpu md:h-22"
        />
      </div>
    </section>
  )
}

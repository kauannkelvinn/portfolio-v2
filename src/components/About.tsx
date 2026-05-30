import Image from 'next/image'

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
        <Image
          src="/images/nextjs-logo.svg"
          alt="Next.js"
          width={329}
          height={67}
          className="h-7 w-auto md:h-16.75"
        />
        <Image
          src="/images/react-logo.svg"
          alt="React"
          width={90}
          height={80}
          className="h-8 w-auto md:h-20"
        />
        <Image
          src="/images/prisma-logo.svg"
          alt="Prisma"
          width={204}
          height={80}
          className="h-7 w-auto md:h-20"
        />
        <Image
          src="/images/aws-logo.svg"
          alt="AWS"
          width={117}
          height={70}
          className="h-8 w-auto md:h-17.5"
        />
        <Image
          src="/images/nodejs-logo.svg"
          alt="Node.js"
          width={131}
          height={80}
          className="h-8 w-auto md:h-20"
        />
        <Image
          src="/images/docker-logo.svg"
          alt="Docker"
          width={272}
          height={62}
          className="h-7 w-auto md:h-15.5"
        />
        <Image
          src="/images/typescript-logo.svg"
          alt="TypeScript"
          width={88}
          height={88}
          className="h-8 w-auto md:h-22"
        />
      </div>
    </section>
  )
}

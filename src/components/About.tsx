import Image from 'next/image'

export default function About() {
  return (
    <section
      id="about"
      className="border-portfolio-black flex w-full flex-col border-b-2 py-12.5 pb-26"
    >
      <div className="text-40 text-portfolio-black mb-23 w-full text-center font-medium">About</div>

      <div className="grid grid-cols-2 gap-x-20">
        <div className="flex max-w-157 flex-col leading-13">
          <p className="text-40 text-portfolio-black text-justify font-medium">
            Sou engenheiro full-stack focado em criar sistemas web rápidos. Meu foco é total em
            performance, na arquitetura limpa e na experiência de produto.
          </p>
        </div>

        <div className="flex max-w-242.5 flex-col leading-13">
          <p className="text-40 text-portfolio-black text-justify font-medium">
            Unindo interfaces robustas em React e Next.js a estruturas estáveis de backend com
            Node.js e AWS, encaro código de forma analítica. Minha bagagem lidando com incidentes
            críticos sob pressão me deu disciplina para focar em causa raiz. Na prática, isso se
            traduz em caçar gargalos de renderização, otimizar fluxos de dados complexos em tempo
            real e desenhar arquiteturas multi-tenant seguras.
          </p>
        </div>
      </div>

      <div className="mt-28 flex w-full flex-col leading-13">
        <p className="text-40 text-portfolio-black text-justify font-medium">
          Da entrega de dashboards de BI complexos à construção de experiências 3D interativas, me
          sinto em casa trabalhando com autonomia, deploys rápidos e alto nível de craft técnico
          através das tecnologias que formam o meu core stack:
        </p>
      </div>

      <div className="mt-17.5 flex flex-wrap items-center gap-25.5">
        <Image src="/images/nextjs-logo.svg" alt="Next.js" width={329} height={67} />
        <Image src="/images/react-logo.svg" alt="React" width={90} height={80} />
        <Image src="/images/prisma-logo.svg" alt="Prisma" width={204} height={80} />
        <Image src="/images/aws-logo.svg" alt="AWS" width={117} height={70} />
        <Image src="/images/nodejs-logo.svg" alt="Node.js" width={131} height={80} />
        <Image src="/images/docker-logo.svg" alt="Docker" width={272} height={62} />
        <Image src="/images/typescript-logo.svg" alt="TypeScript" width={88} height={88} />
      </div>
    </section>
  )
}

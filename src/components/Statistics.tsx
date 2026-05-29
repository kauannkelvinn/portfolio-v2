export default function Statistics() {
  return (
    <section id="statistics" className="flex w-full flex-col pt-17.5 pb-66.75">
      <div className="text-40 text-portfolio-black mb-17.5 w-full text-center font-medium">
        Statistics
      </div>

      <div className="grid grid-cols-3 gap-x-20 gap-y-16">
        <div className="flex flex-col">
          <div className="text-portfolio-black flex items-baseline font-bold">
            <span className="text-128">40</span>
            <span className="text-50">%</span>
          </div>
          <div className="border-portfolio-black mt-6 border-t-[3px] pt-6">
            <p className="text-38 text-portfolio-black text-justify leading-13 font-medium">
              Redução nos tempos de carregamento inicial de gráficos através da refatoração de
              componentes de renderização de dados complexos em painéis do lado do cliente.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-portfolio-black flex items-baseline font-bold">
            <span className="text-128">100</span>
            <span className="text-50">%</span>
          </div>
          <div className="border-portfolio-black mt-6 border-t-[3px] pt-6">
            <p className="text-38 text-portfolio-black text-justify leading-13 font-medium">
              Estabilidade alcançada nos pipelines de implantação de contêineres após auditoria de
              ambientes e resolução da paridade de arquivos de bloqueio de dependências.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <div className="text-portfolio-black flex items-baseline font-bold">
            <span className="text-128">+3</span>
            <span className="text-50">years</span>
          </div>
          <div className="border-portfolio-black mt-6 border-t-[3px] pt-6">
            <p className="text-38 text-portfolio-black text-justify leading-13 font-medium">
              Estabilidade alcançada nos pipelines de implantação de contêineres após auditoria de
              ambientes e resolução da paridade de arquivos de bloqueio de dependências.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-27 flex w-full flex-col">
        <h3 className="text-portfolio-small text-40 font-medium">Engineering Highlights -</h3>

        <div className="mt-11 grid grid-cols-3 gap-x-20 gap-y-12">
          <div className="flex flex-col">
            <h4 className="text-35 text-portfolio-black mb-4 font-bold">0 → 1 Builder</h4>
            <p className="text-portfolio-black text-30 text-justify font-medium">
              Histórico comprovado de desenvolvimento de arquitetura de produtos auxiliares do zero,
              preenchendo a lacuna entre APIs de dados brutos e o design do produto para o usuário
              final.
            </p>
          </div>

          <div className="item flex flex-col items-center">
            <h4 className="text-35 text-portfolio-black mb-4 font-bold">Operational Excellence</h4>
            <p className="text-portfolio-black text-30 text-justify font-medium">
              Experiência em gestão de operações técnicas de alta pressão, investigações de causa
              raiz e cumprimento rigoroso de SLAs.
            </p>
          </div>

          <div className="flex flex-col items-end text-right">
            <h4 className="text-35 text-portfolio-black mb-4 font-bold">Global Talent Pool</h4>
            <p className="text-portfolio-black text-30 text-justify font-medium">
              Avaliado e aprovado em diversas plataformas de software especializadas em nuvem e para
              freelancers internacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Statistics() {
  return (
    <section id="statistics" className="flex w-full flex-col pt-17.5 pb-50 md:pb-66.75">
      <div className="md:text-40 text-portfolio-black mb-17.5 w-full text-center text-[25px] font-medium">
        Statistics
      </div>

      <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-3 md:gap-y-16">
        <div className="flex flex-col">
          <div className="text-portfolio-black flex items-baseline font-bold">
            <span className="text-80 md:text-128">40</span>
            <span className="md:text-50 text-[32px]">%</span>
          </div>
          <div className="border-portfolio-black mt-4 border-t-[3px] pt-4 md:mt-6 md:pt-6">
            <p className="md:text-38 text-portfolio-black leading snug text-left text-[25px] font-medium md:text-justify md:leading-13">
              Redução nos tempos de carregamento inicial de gráficos através da refatoração de
              componentes de renderização de dados complexos em painéis do lado do cliente.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <div className="text-portfolio-black flex items-baseline font-bold">
            <span className="text-80 md:text-128">100</span>
            <span className="md:text-50 text-[32px]">%</span>
          </div>
          <div className="border-portfolio-black mt-4 w-full border-t-[3px] pt-4 md:mt-6 md:pt-6">
            <p className="md:text-38 text-portfolio-black leading snug text-left text-[25px] font-medium md:text-justify md:leading-13">
              Estabilidade alcançada nos pipelines de implantação de contêineres após auditoria de
              ambientes e resolução da paridade de arquivos de bloqueio de dependências.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="text-portfolio-black flex items-baseline font-bold">
            <span className="text-80 md:text-128">+3</span>
            <span className="md:text-50 ml-1 text-[32px]">years</span>
          </div>
          <div className="border-portfolio-black mt-4 border-t-[3px] pt-4 md:mt-6 md:pt-6">
            <p className="md:text-38 text-portfolio-black text-left text-[25px] leading-snug font-medium md:text-justify md:leading-13">
              Estabilidade alcançada nos pipelines de implantação de contêineres após auditoria de
              ambientes e resolução da paridade de arquivos de bloqueio de dependências.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex w-full flex-col md:mt-27">
        <h3 className="text-portfolio-small md:text-40 text-[24px] font-medium">
          Engineering Highlights -
        </h3>

        <div className="mt-11 grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-3">
          <div className="flex flex-col">
            <h4 className="md:text-35 text-portfolio-black mb-3 text-[22px] font-bold md:mb-4">
              0 → 1 Builder
            </h4>
            <p className="text-portfolio-black md:text-30 text-left text-[18px] font-medium md:text-justify">
              Histórico comprovado de desenvolvimento de arquitetura de produtos auxiliares do zero,
              preenchendo a lacuna entre APIs de dados brutos e o design do produto para o usuário
              final.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h4 className="md:text-35 text-portfolio-black mb-3 text-[22px] font-bold md:mb-4">
              Operational Excellence
            </h4>
            <p className="text-portfolio-black md:text-30 text-left text-[18px] font-medium md:text-justify">
              Experiência em gestão de operações técnicas de alta pressão, investigações de causa
              raiz e cumprimento rigoroso de SLAs.
            </p>
          </div>

          <div className="flex flex-col items-start text-left md:items-end md:text-right">
            <h4 className="md:text-35 text-portfolio-black mb-3 text-[22px] font-bold md:mb-4">
              Global Talent Pool
            </h4>
            <p className="text-portfolio-black md:text-30 text-left text-[18px] font-medium md:text-justify">
              Avaliado e aprovado em diversas plataformas de software especializadas em nuvem e para
              freelancers internacionais.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

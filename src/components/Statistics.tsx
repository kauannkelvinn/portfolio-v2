interface StatisticsProps {
  dict: {
    title: string
    stat1: {
      value: string
      unit: string
      description: string
    }
    stat2: {
      value: string
      unit: string
      description: string
    }
    stat3: {
      value: string
      unit: string
      description: string
    }
    highlights: {
      title: string
      item1: {
        title: string
        description: string
      }
      item2: {
        title: string
        description: string
      }
      item3: {
        title: string
        description: string
      }
    }
  }
}

export default function Statistics({ dict }: StatisticsProps) {
  return (
    <section id="statistics" className="flex w-full flex-col pt-17.5 pb-50 md:pb-66.75">
      <div className="md:text-40 text-portfolio-black mb-17.5 w-full text-center text-[25px] font-medium">
        {dict.title}
      </div>

      <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-3 md:gap-y-16">
        <div className="flex flex-col">
          <div className="text-portfolio-black flex items-baseline font-bold">
            <span className="text-80 md:text-128">{dict.stat1.value}</span>
            <span className="md:text-50 text-[32px]">{dict.stat1.unit}</span>
          </div>
          <div className="border-portfolio-black mt-4 border-t-[3px] pt-4 md:mt-6 md:pt-6">
            <p className="md:text-38 text-portfolio-black leading snug text-left text-[25px] font-medium md:text-justify md:leading-13">
              {dict.stat1.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <div className="text-portfolio-black flex items-baseline font-bold">
            <span className="text-80 md:text-128">{dict.stat2.value}</span>
            <span className="md:text-50 text-[32px]">{dict.stat2.unit}</span>
          </div>
          <div className="border-portfolio-black mt-4 w-full border-t-[3px] pt-4 md:mt-6 md:pt-6">
            <p className="md:text-38 text-portfolio-black leading snug text-left text-[25px] font-medium md:text-justify md:leading-13">
              {dict.stat2.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="text-portfolio-black flex items-baseline font-bold">
            <span className="text-80 md:text-128">{dict.stat3.value}</span>
            <span className="md:text-50 ml-1 text-[32px]">{dict.stat3.unit}</span>
          </div>
          <div className="border-portfolio-black mt-4 border-t-[3px] pt-4 md:mt-6 md:pt-6">
            <p className="md:text-38 text-portfolio-black text-left text-[25px] leading-snug font-medium md:text-justify md:leading-13">
              {dict.stat3.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex w-full flex-col md:mt-27">
        <h3 className="text-portfolio-small md:text-40 text-[24px] font-medium">
          {dict.highlights.title}
        </h3>

        <div className="mt-11 grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-3">
          <div className="flex flex-col">
            <h4 className="md:text-35 text-portfolio-black mb-3 text-[22px] font-bold md:mb-4">
              {dict.highlights.item1.title}
            </h4>
            <p className="text-portfolio-black md:text-30 text-left text-[18px] font-medium md:text-justify">
              {dict.highlights.item1.description}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h4 className="md:text-35 text-portfolio-black mb-3 text-[22px] font-bold md:mb-4">
              {dict.highlights.item2.title}
            </h4>
            <p className="text-portfolio-black md:text-30 text-left text-[18px] font-medium md:text-justify">
              {dict.highlights.item2.description}
            </p>
          </div>

          <div className="flex flex-col items-start text-left md:items-end md:text-right">
            <h4 className="md:text-35 text-portfolio-black mb-3 text-[22px] font-bold md:mb-4">
              {dict.highlights.item3.title}
            </h4>
            <p className="text-portfolio-black md:text-30 text-left text-[18px] font-medium md:text-justify">
              {dict.highlights.item3.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

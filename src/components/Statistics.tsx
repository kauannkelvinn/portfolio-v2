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
    <section
      id="statistics"
      className="bg-portfolio-white relative flex w-full flex-col pt-17.5 pb-50 md:pb-66.75"
    >
      <div className="mb-17.5 w-full text-center">
        <div className="overflow-hidden">
          <h2 className="reveal-text text-section-title text-portfolio-black font-medium">
            {dict.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-3 md:gap-y-16">
        <div className="flex flex-col">
          <div className="overflow-hidden">
            <div className="reveal-text text-portfolio-black flex items-baseline font-bold">
              <span className="text-stat-value">{dict.stat1.value}</span>
              <span className="text-stat-unit">{dict.stat1.unit}</span>
            </div>
          </div>
          <div className="border-portfolio-black mt-4 border-t-[3px] pt-4 md:mt-6 md:pt-6">
            <p className="reveal-lines text-stat-description text-portfolio-black text-left leading-snug font-medium md:text-justify md:leading-13">
              {dict.stat1.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-center">
          <div className="overflow-hidden">
            <div className="reveal-text text-portfolio-black flex items-baseline font-bold">
              <span className="text-stat-value">{dict.stat2.value}</span>
              <span className="text-stat-unit">{dict.stat2.unit}</span>
            </div>
          </div>
          <div className="border-portfolio-black mt-4 w-full border-t-[3px] pt-4 md:mt-6 md:pt-6">
            <p className="reveal-lines text-stat-description text-portfolio-black text-left leading-snug font-medium md:text-justify md:leading-13">
              {dict.stat2.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="overflow-hidden">
            <div className="reveal-text text-portfolio-black flex items-baseline font-bold">
              <span className="text-stat-value">{dict.stat3.value}</span>
              <span className="text-stat-unit ml-1">{dict.stat3.unit}</span>
            </div>
          </div>
          <div className="border-portfolio-black mt-4 border-t-[3px] pt-4 md:mt-6 md:pt-6">
            <p className="reveal-lines text-stat-description text-portfolio-black text-left leading-snug font-medium md:text-justify md:leading-13">
              {dict.stat3.description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-20 flex w-full flex-col md:mt-27">
        <div className="overflow-hidden">
          <h3 className="reveal-text text-highlights-title text-portfolio-small font-medium">
            {dict.highlights.title}
          </h3>
        </div>

        <div className="mt-11 grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-3">
          <div className="flex flex-col">
            <div className="overflow-hidden">
              <h4 className="reveal-text text-highlight-heading text-portfolio-black mb-3 font-bold md:mb-4">
                {dict.highlights.item1.title}
              </h4>
            </div>
            <p className="reveal-lines text-highlight-body text-portfolio-black text-left font-medium md:text-justify">
              {dict.highlights.item1.description}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <div className="overflow-hidden">
              <h4 className="reveal-text text-highlight-heading text-portfolio-black mb-3 font-bold md:mb-4">
                {dict.highlights.item2.title}
              </h4>
            </div>
            <p className="reveal-lines text-highlight-body text-portfolio-black text-left font-medium md:text-justify">
              {dict.highlights.item2.description}
            </p>
          </div>

          <div className="flex flex-col items-start text-left md:items-end md:text-right">
            <div className="overflow-hidden">
              <h4 className="reveal-text text-highlight-heading text-portfolio-black mb-3 font-bold md:mb-4">
                {dict.highlights.item3.title}
              </h4>
            </div>
            <p className="reveal-lines text-highlight-body text-portfolio-black text-left font-medium md:text-justify">
              {dict.highlights.item3.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

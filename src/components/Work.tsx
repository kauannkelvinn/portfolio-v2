interface WorkProps {
  dict: {
    title: string
    project1: {
      title: string
      description: string
    }
    project2: {
      title: string
      description: string
    }
    project3: {
      title: string
      description: string
    }
  }
}

export default function Work({ dict }: WorkProps) {
  return (
    <section
      id="work"
      className="bg-portfolio-white border-portfolio-percent relative w-full flex-col border-b-2 pt-12 pb-24 md:pb-42.5"
    >
      <div className="mb-12.5 w-full text-center">
        <div className="overflow-hidden">
          <h2 className="reveal-text text-section-title text-portfolio-black font-medium">
            {dict.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-20 gap-y-20 md:grid-cols-2 md:gap-y-32">
        <div className="text-section-body text-portfolio-black flex flex-col">
          <div className="overflow-hidden">
            <a
              href="https://github.com/kauannkelvinn/appresso-kaf"
              target="_blank"
              className="reveal-text border-portfolio-percent inline-block w-fit border-b-2 pb-2 font-medium opacity-100 transition hover:opacity-70"
            >
              {dict.project1.title}
            </a>
          </div>
          <p className="reveal-lines mt-6 max-w-full md:mt-12 md:max-w-147.5">
            {dict.project1.description}
          </p>
        </div>

        <div className="text-section-body text-portfolio-black flex flex-col items-start text-left md:items-end md:text-right">
          <div className="overflow-hidden">
            <a
              href="https://github.com/kauannkelvinn/watch-player"
              target="_blank"
              className="reveal-text border-portfolio-percent inline-block w-fit border-b-2 pb-2 font-medium opacity-100 transition hover:opacity-70"
            >
              {dict.project2.title}
            </a>
          </div>
          <p className="reveal-lines mt-6 max-w-full md:mt-12 md:max-w-147.5">
            {dict.project2.description}
          </p>
        </div>

        <div className="text-section-body text-portfolio-black flex flex-col">
          <div className="overflow-hidden">
            <a
              href="https://github.com/kauannkelvinn/giromax-showcase"
              target="_blank"
              className="reveal-text border-portfolio-percent inline-block w-fit border-b-2 pb-2 font-medium opacity-100 transition hover:opacity-70"
            >
              {dict.project3.title}
            </a>
          </div>
          <p className="reveal-lines mt-6 max-w-full md:mt-12 md:max-w-147.5">
            {dict.project3.description}
          </p>
        </div>
      </div>
    </section>
  )
}

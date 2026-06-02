interface WorkProps {
  dict: {
    title: string
    project1: {
      title: string
      description: string
      stack: string
    }
    project2: {
      title: string
      description: string
      stack: string
    }
    project3: {
      title: string
      description: string
      stack: string
    }
  }
}

const projects = [
  {
    key: 'project1',
    href: 'https://github.com/kauannkelvinn/appresso-kaf',
    dataKey: 'project1' as const,
  },
  {
    key: 'project2',
    href: 'https://github.com/kauannkelvinn/watch-player',
    dataKey: 'project2' as const,
  },
  {
    key: 'project3',
    href: 'https://github.com/kauannkelvinn/giromax-showcase',
    dataKey: 'project3' as const,
  },
] as const

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

      <div className="flex flex-col gap-y-20 md:gap-y-32">
        {projects.map((project, index) => {
          const data = dict[project.dataKey]
          const isEven = index % 2 === 1

          return (
            <div
              key={project.key}
              className={`text-section-body text-portfolio-black flex max-w-full flex-col md:max-w-147.5 ${
                isEven ? 'ml-auto items-end text-right' : 'items-start text-left'
              }`}
            >
              <div className="overflow-hidden">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="reveal-text border-portfolio-black inline-block w-fit border-b pb-2 font-medium"
                >
                  {data.title}
                </a>
              </div>
              <p className="reveal-lines mt-6">{data.description}</p>
              <p className="reveal-lines text-portfolio-small mt-4 lowercase">{data.stack}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

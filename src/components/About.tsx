'use client'

import { motion } from 'framer-motion'
interface AboutProps {
  dict: {
    title: string
    paragraph1: string
    paragraph2: string
    paragraph3: string
  }
}

export default function About({ dict }: AboutProps) {
  const techLogos = [
    { name: 'Next.js', src: 'nextjs-logo.png', width: 329, height: 67, url: 'https://nextjs.org/' },
    { name: 'React', src: 'react-logo.png', width: 90, height: 80, url: 'https://react.dev/' },
    {
      name: 'Prisma',
      src: 'prisma-logo.png',
      width: 204,
      height: 80,
      url: 'https://www.prisma.io/',
    },
    { name: 'AWS', src: 'aws-logo.png', width: 117, height: 70, url: 'https://aws.amazon.com/' },
    { name: 'Node.js', src: 'nodejs-logo.png', width: 131, height: 62, url: 'https://nodejs.org/' },
    {
      name: 'Docker',
      src: 'docker-logo.png',
      width: 272,
      height: 62,
      url: 'https://www.docker.com/',
    },
    {
      name: 'TypeScript',
      src: 'typescript-logo.png',
      width: 88,
      height: 88,
      url: 'https://www.typescriptlang.org/',
    },
  ]

  return (
    <section
      id="about"
      className="border-portfolio-black pb:16 flex w-full flex-col border-b-2 py-12 md:py-12.5 md:pb-26"
    >
      <div className="md:text-40 text-portfolio-black mb-12 w-full text-center text-[25px] font-medium md:mb-23">
        {dict.title}
      </div>

      <div className="grid grid-cols-1 gap-x-20 gap-y-10 md:grid-cols-2 md:gap-y-0">
        <div className="flex w-full flex-col leading-snug md:w-auto md:max-w-157 md:leading-13">
          <p className="md:text-40 text-portfolio-black text-left text-[25px] font-medium md:text-justify">
            {dict.paragraph1}
          </p>
        </div>

        <div className="flex w-full flex-col leading-snug md:w-auto md:max-w-242.5 md:leading-13">
          <p className="md:text-40 text-portfolio-black text-left text-[25px] font-medium md:text-justify">
            {dict.paragraph2}
          </p>
        </div>
      </div>

      <div className="mt-16 flex w-full flex-col leading-snug md:mt-28 md:leading-13">
        <p className="md:text-40 text-portfolio-black text-left text-[25px] font-medium md:text-justify">
          {dict.paragraph3}
        </p>
      </div>

      <div className="mt-17.5 hidden flex-wrap items-center justify-center gap-25.5 md:flex">
        {techLogos.map((tech, index) => (
          <a
            key={`desktop-${index}`}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-110"
          >
            <img
              src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/${tech.src}`}
              alt={tech.name}
              width={tech.width}
              height={tech.height}
              loading="eager"
              className="h-16.75 w-auto transform-gpu"
            />
          </a>
        ))}
      </div>

      <div className="mask-image-fade relative mt-10 flex w-full overflow-hidden md:hidden">
        <motion.div
          className="flex w-max flex-nowrap items-center"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 25,
          }}
        >
          <div className="flex w-max shrink-0 items-center gap-10 pr-10">
            {techLogos.map((tech, index) => (
              <a
                key={`mobile-1-${index}`}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 transition-transform hover:scale-105"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/${tech.src}`}
                  alt={tech.name}
                  width={tech.width}
                  height={tech.height}
                  loading="eager"
                  className="h-7 w-auto transform-gpu"
                />
              </a>
            ))}
          </div>

          <div className="flex w-max shrink-0 items-center gap-10 pr-10">
            {techLogos.map((tech, index) => (
              <a
                key={`mobile-2-${index}`}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 transition-transform hover:scale-105"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/${tech.src}`}
                  alt={tech.name}
                  width={tech.width}
                  height={tech.height}
                  loading="eager"
                  className="h-7 w-auto transform-gpu"
                />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

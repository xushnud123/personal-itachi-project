'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { useScroll, motion, useTransform } from 'framer-motion';
import { projectsData } from '@/lib/data';

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1']
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const rotateProgress = useTransform(scrollYProgress, [0.4, 1], [-60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        rotateX: rotateProgress
      }}
      className="group origin-bottom"
    >
      <section className="relative max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:h-[22rem] sm:pr-5">
        <div className="flex h-full flex-col px-5 pb-7 pt-4 group-even:ml-auto sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map(item => (
              <li
                key={item}
                className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:text-white/70"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          priority
          quality={95}
          className="absolute -right-40 top-8 hidden  w-[28.25rem] rounded-t-lg shadow-2xl
          transition
          group-even:-left-40
          group-even:right-[initial]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2
          group-hover:scale-[1.04]
          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2  sm:block
         "
        />
      </section>
    </motion.div>
  );
}

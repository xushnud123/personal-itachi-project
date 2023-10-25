'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import useSectionInView from '@/lib/useSectionInView';

export default function Skills() {
  const { ref } = useSectionInView({ link: 'Skills', threshold: 0.5 });

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index
      }
    })
  };
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>MY Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((item, index) => (
          <motion.li
            key={item}
            className="borderBlack rounded-xl bg-white px-5 py-3 dark:bg-white/10 dark:text-white/80"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

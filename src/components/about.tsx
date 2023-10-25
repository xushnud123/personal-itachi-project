'use client';
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './section-heading';
import useSectionInView from '@/lib/useSectionInView';

export default function About() {
  const { ref } = useSectionInView({ link: 'About', threshold: 0.5 });

  return (
    <motion.section
      className="m-auto mb-28 max-w-[45rem] scroll-mt-28 px-[0.5rem]  text-center leading-8 sm:mb-40 lg:px-0"
      initial={{ scale: 0, y: 100 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        While studying{' '}
        <span className="font-medium">Television Technology</span>, I decided to
        pursue my passion for programming. I enrolled in a coding bootcamp and
        learned <span className="font-medium">web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem solving aspect. I love the feeling of finally finding a solution
        to a problem. My main stack is{' '}
        <span className="font-medium">React, Next.js</span>. I am also familiar
        with <span className="font-medium">TypeScript</span>. I am always eager
        to learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">full time position</span> as a software
        developer. When {`I'm`} not coding, I enjoy playing video games and
        watching movies. I also like to learn new things. I am currently
        studying history. {`I'm`} also learning to play the guitar.
      </p>

      <p>
        <span className="italic">When {`I'm`} not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{' '}
        <span className="font-medium">history and philosophy</span>. {`I'm`}{' '}
        also learning how to play the guitar.
      </p>
    </motion.section>
  );
}

'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { FaGithubSquare } from 'react-icons/fa';
import useSectionInView from '@/lib/useSectionInView';
import useActiveSectionContext from '@/context/useActiveSectionContext';

export default function Intro() {
  const { ref } = useSectionInView({ link: 'Home', threshold: 0.5 });
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="home"
      ref={ref}
      className="mb-28 max-w-[50rem] scroll-mt-28 px-[0.5rem] text-center sm:mb-0 lg:px-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <Image
              src="https://i.pinimg.com/564x/28/dc/d3/28dcd3ce6357c2754f62ab59724a58a8.jpg"
              alt="Raimov Xushnudbek"
              width={192}
              height={192}
              quality={95}
              priority
              className="h-24 w-24 rounded-full border-[.35rem] border-white object-cover shadow-xl"
            />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 115,
              delay: 0.1,
              duration: 0.7
            }}
            className="absolute bottom-0 right-0 text-4xl"
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I{"'"}m Xushnudbek.</span> I{"'"}m a
        <span className="font-bold"> frontend developer</span> with
        <span className="font-bold"> 2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is
        &nbsp;
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
      <motion.div
        className="flex flex-wrap justify-center gap-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group flex w-max items-center gap-2 rounded-full bg-gray-900 px-7 py-3 font-medium text-white transition hover:scale-[1.1]"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>
        <a
          href="/CV.pdf"
          download
          className="borderBlack group flex w-max  items-center gap-2 rounded-full  bg-white px-7 py-3 transition hover:scale-[1.1] dark:bg-white/10 dark:text-white/60"
        >
          Download CV
          <HiDownload className="opacity-60 transition group-hover:translate-y-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/xushnudbek-raimov-a876a9228/"
          target="_blank"
          rel=""
          className="borderBlack flex  w-max items-center  rounded-full bg-white px-5 py-3 text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 dark:bg-white/10  dark:text-white/60"
        >
          <BsLinkedin size={20} />
        </a>
        <a
          href="https://github.com/xushnud123"
          target="_blank"
          className="borderBlack flex  w-max items-center  rounded-full bg-white px-[18px] py-3 text-[20px] text-gray-700 transition hover:scale-[1.1] hover:text-gray-950 dark:bg-white/10  dark:text-white/60"
        >
          <FaGithubSquare size={25} />
        </a>
      </motion.div>
    </section>
  );
}

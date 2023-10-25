import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import comfi from '../../public/comfi.png';
import buduar from '../../public/buduar.png';
import famic from '../../public/famic.png';

export const links = [
  {
    name: 'Home',
    hash: '#home'
  },
  {
    name: 'About',
    hash: '#about'
  },
  {
    name: 'Projects',
    hash: '#projects'
  },
  {
    name: 'Skills',
    hash: '#skills'
  },
  {
    name: 'Experience',
    hash: '#experience'
  },
  {
    name: 'Contact',
    hash: '#contact'
  }
] as const;

export const experiencesData = [
  {
    title: 'PDP',
    location: 'Sebzor, Toshkkent shaxar',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2020'
  },
  {
    title: 'Front-End Developer',
    location: 'Online',
    description: 'I worked as a front-end developer for 1 year at 1 job.',
    icon: React.createElement(CgWorkAlt),
    date: '2021 - 2022'
  },
  {
    title: 'Frontend Developer',
    location: 'Mirobod, Toshkent shaxar',
    description:
      'I am a Frontend developer currently working as a freelancer. My stack includes React, Next.js, Astor.js, TypeScript, Tailwind. I am open to full time opportunities.',
    icon: React.createElement(FaReact),
    date: '2022 - present'
  }
];

export const projectsData = [
  {
    title: 'Comfi Payments',
    description: `Comfi is Dubai-based privately-backed
    BNPL fintech startup that provides B2B
    SaaS vendors with a super checkout that helps them
    close 2x more annual plans.`,
    tags: [
      'React',
      'Next.js',
      'Typescript',
      'Storybook',
      'React Query',
      'Redux',
      'Framer motion'
    ],
    imageUrl: comfi
  },
  {
    title: 'Famic',
    description: `For influencers, famic.io is a public, online profile
    and media kit platform. Think of it like LinkedIn designed for influencers.
     For businesses, famic.io is a comprehensive toolkit to run
     an influencer marketing campaign.`,
    tags: ['React', 'TypeScript', 'Styled Components', 'Redux'],
    imageUrl: famic
  },
  {
    title: 'Buduar',
    description: `A platform aimed at increasing sales by promoting
    your clothing store's 3D content on social networks or marketplaces`,
    tags: ['React', 'Typescript', 'Sass module', 'I18'],
    imageUrl: buduar
  }
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Astro.js',
  'Git',
  'Tailwind',
  'Redux',
  'React Query',
  'Storybook',
  'Framer Motion'
] as const;

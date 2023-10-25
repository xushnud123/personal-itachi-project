'use client';
import React from 'react';
import SectionHeading from './section-heading';
import Project from './project';

import { projectsData } from '@/lib/data';
import useSectionInView from '@/lib/useSectionInView';

export default function Projects() {
  const { ref } = useSectionInView({ link: 'Projects', threshold: 0.75 });

  return (
    <section ref={ref} id="projects" className="mb-28 scroll-mt-28 px-[0.5rem]">
      <SectionHeading>My Projects</SectionHeading>
      <div className="perspective-10 flex flex-col gap-3 sm:gap-8">
        {projectsData.map(item => (
          <Project key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}

import useActiveSectionContext from '@/context/useActiveSectionContext';
import { useEffect } from 'react';
import { IntersectionOptions, useInView } from 'react-intersection-observer';

import { SectionName } from './types';

export type UseSectionInView = {
  link: SectionName;
} & Pick<IntersectionOptions, 'threshold'>;

const useSectionInView = ({ link, threshold }: UseSectionInView) => {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();
  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(link);
    }
  }, [inView, link, setActiveSection, timeOfLastClick]);
  return { ref };
};
export default useSectionInView;

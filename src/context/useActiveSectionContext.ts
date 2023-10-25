import { useContext } from 'react';
import { ActiveSectionContext } from './active-section-context';

const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error('Context Error');
  }
  return context;
};

export default useActiveSectionContext;

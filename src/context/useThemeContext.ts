import { useContext } from 'react';
import { ThemeContext } from './theme-context';

const useThemeContext = () => {
  const context = useContext(ThemeContext);

  console.log(context);
  if (context === null) {
    throw new Error('Context Error');
  }
  return context;
};

export default useThemeContext;

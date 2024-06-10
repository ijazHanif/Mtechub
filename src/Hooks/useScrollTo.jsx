import { useEffect } from 'react';

const useScrollTo = (id) => {
  useEffect(() => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);
};

export default useScrollTo;

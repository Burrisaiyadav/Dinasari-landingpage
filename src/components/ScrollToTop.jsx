import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search, hash } = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    if (urlParams.get('source') === 'app' || hash === '#footer') {
      setTimeout(() => {
        const footer = document.getElementById('footer');
        if (footer) {
          footer.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, search, hash]);

  return null;
};

export default ScrollToTop;

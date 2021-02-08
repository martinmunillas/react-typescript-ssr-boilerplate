import { useEffect } from 'react';
import { useRouter } from '../../utils/hooks/useRouter';

const ToTop = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ToTop;

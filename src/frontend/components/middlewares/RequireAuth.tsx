import { useEffect } from 'react';
import { useMeQuery } from '../../../shared/generated/graphql';
import { getKeyRoute } from '../../../shared/utils/funcs/getKeyRoute';
import { getRoute } from '../../../shared/utils/funcs/getRoute';
import { useRouter } from '../../utils/hooks/useRouter';

const RequireAuth = () => {
  const router = useRouter();
  const { data, loading } = useMeQuery();

  useEffect(() => {
    const route = getRoute(router.pathname);
    if (!route?.free && route && !data?.me && !loading) {
      router.push(getKeyRoute('signin')!.path as string);
    }
  }, [router.pathname, loading, data]);
  return null;
};

export default RequireAuth;

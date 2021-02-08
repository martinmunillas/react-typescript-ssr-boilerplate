import { useMemo } from 'react';
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from 'react-router-dom';
import queryString from 'query-string';

export function useRouter() {
  const params = useParams<{ shopId?: string, productId?: string }>();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  return useMemo(() => {
    return {
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      query: {
        ...queryString.parse(location.search),
      },
      params,
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
}

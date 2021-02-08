import routes, { MyRouteProps } from '../../routes';

export const getKeyRoute = (key: string): MyRouteProps | undefined => {
  let selected;
  for (const route of routes) {
    if (route.key?.toLowerCase() === key.toLowerCase()) {
      selected = route;
      break;
    }
  }
  return selected;
};

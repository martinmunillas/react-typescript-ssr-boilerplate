import routes, { MyRouteProps } from '../../routes';

export const getRoute = (pathname: string): MyRouteProps | undefined => {
  let selected;
  for (const route of routes) {
    if (new RegExp(route.path.replace(/:[a-zA-Z]+/, '[a-zA-Z]+')).test(pathname)) {
      selected = route;
      break;
    }
  }
  return selected;
};

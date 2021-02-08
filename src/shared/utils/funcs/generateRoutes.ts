import { MyRouteProps } from '../../routes';

export const generateRoutes = (routes: MyRouteProps[], baseUrl?: string) => {
  const mapRoutes = (route: MyRouteProps) => ({
    ...route,
    path: route.path ? `${baseUrl || ''}${route.path}` : route.path,
  });
  let allRoutes: MyRouteProps[] = [];
  routes.forEach((route) => {
    if (route.childs) {
      const childRoutes = generateRoutes(route.childs, route.path as string);
      delete route.childs;
      allRoutes = [...allRoutes, ...childRoutes];
    }
  });
  allRoutes = [...routes, ...allRoutes];
  return allRoutes.map(mapRoutes);
};

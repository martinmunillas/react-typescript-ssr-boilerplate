import { RouteProps } from 'react-router-dom';

import Home from '../frontend/pages/Home';
import SignUp from '../frontend/pages/auth/SignUp';
import SignIn from '../frontend/pages/auth/SignIn';
import { generateRoutes } from './utils/funcs/generateRoutes';
import NotFound from '../frontend/pages/NotFound';

export interface MyRouteProps extends RouteProps {
  free?: boolean;
  key?: string;
  childs?: MyRouteProps[];
}

const routes: MyRouteProps[] = [
  {
    exact: true,
    path: '/sign-up',
    component: SignUp,
    free: true,
  },
  {
    exact: true,
    path: '/sign-in',
    component: SignIn,
    free: true,
    key: 'SignIn',
  },
  {
    exact: true,
    path: '/',
    component: Home,
    key: 'Home'
  },
  {
    component: NotFound,
    key: 'NotFound'
  }
];

const router = generateRoutes(routes);
console.log(router)
export default router;

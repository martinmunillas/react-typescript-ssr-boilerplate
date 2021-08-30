import type { RouteProps } from "react-router-dom";

import Home from "../frontend/pages/Home";
import NotFound from "../frontend/pages/NotFound";

export const routes: Record<string, RouteProps> = {
  home: {
    exact: true,
    path: "/",
    component: Home,
  },
  notFound: {
    component: NotFound,
  },
};

const router = Object.values(routes);

export default router;

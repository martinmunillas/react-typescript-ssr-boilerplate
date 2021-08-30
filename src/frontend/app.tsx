import React from "react";
import { Switch, Route } from "react-router-dom";

import router from "../shared/routes";
import Middlewares from "./components/middlewares/Middlewares";

const App = () => {
  return (
    <>
      <Middlewares />
      <Switch>
        {router.map(({ ...route }, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    </>
  );
};

export default App;

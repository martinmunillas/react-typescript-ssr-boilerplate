import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from '../shared/routes';
import GlobalStyle from './style/global';
import Middlewares from './components/middlewares/Middlewares';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Middlewares />
      <Switch>
        {routes.map(({ ...route }, i) => (
          <Route {...route} key={i} />
        ))}
      </Switch>
    </>
  );
};

export default App;

import path from 'path';

import express from 'express';
import cookieParser from 'cookie-parser';

import renderApp from './middlewares/renderApp';
import { PORT } from '../shared/utils/consts';
// import { checkAuth } from './middlewares/checkAuth';

const app = express();

app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));

// app.use(checkAuth());
app.get('*', renderApp());

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

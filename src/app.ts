import express from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'express-async-errors';
import routes from './routes';
import handleAppErrors from './middleware/errors';

const app = express();
app.use(express.json());
app.use(routes);
app.use(handleAppErrors);

export default app;

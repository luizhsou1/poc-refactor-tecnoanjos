import * as express from 'express';
import { router } from './routes/routes';
import 'reflect-metadata';

const app = express();

app.use(express.json());

app.use(router);

// Manipula erros da aplicação
app.use((error, req, res, next) => {
  if (error.httpStatusCode) {
    return res.status(error.httpStatusCode).json({
      error: error.name,
      message: error.message,
      param: error.param,
    });
  }
  return res.status(500).json({
    error: 'InternalServerError',
    stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
  });
});

export { app };

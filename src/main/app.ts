import * as express from 'express';
import { router } from './routes/routes';
import { DomainError, ValidationError } from '../shared/errors';

const app = express();

app.use(express.json());

app.use(router);

// Manipula erros da aplicação
app.use((error, req, res, next) => {
  if (error instanceof DomainError) {
    return res.status(400).json({
      error: error.name,
      message: error.message,
    });
  }
  if (error instanceof ValidationError) {
    return res.status(400).json({
      error: error.name,
      param: error.param,
      message: error.message,
    });
  }
  return res.status(500).json({ error: 'InternalServerError', stack: error });
});

export { app };

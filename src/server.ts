/* eslint-disable no-console */
import { createConnection } from 'typeorm';
import { port } from './main/configs/env';
import { app } from './main/app';

createConnection().then((connection) => {
  console.log(`Conectado ao banco de dados ${connection.options.database}...`);
  app.listen(port, () => console.log(`Rodando na porta: ${port}`));
}).catch((err) => {
  console.log(`Falha ao conectar no banco de dados: ${err}`);
  process.exit(0);
});

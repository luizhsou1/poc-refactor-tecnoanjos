import { port } from './main/configs/env';
import { app } from './main/app';

app.listen(port, () => console.log(`Running in port: ${port}`));

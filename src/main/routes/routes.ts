import { Router } from 'express';
import { RegisterTechnicianController } from '../../modules/users/controllers/register-technician.controller';

const router = Router();

router.get('/', (req, res) => res.send('Api Poc Tecnoanjos de Pé!!! \u{1F601}'));
router.post('/users/techinician', (req, res, next) => RegisterTechnicianController.create().handle(req, res, next));

export { router };

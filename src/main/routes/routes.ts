import { Router } from 'express';
// import { auth } from '../middlewares/auth';
// import { registerUserController } from '../../users/controllers/register';
// import { loginController } from '../../users/controllers/login';
// import { updateUserController } from '../../users/controllers/update-user';

const router = Router();

router.get('/', (req, res) => {
  const str = 'Api Poc Tecnoanjos de Pé!!! \u{1F601}';
  return res.send(str);
})

// router.post('/register', (req, res, next) => registerUserController.handle(req, res, next));
// router.post('/login', (req, res, next) => loginController.handle(req, res, next));
// router.put('/users', auth, (req, res, next) => updateUserController.handle(req, res, next));

export { router };

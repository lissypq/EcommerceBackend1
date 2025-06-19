<<<<<<< HEAD
const { Router } = require('express');
const AuthController = require('../controllers/AuthController');
 
module.exports = (signInUseCase) => {
  const router = Router();
  const controller = new AuthController(signInUseCase);
 
  // POST /api/v1/auth/signin
  router.post('/signin', controller.signIn.bind(controller));
 
  return router;
=======
const { Router } = require('express');
const AuthController = require('../controllers/AuthController');
 
module.exports = (signInUseCase) => {
  const router = Router();
  const controller = new AuthController(signInUseCase);
 
  // POST /api/v1/auth/signin
  router.post('/signin', controller.signIn.bind(controller));
 
  return router;
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
};
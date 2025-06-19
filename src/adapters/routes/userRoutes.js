const { Router }     = require('express');
const UserController = require('../controllers/UserController');
 
module.exports = (signUpUseCase) => {
  const router = Router();
  const controller = new UserController(signUpUseCase);
 
  // POST /api/v1/users
  router.post('/', controller.signUp.bind(controller));
 
  return router;
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
};

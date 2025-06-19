<<<<<<< HEAD
class AuthController {
  constructor(signInUseCase) {
    this.signInUseCase = signInUseCase;
  }
 
  async signIn(req, res, next) {
    try {
      const { username, password } = req.body;
      const { user, token } = await this.signInUseCase.execute({ username, password });
      delete user.password;
      res.json({ user, token });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }
}
 
module.exports = AuthController;
=======
class AuthController {
  constructor(signInUseCase) {
    this.signInUseCase = signInUseCase;
  }

  async signIn(req, res, next) {
    try {
      const { username, password } = req.body;
      const { user, token } = await this.signInUseCase.execute({ username, password });
      delete user.password;
      res.json({ user, token });
    } catch (err) {
      res.status(401).json({ message: err.message });
    }
  }
}

module.exports = AuthController;
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e

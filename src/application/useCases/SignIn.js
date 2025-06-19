<<<<<<< HEAD
class SignIn {
  constructor(userRepository, passwordHasher, tokenGenerator) {
    this.userRepository = userRepository;
    this.passwordHasher = passwordHasher;
    this.tokenGenerator = tokenGenerator;
  }

  async execute({ username, password }) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new Error('User not found');
    const isValid = await this.passwordHasher.compare(password, user.password);
    if (!isValid) throw new Error('Invalid password');
    const token = this.tokenGenerator.generate({ id: user._id, roles: user.roles });
    return { user, token };
  }
}

=======
class SignIn {
  constructor(userRepository, passwordHasher, tokenGenerator) {
    this.userRepository = userRepository;
    this.passwordHasher = passwordHasher;
    this.tokenGenerator = tokenGenerator;
  }

  async execute({ username, password }) {
    const user = await this.userRepository.findByUsername(username);
    if (!user) throw new Error('User not found');
    const isValid = await this.passwordHasher.compare(password, user.password);
    if (!isValid) throw new Error('Invalid password');
    const token = this.tokenGenerator.generate({ id: user._id, roles: user.roles });
    return { user, token };
  }
}

>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = SignIn;
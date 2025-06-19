<<<<<<< HEAD
const UserModel = require('../database/models/User');
 
class MongoUserRepository {
  async findByUsername(username) {
    return UserModel.findOne({ username }).lean().exec();
  }
 
   /**
   * Crea y guarda un nuevo usuario en Mongo.
   * @param {{ username: string, password: string, roles?: string[] }} userData
   * @returns {Promise<Object>} documento creado en la base de datos
   * @throws {Error} si ocurre un error al guardar el usuario
   */
  async create({ username, password, roles = ['user'] }) {
    const user = new UserModel({ username, password, roles });
    return user.save();
  }
 
}
 
=======
const UserModel = require('../database/models/User');
 
class MongoUserRepository {
  async findByUsername(username) {
    return UserModel.findOne({ username }).lean().exec();
  }
 
   /**
   * Crea y guarda un nuevo usuario en Mongo.
   * @param {{ username: string, password: string, roles?: string[] }} userData
   * @returns {Promise<Object>} documento creado en la base de datos
   * @throws {Error} si ocurre un error al guardar el usuario
   */
  async create({ username, password, roles = ['user'] }) {
    const user = new UserModel({ username, password, roles });
    return user.save();
  }
 
}
 
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = MongoUserRepository;
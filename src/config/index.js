<<<<<<< HEAD
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  DB_TYPE: process.env.DB_TYPE,
=======
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  DB_TYPE: process.env.DB_TYPE,
>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
};
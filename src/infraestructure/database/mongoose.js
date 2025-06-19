<<<<<<< HEAD
const mongoose = require('mongoose');
const config = require('../../config');

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

=======
const mongoose = require('mongoose');
const config = require('../../config');

mongoose.connect(config.mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = mongoose;
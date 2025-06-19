<<<<<<< HEAD
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'usuario',
  password: 'contraseña',
  database: 'ecommerce',
  waitForConnections: true,
  charset: 'utf8mb4_general_ci',
  connectTimeout: 10000,
});

pool
  .getConnection()
  .then(conn => {
    console.log('✔️  Conexión a MySQL establecida');
    conn.release();
  })
  .catch(err => {
    console.error('✖️  Error al conectar a MySQL:', err.message);
  });

=======
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'admin',
  database: 'ecommerce',
  waitForConnections: true,
  charset: 'utf8mb4_general_ci',
  connectTimeout: 10000,
});

pool
  .getConnection()
  .then(conn => {
    console.log('✔️  Conexión a MySQL establecida');
    conn.release();
  })
  .catch(err => {
    console.error('✖️  Error al conectar a MySQL:', err.message);
  });

>>>>>>> 28f00e44f809fcb372e231256c57fde08f60c38e
module.exports = pool;
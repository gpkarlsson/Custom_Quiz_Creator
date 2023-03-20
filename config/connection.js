const Sequelize = require('sequelize');
const mysql = require('mysql2');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Debbie08',
    database: 'quiz_db'
  },
  console.log(`Connected to the quiz_db database.`)
);

// Query database
db.query('SELECT * FROM Questions', function (err, results) {
  console.log(results);
});

module.exports = sequelize;
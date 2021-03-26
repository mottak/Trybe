const mysql = require('mysql/promise');
const connection = mysql.createPool({
  host: 'localhost',
  username: 'root',
  password: 'kissyla',
  database: 'users_crud'});

module.exports = connection;
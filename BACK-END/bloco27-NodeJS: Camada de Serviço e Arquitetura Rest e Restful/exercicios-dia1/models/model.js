const connection = require('./connection');

const createUser = async (firstName, lastName, email, password) => {
  await connection.execute(
    `INSERT INTO users(first_name, last_name, email, password)
    VALUES (?, ?, ?, ?)`, [firstName, lastName, email, password]);
}

const getAllUsers = async () => {
  const [allUsers] = await connection.execute(
    `SELECT CONCAT(first_name, ' ',last_name) AS 'Nome Completo' FROM users`);
  return allUsers
};

const getUserById = async (id) => {
  const [user] = await connection.execute(
    `SELECT CONCAT(first_name, ' ',last_name) AS 'Nome Completo' FROM users
    WHERE id = ?`,[id]);
  return user;
};

const editUserById = async (id, firstName, lastName, email, password) => {
  await connection.execute(
    `UPDATE users
    SET first_name = ?, last_name = ?, email = ?, password = ?
    WHERE id = ? `, [firstName, lastName, email, password, id]);
};

const deleteUserById = async (id) => {
  await connection.execute(
    `DELETE FROM users
    WHERE id = ?`, [id]);
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  editUserById,
  deleteUserById,
 };
 
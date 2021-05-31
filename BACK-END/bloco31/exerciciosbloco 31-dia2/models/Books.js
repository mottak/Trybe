const Book = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  });
  return Book;
};

module.exports = Book;

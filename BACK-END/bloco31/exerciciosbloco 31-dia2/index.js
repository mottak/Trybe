const express = require('express');
const bodyParser = require('body-parser');
const booksController = require('./Controllers/BookController');
const app = express();
const PORT = 3000;

app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', booksController);
// app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
app.listen(PORT, () => console.log(`escutando porta ${PORT}`));

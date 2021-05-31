const express = require('express')
const { Book } = require('../models');
const router = express.Router();


// Em caso de erro, os endpoints devem retornar status code 500 com a mensagem: 'Algo deu errado'
// DELETE /book/:id - deleta um livro;
// router.delete('/:id', async(req, res) => {
//  await Book.destroy({
//   where: {
//     id: req.params.id
//   }
// })
//   .then((book) => {
//     if(!book){
//       res.status(404).json({ message: 'Livro não encontrado!' });
//     }
//     res.status(200).json(book);
//   })
//   .catch((e) => {
//     console.log(e.message);
//     res.status(500).json({message: 'Algo de errado não está certo' });
//   });
// });

// // POST /book/:id - sobrescreve o livro com ID selecionado;
// router.post('/:id', async(req, res) => {
//   const { title, author, pageQuantity = 0 } = req.body;
//   await Book.update(
//     { title, author, pageQuantity },
//     { where: {
//       id: req.params.id
//     }
//   })
//   .then((book) => {
//     if(!book){
//       res.status(404).json({ message: 'Livro não encontrado!' });
//     }
//     res.status(200).json(book);
//   })
//   .catch((e) => {
//     console.log(e.message);
//     res.status(500).json({message: 'Algo de errado não está certo' });
//   });
// });

// POST /book - cria um novo livro;
router.post('/', async(req, res) => {
  const { title, author, pageQuantity = 0 } = req.body;
  await Book.create({title, author, pageQuantity})
  .then((book) => {
    res.status(200).json(book);
  })
  .catch((e) => {
    console.log(e.message);
    res.status(500).json({message: 'Algo de errado não está certo' });
  });
});

// GET /book/:id - pega o livro com o id especificado;
router.get('/:id', async (req, res) => {
  await Book.findByPk(req.params.id)
  .then((books) => {
    if(!books){
      res.status(404).json({ message: 'Livro não encontrado!' });
    }
    res.status(200).json(books);
  })
  .catch((e) => {
    console.log(e.message);
    res.status(500).json({message: 'Algo de errado não está certo' });
  });
});

// GET /books - lista todos os livros;
router.get('/', async(req, res) => {
  await Book.findAll()
  .then((books) => {
    res.status(200).json(books);
  })
  .catch((e) => {
    console.log(e.message);
    res.status(500).json({message: 'Algo de errado não está certo' });
  });
});

module.exports = router;

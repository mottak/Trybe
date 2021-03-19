
const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];
//1-Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
function authorBornIn1947() {
  //dentro () -> localiza onde está bithYear = 1947
  //for()-> retorna nome do autor referente aobithYear = 1947
  return books.find(book => book.author.birthYear=== 1947).author.name;
}
//2-Retorne o nome do livro de menor nome.
function smallerName() {
  let bookName;
   books.forEach( book => {
     if (!bookName || book.name.length < bookName.length) {
      bookName = book.name;
     }
 
  });
  return bookName;
}
// 3-Encontre o livro cujo nome possui 26 caracteres.
function characters26 () {
  let book26Caracters;
  books.forEach( book => {
    if (book.name.length === 26) {
      book26Caracters = book.name;
    }
});
  return book26Caracters;
}
// 4-Ordene os livros por data de lançamento em ordem decrescente.

function decreasingDate(){
  return books.sort((a, b) => b.releaseYear - a.releaseYear);
}

// 5-Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.
function everyoneWasBornOnSecXX() {
  let bornSecXX = true;
  books.forEach(element => {
    if(element.author.birthYear < 1901 || element.author.birthYear >2000) {
      bornSecXX = false;
    }
  });
  return bornSecXX;
}

// 6-Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.
function someBookWasReleaseOnThe80s() {
  let yearRelease80 = false;
  books.forEach(element =>{
    if(element.releaseYear < 1980 || element.releaseYear > 1989){
      yearRelease80 = true;
    }
  });
  return yearRelease80;
}

// 7- Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.
function authorUnique() {
  return books.every(elem1 => {
    books.some(elem2 => {
      (elem1.author.birthYear === elem2.author.birthYear) && (elem1.id !== elem2.id)
    })
  });
}

console.log(authorBornIn1947());
console.log(smallerName());
console.log(characters26());
console.log(decreasingDate());
console.log(everyoneWasBornOnSecXX());
console.log(someBookWasReleaseOnThe80s());
console.log(authorUnique());
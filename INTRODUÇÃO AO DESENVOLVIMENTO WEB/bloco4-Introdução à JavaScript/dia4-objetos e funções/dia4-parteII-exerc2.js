//Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1];.
//Valor esperado no retorno da função: 4.

let array1 = [20, 3, 6, 7, 10, 100];

function biggerIndex (array) {
  let bigger = 0;
  let biggerNumber = array[0];
  for (let index = 0 ; index <= array.length-1; index++) {
    if (array[index] > biggerNumber) {
      biggerNumber = array[index];
      bigger = index;
    }
  }
  console.log(bigger);
}

biggerIndex(array1);
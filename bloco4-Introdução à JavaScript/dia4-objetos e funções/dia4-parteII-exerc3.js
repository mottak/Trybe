  // Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
  // Array de teste: [2, 4, 6, 7, 10, 0, -3];.
  // Valor esperado no retorno da função: 6.

  let array = [2, 4, 6, 7, 10, 0, -3];

  function smallerIndex (array) {
    let smaller = 0;
    let smallerNumber = array[0];
    for (let index = 0 ; index <= array.length-1; index++) {
      if (array[index] < smallerNumber) {
        smallerNumber = array[index];
        smaller = index;
      }
    }
    console.log(smaller);
  }
  
  smallerIndex(array);
// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.
// Valor esperado no retorno da função: 2.

let array = [2, 3, 2, 5, 8, 2, 3];

function repeatNumber(array) {
  let countNumber = 0;
  let repeatedNumber = array[0];
  for(index1 = 0; index1 <= array.length-1; index1++) {
    for(index2 = 0; index2 <= array.length-1; index2++) {
    
    }
  }
  console.log(repeatedNumber);
}

repeatNumber(array);

if (array[index] === repeatedNumber) {
  countNumber += 1;
} else {
  countNumber = 0;
  repeatedNumber = array[index];
  console.log(repeatedNumber);
  countNumber += 1;
  console.log("    " + countNumber);
}
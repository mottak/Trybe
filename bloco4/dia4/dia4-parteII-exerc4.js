// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.
// Valor esperado no retorno da função: Fernanda.

let array =['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggerName(array) {
  let bigger = '';
  for (index = 0; index <= array.length-1; index++) {
    if (array[index].length > bigger.length) {
      bigger = array[index];
    }
  }
console.log(bigger);
}

biggerName(array);
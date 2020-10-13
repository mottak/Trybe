// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: "trybe" e "be"
// Valor esperado no retorno da função: true
// verificaFimPalavra("trybe", "be");
// Retorno esperado: true
// verificaFimPalavra("joaofernando", "fernan");
// Retorno esperado: false

let word = "trybe";
let ending = "be";

function compareStrings(word, ending) {
  word = word.split("");
  ending = ending.split("");
  let result = true;
  for (index = 0 ; index < ending.length; index++) {
    if (word[word.length-ending.length + index] === ending[index]) {
      result = true;
    } else {
      result = false;
    }
  }
  console.log(result);
}
compareStrings(word, ending);
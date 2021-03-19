// Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5.
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

let n=5;
function sumValues(n){
  let sum = 0;
  for (index = 1; index <= n; index++) {
    sum += index;
  }
  console.log(sum);
}

sumValues(n);
//Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
//Exemplo de palíndromo: arara.
//verificaPalindrome("arara");
//Retorno esperado: true
//verificaPalindrome("desenvolvimento");
//Retorno esperado: false

function verificaPalindrome(palavra) {
  let verificaPalavra = "";
  for (let index = palavra.length -1; index >= 0; index--) {
    verificaPalavra += palavra[index];
  }
  if (palavra == verificaPalavra) {
    console.log(true);
  } else {
    console.log(false);
  }
}

 verificaPalindrome("arara");
 verificaPalindrome("desenvolvimento");



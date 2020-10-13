//2-Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

//imprimir * enquanto for menor que n
// somar um asterisco enquanto o que tiver no texto for menor que n
let n = 5;
let ast = '*';
let text =' ';

for (let index = 1; index<= n; index += 1) {
  text += ast;
  console.log(text);
}

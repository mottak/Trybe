//Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma das três for par. Caso contrário, ele retorna false.
//Bonus: use somente um if.

let num1 = 2;
let num2 = 10;
let num3 = 20;
let isOdd = false;


if((num1 % 2 === 0) && (num2 % 2 === 0) && (num3 % 2 === 0)){
 isOdd = true;
}
console.log(isOdd);
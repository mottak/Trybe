// 2-Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(i=0; i < numbers.length; i++){
  soma += numbers[i];
}
console.log('Soma dos numeros: ' + soma);

// 3 -Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = 0;
media = soma / numbers.length ;
console.log('Média aritmetica dos numeros: ' + media);

// 4-Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

if(media >= 20){
  console.log('Valor da média é maior que 20');
} else {
  console.log('Valor da média é menor ou igual que 20');  
}
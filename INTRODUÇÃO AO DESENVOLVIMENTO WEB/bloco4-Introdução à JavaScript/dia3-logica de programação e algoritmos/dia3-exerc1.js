// 1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

//imprimir * n vezes
//enquanto a qtd de linhas for menor que n, imprimir mais uma linhas
 let n = 5;
 let ast = '*';
 let text =' ';

for (let index = 1; index <=n; index +=1) {
 text += ast;
}
 
for (let index = 1; index <=n; index +=1) {
  console.log(text);
}

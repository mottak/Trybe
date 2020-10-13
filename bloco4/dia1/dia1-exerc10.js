//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
//Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

let custoProduto = 20;
let valorVenda = 50;
if( (custoProduto) > 0 && (valorVenda > 0)){
let lucro = (valorVenda - custoProduto) * 0.8 * 1000;
console.log("O lucro sobre 1000 unidades do produto é: " + lucro);
} else {
    console.log("Erro. Informe numeros validos.");
}
// 3- imprima um triângulo retângulo com 5 asteriscos de base. Agora inverta o lado do triângulo. Por exemplo:
//imprimir * enquanto for menor que n -. primeiro loop: colocar 5 -1 espaços + *
//regra geral loop: n-i espaços + i *
//repita enquanto 1<=n

let n = 5;
let ast = '*';
let text = '';
let space = ' ';
let posicao = n;

for(let index = 1; index<= n; index += 1){
  for (let index2 = 1; index2 <= n; index2 += 1) {
    if (index2 < posicao) {
      text += space;
} else {
  text += ast;
} 
}
console.log(text); 
posicao = posicao -1;
text = "";
    }
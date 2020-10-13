// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 50;

if((nota > 100) || (nota < 0)) {
  console.log('Informe uma nota valida');
} else if (nota >= 90) {
  console.log('Conceito A alcançado!');
} else if (nota >= 80) {
  console.log('Conceito B alcançado!');
} else if(nota >= 70) {
    console.log('Conceito C alcançado!');
} else if(nota >= 60) {
    console.log('Conceito D alcançado!');
} else if(nota >= 50) {
    console.log('Conceito E alcançado!');
} else {
    console.log('Conceito F alcançado!');
}

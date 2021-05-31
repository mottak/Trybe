// Exercício 3 O código abaixo está em JavaScript . Calcule sua ordem de complexidade
//  para um array de tamanho n .

const numbers = [0,1,2,3,4,5,6,7,8,9]
numbers.map(n => n*n)

// ordem de complexidade -> O(n) + 1 
// complexidade map: O(n)

// Exercício 4 O código abaixo está em JavaScript . Calcule sua ordem de complexidade
//  para um array de tamanho n .
const numbers = [0,1,2,3,4,5,6,7,8,9]
numbers.map(n => n*n)
       .filter(n => n%2 === 0)
       .reduce((acc, n) => acc + n)

       // ordem de complexidade -> O(n) + O(n) + O(n) = O(n)
       // complexidade map: O(n)
       // complexidade filter: O(n)
       // complexidade reduce: O(n)
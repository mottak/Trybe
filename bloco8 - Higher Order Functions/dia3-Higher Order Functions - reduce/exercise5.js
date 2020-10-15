    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

// 5-Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

function containsA() {
  // 2 reduces -> reduce1 percorre o array names, reduce2-> percorre cada strig de cada elemento do array
  return names.reduce((acc, currentValue) => 
  acc + currentValue.split('').reduce((acc2, currentValue2) => {
      if(currentValue2 === 'a' || currentValue2 === 'A') {
        acc2 = acc2 + 1;
      }
      return acc2;
    }, 0), 0);
  }

assert.deepEqual(containsA(), 20);
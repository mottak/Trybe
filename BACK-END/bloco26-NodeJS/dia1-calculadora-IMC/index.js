const imc = require('./imc');
const readln = require('readline-sync');

function lerDadosIMC() {
  try {
    const peso = readln.questionFloat('Qual seu peso em Quilos?');
    const altura = readln.questionFloat('Qual sua altura em metros?');
    console.log(imc.verificaSituacaoIMC(peso, altura));
  } catch (error) {
    console.error(error.message);
  }
}

lerDadosIMC();

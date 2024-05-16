/*

Escreva um programa que pergunte a velocidade de um carro. 
Caso ultrapasse 80 Km/h -1 , exiba uma mensagem dizendo que o usuário foi multado. 
Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

*/

const prompt = require('prompt-sync')();
const velocidade = prompt(`Qual velocidade do carro? (em Km/h-1)\n`);

const verificarVelocidade = (velocidade) => {
  if (velocidade > 80) {
    const multa = (velocidade - 80) * 5;
    return `
    Usuário multado. Valor R$${multa.toFixed(2)}
    `;
  } else {
    return `
    Usuário sem multa.
    `;
  }
};

console.log(verificarVelocidade(velocidade));

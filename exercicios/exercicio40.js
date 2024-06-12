const prompt = require('prompt-sync')();

const tamanhoLoto = 5;
const totalApostas = 50;

function validarEntrada(entrada) {
  return !isNaN(entrada) && entrada.trim() !== '';
}

function lerNumeroInteiro(mensagem) {
  let entrada = prompt(mensagem);
  while (!validarEntrada(entrada)) {
    entrada = prompt('Por favor, digite um número inteiro válido: ');
  }
  return parseInt(entrada);
}

function lerVetor(mensagem) {
  let vetor = [];
  for (let i = 0; i < tamanhoLoto; i++) {
    let valor = lerNumeroInteiro(`${mensagem} [${i + 1}/${tamanhoLoto}]: `);
    vetor.push(valor);
  }
  return vetor;
}

function compararVetores(vetor1, vetor2) {
  for (let i = 0; i < tamanhoLoto; i++) {
    if (vetor1[i] !== vetor2[i]) {
      return false;
    }
  }
  return true;
}

console.log('Digite os 5 números do resultado oficial da Loto:');
let resultadoOficial = lerVetor('Número');

for (let i = 0; i < totalApostas; i++) {
  console.log(`\nDigite os 5 números da aposta ${i + 1}:`);
  let aposta = lerVetor('Número');

  if (compararVetores(resultadoOficial, aposta)) {
    console.log(`Aposta ${i + 1}: Ganhador`);
  } else {
    console.log(`Aposta ${i + 1}: Não é ganhador`);
  }
}

console.log('\nVerificação das apostas concluída.');

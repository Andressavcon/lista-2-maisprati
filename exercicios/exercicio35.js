const prompt = require('prompt-sync')();

const tamanhoVetor = 5;
const totalValores = 30;

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

function imprimirVetor(vetor, tipo) {
  console.log(`
Vetor - ${tipo}:`);
  console.log(vetor.join(' '));
}

let pares = [];
let impares = [];

for (let i = 0; i < totalValores; i++) {
  let valor = lerNumeroInteiro('Digite o valor ' + (i + 1) + ': ');

  if (valor % 2 === 0) {
    pares.push(valor);
    if (pares.length === tamanhoVetor) {
      imprimirVetor(pares, 'Pares');
      pares = [];
    }
  } else {
    impares.push(valor);
    if (impares.length === tamanhoVetor) {
      imprimirVetor(impares, 'Ímpares');
      impares = [];
    }
  }
}

if (pares.length > 0) {
  imprimirVetor(pares, 'Pares');
}

if (impares.length > 0) {
  imprimirVetor(impares, 'Ímpares');
}

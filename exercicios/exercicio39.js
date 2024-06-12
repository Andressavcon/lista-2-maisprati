const prompt = require('prompt-sync')();

const tamanhoVetor = 100;

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

function lerVetor(tamanho, mensagem) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    let valor = lerNumeroInteiro(`${mensagem} [${i + 1}/${tamanho}]: `);
    vetor.push(valor);
  }
  return vetor;
}

function compactarVetor(vetor) {
  let vetorCompacto = [];
  for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] > 0) {
      vetorCompacto.push(vetor[i]);
    }
  }
  return vetorCompacto;
}

console.log('Digite os 100 números do vetor A:');
let vetorA = lerVetor(tamanhoVetor, 'Número');

let vetorB = compactarVetor(vetorA);

console.log('\nVetor A original:');
console.log(vetorA.join(' '));

console.log('\nVetor B compacto (sem valores nulos e negativos):');
console.log(vetorB.join(' '));

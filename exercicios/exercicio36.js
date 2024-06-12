const prompt = require('prompt-sync')();

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

function contarAcertos(gabarito, respostas) {
  let acertos = 0;
  for (let i = 0; i < gabarito.length; i++) {
    if (gabarito[i] === respostas[i]) {
      acertos++;
    }
  }
  return acertos;
}

const tamanhoGabarito = 13;
console.log('Digite os 13 números do gabarito da loteria esportiva:');
let gabarito = lerVetor(tamanhoGabarito, 'Número do gabarito');

const totalApostadores = 100;
const tamanhoRespostas = 13;
for (let i = 0; i < totalApostadores; i++) {
  let numeroCartao = lerNumeroInteiro(`
Digite o número do cartão do apostador ${i + 1}:`);

  console.log(`
Digite os 13 números das respostas do apostador ${i + 1}:`);

  let respostas = lerVetor(tamanhoRespostas, 'Número da resposta');
  let acertos = contarAcertos(gabarito, respostas);

  console.log(`
Apostador ${numeroCartao}: Número de acertos = ${acertos}.`);

  if (acertos === 13) {
    console.log('Parabéns, tu foi o GANHADOR');
  }
}

console.log('\nVerificação dos apostadores concluída.');

const prompt = require('prompt-sync')();

function validarCaractere(entrada) {
  return entrada.trim().length === 1 && isNaN(entrada);
}

function lerCaractere(mensagem) {
  let entrada = prompt(mensagem);
  while (!validarCaractere(entrada)) {
    entrada = prompt('Por favor, digite um caractere válido: ');
  }
  return entrada;
}

function lerVetorCaractere(tamanho, mensagem) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    let valor = lerCaractere(`${mensagem} [${i + 1}/${tamanho}]: `);
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

const tamanhoGabarito = 20;
console.log('Digite os 20 caracteres do gabarito da prova:');
let gabarito = lerVetorCaractere(tamanhoGabarito, 'Caractere do gabarito');

const totalAlunos = 50;
const tamanhoRespostas = 20;
for (let i = 0; i < totalAlunos; i++) {
  console.log(`
Digite os 20 caracteres das respostas do aluno ${i + 1}:`);
  let respostas = lerVetorCaractere(tamanhoRespostas, 'Caractere da resposta');

  let acertos = contarAcertos(gabarito, respostas);
  let status = acertos >= 12 ? 'APROVADO' : 'REPROVADO';

  console.log(
    `
Aluno ${i + 1}: Número de acertos = ${acertos}. Status: ${status}`
  );
}

console.log('\nVerificação dos alunos concluída.');

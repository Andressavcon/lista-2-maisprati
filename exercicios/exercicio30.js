const prompt = require('prompt-sync')();

const tamanhoMatriz = 3;

let M = [];
let SL = [];
let SC = [];

for (let i = 0; i < tamanhoMatriz; i++) {
  SL.push(0);
  SC.push(0);
}

for (let i = 0; i < tamanhoMatriz; i++) {
  M.push([]);
  for (let j = 0; j < tamanhoMatriz; j++) {
    let valor = lerNumeroInteiro(
      'Digite o elemento [' + (i + 1) + '][' + (j + 1) + '] da matriz M: '
    );
    M[i].push(valor);

    SL[i] += valor;

    SC[j] += valor;
  }
}

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

console.log(`
Matriz M:`);
for (let i = 0; i < tamanhoMatriz; i++) {
  console.log(M[i].join(' '));
}

console.log(`
Vetor SL(Soma Linhas): ${SL.join(' ')}`);

console.log(`
Vetor SC(Soma Colunas): ${SC.join(' ')}`);

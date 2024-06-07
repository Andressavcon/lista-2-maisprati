const prompt = require('prompt-sync')();

let tamanhoMatriz = 30;

let A = lerNumeroInteiro('Digite um número inteiro A: ');

let V = [];
for (let i = 0; i < tamanhoMatriz; i++) {
  V[i] = [];
  for (let j = 0; j < tamanhoMatriz; j++) {
    let valor = lerNumeroInteiro(`Digite o elemento [${i + 1}][${j + 1}]: `);
    V[i][j] = valor;
  }
}

let X = [];
for (let i = 0; i < tamanhoMatriz; i++) {
  X[i] = [];
  for (let j = 0; j < tamanhoMatriz; j++) {
    X[i][j] = V[i][j];
  }
}

let countA = 0;
for (let i = 0; i < tamanhoMatriz; i++) {
  for (let j = 0; j < tamanhoMatriz; j++) {
    if (V[i][j] === A) {
      countA++;
      X[i][j] = 'X';
    }
  }
}

for (let i = 0; i < tamanhoMatriz; i++) {
  let novaLinha = [];
  for (let j = 0; j < tamanhoMatriz; j++) {
    if (X[i][j] !== undefined) {
      novaLinha.push(X[i][j]);
    }
  }
  X[i] = novaLinha;
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
Quantidade de valores iguais a A na matriz V: ${countA}`);

console.log(`
Matriz X com os elementos de V diferentes de A:`);
for (const linha of X) {
  console.log(linha.join(' '));
}

const prompt = require('prompt-sync')();

const tamanhoMatriz = 3;

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

let M = [];

for (let i = 0; i < tamanhoMatriz; i++) {
  M.push([]);
  for (let j = 0; j < tamanhoMatriz; j++) {
    let valor = lerNumeroInteiro(
      'Digite o elemento [' + (i + 1) + '][' + (j + 1) + '] da matriz M: '
    );
    M[i].push(valor);
  }
}

let somaDiagonalSecundaria = 0;
for (let i = 0; i < tamanhoMatriz; i++) {
  somaDiagonalSecundaria += M[i][tamanhoMatriz - 1 - i];
}
let mediaDiagonalSecundaria = somaDiagonalSecundaria / tamanhoMatriz;

let matrizModificada = [];
for (let i = 0; i < tamanhoMatriz; i++) {
  matrizModificada.push([]);
  for (let j = 0; j < tamanhoMatriz; j++) {
    matrizModificada[i].push(M[i][j]);
  }
}

for (let i = 0; i < tamanhoMatriz; i++) {
  matrizModificada[i][i] = (M[i][i] * mediaDiagonalSecundaria).toFixed(1);
}

console.log(`
Matriz M original:`);
for (let i = 0; i < tamanhoMatriz; i++) {
  console.log(M[i].join(' '));
}

console.log(`
Matriz Modificada:`);
for (let i = 0; i < tamanhoMatriz; i++) {
  console.log(matrizModificada[i].join(' '));
}

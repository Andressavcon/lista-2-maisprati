const prompt = require('prompt-sync')();

const tamanhoMatriz = 50;

function validarEntrada(entrada) {
  return !isNaN(entrada) && entrada.trim() !== '';
}

function lerNumeroReal(mensagem) {
  let entrada = prompt(mensagem);
  while (!validarEntrada(entrada)) {
    entrada = prompt('Por favor, digite um número real válido: ');
  }
  return parseFloat(entrada);
}

let M = [];
for (let i = 0; i < tamanhoMatriz; i++) {
  M.push([]);
  for (let j = 0; j < tamanhoMatriz; j++) {
    let valor = lerNumeroReal(
      'Digite o elemento [' + (i + 1) + '][' + (j + 1) + '] da matriz M: '
    );
    M[i].push(valor);
  }
}

let matrizModificada = [];
for (let i = 0; i < tamanhoMatriz; i++) {
  matrizModificada.push([]);
  let elementoDiagonalPrincipal = M[i][i];
  for (let j = 0; j < tamanhoMatriz; j++) {
    matrizModificada[i].push(M[i][j] * elementoDiagonalPrincipal);
  }
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

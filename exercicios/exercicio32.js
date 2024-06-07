const prompt = require('prompt-sync')();

const linhas = 12;
const colunas = 13;

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

for (let i = 0; i < linhas; i++) {
  M.push([]);
  for (let j = 0; j < colunas; j++) {
    let valor = lerNumeroInteiro(
      'Digite o elemento [' + (i + 1) + '][' + (j + 1) + '] da matriz M: '
    );
    M[i].push(valor);
  }
}

let matrizModificada = [];
for (let i = 0; i < linhas; i++) {
  matrizModificada.push([]);
  for (let j = 0; j < colunas; j++) {
    matrizModificada[i].push(M[i][j]);
  }
}

for (let i = 0; i < linhas; i++) {
  let maiorModulo = Math.abs(M[i][0]);
  for (let j = 1; j < colunas; j++) {
    if (Math.abs(M[i][j]) > maiorModulo) {
      maiorModulo = Math.abs(M[i][j]);
    }
  }
  for (let j = 0; j < colunas; j++) {
    matrizModificada[i][j] = (M[i][j] / maiorModulo).toFixed(1);
  }
}

console.log(`
Matriz M original:`);
for (let i = 0; i < linhas; i++) {
  console.log(M[i].join(' '));
}

console.log(`
Matriz Modificada:`);
for (let i = 0; i < linhas; i++) {
  console.log(matrizModificada[i].join(' '));
}

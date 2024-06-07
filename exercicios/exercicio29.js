const prompt = require('prompt-sync')();

let M = [];
let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;

for (let i = 0; i < 5; i++) {
  M[i] = [];
  for (let j = 0; j < 5; j++) {
    let dadosEntrada = prompt(
      'Digite o elemento [' + (i + 1) + '][' + (j + 1) + '] da matriz M:'
    );
    while (!validarEntrada(dadosEntrada)) {
      dadosEntrada = prompt(
        'Por favor, digite um número válido para o elemento da posição [' +
          (i + 1) +
          '][' +
          (j + 1) +
          '] da matriz M:'
      );
    }
    M[i][j] = parseInt(dadosEntrada);
  }
}

function validarEntrada(entrada) {
  return entrada !== null && entrada.trim() !== '' && !isNaN(entrada);
}

for (let j = 0; j < 5; j++) {
  somaLinha4 += M[3][j];
}

for (let i = 0; i < 5; i++) {
  somaColuna2 += M[i][1];
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (i === j) {
      somaDiagonalPrincipal += M[i][j];
    }
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    somaTotal += M[i][j];
  }
}

console.log(`
Somas:`);
console.log('a) linha 4:', somaLinha4);
console.log('b) coluna 2:', somaColuna2);
console.log('c) diagonal principal:', somaDiagonalPrincipal);
console.log('d) Total dos elementos da matriz:', somaTotal);

console.log(`
Matriz M:`);
for (let i = 0; i < 5; i++) {
  console.log(M[i].join(' '));
}

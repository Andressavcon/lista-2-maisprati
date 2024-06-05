let A = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
];

let B = [
  [1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0],
  [1, 0, 1, 0, 1],
];

function validarMatrizes(matrizA, matrizB) {
  if (matrizA.length !== matrizB.length) {
    return false;
  }

  for (let i = 0; i < matrizA.length; i++) {
    if (matrizA[i].length !== matrizB[i].length) {
      return false;
    }
  }

  return true;
}

function calcularMatrizProduto(matrizA, matrizB) {
  if (!validarMatrizes(matrizA, matrizB)) {
    return 'As matrizes precisam ter o mesmo tamanho';
  }

  let matrizProduto = [];
  for (let i = 0; i < matrizA.length; i++) {
    matrizProduto[i] = [];

    for (let j = 0; j < matrizA[0].length; j++) {
      matrizProduto[i][j] = matrizA[i][j] * matrizB[i][j];
    }
  }
  return matrizProduto;
}

console.log(calcularMatrizProduto(A, B));

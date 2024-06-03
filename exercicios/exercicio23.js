let matrizIdentidade = [];

for (let i = 0; i < 7; i++) {
  matrizIdentidade[i] = [];

  for (let j = 0; j < 7; j++) {
    matrizIdentidade[i][j] = i === j ? 1 : 0;
  }
}

for (let i = 0; i < matrizIdentidade.length; i++) {
  console.log(matrizIdentidade[i].join(' '));
}

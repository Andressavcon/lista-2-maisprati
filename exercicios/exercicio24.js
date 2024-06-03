let matriz = [
  [1, -2, 3, -4, 5, -6, 7, -8],
  [2, -3, 4, -5, 6, -7, 8, -9],
  [3, -4, 5, -6, 7, -8, 9, -10],
  [4, -5, 6, -7, 8, -9, 10, -11],
  [5, -6, 7, -8, 9, 10, 11, -12],
  [6, -7, 8, -9, 10, -11, 12, -13],
];

let C = [];

for (let i = 0; i < matriz.length; i++) {
  let contador = 0;

  for (let j = 0; j < matriz[i].length; j++) {
    if (matriz[i][j] < 0) {
      contador++;
    }
  }

  console.log(`Elementos negativos na linha ${i + 1} é de:  ${contador}`);

  C.push(contador);
}

console.log(`Vetor C: ${C}`);

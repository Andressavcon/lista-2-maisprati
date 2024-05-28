const inventarioLojaA = {
  limão: 10,
  banana: 5,
  laranja: 8,
};

const inventarioLojaB = {
  banana: 7,
  morango: 12,
  limão: 3,
};

const inventarioCombinado = {};

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
  for (let item in inventarioLojaA) {
    inventarioCombinado[item] = inventarioLojaA[item];
  }

  for (let item in inventarioLojaB) {
    if (inventarioCombinado[item] !== undefined) {
      inventarioCombinado[item] += inventarioLojaB[item];
    } else {
      inventarioCombinado[item] = inventarioLojaB[item];
    }
  }

  return inventarioCombinado;
}

console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));

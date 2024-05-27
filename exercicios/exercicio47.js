const objeto = { a: 1, b: 2, c: 3 };

function multiplicarPorDois(objeto) {
  const novoObjeto = {};

  for (let chave in objeto) {
    novoObjeto[chave] = objeto[chave] * 2;
  }
  return novoObjeto;
}

console.log(multiplicarPorDois(objeto));

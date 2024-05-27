const frutas = ['banana', 'maca', 'laranja', 'maca', 'limao', 'limao', 'maca'];

function contarValoresIguais(frutas) {
  const objetoFrutas = {};

  frutas.forEach((fruta) => {
    if (objetoFrutas[fruta]) {
      objetoFrutas[fruta]++;
    } else {
      objetoFrutas[fruta] = 1;
    }
  });

  return objetoFrutas;
}

console.log(contarValoresIguais(frutas));

const prompt = require('prompt-sync')();
const distancia = prompt(`Qual distância será percorrida? (em Km) `);

function calcularPassagem(distancia) {
  let resultado = 0;
  if (distancia <= 0) {
    return `
    Distância incorreta
    `;
  } else if (distancia <= 200) {
    resultado = 0.5 * distancia;
    return `
    O valor da passagem para a distância de ${distancia}Km, é de R$${resultado.toFixed(
      2
    )}
    `;
  } else {
    resultado = 0.45 * distancia;
    return `
    O valor da passagem para a distância de ${distancia}Km, é de R$${resultado.toFixed(
      2
    )}
    `;
  }
}

console.log(calcularPassagem(distancia));

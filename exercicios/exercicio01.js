const prompt = require('prompt-sync')();

const qtdeCigarros = prompt(`Qual quantidade de cigarros fumados por dia? `);
const qtdeAnos = prompt(`Ha quantos anos você fuma? `);

function estimativaVida(qtdeCigarros, qtdeAnos) {
  const cigarrosEmUmAno = qtdeCigarros * 365;
  const totalCigarros = cigarrosEmUmAno * qtdeAnos;

  const minutosDeVidaAMenos = totalCigarros * 10;
  const diasDeVidaAMenos = minutosDeVidaAMenos / 1440;

  return `
  Você tem ${Math.round(diasDeVidaAMenos)} dias de vida a menos.
  `;
}

console.log(estimativaVida(qtdeCigarros, qtdeAnos));

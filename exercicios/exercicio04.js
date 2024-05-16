const prompt = require('prompt-sync')();
const ladoA = parseInt(prompt(`Digite o ladoA: `));
const ladoB = parseInt(prompt(`Digite o ladoB: `));
const ladoC = parseInt(prompt(`Digite o ladoC: `));

const verificaTriangulo = (ladoA, ladoB, ladoC) => {
  const ehTriangulo =
    ladoA + ladoB > ladoC && ladoB + ladoC > ladoA && ladoC + ladoA > ladoB;

  if (ehTriangulo) {
    return `
    É triângulo!`;
  } else {
    return `
    Não é triângulo!`;
  }
};

console.log(verificaTriangulo(ladoA, ladoB, ladoC));

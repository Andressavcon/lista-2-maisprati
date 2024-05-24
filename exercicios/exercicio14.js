const prompt = require('prompt-sync')();

let nomes = [];
let nomesInvertidos = [];

for (let i = 0; i < 7; i++) {
  const nome = prompt(`Digite um nome: `);
  nomes.push(nome);
}

for (let i = 6; i >= 0; i--) {
  nomesInvertidos.push(nomes[i]);
}

console.log(nomes);
console.log(nomesInvertidos);

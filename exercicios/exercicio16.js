const vetor = [];

for (let i = 0; i < 20; i++) {
  const numeroAleatorio = Math.round(Math.random() * 99);
  vetor.push(numeroAleatorio);
}

console.log(`Vetor com 20 números aleatórios: 
${vetor}`);

console.log();
let vetorOrdenado = vetor;

vetorOrdenado.sort((a, b) => a - b);
console.log(`Vetor com os 20 números na ordem crescente: 
${vetorOrdenado}`);

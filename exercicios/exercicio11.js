const prompt = require('prompt-sync')();

let primeiroTermo;
let razaoPA;

do {
  primeiroTermo = prompt('Digite o primeiro termo da PA: ');
} while (!validarNumero(primeiroTermo));
primeiroTermo = parseInt(primeiroTermo);

do {
  razaoPA = prompt('Digite a razão da PA: ');
} while (!validarNumero(razaoPA));
razaoPA = parseInt(razaoPA);

function validarNumero(entrada) {
  return !isNaN(entrada) && entrada.trim() !== '';
}

function calcularPA() {
  let pa = [];
  let soma = 0;
  for (let i = 0; i < 10; i++) {
    let termo = primeiroTermo + i * razaoPA;
    pa.push(termo);
    soma += termo;
  }

  console.log(`Os 10 primeiros elementos da PA são:
  ${pa.join(', ')}
  `);
  console.log(`A soma dos elementos da PA é: ${soma}`);
}

calcularPA();

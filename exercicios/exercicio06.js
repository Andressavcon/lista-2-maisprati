const numeroSorteado = Math.floor(Math.random() * 5 + 1);

const prompt = require('prompt-sync')();

let valorCerto = false;
while (!valorCerto) {
  const valorJogador = Number(prompt(`Adivinhe o número de 1 a 5: `));

  if (valorJogador < 1 || valorJogador > 5) {
    console.log(`
    O número precisa ser entre 1 e 5
    `);
    continue;
  }
  if (isNaN(valorJogador)) {
    console.log(`
    O valor digitado precisa ser um número
    `);
    continue;
  }
  if (valorJogador === numeroSorteado) {
    console.log(`
    Parabéns você acertou!!!
    `);
    valorCerto = true;
  }
}

const simbolos = {
  pedra: `
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)
    `,
  papel: `
     _______
---'    ____)____
           ______)
          _______)
         _______)
---.__________)
    `,
  tesoura: `
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
    `,
};

const prompt = require('prompt-sync')();

function jogadaUsuario() {
  const jogada = prompt(`Escolha pedra, papel ou tesoura? `);
  return jogada.toLocaleLowerCase();
}

function jogadaComputador() {
  const opcoes = ['pedra', 'papel', 'tesoura'];
  const indiceDaJogada = Math.floor(Math.random() * opcoes.length);
  return opcoes[indiceDaJogada];
}

function vencedor(usuario, computador) {
  if (usuario === computador) {
    return `
    ====> Empate`;
  }

  const usuarioVencedor =
    (usuario === 'pedra' && computador === 'tesoura') ||
    (usuario === 'tesoura' && computador === 'papel') ||
    (usuario === 'papel' && computador === 'pedra');

  if (usuarioVencedor) {
    return `
    ====> Parabéns, você ganhou!!!`;
  } else {
    return `
    ====> Que pena, não foi dessa vez.`;
  }
}

function jokenpo() {
  const usuario = jogadaUsuario();
  const computador = jogadaComputador();

  console.log(`
  O jogador escolheu: ${usuario}`);
  console.log(simbolos[usuario]);

  console.log(`
  O computador escolheu: ${computador}`);
  console.log(simbolos[computador]);

  console.log(vencedor(usuario, computador));
}

jokenpo();

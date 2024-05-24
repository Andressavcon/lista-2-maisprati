const prompt = require('prompt-sync')();

const validarEntrada = () => {
  let validarDias = true;
  while (validarDias) {
    let horasAtividadeNoMes = parseInt(
      prompt(`Quantas horas de atividade por mês? (valor em horas) `)
    );
    if (horasAtividadeNoMes < 1) {
      console.log(`
        O número de horas precisa ser maior que 0
        `);
      continue;
    } else if (isNaN(horasAtividadeNoMes)) {
      console.log(`
        O número de horas precisa ser um número
        `);
      continue;
    } else {
      return horasAtividadeNoMes;
    }
  }
};
const contagemPontos = () => {
  const horasAtividade = validarEntrada();

  let pontos = 0;
  if (horasAtividade <= 10) {
    pontos = horasAtividade * 2;
  } else if (horasAtividade > 10 && horasAtividade <= 20) {
    pontos = horasAtividade * 5;
  } else if (horasAtividade > 20) {
    pontos = horasAtividade * 10;
  }
  return pontos;
};
const programaVidaSaudavel = () => {
  const pontos = contagemPontos();
  const valorEmCentavos = pontos * 5;
  const valorEmReais = (valorEmCentavos / 100).toFixed(2);

  return `
    Com o total de ${pontos} pontos, você conseguiu R$${valorEmReais}
  `;
};

console.log(programaVidaSaudavel());

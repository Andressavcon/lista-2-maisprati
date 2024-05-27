const prompt = require('prompt-sync')();

let salarios = [];
let filhos = [];

function pesquisaHabitantes() {
  let contador = 0;
  let seguir = true;

  do {
    let salario = parseInt(
      prompt(
        `Qual é o salário da ${
          contador + 1
        }ª pessoa? (Em centavos, ex: 100000) `
      )
    );
    let numeroDeFilhos = parseInt(prompt(`Quantos filhos tem? `));

    if (validarSalario(salario) && validarFilhos(numeroDeFilhos)) {
      salarios.push(salario);
      filhos.push(numeroDeFilhos);
      contador++;
    } else {
      console.log(
        'Salário ou número de filhos inválidos. Por favor, tente novamente.'
      );
    }

    seguir = validarContinuar();
  } while (seguir);

  const mediaDeSalarios = mediaSalarios();
  const mediaDeFilhos = mediaNumeroFilhos();
  const maiorDosSalarios = maiorSalario();
  const porcentagem = porcentagemComSalarioDeAte350();

  console.log(`
  A média dos salários é de R$${(mediaDeSalarios / 100).toFixed(2)}
  A média de filhos é de ${mediaDeFilhos.toFixed(2)}
  O maior salário é de R$${(maiorDosSalarios / 100).toFixed(2)}
  A porcentagem de pessoas com salário até R$350,00 é de ${porcentagem.toFixed(
    2
  )}%
  `);
}

function validarContinuar() {
  while (true) {
    const continuar = prompt(`Deseja continuar? (1=Sim ou 2=Não) `);
    if (continuar === '1') {
      return true;
    } else if (continuar === '2') {
      return false;
    } else {
      console.log('Opção inválida. Considere 1 para Sim ou 2 para Não.');
    }
  }
}

function validarSalario(salario) {
  return !isNaN(salario) && salario > 0;
}

function validarFilhos(numeroDeFilhos) {
  return !isNaN(numeroDeFilhos) && numeroDeFilhos >= 0;
}

function mediaSalarios() {
  let somaSalarios = 0;
  for (const salario of salarios) {
    somaSalarios += salario;
  }

  const resultado = somaSalarios / salarios.length;
  return resultado;
}

function mediaNumeroFilhos() {
  let somaFilhos = 0;
  for (const numFilhos of filhos) {
    somaFilhos += numFilhos;
  }

  const resultado = somaFilhos / filhos.length;
  return resultado;
}

function maiorSalario() {
  let maiorSalario = salarios[1];
  for (const salario of salarios) {
    if (salario > maiorSalario) {
      maiorSalario = salario;
    } else {
      maiorSalario = maiorSalario;
    }
  }
  return maiorSalario;
}

function porcentagemComSalarioDeAte350() {
  let contador = salarios.filter((salario) => salario <= 35000).length;
  return (contador * 100) / salarios.length;
}

pesquisaHabitantes();

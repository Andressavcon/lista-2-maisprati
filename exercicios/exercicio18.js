const prompt = require('prompt-sync')();

const registro = {};

const criarRegistro = () => {
  const nomeFuncionario = prompt(`Qual é o nome do funcionário? `);
  registro.nome = nomeFuncionario;
  const cargoFuncionario = prompt(`Qual é o cargo do funcionário? `);
  registro.cargo = cargoFuncionario;
  const salárioFuncionario = parseFloat(
    prompt(`Qual é o salário do funcionário? (em centavos)`)
  );
  registro.salario = salárioFuncionario;

  return registro;
};

const mostrarRegistro = () => {
  console.log(`
  Nome Funcionário: ${registro.nome}`);
  console.log(`Cargo: ${registro.cargo}`);
  console.log(`Salário: R$${(registro.salario / 100).toFixed(2)}`);
};

criarRegistro();

mostrarRegistro();

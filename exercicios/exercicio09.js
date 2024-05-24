const prompt = require('prompt-sync')();

const arraySalarios = [];
const arraySexos = [];

const entradaSalario = () => {
  let adicionarFuncionario = true;
  while (adicionarFuncionario) {
    const salario = parseInt(
      prompt(
        `Qual o valor do salário do funcionario ${
          arraySalarios.length + 1
        }? (valor em centavos) `
      )
    );
    const salarioValidacao = validarSalario(salario);

    if (typeof salarioValidacao !== 'string') {
      arraySalarios.push(salarioValidacao);
      adicionarFuncionario = false;
    } else {
      continue;
    }
  }
  return arraySalarios;
};

const entradaSexos = () => {
  let adicionarSexoFuncionario = true;
  while (adicionarSexoFuncionario) {
    const sexo = parseInt(
      prompt(
        `Digite o sexo do funcionario ${
          arraySexos.length + 1
        }? (1=Masculino ou 2=Feminino) `
      )
    );
    const sexoValidado = validarSexo(sexo);

    if (typeof sexoValidado !== 'string') {
      arraySexos.push(sexoValidado);
      adicionarSexoFuncionario = false;
    } else {
      continue;
    }
  }
  return arraySexos;
};

const pararContinuar = () => {
  let segueOuPara = true;
  while (segueOuPara) {
    const pararOuContinuar = parseInt(
      prompt(`Deseja adicionar novo funcionario? (1=Sim ou 2=Não) `)
    );

    const simOuNao = validarSimOuNao(pararOuContinuar);

    if (simOuNao !== 1 && simOuNao !== 2) {
      console.log(simOuNao);
      continue;
    } else {
      segueOuPara = false;
      return simOuNao;
    }
  }
};

const validarSalario = (salario) => {
  if (salario < 1) {
    return `
          O salário precisa ser maior que 0
          `;
  } else if (isNaN(salario)) {
    return `
          O salário precisa ser um número
          `;
  } else {
    return salario;
  }
};

const validarSexo = (sexo) => {
  if (sexo !== 1 && sexo !== 2) {
    return `
          Digite um valor existente!
    `;
  } else {
    return sexo;
  }
};

const validarSimOuNao = (simNao) => {
  if (simNao !== 1 && simNao !== 2) {
    return `
          Digite um valor existente!
          `;
  } else {
    return simNao;
  }
};

const somarSalarios = (arraySalarios, arraySexos) => {
  let somaMasculinos = 0;
  let somaFemininos = 0;

  for (let i = 0; i < arraySalarios.length; i++) {
    let salario = arraySalarios[i];
    let sexo = arraySexos[i];

    if (sexo === 1) {
      somaMasculinos += salario;
    } else {
      somaFemininos += salario;
    }
  }

  if (somaMasculinos > 0) {
    console.log(
      `
      O total de salário para sexo Masculino é de R${(
        somaMasculinos / 100
      ).toFixed(2)}`
    );
  }

  if (somaFemininos > 0) {
    console.log(
      `
      O total de salário para sexo Feminino é de R${(
        somaFemininos / 100
      ).toFixed(2)}`
    );
  }
  return;
};

const aplicativo = () => {
  let cadastrarNovoFuncionario = true;

  entradaSalario();
  entradaSexos();

  while (cadastrarNovoFuncionario) {
    segueOuPara = pararContinuar();

    if (segueOuPara === 1) {
      entradaSalario();
      entradaSexos();
      continue;
    } else {
      cadastrarNovoFuncionario = false;
    }
  }

  somarSalarios(arraySalarios, arraySexos);
};

aplicativo();

const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

let contador = 0;
while (contador < 2) {
  let nome = prompt(`Qual é o nome da ${contador + 1}ª pessoa? `);
  let idade = parseInt(prompt(`Qual é a idade de ${nome}? `));

  if (validarNome(nome) && validarIdade(idade)) {
    nomes.push(nome);
    idades.push(idade);
    contador++;
  } else {
    console.log('Nome ou idade inválidos. Por favor, tente novamente.');
  }
}

function validarNome(nome) {
  if (nome.length <= 2) {
    return false;
  } else {
    return true;
  }
}

function validarIdade(idade) {
  if (isNaN(idade) || idade <= 0) {
    return false;
  } else {
    return true;
  }
}

function listaMenoresIdade(nomes, idades) {
  console.log(`
--- Menores de Idade ---`);
  for (let i = 0; i < nomes.length; i++) {
    if (idades[i] < 18) {
      console.log(`${i + 1}. ${nomes[i]}, ${idades[i]} anos`);
    }
  }
}

listaMenoresIdade(nomes, idades);

const dados = {
  nome: 'camila',
  sobrenome: 'soares',
  idade: 74,
  telefone: '5464561231',
  email: 'camila@email.com',
};

const contadorStrings = (dados) => {
  let contador = 0;
  for (let chave in dados) {
    if (typeof dados[chave] === 'string') {
      contador++;
    }
  }
  return contador;
};

console.log(contadorStrings(dados));

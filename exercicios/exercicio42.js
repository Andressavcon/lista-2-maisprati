const dados = {
  nome: 'ana',
  idade: 22,
  telefone: [994984494, 532312156],
  endereco: ['rua x, num 5', 'rua y, num 10'],
};

for (let chave in dados) {
  if (typeof dados[chave] !== 'string' && typeof dados[chave] !== 'number') {
    console.log(dados[chave]);
  }
}

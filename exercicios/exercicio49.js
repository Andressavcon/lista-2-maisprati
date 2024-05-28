/*

Você recebe um array de objetos representando transações financeiras. 
Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. 
Adicionalmente, inclua um subtotal de valores por categoria.

*/
const transacoes = [
  { id: 1, valor: 100, data: '01-01-2024', categoria: 'Eletronicos' },
  { id: 2, valor: 50, data: '01-02-2024', categoria: 'Casa' },
  { id: 3, valor: 75, data: '01-03-2024', categoria: 'Eletronicos' },
  { id: 4, valor: 120, data: '01-04-2024', categoria: 'Lazer' },
  { id: 5, valor: 200, data: '01-05-2024', categoria: 'Casa' },
];

const transacoesPorCategoria = {};

function agruparTransacoesPorCategoria(transacoes) {
  for (let i = 0; i < transacoes.length; i++) {
    const transacao = transacoes[i];
    const categoria = transacao.categoria;

    if (!transacoesPorCategoria[categoria]) {
      transacoesPorCategoria[categoria] = {
        transacoes: [],
        subtotal: 0,
      };
    }

    transacoesPorCategoria[categoria].transacoes.push(transacao);
    transacoesPorCategoria[categoria].subtotal += transacao.valor;
  }

  return transacoesPorCategoria;
}

console.log(JSON.stringify(agruparTransacoesPorCategoria(transacoes)));

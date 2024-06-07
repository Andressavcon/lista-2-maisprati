const vendas = [
  { vendedor: 'João', valor: 10000 },
  { vendedor: 'Maria', valor: 20000 },
  { vendedor: 'João', valor: 15000 },
  { vendedor: 'Pedro', valor: 25000 },
  { vendedor: 'Maria', valor: 30000 },
];

function somaVendasPorVendedor(vendas) {
  const resumoVendedores = {};

  for (let i = 0; i < vendas.length; i++) {
    const { vendedor, valor } = vendas[i];

    if (!resumoVendedores[vendedor]) {
      resumoVendedores[vendedor] = 0;
    }
    resumoVendedores[vendedor] += valor;
  }

  return resumoVendedores;
}

console.log(somaVendasPorVendedor(vendas));

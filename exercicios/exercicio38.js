const prompt = require('prompt-sync')();

function validarEntrada(entrada) {
  return !isNaN(entrada) && entrada.trim() !== '';
}

function lerNumeroInteiro(mensagem) {
  let entrada = prompt(mensagem);
  while (!validarEntrada(entrada)) {
    entrada = prompt('Por favor, digite um número inteiro válido: ');
  }
  return parseInt(entrada);
}

function lerVetor(tamanho, mensagem) {
  let vetor = [];
  for (let i = 0; i < tamanho; i++) {
    let valor = lerNumeroInteiro(`${mensagem} [${i + 1}/${tamanho}]: `);
    vetor.push(valor);
  }
  return vetor;
}

function somaElementos(vetor) {
  return vetor.reduce((acc, val) => acc + val, 0);
}

function produtoElementos(vetor) {
  return vetor.reduce((acc, val) => acc * val, 1);
}

function mediaElementos(vetor) {
  return somaElementos(vetor) / vetor.length;
}

function ordenarVetor(vetor) {
  return vetor.slice().sort((a, b) => a - b);
}

function exibirVetor(vetor) {
  console.log(vetor.join(' '));
}

const tamanhoVetor = 6;
console.log('Digite os 6 números do vetor:');
let vetor = lerVetor(tamanhoVetor, 'Número');

let operacao = lerNumeroInteiro(`
Digite o número da operação que deseja realizar:
1 - Soma dos elementos
2 - Produto dos elementos
3 - Média dos elementos
4 - Ordenar os elementos em ordem crescente
5 - Mostrar o vetor

Escolha: `);

switch (operacao) {
  case 1:
    console.log('Soma dos elementos:', somaElementos(vetor));
    break;
  case 2:
    console.log('Produto dos elementos:', produtoElementos(vetor));
    break;
  case 3:
    console.log('Média dos elementos:', mediaElementos(vetor));
    break;
  case 4:
    console.log(
      'Vetor ordenado em ordem crescente:',
      ordenarVetor(vetor).join(' ')
    );
    break;
  case 5:
    console.log('Vetor original:');
    exibirVetor(vetor);
    break;
  default:
    console.log('Operação inválida.');
}

console.log('Operação concluída.');

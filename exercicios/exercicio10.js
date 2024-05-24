const prompt = require('prompt-sync')();

let numeros = [];
let seguir = true;

function dadosEntrada() {
  let numeroEntrada = Number(prompt(`Diga um número: `));
  if (validarNumero(numeroEntrada)) {
    numeros.push(numeroEntrada);
  }
}

function validarNumero(numeroEntrada) {
  if (isNaN(numeroEntrada)) {
    console.log(`O valor precisa ser um número`);
    return false;
  } else {
    return true;
  }
}

function validarContinuar(continuar) {
  if (continuar === 2) {
    return false;
  } else if (continuar === 1) {
    return true;
  } else {
    console.log('Opção inválida. Considere 1 para Sim ou 2 para Não.');
    return false;
  }
}

do {
  dadosEntrada();
  let continuar = parseInt(prompt(`Deseja continuar? (1=Sim ou 2=Não) `));
  seguir = validarContinuar(continuar);
} while (seguir);

console.log(`
Números inseridos: ${numeros}
`);

let somatorioDosNumeros = 0;
let menorValor = numeros[0];
let mediaValores = 0;
let contadorPares = 0;
let resultadoMedia = 0;

for (const numero of numeros) {
  somatorioDosNumeros += numero;

  if (menorValor > numero) {
    menorValor = numero;
  } else {
    menorValor = menorValor;
  }

  mediaValores += numero;
  resultadoMedia = mediaValores / numeros.length;

  if (numero % 2 === 0) {
    contadorPares++;
  }
}

console.log(`a) A soma dos números é igual a: ${somatorioDosNumeros}`);
console.log(`b) O menor valor é o: ${menorValor}`);
console.log(`c) A média dos valores é: ${resultadoMedia.toFixed(2)}`);
console.log(`d) Total de números pares: ${contadorPares}`);

/*

Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor.
No final, mostre quais são os números pares que foram digitados e em que posições eles estão armazenados.

*/
const prompt = require('prompt-sync')();

let arrayNumeros = [];

while (arrayNumeros.length < 10) {
  const numeroEntrada = prompt(`Digite um número inteiro: `);
  if (validarNumeroInteiro(numeroEntrada)) {
    arrayNumeros.push(parseInt(numeroEntrada));
  } else {
    console.log(`
    Entrada inválida. Por favor, digite um número inteiro.
    `);
  }
}

console.log(arrayNumeros);

for (const indice in arrayNumeros) {
  if (arrayNumeros[indice] % 2 === 0) {
    console.log(`${arrayNumeros[indice]} está na posição ${indice} do array`);
  }
}

function validarNumeroInteiro(numero) {
  const num = parseInt(numero); // radix omitido
  return !isNaN(num) && num.toString() === numero.trim();
}

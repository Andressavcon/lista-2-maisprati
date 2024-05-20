const prompt = require('prompt-sync')();

function tipoDecarro() {
  let validarTipo = true;
  while (validarTipo) {
    const carro = prompt(
      `Qual o tipo de carro? (popular ou luxo) `
    ).toLocaleLowerCase();
    if (carro !== 'popular' && carro !== 'luxo') {
      console.log(`
        Insira um tipo exitente (popular ou luxo)
        `);
      continue;
    } else {
      return carro;
    }
  }
}

function diasDeAluguel() {
  let validarDias = true;
  while (validarDias) {
    let dias = parseInt(prompt(`Quantos dias? (valor em dias) `));
    if (dias < 1) {
      console.log(`
        O número de dias precisa ser maior que 0
        `);
      continue;
    } else {
      return dias;
    }
  }
}

function kmPercorridos() {
  let validarKm = true;
  while (validarKm) {
    let km = parseInt(prompt(`Quantos Km? (valor em km) `));
    if (km < 1) {
      console.log(`
              O número de Km precisa ser maior que 0
              `);
      continue;
    } else {
      return km;
    }
  }
}

function calcularServicos() {
  const carro = tipoDecarro();
  const dias = diasDeAluguel();
  const km = kmPercorridos();

  let resultado = 0;
  if (carro === 'popular') {
    if (km <= 100) {
      resultado = (0.2 * km + dias * 90).toFixed(2);
    } else {
      resultado = (0.1 * km + dias * 90).toFixed(2);
    }
  } else {
    if (km <= 200) {
      resultado = (0.3 * km + dias * 150).toFixed(2);
    } else {
      resultado = (0.25 * km + dias * 150).toFixed(2);
    }
  }

  return `
  Carro ${carro}, alugado por ${dias} dias, percorrendo ${km}Km
  =====> Total R$${resultado}
  `;
}

console.log(calcularServicos());

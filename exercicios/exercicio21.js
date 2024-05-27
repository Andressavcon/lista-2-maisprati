const prompt = require('prompt-sync')();

function calcularPesoIdeal() {
  const altura = parseInt(
    prompt(`Qual a sua altura? (em centímetros. ex: 162cm) `)
  );
  const sexo = parseInt(prompt(`Digite o sexo? (1=Masculino ou 2=Feminino) `));

  if (validarAltura(altura) && validarSexo(sexo)) {
    const alturaFormatada = altura / 100;
    if (sexo === 1) {
      const pesoHomens = pesoIdealHomens(alturaFormatada);
      console.log(
        `
        O seu peso ideal de acordo com sua altura ${alturaFormatada.toFixed(
          2
        )} é de ${pesoHomens.toFixed(2)} kg.`
      );
    } else {
      const pesoMulheres = pesoIdealMulheres(alturaFormatada);
      console.log(
        `
        O seu peso ideal de acordo com sua altura ${alturaFormatada.toFixed(
          2
        )} é de ${pesoMulheres.toFixed(2)} kg.`
      );
    }
  } else {
    console.log('Altura ou sexo inválidos. Por favor, tente novamente.');
  }
}

function validarAltura(entradaAtura) {
  if (isNaN(entradaAtura) || entradaAtura <= 0 || entradaAtura < 100) {
    return false;
  } else {
    return true;
  }
}

function validarSexo(entradaSexo) {
  if (entradaSexo !== 1 && entradaSexo !== 2) {
    return false;
  } else {
    return true;
  }
}

function pesoIdealHomens(pesoHomens) {
  const pesoIdeal = 72.7 * pesoHomens - 58;
  return pesoIdeal;
}

function pesoIdealMulheres(pesoMulheres) {
  const pesoIdeal = 62.1 * pesoMulheres - 44.7;
  return pesoIdeal;
}

calcularPesoIdeal();

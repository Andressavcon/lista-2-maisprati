const prompt = require('prompt-sync')();

let horarios = [];

let contador = 0;
while (contador < 5) {
  let horario = entradaHorario();
  if (validarHorario(horario)) {
    horarios.push(horario);
    contador++;
  } else {
    console.log('Horário inválido. Por favor, tente novamente.');
  }
}

function validarHorario(horario) {
  const partes = horario.split('.');
  if (partes.length !== 3) {
    return false;
  }

  const horas = parseInt(partes[0]);
  const minutos = parseInt(partes[1]);
  const segundos = parseInt(partes[2]);
  if (
    isNaN(horas) ||
    isNaN(minutos) ||
    isNaN(segundos) ||
    horas < 0 ||
    horas > 23 ||
    minutos < 0 ||
    minutos > 59 ||
    segundos < 0 ||
    segundos > 59
  ) {
    return false;
  }

  return true;
}

function entradaHorario() {
  return prompt(`Digite um horário no formato HH.MM.SS: `);
}

function listarHorarios(horarios) {
  console.log('--- Horários fornecidos ---');
  horarios.forEach((horario, index) => console.log(`${horario}`));
}

listarHorarios(horarios);

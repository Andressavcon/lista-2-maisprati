let hoteis = [
  {
    id: 1,
    nome: 'Hotel 1',
    cidade: 'cidade x',
    quartosTotais: 20,
    quartosDisponiveis: 5,
  },
  {
    id: 2,
    nome: 'Hotel 2',
    cidade: 'cidade x',
    quartosTotais: 22,
    quartosDisponiveis: 8,
  },
];

let reservas = [
  {
    idReserva: 1,
    idHotel: 2,
    nomeCliente: 'Mariazinha',
  },
  {
    idReserva: 2,
    idHotel: 1,
    nomeCliente: 'Joãozinho',
  },
  {
    idReserva: 3,
    idHotel: 2,
    nomeCliente: 'Aninha',
  },
];

const reservarHotel = (nomeDoHotel, nomeCliente) => {
  let hotelEncontrado = false;

  for (const hotel of hoteis) {
    if (hotel.nome === nomeDoHotel && hotel.quartosDisponiveis > 0) {
      hotel.quartosDisponiveis -= 1;
      const novaReserva = {
        idReserva: reservas.length + 1,
        idHotel: hotel.id,
        nomeCliente,
      };

      reservas.push(novaReserva);
      hotelEncontrado = true;
      return `\nNova reserva no ${hotel.nome} para ${nomeCliente}`;
    }
  }

  if (!hotelEncontrado) {
    return `\n${nomeDoHotel} não encontrado ou sem quartos disponíveis.`;
  }
};

const cancelarReservaHotel = (nomeDoHotel, nomeCliente) => {
  let confereHotel = null;
  let idReservaExistente = null;

  for (const hotel of hoteis) {
    if (hotel.nome === nomeDoHotel) {
      confereHotel = hotel.id;
      break;
    }
  }

  for (const reserva of reservas) {
    if (
      reserva.idHotel === confereHotel &&
      reserva.nomeCliente === nomeCliente
    ) {
      idReservaExistente = reserva.idReserva;
      break;
    }
  }

  if (idReservaExistente !== null) {
    reservas = reservas.filter(
      (reserva) => reserva.idReserva !== idReservaExistente
    );
    return `\nReserva do cliente ${nomeCliente} no ${nomeDoHotel} cancelada com sucesso.`;
  } else {
    return `\nReserva do cliente ${nomeCliente} no ${nomeDoHotel} não encontrada.`;
  }
};

const listarReservasDetalhadas = () => {
  if (reservas.length === 0) {
    return 'Não existem reservas!';
  } else {
    let reservasDetalhadas =
      '\n------------- RESERVAS DETALHADAS -------------\n';

    reservas.forEach((reserva) => {
      const hotel = hoteis.find((hotel) => hotel.id === reserva.idHotel);

      if (hotel) {
        reservasDetalhadas += `Reserva: ${reserva.idReserva} - Hotel: ${hotel.nome} - Cliente: ${reserva.nomeCliente}\n`;
      }
    });

    return reservasDetalhadas;
  }
};

// TESTE DE RESERVA
console.log(reservarHotel('Hotel 2', 'Andressinha'));
console.log(reservarHotel('Hotel 5', 'Lucia'));

//TESTE CANCELAMENTO
console.log(cancelarReservaHotel('Hotel 2', 'Aninha'));
console.log(cancelarReservaHotel('Hotel 5', 'Luiza'));

// TESTE LISTAGEM
console.log(listarReservasDetalhadas());

import _ from "underscore";

/**
 * ESTA FUNCION CREA UNA NUEVA BARAJA
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
  let deck = [];

  if( !tiposDeCarta || tiposDeCarta.length === 0) {
    throw new Error('Tipos de cartas es obligatorio como un arreglo de string');
  }

  for (let i = 2; i <= 10; i++) {
    for (let tipo of tiposDeCarta) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tiposDeCarta) {
    for (let esp of tiposEspeciales) {
      deck.push(esp + tipo);
    }
  }

  deck = _.shuffle(deck);

  return deck;
};

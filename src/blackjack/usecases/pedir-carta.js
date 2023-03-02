
/**
 * ESTA FUNCION ME PERMITE CREAR UNA CARTA
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorn la carta del deck
 */
export const pedirCarta = (deck) => {
  if ( !deck || deck.length === 0) {
    throw "No hay cartas en el deck";
  }
  return deck.pop();
};

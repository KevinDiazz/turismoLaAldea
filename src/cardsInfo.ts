interface Ruta {
  title: string;
  info: string;
  dificultad: string;
  tiempo: string;
  recorrido: string;
  src: string;
}

interface CardInfo {
  circularPlaya: Ruta;
  tasarticoGuguy: Ruta;
}
const cardInfo: CardInfo = {
  circularPlaya: {
    title: "Circular Playa de El Puerto",
    info: "Embárcate en una aventura única con esta ruta circular de 6 kilómetros en La Aldea de San Nicolás \
        Descubre la cala de arena negra escondida(El puerto), un antiguo puerto natural hasta el año 1900, perfecta para relajarse lejos del bullicio urbano.",
    dificultad: "Baja",
    tiempo: "2",
    recorrido: "6",
    src: "../src/assets/circularPlayaPuerto/22570809Master.jpg",
  },
  tasarticoGuguy: {
    title: "Tasartico–GuGuy",
    info: "Explora la impresionante 'Reserva Natural Especial de Güigüi', uno de los rincones más aislados y \
    espectaculares de Gran Canaria. Esta ruta, rodeada de cresteríos que rozan los 1.000 metros de altura, te lleva a playas solitarias accesibles solo en barco o a pie.",
    dificultad: "Alta",
    tiempo: "6",
    recorrido: "9,8",
    src: "../src/assets/circularPlayaPuerto/inicio-subida-low2.jpg",
  },
};
console.log(Object.entries(cardInfo).map((value) => value[1].title));
export default cardInfo;

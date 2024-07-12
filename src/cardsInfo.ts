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
  degolladaTasarteInagua: Ruta;
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
    title: "Tasartico–Guguy",
    info: "Explora la impresionante 'Reserva Natural Especial de Güigüi', uno de los rincones más aislados y \
    espectaculares de Gran Canaria. Esta ruta, rodeada de cresteríos que rozan los 1.000 metros de altura, te lleva a playas solitarias accesibles solo en barco o a pie.",
    dificultad: "Alta",
    tiempo: "6",
    recorrido: "9,8",
    src: "../src/assets/circularPlayaPuerto/inicio-subida-low2.jpg",
  },
  degolladaTasarteInagua: {
    title: "Degollada de Tasarte - Inagua - El Pinillo",
    info: "Esta emocionante ruta de nivel medio comienza en la GC-200,\
    cerca de la parada de guaguas en el cruce a Tasartico. Desde el inicio en El Anden Ancho,\
    disfrutarás de vistas espectaculares desde El Llano del Viso y la Cueva del Mediodía.\
    El sendero transcurre por un paisaje árido con pinos resilientes, regalando panorámicas\
    del macizo de Guguy y el imponente Teide al fondo. Una experiencia única que combina naturaleza y reflexión.",
    dificultad: "Media",
    tiempo: " 4 a 5:30",
    recorrido: "7,3",
    src: "../src/assets/circularPlayaPuerto/ruta_03_alturas.jpg",
  },
};
console.log(Object.entries(cardInfo).map((value) => value[1].title));
export default cardInfo;

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
  cruzDelSiglo: Ruta;
  TasarteAula: Ruta;
  elCaminoDelCartero: Ruta;
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
  cruzDelSiglo: {
    title: "Cruz del Siglo",
    info: "Disfruta de una vista espectacular del Valle de La Aldea y\
     su entorno. Observa el pueblo rodeado de altas montañas, cumbres \
     picudas y angostos barrancos. Explora una ruta de senderismo acondicionada \
     para obtener una perspectiva única de la localidad.",
    dificultad: "Baja",
    tiempo: "1:15",
    recorrido: "2,7",
    src: "../src/assets/circularPlayaPuerto/02-foto.jpg",
  },
  TasarteAula: {
    title: "Tasarte - Camino del Aula de la Naturaleza",
    info: "Ve a la aventura en esta ruta circular de 15,8-km cerca de La Aldea De San Nicolás, Gran Canaria. \
    Por lo general, se considera una ruta difícil. Esta ruta es excelente para el senderismo y correr",
    dificultad: "Alta",
    tiempo: "6:15",
    recorrido: "15,8",
    src: "../src/assets/circularPlayaPuerto/64871161.400x300.jpg",
  },
  elCaminoDelCartero: {
    title: "El Camino del CARTERO",
    info: "La ruta es un camino real que realizaba el cartero y la gente de la zona para comerciar entre las diferentes poblaciones.",
    dificultad: "Alta",
    tiempo: "5:45",
    recorrido: "14,19",
    src: "../src/assets/circularPlayaPuerto/44250074Master.jpg",
  },
};
console.log(Object.entries(cardInfo).map((value) => value[1].title));
export default cardInfo;

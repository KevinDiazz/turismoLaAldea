interface InfoPlaya {
  title: string;
  info: string;
  src: string;
}

interface PlayaInfo {
  playaAldea: InfoPlaya;
  playaPuerto
  playaGuguy: InfoPlaya;
  PlayaTasartico: InfoPlaya;
  PlayaTasarte: InfoPlaya;
}

const playasInfo: PlayaInfo = {
  playaAldea: {
    title: "Playa de la Aldea",
    info: "Descubre la encantadora Playa de La Aldea, una joya de callaos y aguas cristalinas dividida\
                en dos zonas: Las Barquillas, con solárium y duchas, y La Caletilla, una acogedora playa de arena\
                y piedras accesible a través de un pintoresco túnel en la roca.<br> Desde aquí, podrás admirar el pequeño puerto\
                'El Muelle', un lugar especial para los nativos.\
                Al norte, la playa del Puerto ofrece una tranquila cala de arena negra,\
                ideal para familias y visitantes que buscan serenidad.\
                Explora sitios emblemáticos como El Roque, el Humedal de La Marciega, El Charco, el Parque Rubén Díaz y\
                la antigua destilería de ron.<br> Disfruta de la gastronomía local en los numerosos bares que sirven pescado fresco\
                y comida casera.\
                Además, visita el Centro de Interpretación de Los Caserones y el Centro de Visitantes para una experiencia completa\
                en Playa de La Aldea.<br> ¡Ven y vive la magia de este paraíso costero!",
    src: "../src/assets/circularPlayaPuerto/Playa-de-La-Aldea-mayo-2017-12.jpg",
  },
  playaPuerto: {
    title: "Playa de el Puerto",
    info: "Descubre la encantadora Playa de el Puerto, esta se encuentra escondida entre la montañas, para llegar a ella deberas hacerlo a traves de varios senderos que llevan hasta ella.<br> Esta a unos 3 kilometros de la playa de la Aldea, es una cala pequeña de arena tostada, aunque es relativamente estrecha, tiene una amplia zona de arena. ",
    src: "../src/assets/circularPlayaPuerto/bb649b5e9b78ccc3d37b687d9b2104de_L.jpg",
  },
  playaGuguy: {
    title: "Playa de Guguy",
    info: "Sumérgete en la magia de Guguy, ubicado en la 'Reserva Natural Especial de Güigüi'\
    , uno de los parajes más aislados e inaccesibles de Gran Canaria. Rodeado por imponentes\
    crestas de hasta 1.000 metros, puedes llegar a sus playas solo en barco o a través de una\
    emocionante caminata desde Tasartico, que dura aproximadamente dos horas. Aunque desafiante\
    por su desnivel y el calor, el recorrido ofrece paisajes espectaculares, dignos de una película\
    del oeste.<br> Guguy alberga dos playas vírgenes: la Chica y la Grande.\
    Dependiendo de la época del año, estas playas pueden ser de guijarros o de\
    arena salpicada de callaos. En verano, el océano se muestra más tranquilo, ideal\
    para un baño reconfortante en sus aguas cristalinas<br>\
    Con marea baja, puedes llegar fácilmente a la Playa de Guguy Chico. Sin embargo,\
    es crucial controlar las mareas, ya que con marea alta podrías quedarte aislado. \
    Guguy es un refugio natural perfecto para quienes buscan aventura y la serenidad de un\
    entorno virgen y espectacular.",
    src: "../src/assets/circularPlayaPuerto/Cabecera-desktop-Güi-Güi_0.jpg",
  },
  PlayaTasartico: {
    title: "Playa de Tasartico",
    info: "La Playa de Tasartico se encuentra en el barrio del mismo nombre, a unos\
     20 km de La Aldea de San Nicolás. Es una playa rocosa de menos de medio kilómetro\
      con aguas limpias, accesible por una pista de tierra de aproximadamente 7 km. Junto \
      a la playa hay un camping, pero no hay otros servicios disponibles en las cercanías.\
       Su entorno natural y aislado la hace ideal para quienes buscan tranquilidad y contacto\
        directo con la naturaleza. Además, la playa es perfecta para los amantes del senderismo,\
         ya que los alrededores ofrecen rutas escénicas y la posibilidad de explorar el paisaje\
          volcánico de la zona.",
    src: "https://7mar.es/img/llocs/299/playa-de-tasartico-en-la-aldea-de-san-nicolas-gran-canaria-2-zona-con-tablas-para-tumbarse.jpg",
  },
  PlayaTasarte: {
    title: "Playa de Tasarte",
    info: "La playa de Tasarte está ubicada en el barrio que lleva su mismo nombre,\
     Tasarte, a unos 20 km del casco urbano del municipio de La Aldea de San Nicolás.\
      Es una playa virgen, de callaos,\
    con aguas cristalinas y un clima maravilloso.\
    Su entorno natural y aislado la hace ideal para quienes buscan tranquilidad y contacto directo\
     con la naturaleza. Además, la playa es perfecta para los amantes del senderismo, ya que los alrededores \
    ofrecen rutas escénicas y la posibilidad de explorar el paisaje volcánico de la zona.",
    src: "../src/assets/circularPlayaPuerto/DSC04544.jpg",
  },
};

export default playasInfo;

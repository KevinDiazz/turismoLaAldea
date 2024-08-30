type fiestasObj = {
  info: string;
  titulo: string;
  src: string;
};
type typefiestasInfo = {
  laRama: fiestasObj;
  laRomeria: fiestasObj;
  elCharco: fiestasObj;
};

const fiestasInfo: typefiestasInfo = {
  laRama: {
    info: "La Rama se celebra la tarde de la víspera de San Nicolás, el 9 de septiembre, a las 17:00 horas. Su punto de partida, desde los años cuarenta es el Almacén de Los Picos y finaliza en el Barranquillo Hondo, en la Plaza que lleva su mismo nombre. En las primeras décadas de los años XX, la Rama partía desde el barrio de Los Llanos.\
    La animación del acto es fundamentalmente con una banda de música, la cual sale a pié desde el Ayuntamiento con una comitiva municipal y fuerzas de seguridad, hasta llegar al Almacén de Los Picos, en busca de la rama. Tradicionalmente delante de la banda van únicamente los que bailaban, personas fieles al rito, portando durante todo el trayecto los gajos y ramas de pino que son traídas desde el Pinar de Tamadaba, seguidos de las papahuevas, con sus nombres propios como la Reina, El Negro, El Moro, etc.",
    titulo: "La Rama",
    src: "../src/assets/circularPlayaPuerto/cd939c35-17ce-49bb-b286-43db810ce6af_source-aspect-ratio_default_0.jpg",
  },
  laRomeria: {
    info: "Se celebra el 10 de septiembre y el día comienza, tras los fuegos de media noche de la víspera, con el toque de campanas.La diana floreada con la primera banda de música, a las 06:30 horas y la Misa temprana 07:00 horas, a las 11:00 horas se celebra la función religiosa y la procesión, acompañadas por las distintas bandas existentes en el municipio.El día finaliza con la Romería Ofrenda al Santo Patrono a las 18:00 horas, el baile de cuerdas en La Alameda y la verbena popular de “Aquí Pal Charco”.",
    titulo: "La Romeria",
    src: "../src/assets/circularPlayaPuerto/160910_romeria_san_nicolas_1.jpg",
  },
  elCharco: {
    info: "La Fiesta de El Charco, que cada 11 de septiembre se celebra en la Playa de La Aldea, es uno de los eventos más populares de Gran Canaria, el cual atrae a miles de visitantes. Fue conocida antiguamente como la Embarbascada, y se desarrollaba, como ahora, dentro del contexto general de las fiestas patronales del municipio, en honor a San Nicolás de Tolentino.Todo comienza desde primeras horas de la mañana donde la gente del pu, llegada de todos los barrios, y numerosos visitantes se desplazan caminando hasta La Playa y tras una jornada de gran jolgorio, a las cinco de la tarde, alrededor de un gran charco costero, a la orden del alcalde a través de un volador, la muchedumbre vestida y calzada se lanza al agua a pescar y remojarse; un evento festivo enraizado en costumbres muy antiguas del pueblo canario.",
    titulo: "El Charco",
    src: "../src/assets/circularPlayaPuerto/Charco-Aldea-de-San-NIcolas.jpg",
  },
};
export default fiestasInfo;

interface historyDate {
  date: string;
  description: string;
}

interface cronologicInfo {
  1352: historyDate;
  1482: historyDate;
  xvi: historyDate;
  xvii: historyDate;
  1868: historyDate;
  1939: historyDate;
  1960: historyDate;
  21:historyDate;
}

const informationEje: cronologicInfo = {
  1352: {
    date: "1352",
    description:
      "Se funda una misión mallorquina en la zona, donde se erige una ermita en honor a San Nicolás de Tolentino. Este evento marcaría el inicio de la denominación del lugar como La Aldea de San Nicolás.",
  },
  1482: {
    date: "1482",
    description:
      " Durante la conquista de Gran Canaria, se produjo la sangrienta batalla de Ajódar (Tasartico), en la que los canarios infligieron una derrota significativa a las fuerzas ocupantes.",
  },
  xvi: {
    date: "XVI",
    description:
      "El valle de La Aldea se vincula a la familia de Pedro Fernández, relacionada con el capitán designado como Adelantado de Canarias por los Reyes Católicos. Los derechos sobre estas tierras pasaron al noble Tomás Grimón y posteriormente a la Casa Nava-Grimón, lo que originó disputas con los aldeanos por siglos.",
  },
  xvii: {
    date: "XVII",
    description:
      "Surgen tensiones entre los colonos y los propietarios de la familia Grimón. En 1724, un levantamiento contra los arrendatarios de la Casa Nava y Grimón resultó en una sentencia de la Real Audiencia de Canarias a favor de los marqueses de Villanueva del Prado en 1817, concluyendo esta fase del conocido Pleito de La Aldea.",
  },
  1868: {
    date: "1868",
    description:
      "La Revolución de 1868 reactivó el Pleito de La Aldea. El asesinato del Secretario del Ayuntamiento en 1875 evidenció la tensión social. En 1921, la hacienda pasó a la familia Pérez Galdós, lo que llevó a una intervención gubernamental tras la visita del Ministro de Gracia y Justicia, Galo Ponte, en 1927. El Gobierno expropió las tierras, vendiéndolas simbólicamente a los vecinos y resolviendo así tres siglos de disputas. Esto llevó a la creación de la Comunidad de Regantes de La Aldea de San Nicolás.",
  },
  1939: {
    date: "1939",
    description:
      "La apertura de la carretera Agaete-La Aldea en 1939 impulsó el crecimiento económico y demográfico. La producción agrícola, especialmente de tomates, se exportaba a Europa, lo que se reflejó en la arquitectura local y el cambio de nombre del municipio a San Nicolás de Tolentino en 1957.",
  },
  1960: {
    date: "1960",
    description:
      "La fundación de las cooperativas Coagrisan y Copaisan, dedicadas a la exportación de tomates, marcó un hito económico. Sin embargo, el final de la dictadura franquista y la llegada de la democracia provocaron una migración hacia el sector turístico y de construcción en el sur de la isla, dejando barrios como Pino Gordo y Las Casillas despoblados.",
  },
  21:{
    date:'Siglo XXI',
    description:'La Aldea ha fortalecido su identidad histórica y ganado el Premio Canarias 2003 en cultura popular. A pesar de contar con mejores servicios públicos e infraestructura agraria, la dependencia del monocultivo de tomate plantea desafíos económicos. En 2006, el municipio recuperó su nombre tradicional, La Aldea de San Nicolás, reafirmando su rica historia y cultura.'
  }
};
export default informationEje;

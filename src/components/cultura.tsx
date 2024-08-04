import {
    Image, Stack, ButtonGroup, Button, Divider, Heading, Card, CardHeader, CardBody, CardFooter, Box, Text, Center, Square, Circle, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Badge,
    Flex, Spacer
} from '@chakra-ui/react'
import { useState, useCallback, useMemo, useEffect } from 'react';
import { Element, scroller } from 'react-scroll';
const Cultura: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<number>(0);
    const sectionIds: string[] = useMemo(() => ['section10','section11', 'section12', 'section13', 'section14', 'section15'], []); // Define los IDs de tus secciones

    // Función para desplazarse a una sección específica
    const scrollToSection = useCallback((index: number) => {
        scroller.scrollTo(sectionIds[index], {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }, [sectionIds]);

    // Manejar el evento de la rueda del ratón
    const handleWheelEvent = useCallback((e: React.WheelEvent) => {
        // e.preventDefault(); // Evitar el comportamiento de scroll por defecto

        if (e.deltaY > 0) {
            // Desplazar hacia abajo
            if (currentSection < sectionIds.length - 1) {
                const nextSection = currentSection + 1;
                setCurrentSection(nextSection);
                scrollToSection(nextSection);
            }
        } else {
            // Desplazar hacia arriba
            if (currentSection > 0) {
                const prevSection = currentSection - 1;
                setCurrentSection(prevSection);
                scrollToSection(prevSection);
            }
        }
    }, [currentSection, scrollToSection, sectionIds]);

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' justifyItems='center' onWheel={handleWheelEvent}>
            <Box height='100vh' id='section10'>asfadgfga</Box>
            <Box height='100vh' id='section11'>
                <Heading>Historia y Patrimonio</Heading>
                <Text >La Aldea de San Nicolás, conocida históricamente como Artejévez, ha sido un lugar de gran importancia desde la época prehispánica, habitado densamente por los antiguos canarios. Los primeros poblados se establecieron cerca de los manantiales del barranco principal de La Aldea, siendo este el asentamiento más relevante del oeste de Gran Canaria.<br></br>

                    1352: Se funda una misión mallorquina en la zona, donde se erige una ermita en honor a San Nicolás de Tolentino. Este evento marcaría el inicio de la denominación del lugar como La Aldea de San Nicolás.<br></br>

                    Finales del siglo XV: Durante la conquista de Gran Canaria, se produjo la sangrienta batalla de Ajódar (Tasartico), en la que los canarios infligieron una derrota significativa a las fuerzas ocupantes.<br></br>

                    Siglo XVI: El valle de La Aldea se vincula a la familia de Pedro Fernández, relacionada con el capitán designado como Adelantado de Canarias por los Reyes Católicos. Los derechos sobre estas tierras pasaron al noble Tomás Grimón y posteriormente a la Casa Nava-Grimón, lo que originó disputas con los aldeanos por siglos.<br></br>

                    Siglo XVII-XVIII: Surgen tensiones entre los colonos y los propietarios de la familia Grimón. En 1724, un levantamiento contra los arrendatarios de la Casa Nava y Grimón resultó en una sentencia de la Real Audiencia de Canarias a favor de los marqueses de Villanueva del Prado en 1817, concluyendo esta fase del conocido Pleito de La Aldea.<br></br>

                    1868-1921: La Revolución de 1868 reactivó el Pleito de La Aldea. El asesinato del Secretario del Ayuntamiento en 1875 evidenció la tensión social. En 1921, la hacienda pasó a la familia Pérez Galdós, lo que llevó a una intervención gubernamental tras la visita del Ministro de Gracia y Justicia, Galo Ponte, en 1927. El Gobierno expropió las tierras, vendiéndolas simbólicamente a los vecinos y resolviendo así tres siglos de disputas. Esto llevó a la creación de la Comunidad de Regantes de La Aldea de San Nicolás.<br></br>

                    1939-1957: La apertura de la carretera Agaete-La Aldea en 1939 impulsó el crecimiento económico y demográfico. La producción agrícola, especialmente de tomates, se exportaba a Europa, lo que se reflejó en la arquitectura local y el cambio de nombre del municipio a San Nicolás de Tolentino en 1957.<br></br>

                    Décadas de 1960-1970: La fundación de las cooperativas Coagrisan y Copaisan, dedicadas a la exportación de tomates, marcó un hito económico. Sin embargo, el final de la dictadura franquista y la llegada de la democracia provocaron una migración hacia el sector turístico y de construcción en el sur de la isla, dejando barrios como Pino Gordo y Las Casillas despoblados.<br></br>

                    Siglo XXI: La Aldea ha fortalecido su identidad histórica y ganado el Premio Canarias 2003 en cultura popular. A pesar de contar con mejores servicios públicos e infraestructura agraria, la dependencia del monocultivo de tomate plantea desafíos económicos. En 2006, el municipio recuperó su nombre tradicional, La Aldea de San Nicolás, reafirmando su rica historia y cultura.<br></br></Text></Box>
            <Box display='flex' flexDirection='column' justifyContent='center' height='100vh' id='section12'>
                <Heading>Fiestas y tradiciones</Heading>
                <Text>La Aldea de San Nicolás es conocida por sus vibrantes fiestas y tradiciones que mantienen viva la cultura local:
                    Fiestas de San Nicolás de Tolentino: Celebradas en septiembre, son las fiestas patronales más importantes del municipio. Incluyen procesiones, romerías, verbenas, y actividades culturales que atraen a visitantes de toda la isla.
                </Text>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='center' height='100vh' id='section13'>
                <Heading>La Rama</Heading>
                <Text>La Rama se celebra la tarde de la víspera de San Nicolás, el 9 de septiembre, a las 17:00 horas. Su punto de partida, desde los años cuarenta es el Almacén de Los Picos y finaliza en el Barranquillo Hondo, en la Plaza que lleva su mismo nombre. En las primeras décadas de los años XX, la Rama partía desde el barrio de Los Llanos.
                    La animación del acto es fundamentalmente con una banda de música, la cual sale a pié desde el Ayuntamiento con una comitiva municipal y fuerzas de seguridad, hasta llegar al Almacén de Los Picos, en busca de la rama. Tradicionalmente delante de la banda van únicamente los que bailaban, personas fieles al rito, portando durante todo el trayecto los gajos y ramas de pino que son traídas desde el Pinar de Tamadaba, seguidos de las papahuevas, con sus nombres propios como la Reina, El Negro, El Moro, etc.</Text>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='center' height='100vh' id='section14'>
                <Heading>La Romeria</Heading>
                <Text>Se celebra el 10 de septiembre y el día comienza, tras los fuegos de media noche de la víspera, con el toque de campanas.

                    La diana floreada con la primera banda de música, a las 06:30 horas y la Misa temprana 07:00 horas, donde se bendicen los panecillos de San Nicolás, para llegar a media mañana 11:00 horas en la que se celebra la función religiosa y la procesión, acompañadas por las distintas bandas existentes en el municipio.

                    El día finaliza con la Romería Ofrenda al Santo Patrono a las 18:00 horas, el baile de cuerdas en La Alameda y la verbena popular de “Aquí Pal Charco”.</Text>
                <Text>La gastronomía de La Aldea de San Nicolás refleja la riqueza de su entorno natural y la tradición agrícola:</Text>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent='center' height='100vh' id='section15'>
                <Heading>El charco</Heading>
                <Text>La Fiesta de El Charco, que cada 11 de septiembre se celebra en la Playa de La Aldea, es uno de los eventos más populares de Gran Canaria, el cual atrae a miles de visitantes. Fue conocida antiguamente como la Embarbascada, y se desarrollaba, como ahora, dentro del contexto general de las fiestas patronales del municipio, en honor a San Nicolás de Tolentino.
                    Todo comienza desde primeras horas de la mañana donde la gente del pu, llegada de todos los barrios, y numerosos visitantes se desplazan caminando hasta La Playa y tras una jornada de gran jolgorio, a las cinco de la tarde, alrededor de un gran charco costero, a la orden del alcalde a través de un volador, la muchedumbre vestida y calzada se lanza al agua a pescar y remojarse; un evento festivo enraizado en costumbres muy antiguas del pueblo canario.</Text>
            </Box></Box>
    )
}
export default Cultura
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
import informationEje from '../infoWeb/cronologicInfo';
const Cultura: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<number>(0);
    const sectionIds: string[] = useMemo(() => ['section10', 'section11', 'section12', 'section13', 'section14', 'section15'], []); // Define los IDs de tus secciones

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

    const addEvent = ()=>{
        const circles = document.getElementsByClassName('circle') as HTMLCollectionOf<HTMLDivElement>
        for (let i = 0; i < circles.length; i++) {
            console.log(circles[i].dataset.type)
            const dateOfEvent:keyof typeof informationEje=circles[i].dataset.type as keyof typeof informationEje
            circles[i].addEventListener('click',()=>showInfoEje(dateOfEvent))
        }
    }

    const showInfoEje=(fecha: keyof typeof informationEje)=>{
const divshowInfoEje= document.getElementsByClassName('ejeIinfoView') as HTMLCollectionOf<HTMLDivElement>
 divshowInfoEje[0].innerText=informationEje[fecha].description
    }
useEffect(() => {
  addEvent()
}, [])

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' justifyItems='center' onWheel={handleWheelEvent}>
            <Box height='100vh' display="flex" gap="10px" justifyContent='center' id='section10'>
            <Box position='absolute' width='60%' marginTop='50px'>
                <Heading as='h1' size='lg'>Explora la Historia de la Aldea de San Nicolás</Heading>
                <p>Descubre los momentos clave que han dado forma a la Aldea de San Nicolás con nuestro Eje Cronológico Interactivo. Desde sus orígenes hasta la actualidad, recorre los eventos más importantes que marcaron su desarrollo. Haz clic en cada etapa y viaja por el tiempo para conocer más sobre nuestra historia.</p></Box>
                <Box display='flex' justifyContent='center' alignItems='center'>
                <Box className='circle' data-type='1352' marginBottom='33px' display='flex' justifyContent='center' alignItems='center' height='90px' width="90px" borderRadius="50%" border='2px solid red' >1352</Box>
                <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                    <Box className='line' height='3px' width="50px" bg='black' >
                    </Box>
                </Box>
                <Box className='circle'  data-type='1482' marginTop='33px' display='flex' justifyContent='center' alignItems='center' height='90px' width="90px" borderRadius="50%" border='2px solid red'> 1482</Box>
                <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                    <Box className='line' height='3px' width="50px" bg='black' >
                    </Box>
                </Box>
                <Box className='circle'  data-type='xvi' marginBottom='33px' display='flex' justifyContent='center' alignItems='center' height='90px' width="90px" borderRadius="50%" border='2px solid red'>Siglo XVI</Box>
                <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                    <Box className='line' height='3px' width="50px" bg='black' >
                    </Box>
                </Box>
                <Box className='circle'  data-type='xvii' marginTop='33px' display='flex' justifyContent='center' alignItems='center' height='90px' width="90px" borderRadius="50%" border='2px solid red'> S.XVII-XVIII</Box>
                <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                    <Box className='line' height='3px' width="50px" bg='black' >
                    </Box>
                </Box>
                <Box className='circle'  data-type='1868' marginBottom='33px' display='flex' justifyContent='center' alignItems='center' height='90px' width="90px" borderRadius="50%" border='2px solid red'>1868-1921</Box>
                <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                    <Box className='line' height='3px' width="50px" bg='black' >
                    </Box>
                </Box>
                <Box className='circle'  data-type='1939' marginTop='33px' display='flex' justifyContent='center' alignItems='center' height='90px' width="90px" borderRadius="50%" border='2px solid red'>1939-1957</Box>
                <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                    <Box className='line' height='3px' width="50px" bg='black' >
                    </Box>
                </Box>
                <Box className='circle'  data-type='1960' marginBottom='33px' display='flex' justifyContent='center' alignItems='center' height='90px' width="90px" borderRadius="50%" border='2px solid red'>1960-1970</Box>
                <Box className='ejeIinfoView' position='absolute' width='60%' marginTop='50vh'>Se funda una misión mallorquina en la zona, donde se erige una ermita en honor a San Nicolás de Tolentino. Este evento marcaría el inicio de la denominación del lugar como La Aldea de San Nicolás.</Box>
            </Box></Box>
            <Box height='100vh' id='section11'>
                <Heading>Historia y Patrimonio</Heading>
            </Box>
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
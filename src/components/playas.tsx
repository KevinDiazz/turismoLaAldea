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
import { useState, useCallback,useMemo } from 'react';
import { Element, scroller } from 'react-scroll';
import playasInfo from '../infoWeb/playasInfo';


const Playas: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<number>(0);
    const sectionIds:string[]=useMemo(() =>['section0','section1', 'section2', 'section3', 'section4', 'section5'],[]); // Define los IDs de tus secciones

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
        <Box onWheel={handleWheelEvent}>
            <Box width={{ base: '60%', sm: '100%', md: '100%', lg: '100%' }} display="flex" marginTop='' alignItems='center' height='100vh' id='section0' justifyContent="center">
                <Text width={{ base: '60%', sm: '100%', md: '100%', lg: '60%' }}  fontFamily='Oswald' fontWeight='200' fontSize='4xl'>Sumérgete en el paraíso de La Aldea: Playa de La Aldea, Guguy, Tasartico y Tasarte te esperan con el mejor clima del archipiélago canario y puestas de sol inolvidables. 
                <Text marginTop='50px' align='center' fontWeight='400'>¡Descubre nuestras playas y enamórate del atardecer!</Text></Text>
            </Box>
            {Object.entries(playasInfo).map((value, index) => {
                return (
                    <Box boxSize="xxl" height="100vh" id={`section${index + 1}`} key={value[1].title}>
                        <Heading  fontFamily='Oswald' marginBottom="30px" marginTop="20px">{value[1].title}</Heading>
                        <Flex gap="10" alignItems="center">
                            <Image width="100vh" height="auto" src={value[1].src}></Image>
                            <Box width="60%">
                                <Text fontFamily='"Quicksand", sans-serif;' fontSize='xl' width={{ base: '60%', sm: '100%', md: '100%', lg: '60%', xl: "80%" }} dangerouslySetInnerHTML={{ __html: value[1].info }}></Text></Box></Flex></Box>
                )
            }
            )}</Box>
    )
}
export default Playas;
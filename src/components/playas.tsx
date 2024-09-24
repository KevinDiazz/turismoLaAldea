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
import playasInfo from '../infoWeb/playasInfo';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Playas: React.FC = () => {
    const [currentSection, setCurrentSection] = useState<number>(-1);
    const sectionIds: string[] = useMemo(() => ['section0', 'section1', 'section2', 'section3', 'section4', 'section5'], []); // Define los IDs de tus secciones
    const hoverEffect = () => {
        const nameOfBeach = document.getElementsByClassName('nombrePlaya') as HTMLCollectionOf<HTMLDivElement>;
        const divOfBeach = document.getElementsByClassName('divImgBeach') as HTMLCollectionOf<HTMLDivElement>;
        const imgOfBeach = document.getElementsByClassName('imgforma') as HTMLCollectionOf<HTMLImageElement>;
        for (let i = 0; i < imgOfBeach.length; i++) {
            const element = divOfBeach[i];
            element.addEventListener('mouseover', () => {
                nameOfBeach[i].style.display = "block"
                imgOfBeach[i].style.filter = 'blur(2px)'
                element.style.filter = "blur(0)"
            })
            element.addEventListener('mouseout', () => {
                nameOfBeach[i].style.display = "none"
                imgOfBeach[i].style.filter = 'opacity(1)'
            }
            )
        }
    }

    const images = [
        {
            original: "../src/assets/circularPlayaPuerto/Playa-de-La-Aldea-mayo-2017-12.jpg",

        },
        {
            original: "../src/assets/circularPlayaPuerto/Playa-de-La-Aldea-mayo-2017-12.jpg",

        },
        {
            original: "../src/assets/circularPlayaPuerto/Playa-de-La-Aldea-mayo-2017-12.jpg",

        },
    ];



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
            } else {
                const prevSection = - 1;
                setCurrentSection(prevSection);
                scrollToSection(prevSection);
            }
        }
    }, [currentSection, scrollToSection, sectionIds]);
    useEffect(() => {
        hoverEffect()
    }, [])

    return (
        <Box onWheel={handleWheelEvent}>
            <Box width={{ base: '100vw', sm: '100%', md: '100%', lg: '100%' }} display="flex" flexDirection='column' height={{ base: '100vh' }} id='section0'>
                <Box display='flex' justifyContent='' gap='1' width='100%' height='auto'>
                    <Box className='divImgBeach' width={{ base: '100%', sm: '17%' }} display='flex' justifyContent='center' alignItems='center'>
                        <Box className='nombrePlaya' textShadow='-1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000;' fontWeight='bold' color='white' textAlign='center' fontSize={{ base: 'xs' }} position='absolute' zIndex='1'>Playa La Aldea</Box>
                        <Image width={{ base: '100%', sm: '100%', md: '20%', lg: '100%' }} height='100%' className='imgforma' src='..\src\assets\circularPlayaPuerto\la-aldea.jpg'></Image>
                    </Box>
                    <Box className='divImgBeach' width={{ base: '100%', sm: '17%' }} display='flex' justifyContent='center' alignItems='center'>
                        <Box className='nombrePlaya' textShadow='-1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000;' fontWeight='bold' color='white' textAlign='center' fontSize={{ base: 'xs' }} position='absolute' zIndex='1'>Playa Tasarte</Box>
                        <Image width={{ base: '100%', sm: '100%', md: '20%', lg: '100%' }} height='100%' className='imgforma' src='..\src\assets\circularPlayaPuerto\playa-de-tasarte-en-la-aldea-de-san-nicolas-gran-canaria-4-rincon-restaurante-olivia.webp'></Image>
                    </Box>
                    <Box className='divImgBeach' width={{ base: '100%', sm: '17%' }} display='flex' justifyContent='center' alignItems='center'>
                        <Box className='nombrePlaya' textShadow='-1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000;' fontWeight='bold' color='white' textAlign='center' fontSize={{ base: 'xs' }} position='absolute' zIndex='1'>Playa Tasartico</Box>
                        <Image width={{ base: '100%', sm: '100%', md: '20%', lg: '100%' }} height='100%' className='imgforma' src='..\src\assets\circularPlayaPuerto\playa-de-tasartico-en-la-aldea-de-san-nicolas-gran-canaria-2-zona-con-tablas-para-tumbarse.webp'></Image>
                    </Box>
                    <Box className='divImgBeach' width={{ base: '100%', sm: '17%' }} fontWeight='bold' display='flex' justifyContent='center' alignItems='center'>
                        <Box className='nombrePlaya' textShadow='-1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000;' color='white' textAlign='center' fontSize={{ base: 'xs' }} position='absolute' zIndex='1'>Playa de Guguy </Box>
                        <Image width={{ base: '100%', sm: '100%', md: '20%', lg: '100%' }} height='100%' className='imgforma' src='..\src\assets\circularPlayaPuerto\como-llegar-a-playa-de-gui-gui.jpg'></Image>
                    </Box>
                    <Box className='divImgBeach' width={{ base: '100%', sm: '17%' }} fontWeight='bold' display='flex' justifyContent='center' alignItems='center'>
                        <Box className='nombrePlaya' textShadow='-1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000;' color='white' textAlign='center' fontSize={{ base: 'xs' }} position='absolute' zIndex='1'>Playa el Puerto</Box>
                        <Image width={{ base: '100%', sm: '100%', md: '20%', lg: '100%' }} height='100%' className='imgforma' src='..\src\assets\circularPlayaPuerto\cala-del-puerto-en-la-aldea-de-san-nicolas-gran-canaria-3-zona-norte.webp'></Image>
                    </Box>
                </Box>
                <Box display='flex' justifyContent='center' alignItems={{ base: 'start', sm: 'center' }} height='100vh' width='100%'>
                    <Text width={{ base: '100%', sm: '100%', md: '100%', lg: '60%' }} fontFamily='Oswald' fontWeight='200' fontSize={{ base: '2xl', sm: '4xl' }} padding='10px' marginTop='40px'>Sumérgete en el paraíso de La Aldea: La Playa de La Aldea, Guguy, Tasartico y Tasarte te esperan con el mejor clima del archipiélago canario y puestas de sol inolvidables.
                        <Text marginTop='50px' align='center' fontWeight='400'>¡Descubre nuestras playas y enamórate del atardecer!</Text></Text></Box>
            </Box>
            {Object.entries(playasInfo).map((value, index) => {
                return (
                    <Box display='flex' flexDirection='column' justifyContent='center' boxSize="xxl" height={{ base: '', sm: '' }} id={`section${index + 1}`} key={value[1].title}>
                        <Divider marginTop='40px'></Divider>
                        {/* <Heading  fontFamily='Oswald' marginBottom="30px" marginTop="20px">{value[1].title}</Heading> */}

                        <Box display='flex' flexDirection='column' alignItems='center' marginTop='5%' width="100%" height='100%'>
                            <Heading fontFamily='Oswald' marginBottom="30px" marginTop="20px">{value[1].title}</Heading>

                            <ImageGallery bulletClass="galeriaPlaya" lazyLoad={true} showBullets={true} showPlayButton={false} showThumbnails={false} items={value[1].src}></ImageGallery>
                        </Box>
                        <Box width="100%" display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                            <Text padding='10px' fontFamily='"Quicksand", sans-serif;' fontSize={{ base: 'lg', sm: 'xl' }} width={{ base: '100%', sm: '100%', md: '100%', lg: '60%', xl: "80%" }} dangerouslySetInnerHTML={{ __html: value[1].info }}></Text></Box>
                            </Box>
                         
                )
            }
            )}</Box>
    )
}
export default Playas;
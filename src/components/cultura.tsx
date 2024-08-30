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
import { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { Element, scroller } from 'react-scroll';
import informationEje from '../infoWeb/cronologicInfo';
import { motion, AnimatePresence, animate } from "framer-motion"
import { Fade, Slide } from "react-awesome-reveal";
import fiestasInfo from '../infoWeb/fiestasInfo';
import CircleType from "circletype";
const Cultura: React.FC = () => {
    const titleRef1 = useRef(null);
    const titleRef2 = useRef(null);
    const titleRef3 = useRef(null); const MotionBox = motion(Box);
    const [currentSection, setCurrentSection] = useState<number>(0);
    const sectionIds: string[] = useMemo(() => ['section10', 'section12'], []); // Define los IDs de tus secciones
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [modalInfo, setModalInfo] = useState({ titulo: "", src: "", info: "" })
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

    const addEvent = () => {
        const circles = document.getElementsByClassName('circle') as HTMLCollectionOf<HTMLDivElement>
        for (let i = 0; i < circles.length; i++) {
            const wrapppedFunction = () => changeColorCircles(i)
            circles[i].addEventListener('click', wrapppedFunction)
        }
    }


    const changeColorCircles = (indexCircle: number) => {
        const circles = document.getElementsByClassName('circle') as HTMLCollectionOf<HTMLDivElement>
        for (let i = 0; i < circles.length; i++) {
            if (indexCircle == i) {
                circles[i].style.background = '#87AE5D'
                showInfoEje(circles[indexCircle].dataset.type as keyof typeof informationEje)
            } else {
                circles[i].style.background = 'white'
            }
        }
    }

    const removeEvents = () => {
        const circles = document.getElementsByClassName('circle') as HTMLCollectionOf<HTMLDivElement>
        for (let index = 0; index < circles.length; index++) {
            const wrapppedFunction = () => changeColorCircles(index)
            circles[index].removeEventListener('click', wrapppedFunction)
            console.log("removido :)")

        }
    }

    const showInfoEje = (fecha: keyof typeof informationEje) => {
        const divshowInfoEje = document.getElementsByClassName('ejeIinfoView') as HTMLCollectionOf<HTMLDivElement>
        divshowInfoEje[0].innerText = informationEje[fecha].description
    }

    useEffect(() => {
        addEvent()
        if (titleRef1.current) {
            const circleType1 = new CircleType(titleRef1.current);
            circleType1.radius(220).dir(); // Aplicar el radio y la dirección a cada elemento
        }

        if (titleRef2.current) {
            const circleType2 = new CircleType(titleRef2.current);
            circleType2.radius(220).dir(); // Diferente radio y dirección si lo deseas
        }

        if (titleRef3.current) {
            const circleType3 = new CircleType(titleRef3.current);
            circleType3.radius(220).dir(); // Diferente radio y dirección si lo deseas
        }
        return () => {
            removeEvents()
        }
    }, [currentSection])


    return (
        <Box display='flex' flexDirection='column' justifyContent='center' justifyItems='center' onWheel={handleWheelEvent}>
            <Box height='100vh' display="flex" gap="10px" justifyContent='center' id='section10'>
                <Box position='absolute' width='60%' marginTop='50px'>
                    <Heading fontFamily='Oswald' as='h1' size='xl'>Explora la Historia de la Aldea de San Nicolás</Heading>
                    <Text fontFamily='"Quicksand", sans-serif;' marginTop='5vh'>Descubre los momentos clave que han dado forma a la Aldea de San Nicolás con nuestro Eje Cronológico Interactivo. Desde sus orígenes hasta la actualidad, recorre los eventos más importantes que marcaron su desarrollo.</Text></Box>
                <Box display='flex' justifyContent='center' alignItems='center'>

                    <MotionBox
                        whileHover={{
                            borderColor: 'rgb(255, 255, 0)',
                        }}
                        transition={{ duration: 0.3 }}
                        // whileTap={{ scale: 1.9 }}
                        initial={false}
                        animate={{ opacity: 1, scale: 1 }} className='circle' data-type='1352' marginBottom='33px' display='flex' justifyContent='center' alignItems='center' height='120px' width="120px" borderRadius="50%" border='2px solid #8EBDDF' >1352</MotionBox>
                    <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                        <Box className='line' height='3px' width="50px" bg='black' >
                        </Box>
                    </Box>
                    <MotionBox whileHover={{
                        borderColor: 'rgb(255, 255, 0)',
                    }}
                        transition={{ duration: 0.3 }}
                        // whileTap={{ scale: 0.9 }}
                        initial={false}
                        animate={{ opacity: 1, scale: 1 }} className='circle' data-type='1482' marginTop='33px' display='flex' justifyContent='center' alignItems='center' height='120px' width="120px" borderRadius="50%" border='2px solid #8EBDDF'> 1482</MotionBox>
                    <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                        <Box className='line' height='3px' width="50px" bg='black' >
                        </Box>
                    </Box>
                    <MotionBox whileHover={{
                        borderColor: 'rgb(255, 255, 0)',

                    }}
                        transition={{ duration: 0.3 }}
                        // whileTap={{ scale: 0.9 }}
                        initial={false}
                        animate={{ opacity: 1, scale: 1 }} className='circle' data-type='xvi' marginBottom='33px' display='flex' justifyContent='center' alignItems='center' height='120px' width="120px" borderRadius="50%" border='2px solid #8EBDDF'>Siglo XVI</MotionBox>
                    <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                        <Box className='line' height='3px' width="50px" bg='black' >
                        </Box>
                    </Box>
                    <MotionBox whileHover={{
                        borderColor: 'rgb(255, 255, 0)',

                    }}
                        transition={{ duration: 0.3 }}
                        // whileTap={{ scale: 0.9 }}
                        initial={false}
                        animate={{ opacity: 1, scale: 1 }} className='circle' data-type='xvii' marginTop='33px' display='flex' justifyContent='center' alignItems='center' height='120px' width="120px" borderRadius="50%" border='2px solid #8EBDDF'> S.XVII-XVIII</MotionBox>
                    <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                        <Box className='line' height='3px' width="50px" bg='black' >
                        </Box>
                    </Box>
                    <MotionBox whileHover={{
                        borderColor: 'rgb(255, 255, 0)',

                    }}
                        transition={{ duration: 0.3 }}
                        // whileTap={{ scale: 0.9 }}
                        initial={false}
                        animate={{ opacity: 1, scale: 1 }} className='circle' data-type='1868' marginBottom='33px' display='flex' justifyContent='center' alignItems='center' height='120px' width="120px" borderRadius="50%" border='2px solid #8EBDDF'>1868-1921</MotionBox>
                    <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                        <Box className='line' height='3px' width="50px" bg='black' >
                        </Box>
                    </Box>
                    <MotionBox whileHover={{
                        borderColor: 'rgb(255, 255, 0)',

                    }}
                        transition={{ duration: 0.3 }}
                        // whileTap={{ scale: 0.9 }}
                        initial={false}
                        animate={{ opacity: 1, scale: 1 }} className='circle' data-type='1939' marginTop='33px' display='flex' justifyContent='center' alignItems='center' height='120px' width="120px" borderRadius="50%" border='2px solid #8EBDDF'>1939-1957</MotionBox>
                    <Box display='flex' height='80px' justifyContent='center' alignItems='center' >
                        <Box className='line' height='3px' width="50px" bg='black' >
                        </Box>
                    </Box>
                    <MotionBox whileHover={{
                        borderColor: 'rgb(255, 255, 0)',

                    }}
                        transition={{ duration: 0.3 }}
                        // whileTap={{ scale: 0.9 }}
                        initial={false}
                        animate={{ opacity: 1, scale: 1 }} className='circle' data-type='1960' marginBottom='33px' display='flex' justifyContent='center' alignItems='center' height='120px' width="120px" borderRadius="50%" border='2px solid #8EBDDF'>1960-1970</MotionBox>
                    <MotionBox fontFamily='"Quicksand", sans-serif;' textAlign='center' className=' ejeIinfoView' position='absolute' width='60%' marginTop='50vh'>Haz clic en cada etapa y viaja por el tiempo para conocer más sobre nuestra historia.</MotionBox>
                </Box></Box>
            <Box display='flex' flexDirection='column' justifyContent='space-around' height='100vh' id='section12'>
                <Box display='flex' flexDirection='column' alignItems='center' gap='5'>
                    <Heading zIndex='4'>Fiestas y tradiciones</Heading>
                    <Text zIndex='4' width='800px'>La Aldea de San Nicolás es conocida por sus vibrantes fiestas y tradiciones que mantienen viva la cultura local:
                        Fiestas de San Nicolás de Tolentino: Celebradas en septiembre, son las fiestas patronales más importantes del municipio. Incluyen procesiones, romerías, verbenas, y actividades culturales que atraen a visitantes de toda la isla.
                        <br></br>Los tres dias mas importantes son el 9, 10 y 11 de Septiembre
                    </Text></Box>
                <Box display='flex' justifyContent='space-evenly' alignItems='center' gap='5' zIndex='4'>
                    <Box onClick={() => { onOpen(); setModalInfo(fiestasInfo.laRama) }} className='circleParty' display='flex' justifyContent='center' flexDirection='column' alignItems='center' bg='white' zIndex='4'>
                        <div  style={{fontSize:'30px'}}  ref={titleRef1} className='titleFiesta'>La Rama</div>
                        <Text bg='transparent' fontFamily='EB Garamond, serif' color='white' zIndex='4' fontSize='9xl' position='absolute' textShadow='-2px -2px 0 black,4px -2px 0 black,-2px 4px 0 black,4px 4px 0 black;'>9</Text>
                        <Image className='imgFiestas' width='100%' height='100%' src='..\src\assets\circularPlayaPuerto\1bc75dd9-7f79-4910-a31f-3c9f1ffb6745_16-9-aspect-ratio_default_0.jpg'></Image>
                    </Box>
                    <Box className='circleParty' onClick={() => { onOpen(); setModalInfo(fiestasInfo.laRomeria) }} bg='white' display='flex' flexDirection='column' justifyContent='center' alignItems='center' zIndex='4'>
                        <div  style={{fontSize:'30px'}}  ref={titleRef2} className='titleFiesta'>La Romeria</div>
                        <Text bg='transparent' fontFamily='EB Garamond, serif' color='white' zIndex='4' fontSize='9xl' position='absolute' textShadow='-2px -2px 0 black,4px -2px 0 black,-2px 4px 0 black,4px 4px 0 black;  ' >10</Text>
                        <Image className='imgFiestas' width='100%' height='100%' src='..\src\assets\circularPlayaPuerto\Romeria-La-Aldea-SN.jpg'></Image>
                    </Box>
                    <Box className='circleCharco' onClick={() => { onOpen(); setModalInfo(fiestasInfo.elCharco) }} bg='white' display='flex' flexDirection='column' justifyContent='center' alignItems='center' zIndex='1'>
                        <div style={{fontSize:'30px'}} ref={titleRef3} className='titleFiesta'>El Charco</div>
                        <Text bg='transparent' fontFamily='EB Garamond, serif' color='white' zIndex='4' fontSize='9xl' position='absolute' textShadow='-2px -2px 0 black,4px -2px 0 black,-2px 4px 0 black,4px 4px 0 black;'>11</Text>
                        <Image width='100%' height='100%' borderRadius='50%' src='..\src\assets\circularPlayaPuerto\fiestas charco-k25B-U1701117236276O0E-1248x770@Canarias7 (1).webp'></Image>
                    </Box>
                </Box>
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} size={'xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader fontSize='4xl'>{modalInfo.titulo}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>{modalInfo.info}</Text>
                        <Image marginTop='20px' borderRadius='20px' src={modalInfo.src}></Image>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal></Box>
    )
}
export default Cultura
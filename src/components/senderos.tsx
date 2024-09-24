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
import imagenesRutas from '../images'
import cardInfo from '../infoWeb/cardsInfo'
import backgroundImage from "../assets/circularPlayaPuerto/senderismo-reserva-inagua-grid.avif";
const Senderos: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box className='parallax' height='100%' display='flex' justifyContent='center'>
                <Box display='flex' justifyContent='center' height='50vh' marginTop='0px'>
                <Text width={{ base: '100%', sm: '100%', md: '100%', lg: '60%' }} fontFamily='Oswald' fontWeight='200' fontSize={{ base: '2xl', sm: '4xl' }} padding='10px' marginTop='40px'>
                    Explora los hermosos senderos de la aldea de San Nicolás, donde la naturaleza te invita a disfrutar de paisajes impresionantes y tranquilidad. Perfecto para paseos, senderismo y descubrir la belleza local.
                </Text>
                    </Box></Box>
            <Flex gap="4" marginLeft='20px' maxW="90vw" width='100vw' flexWrap="wrap" justifyContent="center">
                {Object.entries(cardInfo).map((value) => {
                    return (
                        <Card key={value[1].title} padding='10px' maxW='sm' height="fit-content" minW="80vw" minH="600px">
                            <CardBody>
                                <Center>
                                    <Image
                                        src={value[1].src}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        height="auto"
                                        minHeight="20px"
                                        maxH="150px"
                                    /></Center>
                                <Stack mt='6' spacing='3'>
                                    <Box className='caja' display="flex" justifyContent="start" alignItems="center" minH="40px" maxH="40px">
                                        <Heading fontFamily='Oswald' size='md'>{value[1].title}</Heading>
                                    </Box>
                                    <Box maxH="140px" minH="100px" display="flex" alignItems="start" overflow="hidden" textOverflow='ellipsis'>
                                        <Text fontFamily='"Quicksand", sans-serif;'>
                                            {value[1].info}
                                        </Text></Box>
                                        <Divider />
                                    <Text fontFamily='Oswald' fontWeight='200' fontSize={'2xl'} color='blue.600'>
                                        <span style={{ fontWeight: "400", color: 'black' }}>Dificultad:</span><Badge ml='1' fontSize='0.8em' colorScheme={value[1].dificultad === "Alta" ? "red" : value[1].dificultad === 'Baja' ? "green" : "yellow"}>
                                            {value[1].dificultad}
                                        </Badge>
                                        <br></br>
                                        <span style={{ fontWeight: "400", color: 'black' }}>Tiempo:</span> {value[1].tiempo} Horas<br></br>
                                        <span style={{ fontWeight: "400", color: 'black' }}>Recorrido:</span>{value[1].recorrido} Kilometros<br></br>
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    )
                })}</Flex>
        </>
    )
}
export default Senderos
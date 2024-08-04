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
            <Box className='parallax' display='flex' justifyContent='center' backgroundImage={`url(${backgroundImage})`} >
                <Box display='flex' justifyContent='center' height='50vh' marginTop='0px'>
                    <Center margin="20px 0 20px 0" color='white' fontSize='4xl' fontWeight='bold' zIndex='1' position='relative' textShadow='-1px -1px 0 #000,1px -1px 0 #000, -1px 1px 0 #000,1px 1px 0 #000;'>¡Ven y déjate sorprender por la magia de cada ruta!</Center></Box></Box>
            <Flex gap="4" maxW="100vw" flexWrap="wrap" justifyContent="center">
                {Object.entries(cardInfo).map((value) => {
                    return (
                        <Card key={value[1].title} maxW='sm' height="fit-content" minW="sm" minH="600px">
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
                                    <Box maxH="140px" minH="150px" display="flex" alignItems="start" overflow="hidden" textOverflow='ellipsis'>
                                        <Text fontFamily='"Quicksand", sans-serif;'>
                                            {value[1].info}
                                        </Text></Box>
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
                            <Divider />
                            <CardFooter>
                                <Button onClick={onOpen} variant='solid' colorScheme='blue'>
                                    Ver Ruta
                                </Button>
                                <Modal onClose={onClose} size={'full'} isOpen={isOpen} isCentered>
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Circular Playa de El Puerto</ModalHeader>
                                        <ModalCloseButton marginTop={'10px'} />
                                        <ModalBody>
                                            <Box>hahah</Box>
                                            <Box>hahah</Box>
                                            <Image width={{ base: '100%', xl: '60%' }}
                                                src={imagenesRutas.circularPuerto[0]}
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                            />
                                        </ModalBody>
                                        <ModalFooter>
                                            <Button onClick={onClose}>Close</Button>
                                        </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </CardFooter>
                        </Card>
                    )
                })}</Flex>
        </>
    )
}
export default Senderos
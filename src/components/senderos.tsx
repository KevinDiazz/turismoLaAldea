import {
    Image, Stack, ButtonGroup, Button, Divider, Heading, Card, CardHeader, CardBody, CardFooter, Box, Text, Center, Square, Circle, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Badge
} from '@chakra-ui/react'
import imagenesRutas from '../images'
import cardInfo from '../cardsInfo'
const Senderos: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Box width={{ base: '60%', sm: '100%', md: '100%', lg: '100%' }}>
                <Center><Text width={'60%'} fontSize={'l'}>Explora la belleza natural de la Aldea de San Nicolás
                    a través de sus encantadores senderos. Este paraíso oculto ofrece
                    una variedad de rutas para caminantes de todos los niveles, desde
                    paseos tranquilos hasta desafiantes aventuras. Cada sendero te lleva a través de paisajes
                    impresionantes, con vistas panorámicas, flora y fauna autóctona, y
                    rincones mágicos que esperan ser descubiertos.<br></br>
                    <Center>¡Ven y déjate sorprender por la magia de cada ruta!</Center></Text></Center></Box>
            {Object.entries(cardInfo).map((value)=>{
return(
    <Card key={value[1].title}maxW='sm'>
                <CardBody>
                    <Image
                        src={value[1].src}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                        <Heading size='md'>{value[1].title}</Heading>
                        <Text>
                        {value[1].info}
                        </Text>
                        <Text color='blue.600' fontSize='xl'>
                            Dificultad:<Badge ml='1' fontSize='0.8em' colorScheme='green'>
                            {value[1].dificultad}
                            </Badge>
                            <br></br>
                            Tiempo: {value[1].tiempo}<br></br>
                            Recorrido:{value[1].recorrido} Kilometros<br></br>
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <Button onClick={onOpen} variant='solid' colorScheme='blue'>
                        Buy now
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
            )})}
        </>
    )
}
export default Senderos
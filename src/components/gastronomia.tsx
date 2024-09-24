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
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import comidasTipicas from '../infoWeb/comidaVar'
import { ImgHTMLAttributes, useState } from 'react'
const Gastronomia: React.FC = () => {
    const nextFood = () => {
        setIndexComida(prev => prev >= 4 ? 1 : prev + 1)
        const nombre = document.getElementsByClassName('nombreComida') as HTMLCollectionOf<HTMLHeadingElement>
        console.log(nombre)
        const infoComida = document.getElementsByClassName('informationComida') as HTMLCollectionOf<HTMLHeadingElement>
        const imgReceta = document.getElementsByClassName('imgRecetas') as HTMLCollectionOf<HTMLImageElement>
        nombre[0].innerText = comidasTipicas[indexComida as keyof typeof comidasTipicas].nombre
        infoComida[0].innerText = comidasTipicas[indexComida as keyof typeof comidasTipicas].info
        imgReceta[0].src = comidasTipicas[indexComida as keyof typeof comidasTipicas].src
    }
    const [indexComida, setIndexComida] = useState(2)
    return (
        <>
            <Box display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
                <Box width={{ base: '100%', sm: '60%' }} padding='10px '>
                    <Heading fontFamily='Mate SC'>Gastronomía</Heading>
                    <Text fontFamily='Quicksand'>La gastronomía que se ofrece en La Aldea de San Nicolás es muy rica y variada, gracias a los maravillosos productos de la tierra: frutas tropicales, verduras, los tomates, el pescado fresco, las carnes…

                        <strong>En nuestro municipio se puede disfrutar de comida casera</strong>, a base de ensalada, potajes, carne de cabra, carne de cochino, papas del país o arrugadas, pescados frescos como samas, viejas, morena, cherne, atún, pulpos, calamares. <strong>También destacan muchos platos típicos, como el sancocho, pescado en mojo hervido o en escabeche, salpicón de pescado o ropavieja.</strong><br></br>

                        La mayoría de estos platos se pueden combinar con mojo, verde o rojo, queso o con gofio escaldao. No podemos olvidar el pan y el bizcocho de nuestras panaderías locales, así como los dulces y bollos de nuestras dulcerías.</Text></Box>
                <Card maxW='100%' marginTop='30px' display='flex' flexDirection='row' justifyContent='center'>
                    <CardBody display='flex' flexDirection={{ base: 'column' }} justifyContent='center' gap='10' width='50%'>
                        <Stack mt='6' spacing='3' width='100%'>
                            <Heading fontFamily='Mate SC' className='nombreComida' size='md'>{comidasTipicas[1].nombre}</Heading>
                            <Text height={{ base: '100%' }} fontFamily='Lora' className='informationComida'>{comidasTipicas[1].info}
                            </Text>
                        </Stack>
                        <Image
                            src={comidasTipicas[1].src}
                            borderRadius='lg'
                            className='imgRecetas'
                            minHeight={{ base: 'auto' }}
                            height={{ base: 'auto' }}
                            maxHeight={{ base: 'auto' }}
                            width={{ base: '80%', sm: '30%' }}
                        />
                        <CardFooter>
                            <ButtonGroup width='100%' display='flex' justifyContent='end'>
                                <Button onClick={nextFood} variant='solid' colorScheme='blue'>
                                    Siguiente Receta
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </CardBody>
                </Card>
            </Box>
        </>

    )
}
export default Gastronomia;
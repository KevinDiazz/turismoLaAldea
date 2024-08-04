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
const Gastronomia: React.FC = () => {
    return (
        <>
            <Heading>Gastronomía</Heading>
            <Text>La gastronomía que se ofrece en La Aldea de San Nicolás es muy rica y variada, gracias a los maravillosos productos de la tierra: frutas tropicales, verduras, los tomates, el pescado fresco, las carnes…

                En nuestro municipio se puede disfrutar de comida casera, a base de ensalada, potajes, carne de cabra, carne de cochino, papas del país o arrugadas, pescados frescos como samas, viejas, morena, cherne, atún, pulpos, calamares. También destacan muchos platos típicos, como el sancocho, pescado en mojo hervido o en escabeche, salpicón de pescado o ropavieja.

                La mayoría de estos platos se pueden combinar con mojo, verde o rojo, queso o con gofio escaldao. No podemos olvidar el pan y el bizcocho de nuestras panaderías locales, así como los dulces y bollos de nuestras dulcerías.</Text>
            <Box display='flex' justifyContent='center'>
                <Card maxW='lg' marginTop='30px'>
                    <CardBody>
                        <Image
                            src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                            alt='Green double couch with wooden legs'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>Living room Sofa</Heading>
                            <Text>
                                This sofa is perfect for modern tropical spaces, baroque inspired
                                spaces, earthy toned spaces and for people who love a chic design with a
                                sprinkle of vintage design.
                            </Text>
                            <Text color='blue.600' fontSize='2xl'>
                                $450
                            </Text>
                        </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                        <ButtonGroup spacing='2'>
                            <Button variant='solid' colorScheme='blue'>
                                Buy now
                            </Button>
                            <Button variant='ghost' colorScheme='blue'>
                                Add to cart
                            </Button>
                        </ButtonGroup>
                    </CardFooter>
                </Card>
            </Box>
        </>

    )
}
export default Gastronomia;
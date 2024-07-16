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

const Playas: React.FC = () => {
    return (
        <>
            <Box width={{ base: '60%', sm: '100%', md: '100%', lg: '100%' }} display="flex" justifyContent="center">
                <Text width={{ base: '60%', sm: '100%', md: '100%', lg: '60%' }}>Sumérgete en el paraíso de La Aldea: Playa de La Aldea, Guguy, Tasartico y Tasarte te esperan con el mejor clima del archipiélago canario y puestas de sol inolvidables. ¡Descubre nuestras playas y enamórate del atardecer!</Text>
            </Box>
            <Box boxSize="xxl">
            <Heading>Playa de la aldea</Heading>
            <Flex gap="10">
            <Image width="40%" height="auto" src='..\src\assets\circularPlayaPuerto\Playa-de-La-Aldea-mayo-2017-12.jpg'></Image>
            <Box width="60%">
            <Text  width={{ base: '60%', sm: '100%', md: '100%', lg: '60%',xl:"80%" }}>Descubre la encantadora Playa de La Aldea, una joya de callaos y aguas cristalinas dividida
                en dos zonas: Las Barquillas, con solárium y duchas, y La Caletilla, una acogedora playa de arena
                y piedras accesible a través de un pintoresco túnel en la roca. Desde aquí, podrás admirar el pequeño puerto
                "El Muelle", un lugar especial para los nativos.
                Al norte, la playa del Puerto ofrece una tranquila cala de arena negra,
                ideal para familias y visitantes que buscan serenidad.
                Explora sitios emblemáticos como El Roque, el Humedal de La Marciega, El Charco, el Parque Rubén Díaz y
                la antigua destilería de ron. Disfruta de la gastronomía local en los numerosos bares que sirven pescado fresco
                y comida casera.
                Además, visita el Centro de Interpretación de Los Caserones y el Centro de Visitantes para una experiencia completa
                en Playa de La Aldea. ¡Ven y vive la magia de este paraíso costero!</Text></Box></Flex></Box></>
    )
}
export default Playas;
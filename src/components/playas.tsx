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
import playasInfo from '../infoWeb/playasInfo';
const Playas: React.FC = () => {
    return (
        <>
            <Box width={{ base: '60%', sm: '100%', md: '100%', lg: '100%' }} display="flex" justifyContent="center">
                <Text width={{ base: '60%', sm: '100%', md: '100%', lg: '60%' }}>Sumérgete en el paraíso de La Aldea: Playa de La Aldea, Guguy, Tasartico y Tasarte te esperan con el mejor clima del archipiélago canario y puestas de sol inolvidables. ¡Descubre nuestras playas y enamórate del atardecer!</Text>
            </Box>
            {Object.entries(playasInfo).map((value) => {
            return(
                <Box boxSize="xxl">
            <Heading>{value[1].title}</Heading>
            <Flex gap="10" alignItems="center">
            <Image width="40%" height="auto" src={value[1].src}></Image>
            <Box width="60%">
            <Text  width={{ base: '60%', sm: '100%', md: '100%', lg: '60%',xl:"80%" }} dangerouslySetInnerHTML={{__html:value[1].info}}></Text></Box></Flex></Box>
            )}
            )}</>
    )
}
export default Playas;
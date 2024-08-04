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

const Footer: React.FC = () => {
    return (
        <footer>
            <Box backgroundColor='orange' display='flex' >
<Box width='50%'>
                <Text margin='20px'>La Aldea de San Nicolas</Text></Box>
                <Center margin='20px'>
                    <Divider  orientation='vertical' />
                </Center>
                <Box width='50%' margin='20px 0 20px 0' display='flex' gap='30px' justifyContent='space-evenly'>
                    <ul style={{listStyle:'none'}}>
                        <li>Senderos</li>
                        <li>Cultura</li>
                        <li>Playa</li>
                        <li>Gastronomía</li>
                    </ul>
                    <ul style={{listStyle:'none'}}>
                        <li>Facebook</li>
                        <li>X</li>
                        <li>Instragram</li>
                    </ul></Box>
            </Box>
        </footer>
    )
}
export default Footer;
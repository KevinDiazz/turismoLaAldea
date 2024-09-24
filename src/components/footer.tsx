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
import { Outlet, Link } from "react-router-dom";


const Footer: React.FC = () => {
    return (
        <footer>
            <Box backgroundColor='#cddfb7' display='flex' marginTop='40px' >
                <Box width='50%'>
                    <Text margin='20px' fontFamily='Oswald' fontSize={{ base: 'sm' }}>La Aldea de San Nicolas</Text></Box>
                <Center margin='20px'>
                    <Divider orientation='vertical' />
                </Center>
                <Box width='100%' margin='20px 0 20px 0' display='flex' gap='20px' justifyContent='space-evenly' fontFamily='Oswald' fontSize={{ base: 'sm' }}>
                    <ul style={{ listStyle: 'none', padding: '10px' }}>
                        <li><Link to={'/cultura'}> Cultura</Link></li>
                        <li><Link to={'/senderos'}>Senderismo</Link></li>
                        <li><Link to={'/gastronomia'}>Gastronomia</Link></li>
                        <li><Link to={'/playas'}>Playas</Link></li>

                    </ul>
                    <ul style={{ listStyle: 'none', padding: '10px' }}>
                        <li>Facebook</li>
                        <li>X</li>
                        <li>Instragram</li>
                    </ul></Box>
            </Box>
        </footer>
    )
}
export default Footer;
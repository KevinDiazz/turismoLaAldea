import { Box } from '@chakra-ui/react'
import { Button, Image } from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton, useDisclosure
} from '@chakra-ui/react'
import { useStyleConfig } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
// import { Center, Square, Circle } from '@chakra-ui/react'
import React, { MouseEventHandler } from 'react';
import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import Gastronomia from './gastronomia';
import { Element, scroller } from 'react-scroll';
import { Outlet, Link } from "react-router-dom";
import SenderosPage from '../pages/SenderosPage';
const Header: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const scrollToSection = useCallback((nameDiv: string) => {
        scroller.scrollTo(nameDiv, {
            duration: 500,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    }, []);
    const handleClickEvent = useCallback(
        (name: string) => (event: React.MouseEvent<HTMLButtonElement>): void => {
            event.preventDefault(); // Si es necesario, puedes prevenir el comportamiento por defecto del botón

            switch (name) {
                case 'playa':
                    scrollToSection('section0');
                    break;
                case 'cultura':
                    scrollToSection('culturaTab');
                    break;
                default:
                    console.log('Sección desconocida');
            }
        },
        [] // Puedes agregar dependencias aquí si cambian los valores dentro de la función
    );

    return (
        <>
            <Box bg='#cddfb7' display='flex' alignItems='center' width={{ base: '100%', sm: '60%', md: '100%', lg: '100%' }} w='100%' height='90px' p={4} color='black'>
                <Button display='none' width='90px' colorScheme='teal' bg='white' onClick={onOpen}>
                    <Image width='880%' height='100%' src='..\src\assets\circularPlayaPuerto\barra-de-menus.png'></Image>
                </Button>
                <Drawer
                    isOpen={isOpen}
                    placement='left'
                    onClose={onClose}
                >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>
                            <ul style={{ listStyle: 'none', fontFamily: 'Oswald' }}>
                                <li>Inicio</li>
                                <li>Cultura</li>
                                <li>Senderismo</li>
                                <li>Gastronomia</li>
                                <li>Playas</li>
                            </ul>
                        </DrawerHeader>

                        <DrawerBody>
                        </DrawerBody>

                        <DrawerFooter>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
                <Text marginLeft='10px' fontWeight='300' fontFamily='Oswald' fontSize={'3xl'}><Link to={'/'}>La Aldea de San Nicolás</Link></Text>
                <Box width='60%' display='flex' justifyContent='center' alignItems='center'>
                    <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', justifyContent: 'space-evenly', width: '80%', fontFamily: 'Oswald', fontSize: '13pt' }}>
                        <li><Link to={'/cultura'}> Cultura</Link></li>
                        <li><Link to={'/senderos'}>Senderismo</Link></li>
                        <li><Link to={'/gastronomia'}>Gastronomia</Link></li>
                        <li><Link to={'/playas'}>Playas</Link></li>
                    </ul></Box>
            </Box>
        </>
    )
}
export default Header;
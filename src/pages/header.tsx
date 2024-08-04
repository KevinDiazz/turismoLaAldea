import { Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useStyleConfig } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
// import { Center, Square, Circle } from '@chakra-ui/react'
import Senderos from '../components/senderos';
import Playas from '../components/playas';
import Cultura from '../components/cultura';
import React, { MouseEventHandler } from 'react';
import { useState, useEffect, useCallback, useMemo } from 'react';
import Gastronomia from '../components/gastronomia';
import { Element, scroller } from 'react-scroll';
const Header: React.FC = () => {
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
                    scrollToSection('playaTab');
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


    const tabStyles = useStyleConfig("Tabs");
    return (
        <>
            <Box width={{ base: '100%', sm: '60%', md: '100%', lg: '100%' }} w='100%' p={4} color='black'>
                <Text fontWeight='300' fontFamily='"Oswald", sans-serif;' fontSize={'5xl'}>La Aldea de San Nicolas</Text>
            </Box>
            <Tabs isFitted sx={tabStyles}>
                <TabList mb='1em'>
                    <Tab fontWeight='300' fontFamily='"Oswald", sans-serif;' fontSize={'2xl'}>Senderismo</Tab>
                    <Tab fontWeight='300' fontFamily='"Oswald", sans-serif;' fontSize={'2xl'} onClick={handleClickEvent('playa')} className='playaTab'>Playa</Tab>
                    <Tab fontWeight='300' fontFamily='"Oswald", sans-serif;' fontSize={'2xl'} onClick={handleClickEvent('cultura')} className='culturaTab'>Cultura</Tab>
                    <Tab fontWeight='300' fontFamily='"Oswald", sans-serif;' fontSize={'2xl'}>Gastronomía</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Senderos></Senderos>
                    </TabPanel>
                    <TabPanel>
                        <Playas ></Playas>
                    </TabPanel>
                    <TabPanel>
                        <Cultura></Cultura>
                    </TabPanel>
                    <TabPanel>
                        <Gastronomia></Gastronomia>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
export default Header;
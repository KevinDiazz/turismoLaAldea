import { Box } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { useStyleConfig } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
// import { Center, Square, Circle } from '@chakra-ui/react'
import Senderos from '../components/senderos';
import React from 'react';
const Header: React.FC = () => {
    const tabStyles = useStyleConfig("Tabs");
    return (
        <>
            <Box width={{ base: '100%', sm: '60%', md: '100%', lg: '100%' }} w='100%' p={4} color='black'>
                <Text fontSize={'4xl'}>La Aldea de San Nicolas</Text>
            </Box>
            <Tabs isFitted sx={tabStyles}>
                <TabList mb='1em'>
                    <Tab>Senderismo</Tab>
                    <Tab>Playa</Tab>
                    <Tab>Museos</Tab>
                    <Tab>Restauración</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                   <Senderos></Senderos>
                    </TabPanel>
                    <TabPanel>
                        <p>2</p>
                    </TabPanel>
                    <TabPanel>
                        <p>3</p>
                    </TabPanel>
                    <TabPanel>
                        <p>4</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}
export default Header;
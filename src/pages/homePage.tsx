import { Box,Image,Text } from '@chakra-ui/react'


const HomePage: React.FC = () => {
    return (
        <Box height='100vh' display='flex' alignItems='center' justifyContent='center'>
            <Image src='..\src\assets\circularPlayaPuerto\LOGO-TURÍSTICO-LA-ALDEA-600x430.jpg'></Image>
            <Text width='50%' fontSize='2xl'>
            ¡Descubre La Aldea de San Nicolás!<br></br> Tradición, naturaleza y sabor auténtico te esperan: Playas, senderos, fiestas y gastronomía canaria en su máximo esplendor.<br></br> ¡Déjate sorprender por la magia de cada rincón!</Text>
        </Box>
    )
}
export default HomePage;
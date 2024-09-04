import { Box, Image, Text } from '@chakra-ui/react'
import Header from '../components/header';
import Footer from '../components/footer';

const HomePage: React.FC = () => {
    return (
        <>
            <Header></Header>
            <Box height='100vh' display='flex' alignItems='center' justifyContent='center' >
                <Image src='..\src\assets\circularPlayaPuerto\LOGO-TURÍSTICO-LA-ALDEA-600x430.jpg'></Image>
                <Text fontFamily="Caudex" width='50%' fontSize='2xl'>
                    ¡Descubre <span style={{ fontWeight: '600' }}>La Aldea de San Nicolás</span>!<br></br> Tradición, naturaleza y sabor auténtico te esperan:<span style={{ fontWeight: '600' }}>Playas, senderos, cultura y gastronomía canaria</span>  en su máximo esplendor.<br></br>
                    <Text marginTop='30px'><span style={{ marginTop: '90px' }}>¡Déjate sorprender por la magia de cada rincón!</span></Text></Text>
            </Box>
            <Footer></Footer></>
    )
}
export default HomePage;
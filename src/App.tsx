import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import '../src/pages/header'
import Header from '../src/pages/header'
import theme from './stylesChakra/stylesChakra'
import Footer from './pages/footer'
import HomePage from './pages/homePage'
function App() {
  return (
    <ChakraProvider theme={theme}>
<Header></Header>
<HomePage></HomePage>
<Footer></Footer>
    </ChakraProvider>
  )
}

export default App

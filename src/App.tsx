import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import '../src/pages/header'
import Header from '../src/pages/header'
import theme from './stylesChakra/stylesChakra'
function App() {
  return (
    <ChakraProvider theme={theme}>
<Header></Header>
    </ChakraProvider>
  )
}

export default App

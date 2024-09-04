import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import './components/header.js'
import Header from './components/header.js'
import theme from './stylesChakra/stylesChakra'
import HomePage from './pages/homePage'
import SenderosPage from './pages/SenderosPage.js'
import GastronomiaPage from './pages/gastronomia.tsx'
import CulturaPage from './pages/culturaPage.tsx'
import PlayasPage from './pages/playasPages.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./pages/errorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage />,
  }, {
    path: "/cultura",
    element: <CulturaPage></CulturaPage>,
    errorElement: <ErrorPage />,
  }, {
    path: "/senderos",
    element: <SenderosPage></SenderosPage>,
    errorElement: <ErrorPage />,
  }, {
    path: "/gastronomia",
    element: <GastronomiaPage></GastronomiaPage>,
    errorElement: <ErrorPage />,
  }, {
    path: "/playas",
    element: <PlayasPage></PlayasPage>,
    errorElement: <ErrorPage />,
  }
]);
function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  )
}

export default App

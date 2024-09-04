import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import Gastronomia from "../components/gastronomia";
const GastronomiaPage:React.FC = () => {
    return (
        <>
            <Header></Header>
            <Gastronomia></Gastronomia>
            <Footer></Footer>
        </>
    )
}
export default GastronomiaPage;
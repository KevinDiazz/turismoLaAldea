import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import Senderos from "../components/senderos";
const SenderosPage:React.FC = () =>{
    return(
        <>
        <Header></Header>
        <Senderos></Senderos>
        <Footer></Footer>
        </>
    )
}
export default SenderosPage
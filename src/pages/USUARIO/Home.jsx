import React, { useContext, useEffect } from 'react';  
import { useParams } from "react-router-dom";
import { DNIContext } from '../../components/USUARIO/DNIProvider';




import Cards from '../../components/USUARIO/Cards';
import Header from '../../components/USUARIO/Header';
import Footer from '../../components/USUARIO/Footer';
import Slider from '../../components/USUARIO/slider/Slider';

import './styles/Home.css';

const Home = () => {

    const deleteImpagos = async() => {
        const resultado = await fetch(`http://localhost:4000/deleteimpagos`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });
    }

    useEffect(() => {
        deleteImpagos()
    },[])

    const params = useParams();

    const DNIUsuario = useContext(DNIContext);

    DNIUsuario.setDni(params.id)


    return ( 
        <>
        <Header/>
        <Slider />
        <Cards/>
        <Footer />
        </>
    );
}
 
export default Home;
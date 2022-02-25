import React from 'react';
import HeaderFuncional from '../../components/USUARIO/HeaderFuncional';
import NavSelectOpts from '../../components/USUARIO/NavSelectOpts';
import Footer from '../../components/USUARIO/Footer';
import GridHistoriaClinica from '../../components/USUARIO/GridHistoriaClínica';
import {useParams} from "react-router-dom";

import './styles/HistoriaClinica.css';


const HistoriaClinica = () => {


    const params = useParams();
    return (  
        <>
            <HeaderFuncional/>
            <br />
            <NavSelectOpts />
            <GridHistoriaClinica id={params.id}  />

            <Footer />
        </>
    );
}
 
export default HistoriaClinica;
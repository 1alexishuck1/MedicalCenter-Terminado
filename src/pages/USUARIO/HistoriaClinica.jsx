import React, { useState, useEffect } from 'react';
import HeaderFuncional from '../../components/USUARIO/HeaderFuncional';
import NavSelectOpts from '../../components/USUARIO/NavSelectOpts';
import Footer from '../../components/USUARIO/Footer';
import GridHistoriaClinica from '../../components/USUARIO/GridHistoriaClínica';
import {useParams} from "react-router-dom";

import './styles/HistoriaClinica.css';


const HistoriaClinica = () => {
    const params = useParams();


    const [historiaClinica, setHistoriaClinica] = useState();

    const peticionHistoriaClinicaIndividual = async () =>{
        const res = await fetch(`http://localhost:4000/historiaclinica/${params.id}`);
        const data = await res.json();
        if (data.message === 'Historia clinica no encontrada'){
        } else{
            setHistoriaClinica(data);
        }
        console.log(data)
    }

    console.log(historiaClinica)

    useEffect(() => {
        peticionHistoriaClinicaIndividual()
    },[])


    return (  
        <>
            <HeaderFuncional/>
            <br />
            <NavSelectOpts />
            {historiaClinica &&  <GridHistoriaClinica id={params.id}  /> }
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </>
    );
}
 
export default HistoriaClinica;
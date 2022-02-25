import React, { useState, useEffect } from "react";
import HistoriaClinicaInfo from "../../components/USUARIO/HistoriaClinicaInfo";
import HistoriaClinicaObservaciones from "../../components/USUARIO/HistoriaClinicaObservaciones";
import HeaderFuncional from "../../components/USUARIO/HeaderFuncional";
import './styles/HistoriaClinicaDetalle.css'
import Footer from "../../components/USUARIO/Footer";
import {useParams} from "react-router-dom";

export default function HistoriaClinicaDetalle() {


    const params = useParams();
    console.log(params.id);

    const [historiaClinicaIndividualDetalle, setHistoriaClinicaIndividualDetalle] = useState()

    const peticionHistoriaClinicaDetalleIndividual = async() =>{
        const res = await fetch(`http://localhost:4000/historiaclinicadetalle/${params.id}`);
        const data = await res.json();
        console.log(data)
        setHistoriaClinicaIndividualDetalle(data);
    }

    console.log(historiaClinicaIndividualDetalle)

    useEffect(() => {
        peticionHistoriaClinicaDetalleIndividual()
    },[])

    return(
        <>
            <HeaderFuncional/>
            <br /><br /><br />
            {historiaClinicaIndividualDetalle && 
                <div className="container-principal">
                    <HistoriaClinicaInfo  historiaClinicaIndividualDetalle={historiaClinicaIndividualDetalle}/>
                    <HistoriaClinicaObservaciones historiaClinicaIndividualDetalle={historiaClinicaIndividualDetalle}/>
                </div>
            }
            <br /><br /><br />
            <Footer />
        </>
        
    )
    
}
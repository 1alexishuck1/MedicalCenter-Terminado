import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CardProfesionals from "../../components/USUARIO/CardProfesional";
import Footer from "../../components/USUARIO/Footer";
import HeaderFuncional from "../../components/USUARIO/HeaderFuncional";
import NavVolverProf from "../../components/USUARIO/NavVolverProf";
import './styles/Profesionals.css';
import { DNIContext } from '../../components/USUARIO/DNIProvider';


export default function Profesionals() {

    const params = useParams();
    const DNIUsuario = useContext(DNIContext);
    DNIUsuario.setDni(params.id)

    return(
        <>
            <HeaderFuncional />
            <br />
            <NavVolverProf />
            <div className="container">
                <CardProfesionals/>
            </div>
            <br /> <br />
            <Footer />
        </>
    )
    
    
}
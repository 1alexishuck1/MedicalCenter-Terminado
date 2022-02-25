import React, { useContext } from "react";
import CardsContact from "../../components/USUARIO/CardsContact";
import FormContact from '../../components/USUARIO/FormContact';
import HeaderFuncional from '../../components/USUARIO/HeaderFuncional';
import Footer from '../../components/USUARIO/Footer';
import './styles/Contact.css';
import { DNIContext } from '../../components/USUARIO/DNIProvider';
import { Link, useParams } from "react-router-dom";

export default function Contact() {

    const params = useParams();
    const DNIUsuario = useContext(DNIContext);
    DNIUsuario.setDni(params.id)

    return(
        <div>
            <HeaderFuncional />
            <br />
            <div className="container-main-selectMT">
                <div className="container-button">
                    <Link to={`/home/${DNIUsuario.dni}`}>
                        <button><i class="fas fa-chevron-left"></i> Contacto</button>
                    </Link>
                </div>
            </div>     
            <FormContact/>
            <CardsContact/>
            <Footer />
        </div>
    )
}
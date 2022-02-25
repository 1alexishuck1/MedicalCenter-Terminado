import React, { useContext } from 'react';
import './styles/Cards.css';
import { Link } from "react-router-dom";
import { DNIContext } from './DNIProvider';

const Cards = () => {
    
    const DNIUsuario = useContext(DNIContext);

    return ( 
        <div className="contenedor-cards">
                
            <div className="cards">
                <a href={`/profesionales/${DNIUsuario.dni}`}>
                    <h3>Profesionales</h3>
                </a>
            </div>
        
            <div className="cards">
                <Link to={`/getnews/${DNIUsuario.dni}`}>
                    <h3>Noticias e Info</h3>
                </Link>
            </div>

            <div className="cards">
                <a href={`/contacto/${DNIUsuario.dni}`}>
                    <h3>Contacto</h3>
                </a>
            </div>

            <div className="cards">
                <Link to={`/historiaclinica/${DNIUsuario.dni}`}>
                    <h3>Historia Clínica</h3>
                </Link>
            </div>

            <br/>
            <br/>
            <br/>
        </div>
    );
}
 
export default Cards;
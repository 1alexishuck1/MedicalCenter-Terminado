import React, { useContext } from 'react';
import './styles/NavHistClin.css';
import { DNIContext } from '../../components/USUARIO/DNIProvider';
import { Link } from "react-router-dom";

const NavHistClin = () => {
    
    const DNIUsuario = useContext(DNIContext);

    return ( 
        <div className="container-nav">
            <div className="button-atras">
                <Link to={`/homemedico/${DNIUsuario.dni}`}>
                    <button><i class="fas fa-chevron-left"></i> Historial Clínico</button>
                </Link>
            </div>
        </div>
    );
}
 
export default NavHistClin;
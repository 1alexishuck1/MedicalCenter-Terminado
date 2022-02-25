import React, { useContext } from 'react';
import './styles/NavDetallePaciente.css';

import { Link } from "react-router-dom";
import { DNIContext } from '../../components/USUARIO/DNIProvider';


const NavDetallePaciente = () => {

    const DNIUsuario = useContext(DNIContext);

    return (
        <>
            <div className="container-nav">
                <div className="button-atras">
                    <Link to={`/historialClinico/${DNIUsuario.dni}`}>
                        <button><i class="fas fa-chevron-left"></i> Detalle del paciente</button>
                    </Link>
                </div>
                
            </div>
        </>
    );
}
 
export default NavDetallePaciente;
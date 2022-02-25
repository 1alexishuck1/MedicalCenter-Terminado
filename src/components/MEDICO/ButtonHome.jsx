import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DNIContext } from '../../components/USUARIO/DNIProvider';
import './styles/ButtonHome.css';

const ButtonHome = () => {
    const DNIUsuario = useContext(DNIContext);


    return (  
        <>  
            <div className="container-btn-medico">
                <div className="btn-item-medico">
                    <Link to={`/misTurnosmedico/${DNIUsuario.dni}`}>
                        <button>Turnos</button>
                    </Link>
                    <Link to={`/historialclinico/${DNIUsuario.dni}`}>
                        <button>Historial clínico</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
 
export default ButtonHome;
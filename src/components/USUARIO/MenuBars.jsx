import React, {useContext} from 'react';
import './styles/MenuBars.css';
import { DNIContext } from './DNIProvider';


import { Link } from 'react-router-dom';

const MenuBars = () => {

    const DNIUsuario = useContext(DNIContext);

    return (  
        <div className="container-menu">
            <Link to={`/home/${DNIUsuario.dni}`}>
                <button>Inicio</button>
            </Link>
            <Link to={`/solicitarturnos/${DNIUsuario.dni}`}>
                <button>Solicitar turno</button>
            </Link>
            <Link to={`/misturnos/${DNIUsuario.dni}`}>
                <button>Mis turnos</button>
            </Link>
        </div>
    );
}
 
export default MenuBars;
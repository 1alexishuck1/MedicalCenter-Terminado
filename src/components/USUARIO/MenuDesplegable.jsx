import React, { useContext } from 'react';
import './styles/MenuDesplegable.css';
import { Link } from "react-router-dom";

import { DNIContext } from './DNIProvider';

const MenuDesplegable = () => {

    const DNIUsuario = useContext(DNIContext);

    return (
        <>
            <div className="container-menuDesplegable">
                <ul>
                    <li>
                        <Link to={`/Configuration/${DNIUsuario.dni}`}>
                            <i className="fas fa-cog"></i> Configuracion
                        </Link>
                    </li>
                    <li>
                        <Link onClick={() => DNIUsuario.setSesion(false)} to="/login">
                            <i className="fas fa-sign-out-alt"></i> Cerrar sesión
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="fondo-desplegable"></div>
        </>
    );
}
 
export default MenuDesplegable;
import React, { useContext } from 'react';
import './styles/HeaderMedico.css';
import logo from './assets/logo.png';
import { Link } from 'react-router-dom';
import { DNIContext } from '../../components/USUARIO/DNIProvider';



const HeaderMedico = () => {

    const DNIUsuario = useContext(DNIContext);

    console.log(DNIUsuario.dni)

    return (
        <>
        <div className="contenedor-headerFun">
            <div className="headerFun-logo">
                <Link to={`/homemedico/${DNIUsuario.dni}`}>
                    <img src={logo} alt="logo"/>
                </Link>
            </div>
            <div className="headerFun-salir">
                <Link to="/login">
                    <button>Salir</button>
                </Link>
            </div>
        </div>
        </>
     );
}
 
export default HeaderMedico;
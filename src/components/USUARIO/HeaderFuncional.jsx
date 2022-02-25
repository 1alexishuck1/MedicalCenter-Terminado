import React, { useState, useContext } from 'react';

import './styles/HeaderFuncional.css';
import userLogo from './assets/user.png';
import MenuDesplegable from './MenuDesplegable';
import logo from './assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import MenuBars from './MenuBars';
import { DNIContext } from './DNIProvider';


const HeaderFuncional = () => {

    let [menu, setMenu] = useState(false);
    let [bars, setBars] = useState(false);

    
    const navigate = useNavigate();
    const DNIUsuario = useContext(DNIContext);
    
    return (
        <>
        <div className="contenedor-headerFun">

            <div className="menu-bars">
                <i className="fas fa-bars" onClick={() => setBars(bars = !bars)}></i>
                {bars && <MenuBars />}
            </div>

            <div className="headerFun-logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="headerFun-links">
                <Link to={`/home/${DNIUsuario.dni}`}>
                    <a href="#">Inicio</a>
                </Link>
                <Link to={`/solicitarturnos/${DNIUsuario.dni}`}>
                    <a href="#">Solicitar turnos</a>
                </Link>
                <Link to={`/misturnos/${DNIUsuario.dni}`}>
                    <a href="#">Mis turnos</a>
                </Link>
            </div>

            <div className="headerFun-user">
                <img src={userLogo} onClick={() => setMenu(menu = !menu)} />  
            </div>
            {menu && <MenuDesplegable/>} 
        </div>
        </>
     );
}
 
export default HeaderFuncional;
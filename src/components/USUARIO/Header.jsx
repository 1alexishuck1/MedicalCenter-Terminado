import React, {useState, useContext} from 'react';
import './styles/Header.css';
import userLogo from './assets/user.png';
import MenuDesplegable from './MenuDesplegable';
import logo from './assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import MenuBars from './MenuBars';
import { DNIContext } from './DNIProvider';

const Header = () => {

    
    let [menu, setMenu] = useState(false);
    let [bars, setBars] = useState(false);
    
    const navigate = useNavigate();
    
    const DNIUsuario = useContext(DNIContext);
    
    console.log(DNIUsuario.dni);
    { !DNIUsuario.sesion && navigate("/login")}

    return (
        <>
        <div className="contenedor-header">

            <div className="menu-bars">
                <i className="fas fa-bars" onClick={() => setBars(bars = !bars)}></i>
                {bars && <MenuBars />}
            </div>


            <div className="header-logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="header-links">
                <Link to={`/home/${DNIUsuario.dni}`}>
                    Inicio
                </Link>
                <Link to={`/solicitarturnos/${DNIUsuario.dni}`}>
                    Solicitar turnos
                </Link>
                <Link to={`/misturnos/${DNIUsuario.dni}`}>
                    Mis turnos
                </Link>
            </div>

            <div className="header-user">
                <img src={userLogo} onClick={() => setMenu(menu = !menu)} />  
            </div>
            {menu && <MenuDesplegable/>} 
        </div>
        </>
     );
}
 
export default Header;
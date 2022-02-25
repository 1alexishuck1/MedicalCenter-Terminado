import React from 'react';
import {Link} from 'react-router-dom';
import logo from './assets/logo.png';
import './styles/Header.css';

const Header = () => {
    return (
        <header className="header-container-admin">
            <Link to="/">
                <div className="header-logo-admin">
                    <img src={logo} alt="logo"/>
                </div>
            </Link>

            <div className="btn-header-admin">
                <a href="/login" className="btn-a-header-admin">Salir</a>
            </div>
            

        </header>
    );
}

export default Header;
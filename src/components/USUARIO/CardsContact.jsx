import React from 'react';


import telefono from './assets/telefono.png';
import ubicacion from './assets/ubicacion.png';
import redes from './assets/redes.png';
import email from './assets/email.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import instagram from './assets/instagram.png';
import './styles/CardsContact.css';



export default function CardContact() {
    return (
        <div className="container-card">
            <div className="card">
                <img src={ubicacion} alt="ubicacion" />
                <h3>9 de Julio 1949</h3>
                <p>Concepción del Uruguay</p>
            </div>

            <div className="card">
                <img src={telefono} alt="telefono" />
                <h3>Teléfonos</h3>
                <p>3442-856391</p>
                <p>3442-627812</p>
            </div>

            <div className="card">
                <img src={email} alt="email" />
                <h3>E-Mail</h3>
                <p>medicalcenter@gmail.com</p>
            </div>

            <div className="card">
                <img src={redes} alt="redes sociales" />
                <h3>Redes Sociales</h3>
                <div className="redes" >
                    <img src={facebook} alt="fb" />
                    <img src={twitter} alt="tw" />
                    <img src={instagram} alt="ig" />
                </div>
            </div>
        </div>
    )
}
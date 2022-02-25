import React from 'react';
import './styles/Footer.css';
import logo from './assets/logo.png';

const Footer = () => {

    return (
        <div className="container-footer">
                <div className="footer-item">
                    <img src={logo} />
                </div>
                <div className="footer-item">
                        <h3>Contacto</h3>
                    <div className="item-parrafo">
                        <p><i className="fas fa-phone"></i> 3442-856391</p>
                        <p><i className="fas fa-ambulance"></i> 3442-627812</p>
                        <p><i className="fas fa-search-location"></i> 9 de Julio</p>
                        <p><i className="fas fa-envelope-open-text"></i> medicalcenter@gmail.com</p>
                    </div>
                </div>
                <div className="footer-item">
                    <h3>Horarios</h3>
                    <div className="item-parrafo">
                        <p><i className="fas fa-clock"></i> 08:00 - 12:00 </p>
                        <p><i className="fas fa-clock"></i> 16:00 - 20:00</p>
                        <p><i className="fas fa-clinic-medical"></i> 20:00 - 08:00</p>
                    </div>
                </div>
                <div className="footer-item">
                    <h3>Redes Sociales</h3>
                    <div className="item-parrafo">
                        <a href="#"><i className="fab fa-facebook"></i> Facebook</a>
                        <a href="#"><i className="fab fa-instagram"></i> Instagram</a>
                        <a href="#"><i className="fab fa-twitter"></i> Twitter</a>
                    </div>
                </div>
            </div>
    );
}
 
export default Footer;
import React from 'react';
import { Link } from "react-router-dom";

import HeaderFuncional from '../../components/USUARIO/HeaderFuncional';
import GridMisTurnos from '../../components/USUARIO/GirdMisTurnos';
import Footer from '../../components/USUARIO/Footer';


import './styles/MisTurnos.css';



const MisTurnos = () => {


    return (  
        <div>
            <HeaderFuncional/>
            <br />

            <div className="container-main-selectMT">
                <div className="container-button">
                    <Link to="/">
                        <button><i class="fas fa-chevron-left"></i> Mis Turnos</button>
                    </Link>
                </div>
            </div>

            <GridMisTurnos/>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <Footer />
        </div>
    );
}
 
export default MisTurnos;
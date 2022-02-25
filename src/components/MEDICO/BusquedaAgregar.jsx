import React from 'react';
import './styles/BusquedaAgregar.css';

import { Link } from "react-router-dom";    

const BusquedaAgregar = () => {
    return (  
        <div className="busqueda-agregar">
            <form className="nav-busqueda">
                <input type="text" placeholder="Búsque obra social o motivo" />
                <button className="btn-lupa" >
                    <i className="fas fa-search"></i>
                </button>
            </form>

            <div className="button-agregar">
                <Link to="/">
                    <button><i class="fas fa-plus"></i> Agregar</button>
                </Link>
            </div>
        </ div>
    );
}
 
export default BusquedaAgregar;
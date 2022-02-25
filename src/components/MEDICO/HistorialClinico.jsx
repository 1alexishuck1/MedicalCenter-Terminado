import React from 'react';
import './styles/HistorialClinico.css';
import { Link } from 'react-router-dom';

const HistoriaClinica = ({objHistorialClinico, tipoButton}) => {

    const {nombre, apellido, dni, fecha} = objHistorialClinico;

    return ( 
            <div className="historialClinico-item">
                <h4>{nombre} {apellido}</h4>
                <div className="btn-historialClinico">
                    <Link to={`/detallepaciente/${dni}`}>   
                        <button> {tipoButton} </button>
                    </Link>
                </div>
            </div>
    );
}
 
export default HistoriaClinica;
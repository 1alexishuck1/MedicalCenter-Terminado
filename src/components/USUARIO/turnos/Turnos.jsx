import React from 'react';
import '../styles/Turnos.css';

const Turnos = ({objTurnos}) => {

    const {nombreMédico, especialidad, obraSocial} = objTurnos;

    return ( 
            <div className="turno-item">
                <h4>{nombreMédico} / {especialidad} / {obraSocial}</h4>
                <button> Solicitar Turno </button>
            </div>
    );
}
 
export default Turnos;
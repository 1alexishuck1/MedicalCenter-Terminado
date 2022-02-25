import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HistoriaClinica.css';

const HistoriaClinica = ({objHistoriaClinica, tipoButton}) => {

    const {motivo, diagnostico, estudios_solicitados, medicamentos, id} = objHistoriaClinica;


    return ( 
            <div className="turno-itemHC">
                <h4>{motivo} / {diagnostico} / {estudios_solicitados} / {medicamentos}</h4>
                <Link to={`/historiaclinicadetalle/${id}`}>
                    <button>
                        {tipoButton} 
                    </button>
                </Link>
            </div>
    );
}
 
export default HistoriaClinica;
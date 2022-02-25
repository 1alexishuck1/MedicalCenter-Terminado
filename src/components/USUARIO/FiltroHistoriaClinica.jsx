import React from 'react';
import SeleccionHistoriaClinica from './SeleccionHistoriaClinica';
import './styles/FiltroHistoriaClinica.css';

const FiltrosHistoriaClinica = () => {
    return ( 
        <div className="filtro-containerHC">
            <SeleccionHistoriaClinica />
        </div>
    );
}
 
export default FiltrosHistoriaClinica;
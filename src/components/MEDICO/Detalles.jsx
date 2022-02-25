import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Detalles.css';

const Detalles = ({objDetallePaciente, tipoButton}) => {

    const {id, motivo, fecha} = objDetallePaciente;
    const navigate = useNavigate();

    return ( 
            <div className="detalle-item">
                <h4>Motivo: {motivo} || Fecha: {fecha}</h4>
                <div className="container-btn-detalle">
                    <button onClick={() => navigate(`/historiadetalle/${id}`)}> {tipoButton} </button>
                </div>
            </div>
    );
}
 
export default Detalles;
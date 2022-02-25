import React, { useState } from 'react';
import './styles/HistoriaClinica.css';
import EliminarTurno from './EliminarTurno'

const MisTurnosDetalle = ({setMisTurnos, misTurnos, objMisTurnos, tipoButton}) => {

    const {nombre,apellido , fecha, hora, montoapagar, id} = objMisTurnos;
    let [estado, setEstado] = useState(false);

    return (
        <>
            <div className="turno-itemHC">
                <h4>{nombre + " " + apellido} / {fecha.slice(0,10)} / {hora.slice(0,5)} / ${montoapagar}</h4>
                    <button onClick={() => setEstado( estado = !estado)}>
                        {tipoButton} 
                    </button>
            </div>
            {estado && <EliminarTurno 
                    setMisTurnos={setMisTurnos}
                    misTurnos={misTurnos} 
                    id={id}
                    setEstado={setEstado}
                    estado={estado} />}
            
        </> 
    );
}
 
export default MisTurnosDetalle;
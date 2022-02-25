import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Detalles from './Detalles';

const GrillaMisTurnos = () => {

    const params = useParams();
    const [ historialClinico, setHistorialClinico] = useState();

    const peticionHistoriaClinicaIndividual = async () => {
        const res = await fetch(`http://localhost:4000/historiaclinicausuarioindividual/${params.id}`);
        const data = await res.json();
        setHistorialClinico(data);
    }

    console.log(historialClinico);

    useEffect(() => {
        peticionHistoriaClinicaIndividual();
    }, [])

    return (  
        <div>
            {historialClinico && historialClinico.map( (detalle) =>{
                return (
                    <Detalles
                        objDetallePaciente={detalle}
                        key={detalle.id}
                        tipoButton={"Ver detalle"}/>
                );
            })}
        </div>
    );
}
 
export default GrillaMisTurnos;
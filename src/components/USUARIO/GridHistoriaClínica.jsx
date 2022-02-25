import React, { useState, useEffect } from 'react';
import HistoriaClinica from './HistoriaClinica';
import './styles/GridHistoriaClinica.css';

const GridHistoriaClinica = ({id}) => {


    const [historiaClinica, setHistoriaClinica] = useState([]);

    const peticionHistoriaClinicaIndividual = async () =>{
        const res = await fetch(`http://localhost:4000/historiaclinica/${id}`);
        const data = await res.json();
        setHistoriaClinica(data);
    }

    useEffect(() => {
        peticionHistoriaClinicaIndividual()
    },[])

    return (  
        <div className="container-grilla-HC">
            {historiaClinica && historiaClinica.map( (historia) =>{
                return (
                    <HistoriaClinica 
                        objHistoriaClinica={historia}
                        key={historia.id}
                        tipoButton={"Ver detalles"}/>
                );
            })}
        </div>
    );
}
 
export default GridHistoriaClinica;
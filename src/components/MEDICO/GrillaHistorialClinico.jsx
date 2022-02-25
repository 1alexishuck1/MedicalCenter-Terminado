import React, {useState, useEffect} from 'react';
import HistorialClinico from './HistorialClinico';


const GrillaHistorialClinico = () => {

    const [turnoHistoria, setTurnoHistoria] = useState();

    const getTurnosHistoria = async () => {
        const res = await fetch(`http://localhost:4000/historiaclinicausuario`);
        const data = await res.json();
        if (data) {
            let turno = {};
            setTurnoHistoria(data.filter(function(current) {
            let exists = !turno[current.dni];
            turno[current.dni] = true;
            return exists;
            }));
        }

    }

    useEffect(() => {
        getTurnosHistoria();
    },[]);
 
    console.log(turnoHistoria)
        
        

    return (  
        <div>
            {turnoHistoria && turnoHistoria.map( (historialClinico) =>{
                return (
                    <HistorialClinico
                        objHistorialClinico={historialClinico}
                        key={historialClinico.id}
                        tipoButton={"Ver detalles"}/>
                );
            })}
        </div>
    );
}
 
export default GrillaHistorialClinico;
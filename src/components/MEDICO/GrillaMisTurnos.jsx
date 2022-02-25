import React, { useState, useContext, useEffect} from 'react';
import TurnosMedico from './TurnosMedico';
import { DNIContext } from '../../components/USUARIO/DNIProvider';


const GrillaMisTurnos = () => {

    const DNIUsuario = useContext(DNIContext);
    const [turnosMedico, setTurnosMedico] = useState()

    const peticionTurnosMedico = async() =>{
        const resultados = await fetch(`http://localhost:4000/verturnosmedico/${DNIUsuario.dni}`)
        const data = await resultados.json();
        setTurnosMedico(data);
    }

    useEffect(() => {
        peticionTurnosMedico();
    }, [])

    return (  
        <div>
            {turnosMedico && turnosMedico.map( (misTurnos) =>{
                return (
                    <TurnosMedico
                        objMisTurnosMedico={misTurnos}
                        setTurnosMedico={setTurnosMedico}
                        turnosMedico={turnosMedico}
                        key={misTurnos.id}
                        tipoButton={"Cancelar turno"}/>
                );
            })}
        </div>
    );
}
 
export default GrillaMisTurnos;
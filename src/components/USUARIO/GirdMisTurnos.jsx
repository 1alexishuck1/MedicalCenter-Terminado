import React, { useState, useEffect, useContext} from 'react';
import MisTurnosDetalle from './MisTurnosDetalle';
import './styles/GridHistoriaClinica.css';
import { DNIContext } from '../../components/USUARIO/DNIProvider';


const GridMisTurnos = () => {

    const DNIUsuario = useContext(DNIContext);

    const [misTurnos, setMisTurnos] = useState([]);

    const peticionTurno = async() =>{
        const res = await fetch(`http://localhost:4000/misturnos/${DNIUsuario.dni}`);
        const data = await res.json();
        setMisTurnos(data);
    }
    

    useEffect(()=>{
        peticionTurno()
    },[])

    console.log(misTurnos);


    return (  
        <div className="container-grilla-HC">
            {misTurnos && misTurnos.map( turno =>{
                return(
                    <MisTurnosDetalle
                        setMisTurnos={setMisTurnos}
                        misTurnos={misTurnos} 
                        objMisTurnos={turno}
                        key={turno.id}
                        tipoButton={"Cancelar turno"}/>
                )
        })}
        </div>
    );
}
 
export default GridMisTurnos;
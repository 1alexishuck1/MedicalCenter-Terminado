import React from 'react';
import './styles/EliminarTurno.css'

const EliminarTurno = ({setMisTurnos, misTurnos, setEstado, estado, id}) => {

    console.log(id);
    const peticionEliminar = async (id) => {
        await fetch(`http://localhost:4000/deleteturno/${id}`, {
            method: 'DELETE'
        });

        setMisTurnos(misTurnos.filter( (misTurnos) => misTurnos.id !== id))
    }

    return (
        <>
        <div className="container-eliminar-turno">
            <div className="item-texto">
                <h4>¿Desea cancelar el turno?</h4>
            </div>
            <div className="item-button">
                <button onClick={() => {
                    peticionEliminar(id)
                    setEstado(estado = !estado)
                    }}>Sí</button>

                <button onClick={() =>{
                    setEstado(estado = !estado)
                }}>No</button>
            </div>
        </div>
        <div className="fondo-config">

            </div>
        </> 
    );
}
 
export default EliminarTurno;
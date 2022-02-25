import React, { useState } from 'react';
import './styles/CorreoElectronico.css';
import {useParams} from "react-router-dom";

const Telefono = ({estado, setEstado}) => {

    const params = useParams();
    const dni = params.id;

    const peticionActualizarTelefono = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:4000/telefono/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(telefono),
            headers: { "Content-Type": "application/json" }
        });
        setEstado( estado = !estado)
    }

    
    const [telefono, setCorreo] = useState();

    const handleChange = (e) => {
        setCorreo({ ...telefono, [e.target.name]: e.target.value });
    }

    return (
        <> 
            <div className="container-flotanteCE">
                <h3>Editar teléfono</h3>
                <form onSubmit={() => peticionActualizarTelefono(dni)}>
                    <input onChange={handleChange} name="telefono" type="text" placeholder="Teléfono" />
                    <button type="submit" >Guardar</button>
                </form>
            </div>
            <div className="fondo-config">

            </div>
        </>
    );
}
 
export default Telefono;
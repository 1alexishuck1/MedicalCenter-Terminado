import React, { useState } from 'react';
import './styles/CorreoElectronico.css';
import {useParams} from "react-router-dom";

const CorreoElectronico = ({estado, setEstado}) => {

    const peticionActualizarCorreoElectronico = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:4000/correoelectronico/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(correo),
            headers: { "Content-Type": "application/json" }
        });
        setEstado( estado = !estado)
    }

    const params = useParams();
    const dni = params.id;

    const [correo, setCorreo] = useState();

    const handleChange = (e) => {
        setCorreo({ ...correo, [e.target.name]: e.target.value });
    }

    return (
        <> 
            <div className="container-flotanteCE">
                <h3>Editar correo electrónico</h3>
                <form onSubmit={peticionActualizarCorreoElectronico}>
                    <input onChange={handleChange} name="correo" type="mail" placeholder="Correo electrónico" />
                    <button>Guardar</button>
                </form>
            </div>
            <div className="fondo-config">

            </div>
        </>
    );
}
 
export default CorreoElectronico;
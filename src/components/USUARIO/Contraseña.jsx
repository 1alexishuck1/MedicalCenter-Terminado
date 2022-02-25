import React, { useState } from 'react';
import {useParams, useNavigate} from "react-router-dom";

const Contraseña = ({estado, setEstado}) => {

    const params = useParams();
    const dni = params.id

    const navigate = useNavigate();
    
    const [contraseña, setContraseña] = useState();


    const peticionActualizarContraseña = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:4000/contrasena/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(contraseña),
            headers: {"Content-Type": "application/json"}
        });
        setEstado( estado = !estado)    
    }

    const handleChange = (e) =>{
        setContraseña({ ...contraseña, [e.target.name]: e.target.value });
    }


    return (
        <> 
            <div className="container-flotante">
                <h3>Editar contraseña</h3>
                <form onSubmit={peticionActualizarContraseña}>
                    <input onChange={handleChange} name="contraseña" type="password" placeholder="Contraseña" />
                    <input type="password" placeholder="Repetir contraseña" />
                    <button type="submit">Guardar</button>
                </form>
            </div>
            <div className="fondo-config">

            </div>
        </>
    );
}
 
export default Contraseña;
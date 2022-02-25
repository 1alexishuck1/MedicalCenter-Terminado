import React, {useState} from 'react';
import './styles/NombreyApellido.css';
import {useParams} from "react-router-dom";

const NombreyApellido = ({estado, setEstado}) => {

    const params = useParams();
    const dni = params.id
    
    const [usuario, setUsuario] = useState({
        nombre: '',
        apellido: ''
    });

    console.log(usuario)
    
    const peticionActualizarNomyApe = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:4000/nombreapellido/${params.id}`, {
            method: "PUT",
            body: JSON.stringify(usuario),
            headers: {"Content-Type": "application/json"}
        });
        setEstado( estado = !estado)
    }

    const handleChange = (e) =>{
        setUsuario({ ...usuario, [e.target.name]: e.target.value });
    }


    return (
        <> 
            <div className="container-flotante">
                <h3>Editar nombre y apellido</h3>
                <form onSubmit={peticionActualizarNomyApe}>
                    <input onChange={handleChange} name="nombre" type="text" placeholder="Nombre" />
                    <input onChange={handleChange} name="apellido" type="text" placeholder="Apellido" />
                    <button type="submit">Guardar</button>
                </form>
            </div>
            <div className="fondo-config">

            </div>
        </>
    );
}
 
export default NombreyApellido;
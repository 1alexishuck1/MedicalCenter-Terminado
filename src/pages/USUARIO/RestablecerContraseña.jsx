import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { DNIContext } from '../../components/USUARIO/DNIProvider';


import logo from './assets/logo.png';
import './styles/RestablecerContraseña.css';

const RestablecerContraseña = () => {

    const navigate = useNavigate();

    const DNIUsuario = useContext(DNIContext);

    const [contraseñas, setContraseñas] = useState({
        contraseña: '',
        repetirContraseña: ''
    });

    const handleChange = (e) =>{
        setContraseñas({ ...contraseñas, [e.target.name]: e.target.value });
    }

    console.log(contraseñas);
    console.log(DNIUsuario.dni);

    const peticionContraseña = async() => {
        await fetch(`http://localhost:4000/contrasena/${DNIUsuario.dni}`, {
            method: "PUT",
            body: JSON.stringify({contraseña: contraseñas.contraseña}),
            headers: {"Content-Type": "application/json"}
        });
    }

    const verificarContraseña = (e) =>{
        e.preventDefault();
        console.log("desde la verificacion")
        if (contraseñas.contraseña === contraseñas.repetirContraseña){
            peticionContraseña();
            navigate("/login")
        } else {
            alert("Las contraseñas ingresadas no coinciden.");
        }
    }

    return (  
        <>
            <div className="fondo">
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="button-volver">
                <Link to="/recuperarContrase">
                    <button><i className="fas fa-chevron-left"></i> Volver</button>
                </Link>
            </div>

            <div className="container-restablecer">
                <div className="item-texto">
                    <h2>Restablecer contraseña</h2>
                </div>
                <form onSubmit={verificarContraseña}>
                    <div className="item-restablecer">
                        <input onChange={handleChange} name="contraseña" type="password"  placeholder="Contraseña" />
                        <input onChange={handleChange} name="repetirContraseña" type="password"  placeholder="Repetir contraseña" />
                    </div>
                    <div className="item-btn">
                        <button type="submit" >Restablecer contraseña</button>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default RestablecerContraseña;
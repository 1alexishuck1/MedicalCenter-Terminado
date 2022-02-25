import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import logo from './assets/logo.png';
import './styles/CodigoRecuperar.css';
import { DNIContext } from '../../components/USUARIO/DNIProvider';

const CodigoRecuperar = () => {

    const navigate = useNavigate();

    const DNIUsuario = useContext(DNIContext);
    console.log(DNIUsuario.codigo)

    const [codigoInput, setCodigoInput] = useState();

    const handleChange = (e) =>{
        setCodigoInput(e.target.value);
    }

    console.log(DNIUsuario.dni)

    const verificarCodigo = (e) =>{
        e.preventDefault();
        if (DNIUsuario.codigo === codigoInput){
            navigate(`/restablecercontrase/${DNIUsuario.dni}`)
        } else {
            alert("El código ingresado es incorrecto. Salu3");
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
                <Link to={`/recuperarContrase`}>
                    <button><i className="fas fa-chevron-left"></i> Volver</button>
                </Link>
            </div>

            <div className="container-recuperar">
                <h2>Recuperar contraseña</h2>
                <form className="recuperar-inputs" onSubmit={verificarCodigo}>

                    <input onChange={handleChange} type="text" placeholder="Código" required/>

                    <div className="links">
                        <Link to="/">Reenviar código</Link>
                        <Link to="/recuperarContrase">Modificar correo electrónico</Link>
                    </div>

                    <button type="submit">Siguiente</button>

                </form>
            </div>
        </>
    );
}
 
export default CodigoRecuperar;
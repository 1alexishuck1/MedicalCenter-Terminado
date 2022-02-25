import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { DNIContext } from '../../components/USUARIO/DNIProvider';

import './styles/Login.css';
import logo from './assets/logo.png';

const Login = () => {


    const navigate = useNavigate();

    const [verificacion, setVerificacion] = useState(false);

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const [usuarios, setUsuarios] = useState({
        email: "",
        password: "",
        dni: "",
        idrol:""
    })

    const handleChange = (e) =>{
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const peticionUsuarios = async(correo) => {
        const res = await fetch(`http://localhost:4000/login/${correo.email}`);
        const data = await res.json();
        setUsuarios({
            email: data[0].correoelectronico,
            password: data[0].contraseña,
            dni: data[0].dni,
            idrol: data[0].idrol
        });
    }

    useEffect(() => {
        peticionUsuarios(login);

    },[login])

    console.log(usuarios);
    
    const DNIUsuario = useContext(DNIContext);


    const validar = () => {

        /* DATOS DEL INPUT */
        let loPassw = login.password;
        let loEmail = login.email;

        /* DATOS DE LA BASE DE DATOS */
        let dataUsuarioP = usuarios.password;
        let dataUsuarioE = usuarios.email;

        if ((loPassw === dataUsuarioP) && (loEmail === dataUsuarioE)) {
            DNIUsuario.setDni(usuarios.dni);
            DNIUsuario.setSesion(true)
            setVerificacion(true);
        } else {
            setVerificacion(false);
        }
    }

    console.log(DNIUsuario.sesion)
    

    return ( 
        <>
            <div className="fondo">
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="container-login">
                <h2>Iniciar sesión</h2>
                <form className="login-inputs" >
                    <input type="email" name="email" onChange={handleChange} placeholder="Correo electrónico" required/>
                    <input type="password" name="password" onChange={handleChange} placeholder="Contraseña" required/>
                    
                    <div className="login-recuperar">
                        <Link to="/recuperarContrase">
                            ¿Olvidó su contraseña?
                        </Link>
                    </div>
                    <div className="login-btn">
                        <button type="button" onClick={() => validar()}>Iniciar</button>
                    </div>
                    
                    {verificacion && usuarios.idrol === 1 && navigate(`/homemedico/${usuarios.dni}`)}
                    {verificacion && usuarios.idrol === 2 && navigate(`/home/${usuarios.dni}`)}
                    {verificacion && usuarios.idrol === 3 && navigate('/')}
                    <div className="login-registrar">
                        <p>¿No tienes cuenta?
                        </p>
                            <Link to="/registro">
                                Registrate aquí
                            </Link>
                    </div>
                    <hr />
                </form>
                <div className="login-fb">
                    <Link to="/LoginFB">
                        <button> Registro con Facebook</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default Login;

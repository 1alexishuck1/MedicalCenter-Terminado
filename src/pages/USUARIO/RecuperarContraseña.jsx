import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { DNIContext } from '../../components/USUARIO/DNIProvider';

import logo from './assets/logo.png';
import './styles/RecuperarContraseña.css';

const RecuperarContraseña = () => {

    const form = useRef();
    const navigate = useNavigate();

    const [inputDato, setInputDato] = useState({
        email: ''
    })

    const [usuario, setUsuario] = useState({
        email: "",
        password: "",
        dni: ""
    });

    const [codigo, setCodigo] = useState();

    const DNIUsuario = useContext(DNIContext);


    const peticionUsuario = async (correo) =>{
        const res = await fetch(`http://localhost:4000/login/${correo.email}`);
        const data = await res.json();
        setUsuario({
            email: data[0].correoelectronico,
            password: data[0].contraseña,
            dni: data[0].dni
        });
        
    }

    const codigoRandom = () => {
        const num = (Math.random()*1000000).toString().split('.')[0];
        setCodigo(num);
        DNIUsuario.setCodigo(codigo);
    }

    { DNIUsuario.codigo && console.log(DNIUsuario.codigo);}


    const handleChange = (e) =>{
        setInputDato({ ...inputDato, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        peticionUsuario(inputDato);
        codigoRandom();
    },[inputDato])

    console.log(usuario)

    if (usuario){
        DNIUsuario.setDni(usuario.dni);
    }
    {DNIUsuario.dni && console.log(DNIUsuario.dni) } 

    const EnviarCodigo = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_uq9b7za', 'template_9u2d0us', form.current, 'user_lXjm83Of39uLExTTJEs0r')
        .then((result) => {
                console.log(result.text);
                navigate(`/codigorecuperar/${usuario.dni}`)
            }, (error) => {
                console.log(error.text);
            });
    }


    return ( 
        <>
            <div className="fondo">
            </div>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="button-volver">
                <Link to="/login">
                    <button><i className="fas fa-chevron-left"></i> Volver</button>
                </Link>
            </div>

            <div className="container-recuperar">
                <h2>Recuperar contraseña</h2>
                <form className="recuperar-inputs" ref={form} onSubmit={EnviarCodigo}>
                    <input type="hidden" name="subject" value="Código para restablecer su contraseña"/>
                    <input type="hidden" name="textoIgnorar" value="Si usted no ha solicitado cambiar su contraseña, ignore este mensaje."/>
                    <input type="hidden" name="texto" value="Su código para restablecer su contraseña es: "/>
                    <input type="hidden" name="name" value={usuario.email}/>
                    <input type="hidden" name="codigo" value={DNIUsuario.codigo}/>
                    <input type="hidden" name="destino" value={usuario.email}/>

                    <input type="email" name="email" onChange={handleChange}placeholder="Correo electrónico" required/>
                    <div className="btn-siguiente">
                            <button type="submit">Enviar código</button>
                    </div>

                </form>
            </div>
        </>
    );
}
 
export default RecuperarContraseña;
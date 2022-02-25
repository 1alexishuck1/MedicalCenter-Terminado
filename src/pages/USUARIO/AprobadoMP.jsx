import React, { useRef, useState, useEffect} from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import logo from '../USUARIO/assets/logo.png';

import './styles/AprobadoMP.css';

const AprobadoMP = () => {

    const form = useRef();
    const navigate = useNavigate();

    const location = useLocation();
    let id_transaccion = location.search.split('&')[7].split('=')[1];

    const [turnoDatos, setTurnoDatos] = useState({
        fecha: '',
        hora: '',
        costo: '',
        nombre: '',
        correo: '',
        id_paciente: ''
    });


    const peticionTurnoIndividual = async() =>{
        const resultado = await fetch(`http://localhost:4000/turnoindividual/${id_transaccion}`);
        const data = await resultado.json();
        setTurnoDatos({
            fecha: data.fecha,
            hora: data.hora,
            costo: data.montoapagar,
            nombre: data.nombre,
            correo: data.correoelectronico,
            id_paciente: data.dni
        });
    }

    const peticionUpTurnoTransaccion = async() =>{
        const resultado = await fetch(`http://localhost:4000/turnouptransaccion/${id_transaccion}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"}
        });
        const data = await resultado.json();
    }

    useEffect(() => {
        peticionTurnoIndividual()
        peticionUpTurnoTransaccion()
    },[])


    const EnviarNotificacion = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_uq9b7za', 'template_lrvjxxo', form.current, 'user_lXjm83Of39uLExTTJEs0r')
        .then((result) => {
                console.log(result.text);
                navigate(`/home/${turnoDatos.id_paciente}`)
            }, (error) => {
                console.log(error.text);
            });
    }



    return ( 
        <>
            <div className="container-pagoaprobado">
                <div className="imagen-logoPA">
                    <img src={logo} alt="" />
                </div>
                <div className="container-formulario-PA">
                    <h2>Su pago ha sido aprobado.</h2>
                    <form ref={form} onSubmit={EnviarNotificacion}>
                        <input type="hidden" name="subject" value="Turno solicitado"/>
                        <input type="hidden" name="name" value={turnoDatos.nombre}/>
                        <input type="hidden" name="fecha" value={turnoDatos.fecha}/>
                        <input type="hidden" name="hora" value={turnoDatos.hora}/>
                        <input type="hidden" name="monto" value={turnoDatos.costo}/>
                        <input type="hidden" name="destino" value={turnoDatos.email}/> 
                        <button type="submit">Volver al inicio</button>
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default AprobadoMP;
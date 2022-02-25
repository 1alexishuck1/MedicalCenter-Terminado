import React, { useEffect, useState, useRef } from 'react';
import boton_regresar from './assets/boton_regresar.png';
import {Link, useNavigate} from 'react-router-dom';
import emailjs from "@emailjs/browser";
import './styles/SendMensaje.css';



const SendMensaje = () => {

    const form = useRef();
    const navigate = useNavigate();

    // Hook para guardar el mensaje
    const [mail, setMail] = useState({
        nombre: '',
        message: ''
    })

    const handleChange = (e) => {
        setMail({ ...mail, [e.target.name]: e.target.value });
        filtrarMedicos(mail.nombre);
    }

    const filtrarMedicos = (search) => {
        let resultado = tablaMedicos.filter( elemento => {
            if(elemento.nombre.toString().toLowerCase().includes(search.toLowerCase())
                || elemento.apellido.toString().toLowerCase().includes(search.toLowerCase())
            ){
                return elemento;
            }
        });
        setMedicos(resultado);
    }


    // Hook para obtener los Médicos
    const [medicos, setMedicos] = useState([]);
    const [tablaMedicos, setTablaMedicos] = useState([]);
    

    const cargarMedicos = async () => {
        const res = await fetch('http://localhost:4000/medicos');
        const data = await res.json();
        setMedicos(data);
        setTablaMedicos(data);
    }

    if (medicos.length === 1) {
        mail.nombre = medicos[0].correoelectronico;
    }

    console.log("Medicos: ", medicos);
    console.log("mail: ", mail);

    useEffect(() => {
        cargarMedicos();
    }, [])

    const enviarMensaje = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_uq9b7za', 'template_9u2d0us', form.current, 'user_lXjm83Of39uLExTTJEs0r')
        .then((result) => {
                console.log(result.text);
                navigate(`/`)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>
            <div className="regresar-btn-admin">
                <Link to="/">
                    <img src={boton_regresar} alt="regresar"></img>
                    <h2>Regresar</h2>
                </Link>
            </div>

            <div className="message-super-container-admin">
                <div className="message-form-container-admin">
                    <h1>Enviar Mensaje</h1>

                    <form ref={form} onSubmit={enviarMensaje}>
                        <div className="message-input-container-admin">
                            <input
                                type="text" 
                                name="nombre"
                                id="nombre"
                                placeholder="Nombre del médico"
                                value={mail.nombre}
                                onChange={handleChange}
                            />

                            <textarea
                                    name="message"
                                    onChange={handleChange}
                            >

                            </textarea>

                            <input type="hidden" name="subject" value="Ha recibido un mensaje de Medical Center"/>
                            <input type="hidden" name="textoIgnorar" value=""/>
                            <input type="hidden" name="texto" value={mail.message}/>
                            {medicos[0] &&  <input type="hidden" name="name" value=""/> }
                            <input type="hidden" name="codigo" value=""/>
                            <input type="hidden" name="destino" value={mail.nombre}/>

                            <button type="submit">
                                <h3>Enviar</h3>
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
 
export default SendMensaje;
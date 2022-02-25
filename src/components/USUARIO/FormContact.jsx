import React, { useState, useRef } from 'react'
import './styles/FormContact.css';
import { useNavigate, useParams } from 'react-router-dom';
import emailjs from "@emailjs/browser";


export default function FormContact() {

    const [mensaje, SetMensaje] = useState();
    const navigate = useNavigate();
    const form = useRef();
    const params = useParams();

    const handleChange = (e) => {
        SetMensaje({ ...mensaje, [e.target.name]: e.target.value });
    }


    const enviarMensaje = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_uq9b7za', 'template_9u2d0us', form.current, 'user_lXjm83Of39uLExTTJEs0r')
        .then((result) => {
                console.log(result.text);
                navigate(`/home/${params.id}`)
            }, (error) => {
                console.log(error.text);
            });
    }


    return (
        <div className="form-contact">
            <form ref={form} onSubmit={enviarMensaje}>
                <div className='info'>
                    <input type="text" name="name" placeholder='Nombre y apellido' onChange={handleChange}/>
                    <input type="email"name="email"  placeholder='E-Mail' onChange={handleChange}/>
                    <input type="text" name="celular" placeholder='Celular' onChange={handleChange}/>
                    <input type="text" name="motivo" placeholder='Motivo' onChange={handleChange}/>
                </div>
                <div className='consulta'>
                    <textarea type="textarea" name="consulta" placeholder='Su Consulta' onChange={handleChange}/>
                    <button type="submit">Enviar</button>
                </div>

                {mensaje && <div>
                    <input type="hidden" name="subject" value={`Ha recibido una consulta: ${mensaje.motivo}`}/>
                    <input type="hidden" name="textoIgnorar" value={mensaje.consulta}/>
                    <input type="hidden" name="texto" value={ `Mi nombre es ${mensaje.name}`}/>
                    <input type="hidden" name="name" value="Administrador"/>
                    <input type="hidden" name="codigo" value=""/>
                    <input type="hidden" name="destino" value="medicalcenterfhlp@gmail.com"/>
                </div>}

            </form>
        </div>
    )
}
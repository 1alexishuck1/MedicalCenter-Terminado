import React, { useState, useEffect, useContext, useRef} from 'react';
import { useNavigate } from "react-router-dom";
import './styles/TurnosMedico.css';
import emailjs from "@emailjs/browser";
import { DNIContext } from '../../components/USUARIO/DNIProvider';



const TurnosMedico = ({objMisTurnosMedico, tipoButton, turnosMedico, setTurnosMedico}) => {

    const DNIUsuario = useContext(DNIContext);
    const navigate = useNavigate();
    const form = useRef();

    const {id_usuariop, fecha, hora, id, id_transaccion} = objMisTurnosMedico;

    const [paciente, setPaciente] = useState();
    const [turnoHistoria, setTurnoHistoria] = useState();
    const [usuarioPaciente, setUsuarioPaciente] = useState();

    const peticionUsuario = async() =>{
        const resultados = await fetch(`http://localhost:4000/usuarioindividual/${id_usuariop}`)
        const data = await resultados.json();
        setPaciente(data[0]);
    }

    const peticionPaciente = async() =>{
        const resultados = await fetch(`http://localhost:4000/turnopaciente/${id_transaccion}`)
        const data = await resultados.json();
        console.log(data[0])
        setUsuarioPaciente(data[0]);
    }

    const EnviarNotificacion = (e) => {
        e.preventDefault();
        peticionEliminar();
        emailjs.sendForm('service_uq9b7za', 'template_lrvjxxo', form.current, 'user_lXjm83Of39uLExTTJEs0r')
        .then((result) => {
                console.log(result.text);
                navigate(`/homemedico/${DNIUsuario.dni}`)
            }, (error) => {
                console.log(error.text);
            });
    }

    useEffect(() => {
        peticionPaciente();
        peticionUsuario();
        getTurnosHistoria();
    }, [])

    const getTurnosHistoria = async () => {
        const res = await fetch(`http://localhost:4000/turnoshistoria/${id_transaccion}`);
        const data = await res.json();
        setTurnoHistoria(data[0]);
    }

    const peticionEliminar = async () => {
        await fetch(`http://localhost:4000/deleteturno/${id}`, {
            method: 'DELETE'
        });

        setTurnosMedico(turnosMedico.filter( (turnosMedico) => turnosMedico.id !== id))

    }



    return ( 
            <div className="misTurnos-item">
                {paciente && <h4>{paciente.nombre} {paciente.apellido}  ||  {fecha}  ||  {hora}</h4>} 
                <div className="container-btnTM">

               
                    {usuarioPaciente &&
                        <form ref={form} onSubmit={EnviarNotificacion}>
                            <input type="hidden" name="subject" value="Turno cancelado."/>
                            <input type="hidden" name="texto" value="Su turno ha sido cancelado."/>
                            <input type="hidden" name="name" value={usuarioPaciente.nombre}/>
                            <input type="hidden" name="fecha" value={usuarioPaciente.fecha}/>
                            <input type="hidden" name="hora" value={usuarioPaciente.hora}/>
                            <input type="hidden" name="monto" value={usuarioPaciente.montoapagar}/>
                            <input type="hidden" name="destino" value={usuarioPaciente.correoelectronico}/>

                            {turnoHistoria === undefined &&
                                <div className="btn-cancelarHC">
                                    <button type="submit"> {tipoButton} </button>
                                </div>
                            }

                        </form>
                    }
                    {turnoHistoria === undefined &&
                        <div className="btn-agregarHC">
                            <button onClick={() => navigate(`/agregarhistorialclinico/${id}`)}>Agregar historia clinica</button>
                        </div>
                    }
                </div>
                    
            </div>
    );
}
 
export default TurnosMedico;
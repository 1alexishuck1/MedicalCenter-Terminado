import React, { useState , useEffect, useContext} from 'react';
import {useParams, useLocation} from "react-router-dom";
import './styles/InputsFechaTurno.css';
import { DNIContext } from '../../components/USUARIO/DNIProvider';


const InputsFechaTurno = () => {

    const params = useParams();
    const DNIUsuario = useContext(DNIContext);


    const [turno, setTurno] = useState({
        fecha: '',
        hora: '',
        especialidad: '',
        obraSocial: '',
        cobertura: 0,
        medico: '',
        tipoTurno: 0,
        precio: 0,
        paciente: params.id 
    });
    
    const [turnoEnviar, setTurnoEnviar] = useState({
        id_transaccion: '',
        precio: 0,
        fecha: '',
        hora: '',
        paciente: '',
        tipoTurno: 0,
        medico: '',
        pago: false
    })
    
    const handleChange = (e) =>{
        setTurno({ ...turno, [e.target.name]: e.target.value });
    }
    
    const [especialidad, setEspecialidad] = useState();
    const [obraSocial, setObraSocial] = useState();
    const [medico, setMedico] = useState();
    const [tablaMedico, setTablaMedico] = useState();
    const [tablaFiltrado, setTablaFiltrado] = useState();
    const [tipoTurno, setTipoTurno] = useState();
    const [precioSinP, setPrecioSinP] = useState(0);
    const [turnoInfo, setTurnoInfo] = useState();
    const [valores, setValores] = useState();
    const [datos, setDatos] = useState();
    const location = useLocation();
    
    const peticionEspecialidad = async() =>{
        const resultado = await fetch('http://localhost:4000/especialidad');
        const data = await resultado.json();
        setEspecialidad(data);
    }
    
    const peticionObraSocial = async() =>{
        const resultado = await fetch('http://localhost:4000/obrasocial');
        const data = await resultado.json();
        setObraSocial(data);
    }
    
    const peticionMedico = async() =>{
        const resultado = await fetch('http://localhost:4000/medicosobrasocial');
        const data = await resultado.json();
        setMedico(data);
        setTablaMedico(data);
    }
    
    useEffect(() => {
        peticionEspecialidad()
        peticionObraSocial()
        peticionMedico()
        peticionTurno()
        peticionTipoTurno()
    },[])
    
    
    const filtrarObraSocial = (search) => {
        let resultado = medico.filter( elemento => {
            if(elemento.nombre.toString().toLowerCase().includes(search.toLowerCase())
            ){
                return elemento;
            }
        });
        setTablaFiltrado(resultado);
    }
    
    const filtrarEspecialidad = (search) => {
        let resultado = tablaMedico.filter( elemento => {
            if(elemento.nombreespecialidad.toString().toLowerCase().includes(search.toLowerCase())
            ){
                return elemento;
            }
        });
        setMedico(resultado);
    }
    
    const peticionTurno = async() =>{
        const resultado = await fetch('http://localhost:4000/turno');
        const data = await resultado.json();
        setTurnoInfo(data);
    }
    
    const peticionTipoTurno = async() =>{
        const resultado = await fetch('http://localhost:4000/tipoturno');
        const data = await resultado.json();
        setTipoTurno(data);
    }

    
    const precioTipoTurno = (tipoT) =>{
        let precioConsulta = 0;
        if (tipoT === "1"){
            precioConsulta = 1000
        } else if (tipoT === "2"){
            precioConsulta = 4000
        } 
        setPrecioSinP(precioConsulta);
    }

    const verificacionTurno = (turnoInfo) =>{
        let flagControl = false;
        turnoInfo.map( turn => {
            if (turn.fecha.slice(0,10) == turno.fecha && turn.hora == turno.hora && turn.id_usuariom == turno.medico){
                flagControl = true;
            } return flagControl;
        })
        if (flagControl){
            alert("El turno no está disponible.");
        }
    }

    const peticionSubirTurno = async () => {
        const rempl = turnoEnviar.fecha.replace("-","/");
        const remplFech =  rempl.replace("-","/");
        turnoEnviar.fecha = remplFech;


        const res = await fetch("http://localhost:4000/cargarturno",{
            method: 'POST',
            body: JSON.stringify(turnoEnviar),
            headers: {"Content-Type": "application/json"}
        });
        const data = await res.json();
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log('Entra a la petición');
        const res = await fetch('http://localhost:4000/checkout', { 
            method: 'POST',
            body: JSON.stringify(turnoEnviar),
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "http://localhost:3000"
            }
        });
        const data = await res.json();
        setDatos(data);

        let id_transaccion = data.id;
        
            setTurnoEnviar({
                ...turnoEnviar,
                id_transaccion: id_transaccion
            })
        
        }
        
    if (turnoEnviar.id_transaccion) console.log(turnoEnviar.id_transaccion)
    

    if(datos){
        peticionSubirTurno();
        setTimeout(() =>{
            window.location.href = datos.url;
        },[3000])
    }

    return ( 
        <div className="inputs-container" >
            <form onSubmit={handleSubmit}>
                <div className="container-input">
                    <div className="container1">
                        <select onChange={ (e) =>{
                            setTurno({
                                ...turno,
                                tipoTurno: e.target.value
                            }
                            )
                            precioTipoTurno(e.target.value);
                        }}>
                            <option value="">-- Tipo de turno --</option>
                            {tipoTurno && tipoTurno.map(tipo => <option value={tipo.id}>{tipo.nombreturno}</option>)}
                        </select>
                    </div>
                    <div>
                        <input type="date" name="fecha" onChange={handleChange} required/>

                    </div>
                    <div>
                        <select onChange={ (e) => {
                                setTurno({
                                    ...turno,
                                    hora: e.target.value
                                })
                            }
                            }>
                            <option>-- Horario --</option>
                            <option value="08:00">08:00</option>
                            <option value="08:30">08:30</option>
                            <option value="09:00">09:00</option>
                            <option value="09:30">09:30</option>
                            <option value="10:00">10:00</option>
                            <option value="10:30">10:30</option>
                            <option value="11:00">11:00</option>
                            <option value="11:30">11:30</option>
                            <option value="16:00">16:00</option>
                            <option value="16:30">16:30</option>
                            <option value="17:00">17:00</option>
                            <option value="17:30">17:30</option>
                            <option value="18:00">18:00</option>
                            <option value="18:30">18:30</option>
                            <option value="19:00">19:00</option>
                            <option value="19:30">19:30</option>
                        </select>
                    </div>
                    <div >
                            <select onChange={ (e) =>{
                                    filtrarEspecialidad(e.target.value)
                                    setTurno({
                                        ...turno,
                                        especialidad: e.target.value
                                    })
                                }} required>
                                    <option value="">-- Especialidad --</option>
                                    {especialidad && especialidad.map( espec => <option value={espec.nombreespecialidad}>{espec.nombreespecialidad}</option> )}
                            </select>
                    </div>
                    <div>
                        <select onChange={ (e) =>{
                                filtrarObraSocial(e.target.value.split(',')[0])
                                const valores = e.target.value.split(',');

                                setValores(valores)

                                setTurno({
                                    ...turno,
                                    obraSocial: valores[1].trim(),
                                    cobertura: parseInt(valores[2])
                                })

                            }} required>
                                <option value="">-- Obra social --</option>
                                {obraSocial && obraSocial.map( obra => <option value={`${obra.nombre},${obra.id},${obra.porcentajecobertura}`} >{obra.nombre}</option> )}
                        </select>
                        
                    </div>

                    
                    <div>
                            <select onChange={ (e) =>{
                                setTurno({
                                    ...turno,
                                    medico: e.target.value,
                                    precio: precioSinP - ((precioSinP * turno.cobertura) / 100)
                                })
                                setTurnoEnviar({
                                    ...turnoEnviar,
                                    precio: precioSinP - ((precioSinP * turno.cobertura) / 100),
                                    paciente: params.id,
                                    fecha: turno.fecha,
                                    hora: turno.hora,
                                    tipoTurno: turno.tipoTurno,
                                    medico: e.target.value
                                });
                            }}
                            
                            required>
                                <option>-- Médico --</option>
                                {tablaFiltrado && tablaFiltrado.map( doc => <option value={doc.dni}>{doc.nombreusuario}{doc.apellido}</option> )}
                            </select>
                    </div>
                </div>
                    <div className="container-bnt">
                        <input type="text" value={`Precio: $${turno.precio}`} disabled style={{color: 'white'}} />
                        <button type="submit" onClick={() => verificacionTurno(turnoInfo)}> Solicitar Turno</button>
                    </div>
            </form>
            
        </div>
     );
}
 
export default InputsFechaTurno;
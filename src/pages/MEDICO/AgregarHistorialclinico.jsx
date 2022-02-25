import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import './styles/AgregarHistorialclinico.css';
import logo from '../USUARIO/assets/logo.png' 
import { DNIContext } from '../../components/USUARIO/DNIProvider';
import { Link } from 'react-router-dom';

const ArgegarHistorialclinico = () => {

    const params = useParams();
    const DNIUsuario = useContext(DNIContext);
    const navigate = useNavigate();


    const [datos, setDatos] = useState();

    const handleChange = (e) =>{
        setDatos({ ...datos, [e.target.name]: e.target.value });
    }
    
    const agregarHistorialClinico = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:4000/agregarhistorialclinico/${params.id}`,{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {"Content-Type": "application/json"}
        });
        console.log(res);

        setTimeout( () =>{
            navigate(`/misTurnosmedico/${DNIUsuario.dni}`)
        },[2000])

    }

    console.log(DNIUsuario.dni);

    return ( 
    <>
        <div className="container-img-logo">
            <Link to={`/misTurnosmedico/${DNIUsuario.dni}`}>
                <img src={logo} alt="" />
            </Link>
        </div>
        <div className="form-agregarHC">
            <form onSubmit={agregarHistorialClinico}>
                <h2>Agregar historial clínico</h2>
                <div className="inputs-agregarHC">
                    <input onChange={handleChange} type="text" name="motivo" placeholder="Motivo" />
                    <input onChange={handleChange} type="text" name="medicamentos" placeholder="Medicamentos" />
                    <input onChange={handleChange} type="text" name="estudios_solicitados" placeholder="Estudios solicitados" />
                    <textarea onChange={handleChange} type="text" name="diagnostico" placeholder="Diagnostico" />
                </div>
                <button type="submit">Agregar</button>
            </form>
        </div>
    </> 
    );
}
 
export default ArgegarHistorialclinico;
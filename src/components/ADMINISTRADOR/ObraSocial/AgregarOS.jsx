import React, { useState, useEffect } from 'react';
import boton_regresar from '../assets/boton_regresar.png';
import { Link, useNavigate, useParams } from 'react-router-dom';
import '../styles/AgregarOS.css';
import Header from '../Header';

const AgregarOS = ({text, btntext}) => {

    const navigate = useNavigate();

    const params = useParams();

    // Hook para saber si se está editando o no
    const [editing, setEditing] = useState(false);

    // Hook para guardar los datos de la Obra Social a agregar
    const [obraSocial, setObrasocial] = useState({
        nombre: "",
        porcentajecobertura: ""
    });
    
    const handleSubmit = async (e) => {

        e.preventDefault();

        if (editing){
            await fetch(`http://localhost:4000/obra-social/${params.id}`, {
                method: "PUT",
                body: JSON.stringify(obraSocial),
                headers: {"Content-Type": "application/json"}
            });
            
        }else{
            await fetch("http://localhost:4000/obra-social", {
                method: "POST",
                body: JSON.stringify(obraSocial),
                headers: {"Content-Type": "application/json"}
            });
        }
        
        navigate('/obra-social');

    }
    
    const handleChange = (e) => {
        setObrasocial({ ...obraSocial, [e.target.name]: e.target.value });
    }

    const cargarObra = async (id) => {
        const res = await fetch(`http://localhost:4000/obra-social/${id}`);
        const data = await res.json();
        setObrasocial({nombre: data.nombre, porcentajecobertura: data.porcentajecobertura});
        setEditing(true);
    }

    useEffect(() => {
        if (params.id) {
            cargarObra(params.id);
        }
    }, [params.id])

    return (
        <>
            <Header/>

            <div className="regresar-button-admin">
                <div className="link-administrador">
                    <Link to="/obra-social">
                        <img src={boton_regresar} alt="regresar"></img>
                        <h2>Regresar</h2>
                    </Link>
                </div>
            </div>
            
            <div className="super-container-admin">
                <div className="form-container-admin">
                    <h1>{text} Obra Social</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="input-container-admin">
                            <input 
                                type="text" 
                                name="nombre"
                                id="nombre"
                                placeholder="Nombre"
                                value={obraSocial.nombre}
                                onChange={handleChange}         
                            />

                            <input 
                                type="text" 
                                name="porcentajecobertura"
                                id="porcentajecobertura"
                                value={obraSocial.porcentajecobertura}
                                placeholder="Porcentaje de Cobertura"
                                onChange={handleChange}           
                            />

                            
                            <button type="submit">
                                <h3>{btntext}</h3>
                            </button>
                            
                        </div>
                    </form>
                </div>
            </div>
            
        </>
    );
}

export default AgregarOS;


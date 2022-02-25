import React, {useState, useEffect} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import boton_regresar from '../assets/boton_regresar.png';

const FormComponent = ({text}) => {

    const params = useParams();
    const navigate = useNavigate();

    // Hook para guardar datos de la bd del medico
    const [medico, setMedico] = useState({
        dni: "",
        cuil: "",
        nombre: "",
        apellido: "",
        fechanac: "",
        nromatricula: "",
        correoelectronico: "",
        telefono: "",
        provincia: "",
        ciudad: "",
        direccion: "",
        codigopostal: "",
        genero: "",
        factorsanguineo: "",
        especialidad: "",
        mutual: ""
    });
 
    // Hook para saber si se está editando o no
    const [editing, setEditing] = useState(false);

    const cargarMedico = async (id) => {
        const res = await fetch(`http://localhost:4000/medicos/${id}`);
        const data = await res.json();
        setMedico(data);
        setEditing(true);
    }

    const handleChange = (e) => {
        setMedico({ ...medico, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        if (params.id) {
            cargarMedico(params.id);
        }
    },[params.id])
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (editing){
            await fetch(`http://localhost:4000/medicos/${params.id}`, {
                method: "PUT",
                body: JSON.stringify(medico),
                headers: {"Content-Type": "application/json"}
            });
            
        }else{
            await fetch("http://localhost:4000/medicos", {
                method: "POST",
                body: JSON.stringify(medico),
                headers: {"Content-Type": "application/json"}
            });
        }
        
        navigate('/medicos');
    }

    
    return (
        <>
            <div className="regresar-button-admin">
                <Link to="/medicos">
                    <button><i class="fas fa-chevron-left"></i> Agregar médico</button>
                </Link>
            </div>

            <div className="super-form-container">
                <div className="med-form-container">
                    <h2>{text} Médico</h2>
                    <form className="med-form" onSubmit={handleSubmit}>
                        <div className="fst-inputs">
                            <input type="text" placeholder="Nombre" id="nombre" name="nombre" value={medico.nombre} onChange={handleChange}></input>
                            <input type="text" placeholder="Apellido" id="apellido" name="apellido" value={medico.apellido} onChange={handleChange}></input>
                            <input type="date" id="fechanac" name="fechanac" onChange={handleChange}></input>
                            <input type="text" placeholder="DNI" id="dni" name="dni" value={medico.dni} onChange={handleChange}></input>
                        </div>

                        <div className="fst-inputs">
                            <input type="text" placeholder="CUIL" id="cuil" name="cuil" value={medico.cuil} onChange={handleChange}></input>
                            <input type="text" placeholder="Número de Matrícula" id="nromatricula" name="nromatricula" value={medico.nromatricula} onChange={handleChange}></input>
                        </div>

                        <div className="snd-inputs">
                            <input type="email" placeholder="Correo Electrónico" id="correoelectronico" name="correoelectronico" value={medico.correoelectronico} onChange={handleChange}></input>
                            <input type="text" placeholder="Número de Celular" id="telefono" name="telefono" value={medico.telefono} onChange={handleChange}></input>
                        </div>

                        <div className="snd-inputs">
                            <input type="text" placeholder="Provincia" id="provincia" name="provincia" value={medico.provincia} onChange={handleChange}></input>
                            <input type="text" placeholder="Ciudad" id="ciudad" name="ciudad" value={medico.ciudad} onChange={handleChange}></input>
                        </div>

                        <div className="trd-inputs">
                            <input type="text" placeholder="Dirección" id="direccion" name="direccion" value={medico.direccion} onChange={handleChange}></input>
                            <input type="text" placeholder="Código Postal" id="codigopostal" name="codigopostal" value={medico.codigopostal} onChange={handleChange}></input>
                            <div className="select-container-trd">
                                <select name="genero" value={medico.genero} onChange={handleChange}>
                                    <option>Género</option>
                                    <option value="m">Masculino</option>
                                    <option value="f">Femenino</option>
                                    <option value="u">Otro</option>
                                </select>
                            </div>
                            <input type="text" placeholder="Grupo Sanguíneo" id="factorsanguineo" name="factorsanguineo" value={medico.factorsanguineo} onChange={handleChange}></input>
                        </div>
                        
                        <div className="fth-inputs">
                            <input type="text" placeholder="Especialidad" id="especialidad" name="especialidad" value={medico.especialidad} onChange={handleChange}></input>
                            <input type="text" placeholder="Mutual que acepta" id="mutual" name="mutual" value={medico.mutual} onChange={handleChange}></input>
                        </div>
                        <div className="button-class-form">
                            <button type="submit">{text}</button>

                        </div>
                    </form>
                </div>

            </div>
        </>
    );
}
 
export default FormComponent;
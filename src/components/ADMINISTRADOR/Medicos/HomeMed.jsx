import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import boton_regresar from '../assets/boton_regresar.png';
import boton_agregar from '../assets/boton_agregar.png';
import IndividualMed from './IndividualMed';
import MedChecker from './MedChecker';
import '../styles/Meds.css';

const HomeMed = () => {


    // Mostrar verificación previa a agregar un médico
    const [form, setForm] = useState(false);


    // Hook para guardar los datos de los médicos
    const [medicos, setMedicos] = useState([]);
    const [tablaMedicos, setTablaMedicos] = useState([]);


    const cargarMedicos = async () => {
        const res = await fetch('http://localhost:4000/medicos');
        const data = await res.json();
        setMedicos(data);
        setTablaMedicos(data);
    }

    console.log(medicos);

    useEffect(() => {
        cargarMedicos();
    }, [])

    

    //Filtro dinámico para la barra de búsqueda

    const handleInputChange = (e) =>{
        
        filtrar(e.target.value);
    }

    const filtrar = (search) => {
        let resultado = tablaMedicos.filter( elemento => {
            if(elemento.nombre.toString().toLowerCase().includes(search.toLowerCase())
                || elemento.apellido.toString().toLowerCase().includes(search.toLowerCase())
            ){
                return elemento;
            }
        });
        setMedicos(resultado);
    }


    return (
        <>
            <div className="btn-container-admin">
                <div className="regresar-btn-os-admin">
                    <Link to="/">
                        <button><i class="fas fa-chevron-left"></i> Medicos</button>
                    </Link>
                </div>

                <input
                    type="text"
                    name="medico"
                    id="medico"
                    placeholder="Buscar médico"
                    className="med-input"
                    onChange={handleInputChange}
                >
                </input>

                <div className="agregar-btn-med-admin" onClick={() => setForm(!form)}>
                    <button><i class="fas fa-plus"></i> Agregar médico</button>
                </div>
            </div>

            
            
            <div className="main-container-admin">

                {form && <MedChecker/>}

                <div className="list-container-admin">
                    <section>

                        {
                            medicos.map( med => {
                                return <IndividualMed
                                            medico_obj={med}
                                            key={med.dni}
                                            medicos={medicos}
                                            setMedicos={setMedicos}
                                        />
                            })
                        }

                    </section>
                </div>
            </div>
            
        </>
    );
}
 
export default HomeMed;
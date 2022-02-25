import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import boton_regresar from '../assets/boton_regresar.png';
import boton_agregar from '../assets/boton_agregar.png';
import '../styles/HomeOS.css';
import IndividualOS from './IndividualOS';

const HomeOS = () => {


    // Hook para guardar los datos de las Obras Sociales
    const [obras, setObras] = useState([]);
    
    const cargarObras = async () => {
        const response = await fetch("http://localhost:4000/obra-social");
        const data = await response.json();
        setObras(data);
    }

    useEffect(() => {
        cargarObras();
    }, []);

    
    return (
        <>
            <div className="btn-container-admin">
                <div className="regresar-btn-os-admin">
                    <Link to="/">
                        <img src={boton_regresar} alt="regresar"></img>
                        <h2>Regresar</h2>
                    </Link>
                </div>

                <div className="agregar-btn-admin">
                    <Link to="/obra-social/agregar">
                        <h2>Agregar Obra Social</h2>
                        <img src={boton_agregar} alt="agregar"></img>
                    </Link>
                </div>
            </div>
            
            <div className="main-container-admin">
                <div className="list-container-admin">
                    <section>
                        {
                            obras.map( obra => {
                                return <IndividualOS
                                            obra={obra}
                                            key={obra.id}
                                            setObras={setObras}
                                            obras={obras}
                                        />
                            })
                        }
                    </section>
                </div>
            </div>
        </>
    );
}

export default HomeOS;
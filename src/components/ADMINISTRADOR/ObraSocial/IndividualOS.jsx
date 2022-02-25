import React from 'react';
import { Link } from 'react-router-dom';

const IndividualOS = ({obra, setObras, obras}) => {

    const { id, nombre, porcentajecobertura } = obra;

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/obra-social/${id}`, {
            method: 'DELETE'
        });

        setObras(obras.filter( (obra) => obra.id !== id))
    }
    
    return (
        <div className="super-os-container-admin">
            <div className="OS-container-admin">
                <div className="info-container-admin">
                    <h2>{nombre}</h2>
                    <h2>Cobertura: {porcentajecobertura}%</h2>
                </div>
                <div className="super-btn-container-admin">
                    <div className="btn-container-os-admin">
                        <Link to={`editar/${id}`}>
                            <button className="os-btn-admin">Editar</button>
                        </Link>
                        <button className="os-btn-admin" onClick={() => handleDelete(id)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualOS;
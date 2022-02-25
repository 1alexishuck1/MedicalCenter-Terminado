import React from 'react';
import { Link } from 'react-router-dom';

const IndividualMed = ({medico_obj, medicos, setMedicos}) => {

    const {cuil, nombre, apellido} = medico_obj;

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/medicos/${id}`, {
            method: 'DELETE'
        });

        setMedicos(medicos.filter( (med) => med.cuil !== cuil))
    }
    
    return (
        <div className="super-os-container-admin">
            <div className="OS-container-admin">
                <h2>{`${nombre} ${apellido}`}</h2>
                <div className="super-btn-container-admin">
                    <div className="btn-container-os-admin">
                        <Link to={`editar/${cuil}`}>
                            <button className="os-btn-admin">Editar</button>
                        </Link>
                        <button className="os-btn-admin" onClick={() => handleDelete(cuil)}>Eliminar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndividualMed;
import medico from './assets/medico.jpg'
import React from 'react';

const ProfesionalIndividual = ({ profe }) => {

    const { nombre, apellido } = profe;

    return (  
        <div className="card-profesionals">
            <img src={medico} alt="medico" />
            <div className="text-container">
                <h3>{nombre + " " + apellido}</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque exercitationem dicta aliquid ratione,
                    nam culpa nulla, ullam hic cupiditate consequatur sit architecto tempora assumenda! Provident culpa
                    sint officia laboriosam sunt!</p>
            </div>
        </div>
    );
}
 
export default ProfesionalIndividual;
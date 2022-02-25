import React from 'react';
import './styles/SelectProfesional.css';

const SelectProfesional = () => {
    return ( 
        <div className="select-profesionales">

            <form className="formSP">
                <input type="text" placeholder="Búsque un médico"></input>
                <button>
                    <i className="fas fa-search"></i>
                </button>
            </form>

            <select>
                <option>Obra social</option>
                <option>a</option>
                <option>a</option>
                <option>a</option>
                <option>a</option>
            </select>

            <select>
                <option>Especialidad</option>
                <option>a</option>
                <option>a</option>
                <option>a</option>
                <option>a</option>
            </select>
        </div>
    );
}
 
export default SelectProfesional;
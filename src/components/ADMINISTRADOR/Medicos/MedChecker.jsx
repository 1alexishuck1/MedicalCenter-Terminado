import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Error from './Error';

const MedChecker = () => {

    const msj = "Médico existente";

    const navigate = useNavigate();

    const [pass, setPass] = useState(false);
    const [data, setData] = useState([]);
    const [cuil, setCuil] = useState('');
    const [pseudocuil, setPseudocuil] = useState('');

    const handleChange = (e) => {

        setPseudocuil(e.target.value);

        if(e.target.value.length === 11){
            setCuil(e.target.value);
        }
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        cargarMedico(cuil);
    }

    const cargarMedico = async (id) => {

        const res = await fetch(`http://localhost:4000/medicos/${id}`);
        const data = await res.json();
        setData(data);
        setPass(true);
    }
    
    return (
        <>
            <div className="check-container-admin">
                <h2>Ingrese el CUIL del Médico</h2>
                
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="__-________-_"
                        name="cuil"
                        id="cuil"
                        required
                        onChange={handleChange}
                    >
                    </input>
                    
                    <button className="verificar-btn-admin" type="submit">
                        <span>Verificar</span>
                    </button>
                </form>
                {cuil && data.dni === undefined && pass ? navigate('/medicos/agregar/') : cuil && data.dni !== undefined && data.cuil === pseudocuil && <Error error={msj} cuil={pseudocuil}/>}
            </div>

            <div className="fondo-medicos-admin">
                
            </div>
        </>
    );
}

export default MedChecker;
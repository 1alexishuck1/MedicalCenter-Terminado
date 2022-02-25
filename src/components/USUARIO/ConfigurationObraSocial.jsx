import React, {useState} from 'react';
import AgregarObraSocial from './AgregarObraSocial';

export default function ConfigurationObrasSociales() {
    
    let [Agregar, setAgregar] = useState(false);
    
    
    return (
        <>
            <div className='container-configuracion'>
                <h3>Configuracion de Obras Sociales de la Cuenta</h3>
                <div className='conf-option'>
                    <h4>Obra social</h4>
                    <button>Eliminar</button>
                </div>
                <div className='btn-agregar'>
                    <button onClick={() => setAgregar(Agregar = !Agregar)}> <i class="fas fa-plus"></i> Agregar</button>
                </div>
            </div>
        {Agregar && <AgregarObraSocial
                    estado={Agregar}
                    setEstado={setAgregar} />}
        </>
    )
}
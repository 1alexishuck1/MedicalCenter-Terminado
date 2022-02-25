import React, { useState } from 'react';
import Contraseña from './Contraseña';

export default function ConfigurationSecurity(){
    
    let [Pass, setPass] = useState(false);
    
    return(
        <>
            <div className='container-configuracion'>
                <h3>Configuracion de Seguridad de la Cuenta</h3>
                <div className='conf-option'>
                    <h4>Contraseña</h4>
                    <button onClick={() => setPass(Pass = !Pass)}>Editar</button>
                </div>
            </div>
            {Pass && <Contraseña 
                        estado={Pass}
                        setEstado={setPass}/>}
        </>
    )
}
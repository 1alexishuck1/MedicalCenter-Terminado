import React, {useState} from "react";
import NombreyApellido from "./NombreyApellido";
import CorreoElectronico from './CorreoElectronico';
import Telefono from './Telefono';

export default function ConfigurationGeneral() {

    let [Name, setName] = useState(false);
    let [Mail, setMail] = useState(false);
    let [Phone, setPhone] = useState(false);

    return (
        <>
            <div className='container-configuracion'>
                <h3>Configuracion General de la Cuenta</h3>
                <div className='conf-option'>
                    <h4>Nombre y apellido</h4>
                    <button onClick={() => setName(Name = !Name)}>Editar</button>
                </div>
                <div className='conf-option'>
                    <h4>Correo Electrónico</h4>
                    <button onClick={() => setMail(Mail = !Mail)}>Editar</button>
                </div>
                <div className='conf-option'>
                    <h4>Teléfono</h4>
                    <button onClick={() => setPhone(Phone = !Phone)}>Editar</button>
                </div>
            </div>
            {Name && <NombreyApellido 
                        estado={Name}
                        setEstado={setName}/>}

            {Mail && <CorreoElectronico 
                        estado={Mail}
                        setEstado={setMail}/>}

            {Phone && <Telefono 
                        estado={Phone}
                        setEstado={setPhone}/>}
        </>
    )
}
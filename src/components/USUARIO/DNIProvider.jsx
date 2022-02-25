import React, { useState } from 'react';

export const DNIContext = React.createContext({}); 

const DNIProvider = ({children}) => {

    const [dni, setDni] = useState('');
    const [codigo, setCodigo] = useState('');
    const [id_transaccion, setTransaccion] = useState('');
    const [sesion, setSesion] = useState(false);

    return (
        <DNIContext.Provider value={{dni, setDni, codigo, setCodigo, id_transaccion, setTransaccion, sesion, setSesion}}>
            {children}
        </DNIContext.Provider>
    );
}
 
export default DNIProvider;
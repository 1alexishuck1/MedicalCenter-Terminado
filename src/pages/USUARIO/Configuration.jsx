import React,{useState} from 'react';
import '../USUARIO/styles/Configuration.css';
import ConfigurationGeneral from '../../components/USUARIO/ConfigurationGeneral';
import ConfigurationSecurity from '../../components/USUARIO/ConfigurationSecurity';
import ConfigurationObrasSociales from '../../components/USUARIO/ConfigurationObraSocial';
import HeaderFuncional from '../../components/USUARIO/HeaderFuncional';

export default function Configuration(){
    let [general,setGeneral] = useState(false);
    let [seguridad,setSeguridad] = useState(false);
    let [obrasSociales,setObrasSociales] = useState(false);

    const changeStateGeneral = () =>{
        setGeneral(true);
        setSeguridad(false);
        setObrasSociales(false);
    }

    const changeStateSeguridad = () =>{
        setGeneral(false);
        setSeguridad(true);
        setObrasSociales(false);
    }

    const changeStateObrasSociales = () =>{
        setGeneral(false);
        setSeguridad(false);
        setObrasSociales(true);
    }

    return(
        <>
            <HeaderFuncional />
            <br /><br /><br /><br />
            <div className='container-principal'>

                <div className='container-aside'>

                    <button onClick={()=> changeStateGeneral()}>General</button>
                    <button onClick={()=> changeStateSeguridad()}>Seguridad</button>
                    <button onClick={()=> changeStateObrasSociales()}>Obras Sociales</button>
                </div>
                {general && <ConfigurationGeneral/>}

                {obrasSociales && <ConfigurationObrasSociales/>}
                
                {seguridad && <ConfigurationSecurity/>}
            </div>
        </>
    )
}
import React from 'react';
import GrillaHistorialClinico from '../../components/MEDICO/GrillaHistorialClinico';
import HeaderMedico from '../../components/MEDICO/HeaderMedico';
import NavHistClin from '../../components/MEDICO/NavHistClin';

const HistorialClinico = () => {
    return ( 
        <>
            <HeaderMedico />
            <br />
            <NavHistClin />
            <GrillaHistorialClinico />
        </>
    );
}
 
export default HistorialClinico;
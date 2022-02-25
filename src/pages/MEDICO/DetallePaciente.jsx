import React from 'react';

import HeaderMedico from '../../components/MEDICO/HeaderMedico';
import NavDetallePaciente from '../../components/MEDICO/NavDetallePaciente';
import GrillaDetallePaciente from '../../components/MEDICO/GrillaDetallePaciente';

const DetallePaciente = () => {
    return ( 
        <>
            <HeaderMedico />
            <br />
            <NavDetallePaciente />
            <GrillaDetallePaciente />
        </>
    );
}
 
export default DetallePaciente;
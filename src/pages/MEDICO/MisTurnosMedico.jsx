import React from 'react';

import HeaderMedico from '../../components/MEDICO/HeaderMedico';
import NavMisTurnos from '../../components/MEDICO/NavMisTurnos';
import GrillaMisTurnos from '../../components/MEDICO/GrillaMisTurnos';


const MisTurnosMedico = () => {
    return ( 
        <div>
            <HeaderMedico />
            <br />
            <NavMisTurnos />
            <GrillaMisTurnos />
        </div>
    );
}
 
export default MisTurnosMedico;
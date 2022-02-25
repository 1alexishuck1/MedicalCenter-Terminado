import React from 'react';

import './styles/HistoriaClinicaInfo.css';

export default function HistoriaClinicaInfo({historiaClinicaIndividualDetalle}) {

    const { motivo, estudios_solicitados, fecha, medicamentos} = historiaClinicaIndividualDetalle;


    return (
        <div className="container-info">
            <h2>Información</h2>
            <h4>Motivo: {motivo}</h4>
            <h4>Estudios: {estudios_solicitados}</h4>
            <h4>Medicamentos: {medicamentos}</h4>
            <h4>Fecha: {fecha.slice(0,10)}</h4>
        </div>
    )
}
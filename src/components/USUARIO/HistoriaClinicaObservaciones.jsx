import React from "react";
import './styles/HistoriaClinicaObservaciones.css';

export default function HistoriaClinicaObservaciones({historiaClinicaIndividualDetalle}) {

    const {diagnostico} = historiaClinicaIndividualDetalle
    return (
        <div className="container-observaciones">
            <h2>Observaciones</h2>
            <p>{diagnostico}</p>
        </div>
    )
}
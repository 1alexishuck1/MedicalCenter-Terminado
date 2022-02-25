import React, {useEffect, useState} from 'react';
import './styles/CardProfesionals.css'
import ProfesionalIndividual from './ProfesionalIndividual';

export default function CardProfesionals() {

// Hook para guardar los datos de los profesionales
const [profesional, setProfesional] = useState([]);
    
const mostrarProfesionales = async () => {
    const response = await fetch("http://localhost:4000/medicos");
    const data = await response.json();
    setProfesional(data);
}

useEffect(() => {
    mostrarProfesionales();
}, []);


    return (
        <>
        {
            profesional.map( profe => {
                return <ProfesionalIndividual 
                        profe={profe}
                        key={profe.id} 
                />
            })
        }
        </>
    )
}
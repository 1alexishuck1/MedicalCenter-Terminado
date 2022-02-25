import React from 'react';
import Turnos from './Turnos';
import '../styles/GrillaTurnos.css';

const turnos = [
    {
        "nombreMédico":"Felipe",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 1
    },
    {
        "nombreMédico":"Ricardo",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 2
    },
    {
        "nombreMédico":"José",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 3
    },
    {
        "nombreMédico":"Juan",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 4
    },
    {
        "nombreMédico":"Pepe",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 5
    },
    {
        "nombreMédico":"Cristian",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 6
    },
    {
        "nombreMédico":"Foche",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 7
    },
    {
        "nombreMédico":"Chili",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 8
    },
    {
        "nombreMédico":"Foche",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 9
    },
    {
        "nombreMédico":"Foche",
        "especialidad": "falopa",
        "obraSocial": "OSDE",
        "id": 10
    }
]


const GrillaTurnos = () => {

    return (
        <div className="container-grilla">
            {turnos.map( (turno) =>{
                return (
                    <Turnos 
                        objTurnos={turno}
                        key={turno.id}/>
                );
            })}
        </div>
    );
}
 
export default GrillaTurnos;
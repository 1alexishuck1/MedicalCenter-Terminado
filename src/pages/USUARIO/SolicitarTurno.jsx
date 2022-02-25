import React, { useEffect } from 'react';
import Footer from '../../components/USUARIO/Footer';
import SelectOpt from '../../components/USUARIO/turnos/SelectOpt';
import HeaderFuncional from '../../components/USUARIO/HeaderFuncional';
import './styles/SolicitarTurno.css';
import InputsFechaTurno from '../../components/USUARIO/InputsFechaTurno';


const SolicitarTurno = () => {

    const deleteImpagos = async() => {
        const resultado = await fetch(`http://localhost:4000/deleteimpagos`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });
    }

    useEffect(() => {
        deleteImpagos()
    },[])

    return ( 
        <>
            <HeaderFuncional/>
            <br/>
            <div className="container-select">
                <SelectOpt />
            </div>

            <div className="container-main">
                <InputsFechaTurno />
            </div>
            <Footer />
        </>
    );
}
 
export default SolicitarTurno;
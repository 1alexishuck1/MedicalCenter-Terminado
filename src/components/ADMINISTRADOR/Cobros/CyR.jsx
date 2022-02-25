import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import boton_regresar from '../assets/boton_regresar.png';
import IndividualCobro from './IndividualCobro';


const CyR = () => {

    const [dataCobros, setDataCobros] = useState();

    const getTurnos = async () => {
        const res = await fetch(`http://localhost:4000/turno`);
        const data = await res.json();
        console.table(data);
        setDataCobros(data);
    }

    const peticionEliminar = async () => {
        await fetch(`http://localhost:4000/deleteimpagos`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });
    }

    useEffect(() =>{
        peticionEliminar();
        getTurnos();
    }, []);

    return (
        <>
            <div className="btn-container-admin">
                <div className="regresar-btn-os-admin">
                    <Link to="/">
                        <img src={boton_regresar} alt="regresar"></img>
                        <h2>Regresar</h2>
                    </Link>
                </div>
            </div>
            
            <div className="main-container-admin">

                <div className="list-container-admin">
                    <section>
                        {dataCobros &&
                            dataCobros.map ( (data) => {
                                return <IndividualCobro id={data.id_transaccion} 
                                                        monto={data.montoapagar} 
                                                        key={data.id_transaccion}
                                                        dataCobros={dataCobros}
                                                        setDataCobros={setDataCobros}
                                                        />
                            })
                        }
                    </section>
                </div>
            </div>
        </>
    );
}
 
export default CyR;
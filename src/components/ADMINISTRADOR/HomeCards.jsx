import React from 'react'
import {Link} from 'react-router-dom';

const HomeCards = () => {
    return (
        <div className="grid-container-admin">
            <div className="cards-container-admin">
                <div className="little-card-container-admin">

                    <Link to="/medicos">
                        <div className="card-admin">
                            <h2>Médicos</h2>
                        </div>
                    </Link>

                    <Link to="/mensajes">
                        <div className="card-admin">
                            <h2>Enviar Mensaje</h2>
                        </div>
                    </Link>

                </div>

                <div className="big-container-card-admin">

                    <Link to="/obra-social">
                        <div className="card2-admin">
                            <h2>Administrar Obras Sociales</h2>
                        </div>
                    </Link>

                    <Link to="/cobros">
                        <div className="card2-admin">
                            <h2>Cobros y Reintegros</h2>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    );
}
 
export default HomeCards;
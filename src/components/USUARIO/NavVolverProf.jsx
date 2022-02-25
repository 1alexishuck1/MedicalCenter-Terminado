import React from 'react';
import { Link, useParams } from "react-router-dom";


import './styles/NavVolverProf.css';

const NavVolverProf = () => {

    const params = useParams()
    console.log(params.id)

    return ( 
        <>
            <div className="container-main-selectNV">
                <div className="container-buttonNV">
                    <div className="btn-back">
                        <Link to={`/home/${params.id}`}>
                            <button><i class="fas fa-chevron-left"></i> Profesionales</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default NavVolverProf;
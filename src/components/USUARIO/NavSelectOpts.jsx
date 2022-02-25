import React from 'react';
import { Link, useParams } from "react-router-dom";
import './styles/NavSelectOpts.css';


const SelectOpt = () => {

    const params = useParams();

    return (
        <>
            <div className="container-main-selectHC">
                <div className="container-buttonHC">
                    <Link to={`/home/${params.id}`}>
                        <button><i class="fas fa-chevron-left"></i> Historia clínica</button>
                    </Link>
                </div>
        
            </div>
        </>
    );
}
 
export default SelectOpt;
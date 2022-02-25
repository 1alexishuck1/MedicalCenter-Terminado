import React from 'react';
import { Link, useParams } from "react-router-dom";
import '../styles/SelectOpt.css';

const SelectOpt = () => {

    const params = useParams();

    return (
        <>  
            <div className="container-main-selectST">
                <div className="container-buttonST">
                    <div className="btn-back">
                        <Link to={`/home/${params.id}`}>
                            <button><i class="fas fa-chevron-left"></i> Solicitar turno</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default SelectOpt;


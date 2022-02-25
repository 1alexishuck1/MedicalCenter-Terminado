import React from 'react';
import '../styles/Meds.css'

const Error = ({error, cuil}) => {
    return (
        <>
        {cuil.length === 11 ? 
            <div className="error-container-admin">
                <h2>{error}</h2>
            </div>
            : ''
        }
            
        </>
    );
}
 
export default Error;
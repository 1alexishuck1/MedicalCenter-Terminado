import React from 'react';

const Telefono = ({estado, setEstado}) => {

    return (
        <> 
            <div className="container-flotante">
                <h3>Agregar obra social</h3>
                <input type="text" placeholder="Nombre de la obra social" />
                <input type="text" placeholder="Número de afiliado" />
                <button>Agregar</button>
            </div>
            <div className="fondo-config">

            </div>
        </>
    );
}
 
export default Telefono;
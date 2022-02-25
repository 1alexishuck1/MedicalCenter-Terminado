import React from 'react';
import { useLocation, useParams, useNavigate} from "react-router-dom";
import logo from '../USUARIO/assets/logo.png';
import './styles/ErrorMP.css';


const ErrorMP = () => {

    const location = useLocation();
    let id_transaccion = location.search.split('&')[7].split('=')[1];
    console.log(id_transaccion);

    const params = useParams();
    const navigate = useNavigate();


    const eliminarTurnoTransaccion = async() =>{
        await fetch(`http://localhost:4000/deletetransaccion/${id_transaccion}`,{
            method: "DELETE",
            headers: {"Content-Type": "application/json"}
        });
        navigate(`/home/${params.id}`)
    }

    return ( 
        <>
            <div className="container-Er">
                <div className="imagen-logoPA">
                    <img src={logo} alt="" />
                </div>
                <div className="container-formulario-Er">
                    <h2>Su pago ha sido rechazado.</h2>
                    <button onClick={() => eliminarTurnoTransaccion()}>Volver al inicio</button>
                </div>
            </div>
        </>
    );
}
 
export default ErrorMP;
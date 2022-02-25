import React, {useState, useEffect} from 'react';
import { FacebookProvider, LoginButton, Status  } from 'react-facebook';
import RegistroFB from '../../pages/USUARIO/RegistroFB';
import { useNavigate } from 'react-router-dom';

import './FbButton.css';
 
const FbButton = () => {

  const [datos, setDatos ] = useState({
    nombre: '',
    apellido: '',
    correo: '',
    contraseña: ''
  })

  const navigate = useNavigate();

  const handleResponse = (response) => {
    console.log(response);
    console.log(response.profile.first_name)
    console.log(response.profile.last_name)
    console.log(response.profile.email)
    console.log(response.profile.id)

    setDatos({
      nombre: response.profile.first_name,
      apellido: response.profile.last_name,
      correo: response.profile.email,
      contraseña: response.profile.id
    });
  }

  {console.log(datos)}

  const handleError = (error) => {
    console.log(error)
  }

  return ( 
    <FacebookProvider 
        appId="1105914793535351">
        <div className="login-btn">
          <LoginButton
            scope="email"
            onCompleted={handleResponse}
            onError={handleError}
          >
            <span>Continuar con Facebook</span>
          </LoginButton>
        </div>

        <Status>
          {({ loading, status }) => (
            <div>
              {console.log("Loading: " + loading)}
              {console.log("Status: " + status)}

              {status === "connected" && <RegistroFB
                                          nombre={datos.nombre}
                                          apellido={datos.apellido}
                                          correo={datos.correo}
                                          contraseña={datos.contraseña}
                                          />}
              </div>
          )}
        </Status>


          
      </FacebookProvider>
  );
}
 
export default FbButton;

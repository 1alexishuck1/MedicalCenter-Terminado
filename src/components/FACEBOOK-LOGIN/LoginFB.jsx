import React, {useEffect, useState} from 'react';
import FbButton from './FbButton';
import { FacebookProvider, LoginButton, Status  } from 'react-facebook';
import RegistroFB from '../../pages/USUARIO/RegistroFB';
import { useNavigate } from 'react-router-dom';

const LoginFB = () => {

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
    
            <Status>
              {({ loading, status }) => (
                <div>
                {status !== "connected" &&
                    <div className="login-btn">
                    <LoginButton
                        scope="email"
                        onCompleted={handleResponse}
                        onError={handleError}
                    >
                        <span>Continuar con Facebook</span>
                    </LoginButton>
                    </div>
                }

                  {console.log("Loading: " + loading)}
                  {console.log("Status: " + status)}
    
                  {status === "connected" && <RegistroFB
                                              nombre1={datos.nombre}
                                              apellido1={datos.apellido}
                                              correo1={datos.correo}
                                              contraseña1={datos.contraseña}
                                              />}
                  </div>
              )}
            </Status>
    
    
              
          </FacebookProvider>
      );

}
 
export default LoginFB;
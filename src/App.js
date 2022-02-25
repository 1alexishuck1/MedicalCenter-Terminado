import React from 'react';
import Home from './pages/USUARIO/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Login from './pages/USUARIO/Login';
import Registro from './pages/USUARIO/Registro';
import RecuperarContraseña from './pages/USUARIO/RecuperarContraseña';
import CodigoRecuperar from './pages/USUARIO/CodigoRecuperar';
import SolicitarTurno from './pages/USUARIO/SolicitarTurno';
import HistoriaClinica from './pages/USUARIO/HistoriaClinica';
import MisTurnos from './pages/USUARIO/MisTurnos';
import GetNews from './pages/USUARIO/GetNews';
import GetNewsDetail from './pages/USUARIO/GetNewsDetail';
import Configuration from './pages/USUARIO/Configuration';
import Restablecercontraseña from './pages/USUARIO/RestablecerContraseña';


import HomeMedico from './pages/MEDICO/HomeMedico';
import HistorialClinico from './pages/MEDICO/HistorialClinico';
import MisTurnosMedico from './pages/MEDICO/MisTurnosMedico';
import DetallePaciente from './pages/MEDICO/DetallePaciente'
import Contact from './pages/USUARIO/Contact';
import Profesionals from './pages/USUARIO/Profesionals';
import HistoriaClinicaDetalle from './pages/USUARIO/HistoriaClinicaDetalle';
import LoginFB from './components/FACEBOOK-LOGIN/LoginFB';
import HistoriaDetalle from './pages/MEDICO/HistoriaDetalle';

import HomeAdmin from './pages/ADMINISTRADOR/HomeAdmin';
import Medicos from './pages/ADMINISTRADOR/Medicos';
import ObraSocial from './pages/ADMINISTRADOR/ObraSocial';
import Mensajes from './pages/ADMINISTRADOR/Mensajes';
import Cobros from './pages/ADMINISTRADOR/Cobros';
import AgregarOS from './components/ADMINISTRADOR/ObraSocial/AgregarOS';
import AgregarMed from './components/ADMINISTRADOR/Medicos/AgregarMed';
import EditarMed from './components/ADMINISTRADOR/Medicos/EditarMed';


import DNIProvider from './components/USUARIO/DNIProvider';
import ErrorMP from './pages/USUARIO/ErrorMP';
import AprobadoMP from './pages/USUARIO/AprobadoMP';
import ArgegarHistorialclinico from './pages/MEDICO/AgregarHistorialclinico';


function App() {

  return (
    <DNIProvider >
      <Router>
        <Routes>
              
          {/* RUTAS DE REGISTRO, LOGIN, ETC */}

          <Route path="/login" element={<Login />} />
          <Route path="/loginfb" element={<LoginFB />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/recuperarcontrase" element={<RecuperarContraseña />} />
          <Route path="/codigorecuperar/:id" element={<CodigoRecuperar />} />
          <Route path="/restablecercontrase/:id" element={<Restablecercontraseña />} />




          <Route path="/errormp/:id" element={<ErrorMP />} />

          <Route path="/aprobadomp/:id" element={<AprobadoMP />} />
          


          {/* RUTAS DEL USUARIO */}

          <Route exact path="/home/:id" element={<Home />} />
                        
          <Route exact path="/solicitarturnos/:id" element={<SolicitarTurno />} />

          <Route path="/historiaclinica/:id" element={<HistoriaClinica />} />
            
          <Route path="/misturnos/:id" element={<MisTurnos/>} />
            
          <Route exact path="/getnews/:id" element={<GetNews />} />
            

          <Route path="/getnewsdetail/:id" element={<GetNewsDetail/>} />
            

          <Route path="/configuration/:id" element={<Configuration />} />
            

          <Route path="/contacto/:id" element={<Contact />} />
            

          <Route path="/profesionales/:id" element={<Profesionals />} />
            

          <Route path="/historiaclinicadetalle/:id" element={<HistoriaClinicaDetalle />} />
          

          {/* RUTAS DEL MÉDICO */}

          <Route path="/homemedico/:id" element={<HomeMedico />} />
            

          <Route path="/historialclinico/:id" element={<HistorialClinico />} />
            

          <Route path="/misTurnosmedico/:id" element={<MisTurnosMedico />} />
            
          <Route path="/agregarhistorialclinico/:id" element={<ArgegarHistorialclinico />} />

          <Route path="/detallepaciente/:id" element={<DetallePaciente />} />

          <Route path="/historiadetalle/:id" element={<HistoriaDetalle />}  />

          {/* RUTAS DEL ADMIN */}

          <Route path='/' element={<HomeAdmin/>}/>


          <Route path='/medicos' element={<Medicos/>}/>
          <Route path='/medicos/agregar' element={<AgregarMed/>}/>
          <Route path='/medicos/editar/:id' element={<EditarMed/>}/>


          <Route path='/obra-social' element={<ObraSocial/>}/>  
          <Route path='/obra-social/editar/:id' element={<AgregarOS text="Editar" btntext="Guardar Cambios"/>}/> 
          <Route path='/obra-social/agregar' element={<AgregarOS text="Agregar" btntext="Agregar"/>}/>


          <Route path='/mensajes' element={<Mensajes/>}/>


          
          <Route path='/cobros' element={<Cobros/>}/> 
        </Routes>
      </Router>
    </DNIProvider>
  );
}

export default App;

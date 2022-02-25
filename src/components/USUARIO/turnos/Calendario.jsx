import React, {useState} from 'react';
import '../styles/Calendario.css';
import 'react-calendar/dist/Calendar.css';

import Calendar from 'react-calendar';

const Calendario = () => {

    const [fechaSelecionada, setFechaSeleccionada] = useState(new Date());
    console.log(fechaSelecionada)

    return (
        <div className="container-calendario">
        <Calendar onChange={setFechaSeleccionada} value={fechaSelecionada}
      />
        </div>
    );
}
 
export default Calendario;
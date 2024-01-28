import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './components/Buscador';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import basedatos from './assets/js/basedatos.js';
import './app.css';

function App() {
  const [data, setData] = useState(basedatos);
  const [dataFilter, setDataFilter] = useState(data);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ error: false, msg: '', color: '' });

  const agregarUsuario = (nuevoUsuario) => {
    setData((prevData) => [...prevData, nuevoUsuario]);
    setDataFilter((prevDataFilter) => [...prevDataFilter, nuevoUsuario]);
  };

  return (
    <div className="container-fluid">
      <h1 className="text-left mt-3 ms-0">Listado de Colaboradores</h1>
      <div className="ms-0 mb-3">
        <Buscador data={data} setDataFilter={setDataFilter} />
      </div>
      <div className='d-flex flex-column flex-md-row'>
        <div className='custom-listado-width mb-3 mb-md-0'> {/* Agregado un div contenedor con clase custom-listado-width */}
          <Listado dataFilter={dataFilter} />
        </div>
        <div className='ms-1'>
          <h4>Agregar Nuevo Colaborador</h4>
          <Formulario setError={setError} setSuccess={setSuccess} agregarUsuario={agregarUsuario} />
          <Alert error={error.error} msg={error.msg} color={error.color} success={success} />
        </div>
      </div>
    </div>
  );
}

export default App;

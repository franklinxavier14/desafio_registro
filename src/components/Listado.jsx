// Listado.js

import React from 'react';
import Table from 'react-bootstrap/Table';

const Listado = ({ dataFilter }) => {
  const usuarios = dataFilter.map((usuario) => (
    <tr className='align-middle' key={usuario.id}>
      <td>{usuario.nombre}</td>
      <td>{usuario.email}</td>
      <td>{usuario.edad}</td>
      <td>{usuario.cargo}</td>
      <td>{usuario.telefono}</td>
    </tr>
  ));

  return (
    <div className='table-responsive'>
      <Table responsive bordered hover variant="light" className="mt-4">
        <thead>
          <tr>
          <th className="bg-secondary text-white">Nombre</th>
            <th className="bg-secondary text-white">Correo</th>
            <th className="bg-secondary text-white">Edad</th>
            <th className="bg-secondary text-white">Cargo</th>
            <th className="bg-secondary text-white">Telefono</th>
          </tr>
        </thead>
        <tbody>{usuarios}</tbody>
      </Table>
    </div>
  );
};

export default Listado;

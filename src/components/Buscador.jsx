import React from 'react';

const Buscador = ({ data, setDataFilter }) => {
  const inputHandler = (e) => {
    const buscarPalabra = e.target.value.toLowerCase();

    const resultado = data.filter(
      (usuario) =>
        usuario.nombre.toLowerCase().includes(buscarPalabra) ||
        usuario.email.toLowerCase().includes(buscarPalabra) ||
        usuario.edad.toString().toLowerCase().includes(buscarPalabra) ||
        usuario.cargo.toLowerCase().includes(buscarPalabra) ||
        usuario.telefono.toLowerCase().includes(buscarPalabra)
    );

    setDataFilter(resultado);
  };

  return (
    <div className='buscador col-12 col-md-6'>
      <input
        type="text"
        name="buscador"
        // id="buscador"
        placeholder='Busca un colaborador'
        className='form-control mb-3'
        onChange={inputHandler}
      />
    </div>
  );
};

export default Buscador;

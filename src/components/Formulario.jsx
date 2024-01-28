import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Formulario = ({ setError, setSuccess, agregarUsuario }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const validarDatos = (e) => {
    e.preventDefault();

    const { nombre, email, edad, cargo, telefono } = formData;
    const ValidacionDatos = !nombre || !email || !edad || !cargo || !telefono;

    if (ValidacionDatos) {
      setError({
        error: true,
        msg: 'Completa todos los campos',
        color: 'warning',
      });
      setSuccess(false);
    } else {
      setError({
        error: false,
        msg: 'Colaborador Agregado',
        color: 'success',
      });
      setSuccess(true);

   
      agregarUsuario({
        // id: Date.now(),
        nombre: formData.nombre,
        email: formData.email,
        edad: formData.edad,
        cargo: formData.cargo,
        telefono: formData.telefono,
      });

     
      setFormData({
        nombre: '',
        email: '',
        edad: '',
        cargo: '',
        telefono: '',
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formStyle = {
    paddingTop: '30px',
  };

  return (
    <Form style={formStyle} onSubmit={validarDatos} className="bg-light p-4 rounded">
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Control
          name='nombre'
          type='text'
          placeholder='Ingresa tu nombre'
          value={formData.nombre}
          onChange={handleChange}
          className='mb-2'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEmail'>
        <Form.Control
          name='email'
          type='email'
          placeholder='tuemail@ejemplo.com'
          value={formData.email}
          onChange={handleChange}
          className='mb-2'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicEdad'>
        <Form.Control
          name='edad'
          type='string'
          placeholder='Ingresa tu edad'
          value={formData.edad}
          onChange={handleChange}
          className='mb-2'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicCargo'>
        <Form.Control
          name='cargo'
          type='text'
          placeholder='Ingresa tu cargo'
          value={formData.cargo}
          onChange={handleChange}
          className='mb-2'
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formBasicTelefono'>
        <Form.Control
          name='telefono'
          type='text'
          placeholder='Ingresa tu telefono'
          value={formData.telefono}
          onChange={handleChange}
          className='mb-3'
        />
      </Form.Group>

      <Button variant='secondary' type='submit'>
      Agregar Colaborador
      </Button>
    </Form>
  );
};

export default Formulario;

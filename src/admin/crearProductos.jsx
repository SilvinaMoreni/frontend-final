import React, { useState } from 'react';
import { addProducts } from '../fetching/products.fetching';
import { useNavigate } from 'react-router-dom';
import "./crearProductos.css"

const CrearProductos = () => {
  const [errorText, setErrorText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    
    const confirmation = window.confirm(`¿Confirmar creación del producto?`);

    if (confirmation) {
      try {
        event.preventDefault();
        const producto = {
          titulo: event.target.titulo.value,
          descripcion: event.target.descripcion.value,
          stock: event.target.stock.value,
          precio: event.target.precio.value,
          codigo: event.target.codigo.value,
        };

        await addProducts(producto);
        setErrorText('');

      } catch (error) {
        setErrorText(error.message);
      }

    }
    window.confirm(`producto creado exitosamente`)
    navigate('/home');
  };

  return (
    <div className='formulario-pr'>
      <form onSubmit={handleSubmit} className="form-add">
        <h1>NUEVO PRODUCTO</h1>
        <div className='caja'>
          <label htmlFor="titulo">Ingrese su título:</label>
          <input placeholder='Artículo' id='titulo' name='titulo' />
        </div>
        <div className='caja'>
          <label htmlFor="descripcion">Ingrese descripción:</label>
          <input type="text" placeholder='Ingrese aquí la descripción' id='descripcion' name='descripcion' />
        </div>
        <div className='caja'>
          <label htmlFor="stock">Ingrese stock:</label>
          <input type="number" placeholder='00' id='stock' name='stock' />
        </div>
        <div className='caja'>
          <label htmlFor="precio">Ingrese su precio:</label>
          <input type="number" placeholder='$ 00,00' id='precio' name='precio' />
        </div>
        <div className='caja'>
          <label htmlFor="codigo">Ingrese código:</label>
          <input type="text" placeholder='00000' id='codigo' name='codigo' />
        </div>

        {
                errorText 
                &&
                <span style={{color: 'red'}}>{errorText}</span>
        }

        <button type='submit' className='boton'>Agregar producto</button>
      </form>
    </div>
  );
};

export default CrearProductos;
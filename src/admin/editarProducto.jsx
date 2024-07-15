import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import "./crearProductos.css"

const EditarProducto = ({ producto, onSave, onClose }) => {
  // Estado para gestionar los cambios en el producto editado
  const [editProducto, setEditProducto] = useState({ ...producto });

  // Función para manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditProducto({ ...editProducto, [name]: value });
  };

  // Función para manejar el guardado de cambios
  const handleSave = async () => {
    try {
      await modificarProductoPorId(editProducto.id, editProducto);
      onSave(editProducto);
      handleClose();
    } catch (error) {
      console.error('Error al modificar el producto:', error.message);
      // Manejo de errores aquí (mostrar mensaje de error, etc.)
    }
  };

  // Función para cerrar el modal
  const handleClose = () => {
    // Restaurar el producto original si se cancela
    setEditProducto({ ...producto });
    onClose();
  };

  return (
    <div className='formulario-pr'>
    <div show={true} onHide={handleClose} className="form-add">

        <h1>Editar Producto</h1>

          <div className='caja'>
            <label htmlFor="id">Id</label>
            <input type="number" name="id" value={editProducto.id} onChange={handleChange} />
          </div>
          <div className='caja'>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" name="titulo" value={editProducto.titulo} onChange={handleChange} />
          </div>
          <div className='caja'>
            <label htmlFor="descripcion">Descripcion</label>
            <input as="textarea" rows={3} name="descripcion" value={editProducto.descripcion} onChange={handleChange} />
          </div>
          <div className='caja'>
            <label htmlFor="precio">Precio</label>
            <input type="number" name="precio" value={editProducto.precio} onChange={handleChange} />
          </div>
          <div className='caja'>
            <label htmlFor="stock">Stock</label>
            <input type="number" name="stock" value={editProducto.stock} onChange={handleChange} />
          </div>
          <div className='caja'>
            <label htmlFor="stock">Codigo</label>
            <input type="text" name="codigo" value={editProducto.codigo} onChange={handleChange} />
          </div>

        <button type='submit' className='boton' onClick={handleClose}>
          Cancelar
        </button>
        <button type='submit' className='boton' onClick={handleSave}>
          Guardar Cambios
        </button>

    </div>
    </div>
);
}
export default EditarProducto;

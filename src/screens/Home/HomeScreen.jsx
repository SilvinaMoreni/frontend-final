import React, { useEffect, useState } from 'react'
import {eliminarProductoPorId, getProducts} from '../../fetching/products.fetching'
import { Link } from 'react-router-dom';
import "./HomeScreen.css"
import EditarProducto from '../../admin/editarProducto';




const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (productId) => {

  
    if (!productId) {
      console.error("No product ID provided for deletion");
      return;
    }
  
    const confirmation = window.confirm(`¿Confirmar eliminación del producto?`);
  
    if (confirmation) {
      try {
        await eliminarProductoPorId(productId);
        console.log("Producto eliminado exitosamente");
  
  
        const updatedProducts = products.filter(p => p.id !== productId);
        setProducts(updatedProducts);
        window.confirm("Producto eliminado con éxito");
  
      } catch (error) {
        console.error("Error al eliminar el producto:", error.message);
        window.confirm("Error al eliminar el producto");
      }
    }
  };
  useEffect(
    ()=>{
      getProducts()
      .then((productos)=>{
        console.log(productos)
        setLoading(false)
        setProducts(productos)
      })
      .catch((error)=>{       
        console.error(error) 
      })
    },
    [] 
  )
  return (
        <>
            <h2 className='titulo'>SISTEMA DE REGISTRO DE PRODUCTOS</h2>  
            <Link to={"/agregar"}>
                <button className='boton-agregar'>AGREGAR UN PRODUCTO</button>
            </Link>    
            {
              loading ? 
              <h2>Cargando productos</h2>
              :
              
              
                <table className='tabla'>
                  <thead>
                    <tr className='encabezado'>
                      <th>ID</th>
                      <th>TITULO</th>
                      <th>DESCRIPCION</th>
                      <th>CODIGO</th>
                      <th>PRECIO</th>
                    </tr>
                  </thead>
                  <tbody className='cuerpo'>
                    {products.map(product =>(
                      <tr key={product.id}>            
                        <td>{product.id}</td>
                        <td>{product.titulo}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.codigo}</td>
                        <td>{product.precio}</td>
                        <Link to={"/editar"}>
                            <button className='boton-edit'onClick={() => EditarProducto(product.id)}>Editar</button>
                       </Link>    
                        <td> <button className='boton-elim'onClick={() => handleDelete(product.id)}>Eliminar</button></td>
                    </tr>
                  ))}
                  </tbody>
                </table>
                           
            }         
          </>
        );
      };
               


export default HomeScreen
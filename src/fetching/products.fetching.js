
import { HTTP, URL } from "./http"


const PRODUCTS_ROUTE = "/api/products"


const getProductoDetailId = async (pid) => {
  const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE + "/" + pid)
  return response.producto

}
const getProducts = async () =>{
    try{
        const response = await HTTP.GET(URL.URL_API + PRODUCTS_ROUTE)
        console.log(response)
        return response.productos
        
    }
    catch(error){
        if(error.status === 404){
            throw error
        }
        else{ 
            throw {status:500, message: 'Error interno en el servidor'}  

    }
}
}


const addProducts = async (producto) =>{
    try{
        const response = await HTTP.POST(URL.URL_API + PRODUCTS_ROUTE +"/", producto)
        return response.products;
    }
    catch(error){

        if(error.status === 404){
            throw error
        }
        else{ 
            throw {status:500, message: 'Error interno en el servidor'}   
    }
}

}


const modificarProductoPorId = async (id, producto) => {
  try {
    const result = await HTTP.PUT(URL.URL_API + PRODUCTS_ROUTE + "/" + id, producto);
    return result;
  } catch (error) {
    console.error("Error al modificar el producto:", error.message);
    throw { message: error.message };
  }
};

  
  const eliminarProductoPorId = async (id) => {
    try {
      const result = await HTTP.DELETE(URL.URL_API + PRODUCTS_ROUTE + "/"+ id);
      return result;
    } catch (error) {
      console.error("Error al eliminar el producto:", error.message);
      throw { message: error.message };
    }
  }

export {getProducts, addProducts, modificarProductoPorId,eliminarProductoPorId,getProductoDetailId}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registrar } from '../../fetching/auth.fetching'
import "../../admin/crearProductos.css"




const RegisterScreen = () => {
  const [errorText, setErrorText] = useState('')
  const navigate = useNavigate()
    const handleSubmit = async (event) =>{
        try{
            event.preventDefault()
            const usuario = {
                email: event.target.email.value,
                password: event.target.password.value
            }
            console.log(usuario)
            await registrar(usuario);
            setErrorText('')
            navigate('/login')
        }
        catch(error){
            setErrorText(error.message)
        }
    }
  return (
    <div  className='formulario-pr'>
        <form onSubmit={handleSubmit} className="form-add">
          <h1>Registro</h1>
            <div className='caja'>
                <label htmlFor="email">Ingrese su email:</label>
                <input placeholder='joeDoe@gmail.com' id='email' name='email'/>
            </div>
            <div className='caja'>
                <label htmlFor="password">Ingrese su contraseña:</label>
                <input type="text" placeholder='******' id='password' name='password' />
            </div>
            {
                errorText 
                &&
                <span style={{color: 'red'}}>{errorText}</span>
            }
            <button type='submit' className='boton'>Registrar</button>
        </form>
    </div>
  )
}

export default RegisterScreen
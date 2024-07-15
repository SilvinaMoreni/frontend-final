import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginScreen from './screens/login/LoginScreen'
import RegisterScreen from './screens/register/RegisterScreen'
import HomeScreen from './screens/Home/HomeScreen'
import { verificarToken } from './fetching/auth.fetching'
import DetailScreen from './screens/Detail/DetailScreen'
import CrearProductos from "./admin/crearProductos"
import EditarProducto from './admin/editarProducto'



const RouterApp = () => {
	const navigate = useNavigate()
	useEffect(() => {
		verificarToken()
			.then(resultado => {
				if (resultado.status == 200) {
					navigate('/home')
				}
				else {
					navigate('/login')
				}
			})
	}
	, []
	)




	return (
		<Routes>

			<Route path='/register' element={<RegisterScreen />} />
			<Route path='/' element={<LoginScreen />} />
			<Route path='/home' element={<HomeScreen />} />
			<Route path="/detail" element={<DetailScreen/>}/>
			<Route path="/agregar" element={<CrearProductos/>}/>
			<Route path="/editar" element={<EditarProducto/>}/>


			
		</Routes>
	)
}

export default RouterApp
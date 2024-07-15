import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
        <h2>logo</h2>
        <nav>
            <NavLink to={'/home'}>Home</NavLink>

            <NavLink>Contacto</NavLink>


        </nav>

    </header>

  )
}

export {Navbar} 
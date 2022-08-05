import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


export const Layout = () => {
  return (
    <div className="App">
      <div className="layout">
        {/*Cabecera*/}
        <header className="header">

          <h1>Proyecto</h1>
        </header>

        {/*Barra de navegación*/}
        <nav className='nav'>
          <ul>
            <li><NavLink to='/'
              className={({ isActive }) => (isActive ? "link-active" : "link")}>Inicio</NavLink></li>

            {/* <li><NavLink to = '/blogs' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Blog</NavLink></li> */}

            {/* <li><NavLink to = '/articulos' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Articulos</NavLink></li> */}

            {/* <li><NavLink to = '/contacto' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Contacto</NavLink></li> */}

            <li><NavLink to='/blog'
              className={({ isActive }) => (isActive ? "link-active" : "link")}>Blog</NavLink></li>

            <li><NavLink to='/usuario'
              className={({ isActive }) => (isActive ? "link-active" : "link")}>Usuario</NavLink></li>

            {/* <li><NavLink to = '/login' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Login</NavLink></li> */}
          </ul>
        </nav>
        <Outlet />
        
      </div>
    </div>

  )
}

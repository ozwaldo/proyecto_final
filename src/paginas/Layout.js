import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'


export const Layout = () => {
  return (
    <div className="App">
      <div className="layout">
        {/*Cabecera*/}
        <header className="header">
          <div className="logo">
            <div className="play"></div>
          </div>

          <h1>Blog</h1>
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

            <li><NavLink to='/panel'
              className={({ isActive }) => (isActive ? "link-active" : "link")}>Panel de Control</NavLink></li>

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

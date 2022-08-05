import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <nav className='nav'>
            <ul>
                <li><NavLink  to = 'iniciopanel' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Inicio</NavLink></li>
          
                {/* <li><NavLink to = 'gestion' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>gestion</NavLink></li> */}
        
                <li><NavLink to = 'agregararticulo' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Agregar Articulos</NavLink></li>
            </ul>            
        </nav>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

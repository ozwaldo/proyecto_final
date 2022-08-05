import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div className='content-panel'>
        <nav className='nav'>
            <ul>
                <li><NavLink  to = 'iniciopanel' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Inicio</NavLink></li>
          
                {/* <li><NavLink to = 'gestion' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>gestion</NavLink></li> */}
        
                <li><NavLink to = 'agregararticulo' 
                className={({ isActive }) => (isActive ? "link-active" : "link")}>Agregar Post</NavLink></li>
            </ul>            
        </nav>
            <Outlet />
    </div>
  )
}

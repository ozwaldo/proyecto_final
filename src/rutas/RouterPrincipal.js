import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Listado } from '../componentes/Listado';
// import { AgregarPost } from '../paginas/AgregarPost';
import { Blog } from '../paginas/Blog';
// import { Articulos } from '../paginas/Articulos';
// import { Blog } from '../paginas/Blog';
// import { Contacto } from '../paginas/Contacto';
// import { Inicio } from '../paginas/Inicio';
import { Layout } from '../paginas/Layout';
// import { Login } from '../paginas/Login';
import { NoPage } from '../paginas/NoPage';
// import { AgregarArticulo } from '../paginas/panel/AgregarArticulo';
// import { Gestion } from '../paginas/panel/Gestion';
// import { InicioPanel } from '../paginas/panel/InicioPanel';
// import { PanelControl } from '../paginas/PanelControl';
import { Usuario } from '../paginas/Usuario';


export const RouterPrincipal = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Listado />} />
                    {/* <Route path='blogs' element={<Blog />} /> */}
                    {/* <Route path='articulos' element={<Articulos />} /> */}
                    {/* <Route path='contacto' element={<Contacto />} /> */}
                    <Route path='blog/' element={<Blog />} /> 
                    <Route path='usuario/:nombre' element={<Usuario />} />                                       
                    <Route path='usuario/' element={<Usuario />} />
                    
                    
                    <Route path='redirigir/' element={<Navigate to="/blogs" />} />
                    {/* <Route path='login/' element={<Login />} /> */}
                    <Route path='*' element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

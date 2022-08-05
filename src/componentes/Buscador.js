import React, { useContext, useState } from 'react'
import { ListarContext } from '../context/ListarContext';

export const Buscador = () => {

    const {setListadoState} = useContext(ListarContext);

    const [busqueda,setBusqueda]=useState("");

    const buscarMovie=e=>{
        //setListadoState(JSON.parse(localStorage.getItem("Movies")));
        //crear estado
        setBusqueda(e.target.value);
        //cargar el estado de la lista
        //console.log(busqueda);
        //comprobar si hay un resultado
        const buscando=JSON.parse(localStorage.getItem("Movies"));
        let moviesBusqueda=buscando.filter(movi=>{
            return movi.titulo.toLowerCase().includes(busqueda.toLowerCase());
        })

        //guardar en el local storage
        if (busqueda.length<=2||moviesBusqueda<=0){
            moviesBusqueda=JSON.parse(localStorage.getItem("Movies"));
        }
        //actualizado del listado
        setListadoState(moviesBusqueda);

    }
    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            <p>{busqueda}</p>
            <form>
                <input type="text" id="search_field" onChange={buscarMovie} name="busqueda"/>
                <button id="search">Buscar</button>
            </form>
        </div>

    )
}

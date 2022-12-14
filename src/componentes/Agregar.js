import React, { useContext, useState } from 'react'
import { ListarContext } from '../context/ListarContext';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Agregar = () => {

    const {setListadoState} = useContext(ListarContext);
    const [movieState,setMovieState]=useState();
    
    const conseguirDatosFormulario=e=>{
        e.preventDefault();
        let target=e.target;
        //console.log(target);
        let titulo=target.titulo.value;
        let year=target.year.value;
        let descripcion=target.descripcion.value;
        //crear objeto a guardar
        let movie={
            id:new Date().getTime(),
            titulo,
            year,
            descripcion
        }
        setMovieState(movie);
        GuardarEnStorage("Movies",movie);
        setListadoState(elementos=>{
            return [...elementos,movie]
        })
        

    }


    return (
        <div className="add">
            <h3 className="title">Añadir pelicula</h3>
            {movieState&&<p>Has creado la pelicula {movieState.titulo}</p>}
            <form onSubmit={conseguirDatosFormulario}>
                <input type="text" id="titulo" placeholder="Titulo" />
                <input type="text" id="year" placeholder="year" />
                <textarea id="descripcion" placeholder="Descripción"></textarea>
                <input type="submit" id="guardar" value="Guardar" />
            </form>
        </div>

    )
}

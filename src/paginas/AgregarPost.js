import React, { useContext, useState } from 'react'
import { ListarContext } from '../context/ListarContext';
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const AgregarPost = () => {

    const {setListadoState} = useContext(ListarContext);
    const [movieState,setMovieState]=useState();
    
    const conseguirDatosFormulario=e=>{
        e.preventDefault();
        let target=e.target;
        //console.log(target);
        let titulo=target.titulo.value;
        let descripcion=target.descripcion.value;
        //crear objeto a guardar
        let movie={
            id:new Date().getTime(),
            titulo,
            descripcion
        }
        setMovieState(movie);
        GuardarEnStorage("Movies",movie);
        setListadoState(elementos=>{
            return [...elementos,movie]
        })
        

    }


    return (
        <section id="content" className="agregarPosts">
        {/* <h3 className="title">Añadir pelicula</h3> */}
            {movieState&&<p>Has creado la pelicula {movieState.titulo}</p>}
            <form onSubmit={conseguirDatosFormulario} className='edit_form'>
                <input type="text" id="titulo" placeholder="Titulo" className='editararticulo'
 />
                <textarea id="descripcion" placeholder="Descripción"></textarea>
                <input type="submit" id="guardar" value="Guardar" />
            </form>
        </section>

    )
}

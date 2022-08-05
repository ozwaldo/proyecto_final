import React from 'react'

export const Editar = ({movie,listadoState,setListadoState,setEditarState}) => {
    const editarMovie=(e,id)=>{
        e.preventDefault();
        //conseguir el target del evento
        let target=e.target;
        //buscar el indice del evento
        const movies_almacenadas=listadoState;
        const indice=movies_almacenadas.findIndex(movi=>movi.id===id);
        //console.log(indice);
        //crear un objeto con el id de ese indice
        let movieActualizada={
            id,
            titulo:target.titulo.value,
            year:target.year.value,
            descripcion:target.descripcion.value
        }
        console.log(movie,movieActualizada);
        //actualizar el elemento que tiene el indice
        movies_almacenadas[indice]=movieActualizada;
        //guardar en el local storage
        localStorage.setItem("Movies",JSON.stringify(movies_almacenadas));
        //actualizar estados
        setListadoState(movies_almacenadas);
        setEditarState(0);

    }
  return (
    <div>
    <form onSubmit={e=>editarMovie(e,movie.id)} className = 'edit_form'>
        <input type="text"
                className='editararticulo'
                defaultValue={movie.titulo}
                name='titulo'
        />
        <input type="text"
                className='editararticulo'
                defaultValue={movie.year}
                name='year'
        />
        <input type="text"
                className='editararticulo'
                defaultValue={movie.descripcion}
                name='descripcion'
        />
        <input type="submit"
                className='actualizar'
                value="Actualizar"
        />
    </form>    
    </div>
  )
}

import React, { useContext, useState } from 'react'
import { ListarContext } from '../context/ListarContext';
import { Agregar } from './Agregar';
import { Buscador } from './Buscador';
import { Editar } from './Editar';

export const Listado = () => {
    //const [listadoState, setListadoState] = useState([]);

    const { listadoState, setListadoState } = useContext(ListarContext);

    const [editarState, setEditarState] = useState(0);



    const borrarMovie = (id) => {
        //conseguir las peliculas en el local storage
        let movies_almacenadas = listadoState;
        console.log(movies_almacenadas);
        //filtro
        let nuevo_arrayMovies = movies_almacenadas.filter(movi => movi.id !== parseInt(id));
        console.log(nuevo_arrayMovies);
        //actualizar el estado del listado
        setListadoState(nuevo_arrayMovies);
        //actualizar el storage
        localStorage.setItem("Movies", JSON.stringify(nuevo_arrayMovies));
    }


    return (
        <>
            <section id="content" className="content">

                {/*aqui van las peliculas*/}
                {listadoState !== null ?
                    listadoState.map(movie => {
                        return (
                            <article key={movie.id} className="peli-item">
                                <h3 className="title">{movie.titulo}</h3>
                                <h3 className="year">{movie.year}</h3>
                                <p className="description">{movie.descripcion}</p>

                                <button className="edit" onClick={() => setEditarState(movie.id)}>Editar</button>
                                <button className="delete" onClick={() => borrarMovie(movie.id)}>Borrar</button>
                                {/*Aqui se vera el formulario para editar*/}
                                {editarState === movie.id && (
                                    <Editar
                                        movie={movie}
                                        setListadoState={setListadoState}
                                        listadoState={listadoState}
                                        setEditarState={setEditarState}
                                    />
                                )}

                            </article>
                        );
                    }) : <h2>No hay peliculas</h2>
                }
            </section>
            
            <aside className="lateral">
            <Buscador />
            <Agregar />
            </aside>
            
            <footer className="footer">
            &copy; Primer Proyecto -{" "}
            <a href="www.algo.com">
                Martin Adolfo 2022 Todos los derechos reservados
            </a>
            </footer>
        </>

    )
}

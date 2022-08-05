import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext';

export const Login = () => {

    const {usuarioState, setUsuario} = useContext(UsuarioContext);
   


    const handleSubmit = e => {
        e.preventDefault();
        let usuario = {
            sobrenombre: e.target.sobrenombre.value,
            nombre: e.target.nombre.value,
            apellido: e.target.apellido.value
        }

        setUsuario(usuario);

        
    }

    return (
        <>
            <div>
                <p>Usuario: <strong>{usuarioState.sobrenombre}</strong></p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <p><input type="text" placeholder='Usuario' name='sobrenombre'></input></p>
                    <p><input type="text" placeholder='Nombre' name='nombre'></input></p>
                    <p><input type="text" placeholder='Apellido' name='apellido'></input></p>
                    <p><input type="submit" value="Enviar"></input></p>
                </form>
            </div>
        </>
    )
}

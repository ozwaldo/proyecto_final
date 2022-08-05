import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
export const Usuario = () => {

  const { nombre } = useParams();
  const redirigir = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let nombre = e.target.usuario.value;
    let url = `/usuario/${nombre}`;
    redirigir(url);

  }

  return (
    <div>

      {!nombre && <h3> Usuario no encontrado</h3>}
      {nombre && <h3> Usuario: {nombre}</h3>}

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Usuario' name='usuario'></input>
        <p><input type="submit" value="Enviar"></input></p>
      </form>

    </div>
  )
}

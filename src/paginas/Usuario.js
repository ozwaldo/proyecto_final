import React, { useEffect, useState } from 'react'
// import { useParams, useNavigate } from 'react-router-dom'
export const Usuario = () => {
  const [listaUsuarios,setListaUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  // const getListaUsuarios = () => {
  //     setListaUsuarios([{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://reqres.in/img/faces/7-image.jpg"},
  //     {"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://reqres.in/img/faces/8-image.jpg"},
  //     {"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://reqres.in/img/faces/9-image.jpg"},
  //     {"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://reqres.in/img/faces/10-image.jpg"},
  //     {"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://reqres.in/img/faces/11-image.jpg"},
  //     {"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://reqres.in/img/faces/12-image.jpg"}]);
  // }

  // const getListaUsuariosAjax = () => {
  //     fetch("https://reqres.in/api/users?page=2")
  //     .then(respuesta => respuesta.json())
  //     .then(resultado => {
  //         setListaUsuarios(resultado.data);
  //     }, error => (console.log(error)))
  // }

  const getListaUsuariosAjaxASync = () => {
      setTimeout( async() =>{
          try {
              const solicitud = await fetch("https://reqres.in/api/users?page=1");
              const {data} = await solicitud.json();
              setListaUsuarios(data);    
              setCargando(false); 
          } catch (error) {
              setError(error.message);
          }
                
      }, 2000)
  }

  useEffect(() => {
      // getListaUsuarios();
      // getListaUsuariosAjax();
      getListaUsuariosAjaxASync();
  },[]);

  if(error !== "" ) {
      return (<div className='componente'><h1 className='error'>{error}</h1></div>);
  } else if (cargando === true) {
      return(
          <div className='componente'> <div className='cargando'>Cargando...</div></div>
      )
  } else {
      return (
          <div className='content'>
              <div>
                  {listaUsuarios.map((usuario, i) => <figure className='usuarios'><img src={usuario.avatar} alt="foto"/> <figcaption>{usuario.first_name} {usuario.last_name} </figcaption></figure>)}
              </div>
              <div className='clearlist'> </div>
              </div>
      )
  }
}

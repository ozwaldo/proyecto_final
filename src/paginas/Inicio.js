import React, { useContext } from "react";
import { Listado } from "../componentes/Listado";
import { ListarContext } from "../context/ListarContext";

export const Inicio = () => {

  const {listadoState, setListadoState} = useContext(ListarContext);

  
  return (
    <>
      {/*Contenido principal*/}
      <Listado listadoState={listadoState} setListadoState={setListadoState} />
    </>
  );
};

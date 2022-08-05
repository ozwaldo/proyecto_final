import React, { useContext } from 'react'
import { NumeroContext } from '../context/NumeroContext';

export const Articulos = () => {
  
  const numeroContext = useContext(NumeroContext);

  return (
    <div>Articulos: <strong>{numeroContext}</strong></div>
  )
}

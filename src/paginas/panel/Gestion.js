import React, { useContext } from 'react'
import { FuncionContext } from '../../context/FuncionContext'

export const Gestion = () => {

  const funcionContext = useContext(FuncionContext);
  
  funcionContext();

  return (
    
    <div>Gestion</div>
    
  )
}

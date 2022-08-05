export const GuardarEnStorage =(clave,elemento)=>{
    //Primero Obtener lo que hay en el local Storage
    let elementos= JSON.parse(localStorage.getItem(clave));
    console.log(elementos);
    //Comprobar que sea un array
    if (Array.isArray(elementos)){
    //metodo para añadir dicha pelicula
        elementos.push(elemento);
    //crear array nuevo
    }else{
        elementos=[elemento];  
    }
    //guardar en el Alamacenamiento Local
    localStorage.setItem(clave,JSON.stringify(elementos));
    return elemento;
    
}
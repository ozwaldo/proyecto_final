import { useEffect, useState } from "react";
import "./App.css";
// import { Agregar } from "./componentes/Agregar";
// import { Buscador } from "./componentes/Buscador";
import { ListarContext } from "./context/ListarContext";
import { RouterPrincipal } from "./rutas/RouterPrincipal";

function App() {
    const [listadoState, setListadoState] = useState([]);

    useEffect(() => {
        conseguirPeliculas();
        console.log("Componente cargado");
    }, []);

    const conseguirPeliculas = () => {
        let movies = JSON.parse(localStorage.getItem("Movies"));
        console.log(movies);
        setListadoState(movies);
        return movies;
    };

    return (
        // <Listar.Provider value = {{listadoState, setListadoState}}>

        <ListarContext.Provider value={{ listadoState, setListadoState }}>            

                    <RouterPrincipal />            
                   
        </ListarContext.Provider>
    );
}

export default App;

import {Routes, Route} from "react-router-dom";
import Contenido from "../component/Contendo";
import Formulario from "../component/Formulario";
import NavBar from "../component/NavBar";
import PieDePagina from "../component/PieDePagina";
import Login from "./Login";
import Peliculas from "./Peliculas";
import Series from "./Series";


function Inicio() {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path="/"
                    element={<Contenido/>}/>
                <Route path="Peliculas"
                    element={<Peliculas/>}/>
                <Route path="Series"
                    element={<Series/>}/>
                <Route path="Login"
                    element={<Login/>}/>
                    <Route path="Formulario"
                    element={<Formulario/>}/>
            </Routes>

            <PieDePagina/>
        </>
    );
}

export default Inicio;

import Card from './Card';
function Contenido() {
    return (
        <div className="sm:flex sm:w-4/5 sm:items-center sm:p-2 sm:m-auto sm:h-96 sm:justify-center flex w-full items-center justify-center m-auto p-10 h-full">
            <Card titulo='Series' descripcion='Popular Series'/>
            <Card titulo='Peliculas' descripcion='Popular Movies'/>
        </div>
    );
}

export default Contenido;

import CardMovies from "../component/CardMovies";
import sample from "../data/sample.json"

function Peliculas() {

    const movie = sample.entries.filter(p => p.programType === 'movie')
    const mov = movie.slice(0, 20)
    return (

        <div className='sm:grid sm:grid-cols-4 sm:gap-4 w-4/5 m-auto grid-cols-1 items-center'>
            {
            mov.map(pel => (
                <CardMovies title ={pel.title}
                    description={
                        pel.description
                    }
                    image
                    ={pel.images['Poster Art'].url}
                    releaseYear
                    ={pel.releaseYear}
                    programType
                    ={pel.programType}/>
            ))
        } </div>

    );
}

export default Peliculas;

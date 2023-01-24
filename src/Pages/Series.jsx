import CardSeries from "../component/CardSeries";
import sample from "../data/sample.json"

function Series() {
    const series = sample.entries.filter(p => p.programType === 'series')
    const serie = series.slice(0, 20);
    return (
        <div className='sm:grid sm:grid-cols-4 sm:gap-4 sm:w-4/5 sm:m-auto w-4/5 m-auto grid-cols-1 items-center'>
           
           {
            serie.map(ser => (
                <CardSeries title ={ser.title}
                    description={
                        ser.description
                    }
                    image
                    ={ser.images['Poster Art'].url}
                    releaseYear
                    ={ser.releaseYear}
                    programType
                    ={ser.programType}/>
            ))
        }
           
             </div>
    );
}

export default Series;

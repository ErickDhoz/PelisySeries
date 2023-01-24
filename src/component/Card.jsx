import {Link} from 'react-router-dom';
import logoPelicula from '../assets/placeholder.png';
function Card({titulo, descripcion}) {
    return (
        <div>
            <Link to={
                `${titulo}`
            }>
                <div className='grid items-center mr-10'>
                    <div className='bg-black items-center w-40 h-60 rounded-lg flex  justify-center'>
                        <div>
                            <img src={logoPelicula}
                                alt=""
                                className='w-60'/>

                            <p className="text-white text-center font-bold text-lg">
                                {titulo} </p>
                        </div>

                    </div>
                    <p className='text-center'>
                        {descripcion}</p>
                </div>
            </Link>
        </div>
    );
}

export default Card;

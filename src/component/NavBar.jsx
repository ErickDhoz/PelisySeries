import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div className="sm:w-full  bg-cyan-500 shadow-lg">
            <div className='flex w-4/5 items-center p-3 m-auto justify-between'>
                <div className=' flex'>
                    <img src='https://github.com/ErickDhoz/assets/Logo.png'
                        alt="Logo"
                        className='w-11 h-auto'/>

                    <Link to="/">
                        <p className="sm:mr-5 sm:font-bold text-xs sm:text-lg text-white p-2">DEMO Streaming</p>
                    </Link>

                </div>


                <ul className='flex'>
                    <li className=" rounded-lg sm:mr-5  text-xs sm:font-bold sm:text-lg text-white p-2 cursor-pointer  hover:bg-slate-700">
                        <Link to="Login">
                            <a href='#' className=''>Login</a>
                        </Link>

                    </li>
                    <Link to ="Formulario">
                    <li className=" text-xs sm:font-bold sm:text-lg text-white bg-black p-2 cursor-pointer rounded-lg">
                        <a href='#' className=''>Start your free trial</a>
                    </li>
                    </Link>
                    

                </ul>
            </div>
            <div className='w-full  bg-slate-700 shadow-lg'>
                <div className=' flex w-4/5 items-center p-2 m-auto'>
                    <h1 className='text-xs sm:font-bold sm:text-lg text-white'>popular title</h1>
                </div>

            </div>
        </div>

    );
}

export default NavBar;

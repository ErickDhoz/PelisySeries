import facebook from '../assets/social/facebook-white.svg'
import instagram from '../assets/social/instagram-white.svg'
import twitter from '../assets/social/twitter-white.svg'
import store from '../assets/store/app-store.svg'
import play from '../assets/store/play-store.svg'
import windows from '../assets/store/windows-store.svg'
function PieDePagina() {
    return (
        <div className='sm:w-full  bg-slate-700 shadow-lg h-36  bottom-0'>
            <div className="flex w-4/5 items-center p-2 m-auto">
                <ul className="flex  text-white  text-xs sm:text-sm">
                    <li className="mr-5">
                        <a href="#">Home</a>
                    </li>
                    <li className="mr-5">
                        <a href="#" className="cursor-pointer">Terms and Conditions</a>
                    </li>
                    <li className="mr-5">
                        <a href="#" className="cursor-pointer">Privacy policy</a>
                    </li>
                    <li className="mr-5">
                        <a href="#" className="cursor-pointer">Colletion Statement</a>
                    </li>
                    <li className="mr-5">
                        <a href="#" className="cursor-pointer">Help</a>
                    </li>
                    <li className="mr-5">
                        <a href="#" className="cursor-pointer">Manage Acount</a>
                    </li>
                </ul>
            </div>
            <div className="flex w-4/5 items-center  m-auto p-0">
                <p className="text-white text-xs sm:text-sm">Copyrigth © 2016 DEMO Streqaming.All Rights Reserved.</p>
            </div>
            <div className='flex  justify-center sm:justify-between sm:w-4/5 items-center p-2 m-auto mt-0'>
                <div className='flex w-4/5 items-center p-2 m-auto mt-5'>
                    <a href="https://www.facebook.com/"><img src={facebook}
                            alt="facebook"
                            className='w-4 mr-5'/></a>
                    <a href="https://www.instagram.com/?hl=es-la"><img src={instagram}
                            alt="Instagram"
                            className='w-6 mr-5'/></a>
                    <a href="https://twitter.com/"><img src={twitter}
                            alt="twitter"
                            className='w-6 mr-5'/>
                    </a>


                </div>
                <div className='flex mr-12 mt-5'>
                    <img src={store}
                        alt="facebook"
                        className=' mr-1 ms:mr-2 w-14 sm:w-24'/>
                    <img src={play}
                        alt="facebook"
                        className=' mr-1 ms:mr-2 w-14 sm:w-24'/>
                    <img src={windows}
                        alt="facebook"
                        className=' w-10 sm:w-20'/>
                </div>
            </div>

        </div>
    );
}

export default PieDePagina;

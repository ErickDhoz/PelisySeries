import {useNavigate} from "react-router-dom";


function Login() {

    const navigate = useNavigate();

    const login = () => { 
        navigate('/', {replace: true});

    }

    return (
        <div className="w-full h-96  flex items-center justify-center">
            <div className="w-90">
                <form className="grid">
                    <input type="text" placeholder="User" className="border-solid border-2 border-cyan-500 mb-3 rounded-lg"/>
                    <input type="password" placeholder="Password" className=" border-solid border-2 border-cyan-500 mb-3 rounded-lg"/>
                    <button className="border rounded-lg bg-slate-700 text-white font-bold hover:bg-cyan-500"
                        onClick={login}>Login</button>

                </form>
                
                
            </div>

        </div>
    );
}

export default Login;

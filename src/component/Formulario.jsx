function Formulario() {
    return ( 
        <div className="w-full h-96  flex items-center justify-center">
            <div className="w-90">
                <form className="grid">
                    <input type="text" placeholder="Name" className="border-solid border-2 border-cyan-500 mb-3 rounded-lg"/>
                    <input type="text" placeholder="example@gmail.com" className="border-solid border-2 border-cyan-500 mb-3 rounded-lg"/>
                    <input type="tel" placeholder="Celular" className="border-solid border-2 border-cyan-500 mb-3 rounded-lg"/>
                    <button className="border rounded-lg bg-slate-700 text-white font-bold hover:bg-cyan-500">Submit</button>
                </form>
            </div>
            
        </div>
     );
}

export default Formulario;
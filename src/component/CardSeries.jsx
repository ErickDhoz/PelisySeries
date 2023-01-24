function CardSeries({
    title,
    description,
    image,
    releaseYear,
    programType
}) {
    return (
        <div className="mt-5">
            <div className="w-52 border-solid border-2 border-cyan-500 mb-3 rounded-lg shadow-lg">
                <h1 className="font-bold text-center">
                    {title}</h1>
                <div className="flex items-center justify-center">
                    <img src={image}
                        alt={title}
                        className="w-20"/>
                </div>
                <p className="text-justify text-xs p-3">
                    {description}</p>
                <p className="text-xs text-slate-400 ml-2">Tipo: {programType}</p>
                <p className="text-xs text-slate-400 ml-2 pb-1">Año: {releaseYear}</p>

            </div>
        </div>
    );
}

export default CardSeries;

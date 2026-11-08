import {useNavigate} from 'react-router'
const Movie = ({movie})=>{
    const navigate = useNavigate();

    const moviedetailHandler = ()=>{
        navigate(`/movie/${movie.id}`)
        
    }
    return (
        <figure onClick = {moviedetailHandler} className="group w-[220px] rounded-xl overflow-hidden bg-white border border-gray-200 shadow-sm">
            <div className="relative aspect-2/3 overflow-hidden bg-gray-100">
                <img  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" src={`https://media.themoviedb.org/t/p/w600_and_h900_face${movie.poster_path}`}/>
            </div>
            <figcaption className="p-4">
                <h3 className="mb-2 text-[0.95rem] font-semibold leading-snug line-clamp-2 text-gray-900">
                {movie.title}
                </h3>
                <h4 className="inline-block mb-2 px-2.5 py-0.5 rounded-full text-xs font-medium text-gray-900">
                {movie.release_date}
                </h4>
                <h4 className="text-xs text-gray-500">
                Release Date: {movie.release_date}
                </h4>
                
            </figcaption>
        </figure>

    )
}

export default Movie
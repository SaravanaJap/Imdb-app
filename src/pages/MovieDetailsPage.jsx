import {useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router'
import {useContext} from 'react'
import WatchListContext from '../context/watch-list';

const MovieDetailsPage = ()=>{
    const {id} = useParams();
    const TMB_BASE_URL = import.meta.env.VITE_TMB_BASE_URL
    const READ_ACCESS_TOKEN = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN
    const {watchlist,updateWatchList} = useContext(WatchListContext)
    
    const [movie,setMovie] = useState(null)

    const addToWatchList =()=>{
        if (!movie){
            return
        }
        const movieId = movie.id
        
        const isAlreadyPresent = watchlist.some((movie)=> movie.id===movieId)
        if (isAlreadyPresent){
            return
        }
        updateWatchList(movie)
    }

    useEffect(()=>{
        axios.get(`${TMB_BASE_URL}/movie/${id}`,{
            headers:{
                accept: 'application/json',
                Authorization:`Bearer ${READ_ACCESS_TOKEN}`
            }
        }).then((res)=>{
            console.log(res)
            setMovie(() => res.data)
        }).catch((err)=>{
            console.log(err)
        })
    } ,[])
    return (
        <>
            {!movie && <p>Loading movie details</p>}
            {movie &&<div>
                <section className='flex p-5 justify-center items-center h-[60vh] bg-no-repeat bg-center bg-cover bg-blend-lighten' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.backdrop_path})` }}>
                    
                    <img className='h-[90%]' src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                    <section className='p-5 text-white max-w-lg'>
                        <h2 className='text-5xl mb-3 text-white font-bold'>{movie.original_title}</h2>
                        {movie.genres.map((genre) => {
                            return <span key={genre.id}>{ genre.name },</span>
                        })}
                        <span>{movie.runtime} mins</span>
                        <h3 className='text-xl font-bold mb-3'>Overview</h3>
                        <p>{movie.overview}</p>
                        <button className='my-10 border-2 text-white py-0.5 p-3 rounded-lg hover:cursor-pointer' onClick={addToWatchList} >Add to Watch List</button>
                    </section>
                </section>
            </div>}
        </>

    )
}

export default MovieDetailsPage
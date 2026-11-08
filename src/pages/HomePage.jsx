
import {useEffect,useState} from 'react'
import axios from 'axios'
import Movie from '../Components/Movie.jsx'
import CountContext from '../context/counter-countext'
import {useContext} from 'react'

const HomePage = () =>{
    const context = useContext(CountContext)
    console.log(context.count)

    const TMB_BASE_URL = import.meta.env.VITE_TMB_BASE_URL
    const READ_ACCESS_TOKEN = import.meta.env.VITE_TMDB_READ_ACCESS_TOKEN
    const [movies,setMovies] = useState([]);
    const [pageNo,setPageNo] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    const prevPageHandler =()=>{
        if(pageNo<=0){
            return
        }
        setPageNo((prevState)=>prevState-1)
    }
    const nextPageHandler = ()=>{
        setPageNo((prevState)=>prevState+1)
    }

    useEffect(()=>{
        axios.get(`${TMB_BASE_URL}/movie/popular?language=en-US&page=${pageNo}`,{
            headers:{
                accept: 'application/json',
                Authorization:`Bearer ${READ_ACCESS_TOKEN}`
            }
        }).then((res)=>{
            setMovies(res.data.results)
            setIsLoading(false);
        }).catch(()=>{
            setIsLoading(false);
        })

    },[pageNo] )


    return (
        <div>
            
            {isLoading && <p>Loading...</p>}
            {movies && movies.length && <section>
                <section className='flex flex-wrap justify-center gap-4'>
                

                    {movies.map((movie)=>{
                        return <Movie movie={movie} key={movie.id}/>
                    })}
                </section>
                <section className='flex justify-center gap-4 mt-5'>
                        <button className='border cursor-pointer' onClick={prevPageHandler}>Prev</button>
                        <span>{pageNo }</span>
                        <button className='border cursor-pointer' onClick={nextPageHandler}>Next</button>
                </section>
            </section>}
        </div>
    )

}

export default HomePage
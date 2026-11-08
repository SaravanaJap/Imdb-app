import {useState,useEffect} from 'react'
import WatchListCard from '../Components/WatchListCard.jsx'
import {useContext} from 'react'
import WatchListContext from '../context/watch-list';
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

const WatchList = () =>{

    const [search,setSearch] = useState("");
    const {watchlist,sortWatchListByVoteAvg } = useContext(WatchListContext)
    const [genrelist,setGenreList] = useState();
    const [selectedgenre,setSelectedGenre] = useState('All genres');
    const inputHandler = (event)=>{
        setSearch(event.target.value)
    }


    const sortAscendingHandler = () => {
        sortWatchListByVoteAvg(true);
  }

    const sortDescHandler = () => {
        sortWatchListByVoteAvg(false);
  }

  const genrehandler = (g)=>{
    setSelectedGenre(g)
  }

  useEffect(() =>{
          const genres = watchlist.map((movie)=> movie.genres[0].name)
          const uniquegenres = ['All genres', ...new Set(genres)]
          setGenreList(uniquegenres)
      },[watchlist]);



    return (
    <div className='max-w-3xl'>
        
        <h1 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900'>
            My <span className='text-amber-500'>WatchList</span>
        </h1>
        <input type="text"  onChange = {inputHandler} placeholder="Enter something..." className="border border-gray-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
 ></input>
    {genrelist?.map((g, idx) => {
    return (
        <button
            key={idx}
            className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 mb-2 hover:bg-blue-600" onClick = {()=>genrehandler(g)}
        >
            {g}
        </button>
    )
})}
 <h4 className='my-2 flex items-center gap-4 cursor-pointer'>Sort Rating <FaArrowUp onClick={sortAscendingHandler}/> <FaArrowDown onClick={sortDescHandler}/></h4>
        {
            watchlist.filter((movie)=>{ 
                if(selectedgenre==='All genres'){
                    return true;
                }
                return selectedgenre === movie.genres[0].name
            })
            .filter((movie)=>movie.title.trim().toLowerCase().includes(search.toLowerCase())).map((movie) => {
                 return <WatchListCard key={movie.id} movie={movie} />
            })
        }
    </div>
)
}

export default WatchList
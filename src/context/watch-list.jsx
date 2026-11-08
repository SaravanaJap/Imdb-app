import React, { createContext, useState,useEffect } from 'react'

const WatchListContext = createContext({
    watchlist:[],
    updateWatchList:()=>{},
    sortWatchListByVoteAvg: ()=>{}
})

export const  WatchListContextProvider = (props) =>{

    const initialwatchlist = JSON.parse(window.localStorage.getItem('watchlist') || '[]')
    const [watchlist,setWatchList] = useState(initialwatchlist);
    const [genrelist,setgenrelist] = useState([]);

    const updateWatchList = (movie) =>{
        setWatchList((prevState)=>[...prevState,movie])
    }

    const sortWatchListByVoteAvg = (sortAsc = true) => {
        if (sortAsc) {
            const sortAscArr = watchlist.toSorted((movie1, movie2) => movie1.vote_average - movie2.vote_average);
            setWatchList(sortAscArr);
            return;
        }
        // Sort in descending
        const sortAscArr = watchlist.toSorted((movie1, movie2) => movie2.vote_average - movie1.vote_average);
            setWatchList(sortAscArr);
    }

    useEffect(() =>{
        const genres = watchlist.map((movie)=> movie.genres[0].name)
        const uniquegenres = ['All genres', ...new Set(genres)]
        setgenrelist(uniquegenres)
        console.log(uniquegenres)
        console.log(genrelist)
    },[watchlist]);

    useEffect(() => {
        window.localStorage.setItem('watchList', JSON.stringify(watchlist));
    }, [watchlist]);



    const context  ={
        watchlist:watchlist,
        updateWatchList,
        sortWatchListByVoteAvg: sortWatchListByVoteAvg
    }

    return <WatchListContext.Provider value={context}>
        {props.children}
    </WatchListContext.Provider>

}

export default WatchListContext
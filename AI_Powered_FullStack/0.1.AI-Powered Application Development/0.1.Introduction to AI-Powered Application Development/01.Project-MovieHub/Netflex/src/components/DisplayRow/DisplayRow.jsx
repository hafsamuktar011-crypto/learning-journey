import React, { useEffect, useState } from 'react'
import SlideShow from '../SlideShow/SlideShow'
import styles from './DisplayRow.module.css'
import { movieInstance } from '../../utility/MoviesInstance';
import requests from '../../utility/requestUrl';

function DisplayRow() {

const [movies,setMovies]=useState({
    trending:[],
    netflixoriginals:[],
    topRated:[],
    action:[],
    comedy:[],
    documentaries:[],
    romance:[],
    horror:[]
})

useEffect(()=>{
    fetchMovies()
},[])

const fetchMovies=async()=>{
    try{
 const[trending,
    netflixoriginals,
    topRated,
    action,
    comedy,
    documentaries,
    romance,
    horror
    ]=await Promise.all([
        movieInstance.get(requests.fetchTrending),
        movieInstance.get(requests.fetchNetflixOriginals),
        movieInstance.get(requests.fetchTopRatedMovies),
        movieInstance.get(requests.fetchActionMovies),
        movieInstance.get(requests.fetchComedyMovies),
        movieInstance.get(requests.fetchDocumentaries),
        movieInstance.get(requests.fetchRomanceMovies),
        movieInstance.get(requests.fetchHorrorMovies)
    ])
    setMovies({
  trending: trending.data.results,
  netflixoriginals: netflixoriginals.data.results,
  topRated: topRated.data.results,
  action: action.data.results,
  comedy: comedy.data.results,
  documentaries: documentaries.data.results,
  romance: romance.data.results,
  horror: horror.data.results
})
    }
    catch(error){
console.log(error)
    }
}




  return (
    <div className={styles.mainRapper}>
<SlideShow title="Movie trending" movies={movies.trending} />
<SlideShow title="Popular on Netflix" movies={movies.netflixoriginals} />
<SlideShow title="Trending Now" movies={movies.topRated} />
<SlideShow title="Action" movies={movies.action} />
<SlideShow title="Comedy" movies={movies.comedy} />
<SlideShow title="Documentaries" movies={movies.documentaries} />
<SlideShow title="Romance" movies={movies.romance} />
<SlideShow title="Horror" movies={movies.horror} />
    </div>
  )
}

export default DisplayRow

import React,{useEffect, useRef, useState}from 'react'

import { MovieCard } from './MovieCard';
import { FetchApiData } from '../utils/axios';
import { randomChar } from '../utils/random';


export const Hero = () => {
const [searchMovie, setSearchMovie]=useState({});
const [bgImg, setBgImg]=useState("");
const shouldFetchRef = useRef(true);
const searchRef = useRef("");
const [searching, setSearching] = useState(false);
useEffect(()=>{
    if(shouldFetchRef.current){
        fetchMovie(randomChar());
        shouldFetchRef.current = false
    }

},[]);

const fetchMovie = async (str) =>{
    const movie = await FetchApiData(str);
    setSearchMovie(movie);
    setBgImg(movie.Poster);
setSearching(false);
};

const handleOnMovieSearch =()=>{
    const str =searchRef.current.value;
    fetchMovie(str);
    searchRef.current.value="";

};
const movieStyle ={
    backgroundImage:`url(${bgImg})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
    height:"60vh",

};

  return (
    <div>
        <nav className="py-3 text-danger fixed-top" >
            <h2
            className='container'>Welcome To Movie World</h2>
        </nav>
        <div className="hero d-flex justify-content-center align-items-center text-light" style={movieStyle}>

            <div className='hero-content'>
            <div className={searching?"form-center":"form-top"}>
{
    searching &&  
    
    <div className="text-center">
        <h1>Search Movies On Your Demand</h1>
        <p>Explore Movie</p>
    </div>

}
            <div className="input-group my-5">
  <input  ref={searchRef} onFocus={()=>setSearching(true)}type="text" className="form-control" placeholder="Search Movie By Name" aria-label="Search Movie By Name" aria-describedby="button-addon2"/>
  <button onClick={handleOnMovieSearch}className="btn btn-danger" type="button" id="button-addon2">Search</button>
</div>
</div>
{/* checking condition  */}
{!searching && (
    <div className="movie-card-display showMovie">
    <MovieCard searchMovie={searchMovie}/>
</div>
)}


</div>
        </div>
    </div>
  )
}

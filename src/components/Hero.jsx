import React from 'react'
import { MovieCard } from './MovieCard';

export const Hero = () => {

const movieStyle ={
    backgroundImage:`URL("https://www.omdbapi.com/src/poster.jpg")`,
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
            <div className="form-center">
                <div className="text-center">
                    <h1>Search Movies On Your Demand</h1>
                    <p>Explore Movie</p>
                </div>
            </div>
            <div className="input-group my-5">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
  <button className="btn btn-danger" type="button" id="button-addon2">Search</button>
</div>
<div className="movie-card-display">
    <MovieCard/>
</div>

</div>
        </div>
    </div>
  )
}

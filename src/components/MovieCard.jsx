import React from 'react'
import '../App.css'
export const MovieCard = ({searchMovie}) => {

  const{Poster,Title,imdbRating
,Plot  }= searchMovie
  // const Poster = "https://www.omdbapi.com/src/poster.jpg";
  return (
    <div className="container ">
      <div className="row bg-light border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img src={Poster} alt=""/>
        </div>
        <div className="col-md">
          <h3>{Title}</h3>
          <p>IMB Rating:{imdbRating
          }</p>
          <p>{Plot?.slice(0,50)}...</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-warning">Drama</button>
            <button className="btn btn-info">Action</button>
          </div>
          <div className="d-grid mt-3">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

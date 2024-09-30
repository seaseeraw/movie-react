import React from 'react'
import '../App.css'
export const MovieCard = ({}) => {
  const Poster = "https://www.omdbapi.com/src/poster.jpg";
  return (
    <div className="container ">
      <div className="row bg-light border rounded text-dark p-3 movie-card-item">
        <div className="col-md">
          <img src={Poster} alt=""/>
        </div>
        <div className="col-md">
          <h3>Movie Name</h3>
          <p>IMB Rating:5.5</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vel iste, voluptatum tenetur, culpa tempore quo reprehenderit ullam corrupti, nostrum porro aspernatur ipsum natus minus amet! Ipsum nobis soluta eum.</p>
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

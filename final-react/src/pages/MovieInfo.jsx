import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";



function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  return (
    <div>
      <h1>Movie Info Page</h1>
      <p>Movie ID: {id}</p>
      

      <Link to="/">Back to home</Link>
    </div>
  );
}

export default MovieInfo;
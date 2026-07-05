import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";


function MovieInfo() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=11a85b25`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }

  return (

    <div>
      <Link to="/">Back</Link>

      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>{movie.Year}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Runtime}</p>
      <p>{movie.imdbRating}</p>
    </div>
  );
}

export default MovieInfo;
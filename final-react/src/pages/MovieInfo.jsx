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

    <div className="movie-info">
      <Link class="back-btn" to="/">Back</Link>

      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <h2>{movie.Plot}</h2>
      <h2>{movie.Year}</h2>
      <h2>{movie.Genre}</h2>
      <h3>{movie.Runtime}</h3>
      <h3>{movie.imdbRating}</h3>
    </div>
  );
}

export default MovieInfo;
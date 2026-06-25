import { useEffect, useState } from "react";
import { Link } from "react-router-dom";





function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=avatar&apikey=11a85b25")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search ? data.Search.slice(0, 6) : []);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div class="background">
      <h1>The first 6 Movies of an API</h1>
<Link to={`/movie/${movie.imdbID}`}>
  <img className="movie__poster" src={movie.Poster} alt={movie.Title} />
  <h2 className="movie__title">{movie.Title}</h2>
</Link>
   
    </div>
  );
}

export default Home;





    
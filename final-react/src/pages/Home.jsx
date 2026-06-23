import { useEffect, useState } from "react";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=batman&apikey=https://www.omdbapi.com/?s=${searchValue}&apikey=11a85b25")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search ? data.Search.slice(0, 6) : []);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Movies</h1>

      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Title}</h2>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
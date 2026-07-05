import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("avatar");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=11a85b25`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.Search ? data.Search.slice(0, 6) : []);
      })
      .catch((error) => console.log(error));
  }, [searchTerm]);

  return (

    
    <div className="background">
        <nav className="navbar">
            <button className="navbar__btn">About</button>
            <button className="navbar__btn">Contact</button>
        </nav>
      <h1>Movie Info Finder</h1>
<button className="search-btn">Search</button>
      <input className="search-input"
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {movies.map((movie) => (
       <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
  <div className="movie">
    <img src={movie.Poster} alt={movie.Title} />
    <h2>{movie.Title}</h2>
  </div>
</Link>
      ))}
    </div>
  );
}
export default Home;





    
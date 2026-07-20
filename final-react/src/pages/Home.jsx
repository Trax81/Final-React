import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vhspile from "../assets/vhspile.jpg";







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

    const sortedMovies = [...movies].sort(
  (a, b) => parseInt(a.Year) - parseInt(b.Year)
);

  return (

    
    <div className="background">
        <nav className="navbar">
            <nav className="navbar">
  <Link to="/about" className="navbar-btn">
    About
  </Link>

    <Link to="/contact" className="navbar-btn">
    Contact
  </Link>
</nav>
        </nav>
<header><img src={vhspile} alt="VHS pile" /></header>

      <h1>Movie Info Finder</h1>

      <input className="search-input"
        type="text"
        placeholder="Search for a movie..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

 <div className="movie__grid">
        {sortedMovies.map((movie) => (
          <Link
            to={`/movie/${movie.imdbID}`}
            key={movie.imdbID}
            className="movie"
          >
            <div>
              <img src={movie.Poster} alt={movie.Title} />
              <h2>{movie.Title}</h2>
            </div>
          </Link>
        ))}
      </div>
</div>
);
}

export default Home;






import { useParams, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function MovieInfo() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Info Page</h1>
      <p>Movie ID: {id}</p>

      <Link to="/">Back to home</Link>
    </div>
  );
}

export default MovieInfo;
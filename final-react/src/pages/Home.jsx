import { useEffect, useState } from "react";

function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=${searchValue}&apikey=11a85b25")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.slice(0, 6));
      });
  }, []);

  return (
    <div>
      <h1>API Items</h1>
    console.log(movies);
      {items.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

{movies && movies.slice(0, 6).map((movie) => (
  <div key={movie.id}>
    <h2>{movie.title}</h2>
    <p>{movie.overview}</p>
  </div>
))}

export default Home;
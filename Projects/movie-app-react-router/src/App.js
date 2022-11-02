import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";

function App() {
  const [movie, setMovies] = useState();
  console.log("movie", movie);
  const [loading, setLoading] = useState();

  const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=f4ecdb4b72f19d39698d5ba7e40d30ba`;

  const getMovies = (API) => {
    setLoading(true);
    axios
      .get(API)
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err))
      .finally(setLoading(false));
  };

  useEffect(() => {
    getMovies(FEATURED_API);
  }, []);

  return (
    <div>
      <h1>
        test
        <MovieList movie={movie} />
      </h1>
    </div>
  );
}

export default App;

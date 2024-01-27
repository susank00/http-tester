import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieNavBar from "../components/MovieNavbar";
const Index = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovieText, setSearchMovieText] = useState([]);
  const [isError, setIsError] = useState(false);
  const [ErrorText, setErrorText] = useState("");
  const [searchErrorText, setsearchErrorText] = useState(false);
  const [firstRun, setFirstRun] = useState(true);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (!firstRun) {
      //searching code
      const fetchTimer = setTimeout(() => {
        if (searchMovieText && searchMovieText.length > 2) {
          fetchMovies();
          setsearchErrorText("");
        } else if (searchMovieText.length < 1) {
          fetchMovies();
          setsearchErrorText("");
        } else {
          setsearchErrorText("please enter atleast 3 character");
        }
      }, 2000);
      return () => {
        clearTimeout(fetchTimer);
      };
    }
  }, [searchMovieText]);

  const fetchMovies = async () => {
    setLoading(true);
    // FETch resourecs
    setsearchErrorText("");
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovieText}`
      );
      setMovies(response.data.moviesData);
      setIsError(false);
      setLoading(false);
      setFirstRun(false);
    } catch (error) {
      setIsError(true);
      setErrorText("cannot get movies");
      setFirstRun(false);
    }

    console.log(movies);
  };

  return (
    <div className="App">
      <MovieNavBar />
      <div>
        <input
          type="text"
          value={searchMovieText}
          placeholder="Type movie title"
          onChange={(e) => setSearchMovieText(e.target.value)}
        />
        <span style={{ color: "red" }}>{searchErrorText}</span>
      </div>
      movies list
      {isError ? (
        <>
          <div
            style={{
              background: "red",
              color: "white",
              padding: "10px",
              margin: "5px;",
            }}
          >
            {ErrorText}
          </div>
        </>
      ) : (
        <>
          <div style={{ background: "grey", padding: "10px", margin: "10px;" }}>
            <div>{loading ? <> loading...</> : <></>}</div>
            {!loading && movies.length < 1 ? (
              <>no movies found</>
            ) : (
              <>
                {movies.map((el) => (
                  <div key={el.id}>
                    <Link to={`/view_movie/${el.id}`}>
                      <span style={{ fontWeight: "bold" }}>{el.name}</span>
                    </Link>
                    <br />
                    <img
                      src={el.image}
                      alt="movieimage"
                      style={{ height: "100px" }}
                    />
                    <br />
                    info:{el.info}
                    <br />
                    rating:{el.rating}
                    <br />
                  </div>
                ))}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default Index;

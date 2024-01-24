import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Index = () => {
  const [movies, setMovies] = useState([]);
  const [searchMovieText, setSearchMovieText] = useState([]);
  const [isError, setIsError] = useState(false);
  const [ErrorText, setErrorText] = useState("");
  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    //searching code
    fetchMovies();
  }, [searchMovieText]);

  const fetchMovies = async () => {
    // FETch resourecs
    console.log("calling APi");
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movies?search=${searchMovieText}`
      );
      setMovies(response.data.moviesData);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      setErrorText("cannot get movies");
    }

    console.log(movies);
  };

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={searchMovieText}
          placeholder="Type movie title"
          onChange={(e) => setSearchMovieText(e.target.value)}
        />
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
          {" "}
          <div style={{ background: "grey", padding: "10px", margin: "10px;" }}>
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
          </div>
        </>
      )}
    </div>
  );
};
export default Index;

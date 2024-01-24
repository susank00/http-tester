import axios from "axios";
import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

const AddMovie = () => {
  const history = useHistory();
  const movie_name_reference = useRef();
  const movie_rating_reference = useRef();

  const movie_desc_reference = useRef();

  const addMovieHandler = async (e) => {
    e.preventDefault();

    const movieData = {
      movie_name: movie_name_reference.current.value,
      rating: movie_rating_reference.current.value,
      description: movie_desc_reference.current.value,
    };
    try {
      const response = await axios.post(
        "https://api.dynoacademy.com/test-api/v1/movies",
        movieData,
        {
          timeout: 10000,
        }
      );
      alert(response.data.message);
      history.replace("/");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.errors[0].message);
      } else {
        alert("unknown error try again boy");
      }
    }
  };
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      testin
      <form onSubmit={addMovieHandler}>
        <input
          type="text"
          placeholder="movie name"
          ref={movie_name_reference}
        />{" "}
        <br />
        <br />
        <input
          type="text"
          placeholder="rating"
          ref={movie_rating_reference}
        />{" "}
        <br />
        <br /> <br />
        <textarea ref={movie_desc_reference}> </textarea>
        <button type="submit ">ADD movie</button>
      </form>
    </>
  );
};
export default AddMovie;

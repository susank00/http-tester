import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewMovie = () => {
  const getParams = useParams();
  const getID = getParams.id;
  const [movieData, setMovieData] = useState({});
  useEffect(() => {
    getSingleMovieInfo();
  }, []);
  const getSingleMovieInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.dynoacademy.com/test-api/v1/movie/${getID}`
      );
      setMovieData(response.data.singleMovieData);
    } catch (error) {
      alert("error coccured");
    }
  };
  return (
    <>
      movie details: <br />
      <br />
      Movie name: {movieData.name} <br />
      <br />
      Info:{movieData.info}
      <br />
      <br />
      description:{movieData.desc} <br />
      <br />
      Image:
      <br />
      <img src={movieData.image} alt="movieimage" style={{ height: "100px" }} />
      <br />
      Rating:{movieData.rating}
      <br />
    </>
  );
};
export default ViewMovie;

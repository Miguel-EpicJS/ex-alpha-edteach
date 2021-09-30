import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import { MovieImg, Flex, } from "../styles/movieDetails.pages.style"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";


import Layout from "./Layout";


const imgUrl = "https://image.tmdb.org/t/p/w500/";

const getMovie = async (id) => {
  const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6ca1ad0db4eb957a0e8d23d35f42bf3b`);
  return result.data;
};

const getRecommendedMovies = async (id) => {
  const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=6ca1ad0db4eb957a0e8d23d35f42bf3b`);
  return result.data;
};
const getCreditsMovies = async (id) => {
  const result = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=6ca1ad0db4eb957a0e8d23d35f42bf3b`);
  return result.data;
};

function timeConvert(n) {
  let num = n;
  let hours = (num / 60);
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return rhours + "h" + rminutes + "min";
}

export function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const [recommendedMovies, setRecommendedMovies] = useState(null);
  const [creditsMovies, setCreditsMovies] = useState([]);

  const params = useParams();

  const history = useHistory()


  useEffect(() => {
    const fetchData = async () => {
      setMovie(await getMovie(params.id));
      setRecommendedMovies(await getRecommendedMovies(params.id));
      setCreditsMovies((await getCreditsMovies(params.id)).cast);
    }

    fetchData();
  }, [params.id]);


  const renderRecommendedMovies = useMemo(() => {

    if (!recommendedMovies) {
      return null;
    };
    const goToMovies = (idMovies) => {
      history.push(`/movies/${idMovies}`);
    };

    return recommendedMovies.results.map((movie) => {
      return (
        <img alt="" onClick={() => { goToMovies(movie.id) }} src={imgUrl + movie.poster_path} width="300px" style={{ margin: "8px" }} />
      );
    });

  }, [recommendedMovies, history]);



  if (movie === null) {
    return <h1>Carregando...</h1>;
  }
  return (
    <Layout>
      <Flex>
        <div style={{ flexBasis: "50%" }}>
          <MovieImg src={imgUrl + movie.poster_path} />
        </div>
        <div>
          <h1>{movie.title}</h1>
          <p>
            {movie.release_date} {timeConvert(movie.runtime)}
          </p>
          <p>
            {movie.overview}
          </p>
        </div>

      </Flex  >
      <Flex>
        <div style={{ width: "500px" }}>
          <h2>Authors</h2>
          <Slider infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} autoplay={true} centerMode={true}>
            {
              creditsMovies.map((movie) => {
                return (
                  <div><img src={imgUrl + movie.profile_path} width="400px" alt={movie.name} style={{ margin: "5px" }} /></div>
                )
              })
            }
          </Slider>
        </div>
        <div>
          <h2>Recommended Movies</h2>

          <div style={{ width: "500px" }}>
            <Slider infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} autoplay={true} centerMode={true}>
              {
                renderRecommendedMovies
              }
            </Slider>
          </div>
        </div>
      </Flex>
    </Layout>
  );



}
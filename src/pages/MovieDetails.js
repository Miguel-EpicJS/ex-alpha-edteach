
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router";

import { MovieImg, Flex, } from "../styles/movieDetails.pages.style"


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

  useEffect(() => {
    async function fetchData() {
      setMovie(await getMovie(params.id));
      setRecommendedMovies(await getRecommendedMovies(params.id));
      setCreditsMovies((await getCreditsMovies(params.id)).cast);
    }

    fetchData();
  }, [params.id]);

  const goToMovies = (idMovies) => {
    window.location.href = `/movies/${idMovies}`;
  };
  const goToCredit = (idCredit) => {
    /* window.location.href=`/credit/${idCredit}`; */
    console.log("credit")
  };

  const renderRecommendedMovies = useMemo(() => {
    if (!recommendedMovies) {
      return null;
    };

    return recommendedMovies.results.map((movie) => {
      return (
        <img alt="" onClick={() => { goToMovies(movie.id) }} src={imgUrl + movie.poster_path} width="300px" style={{margin: "8px"}} />
      );
    });

  }, [recommendedMovies]);



  if (movie === null) {
    return <h1>Carregando...</h1>;
  }
  return (
    <div>
      <Flex>
        <div style={{flexBasis: "50%"}}>
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
      <div>
        <h2>Authors</h2>

        {
          creditsMovies.map((movie) => {
            return (
              <img src={imgUrl + movie.profile_path} onClick={() => goToCredit(movie.credit_id)} width="200px" alt="" style={{margin: "5px"}} />
            )
          })
        }
      </div>
      <div>
        <h2>Recommended Movies</h2>

        {
          renderRecommendedMovies
        }
      </div>
    </div>
  );



}
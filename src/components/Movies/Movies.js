import React, { useContext } from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Movie from "./Movie";
import { MyContext } from "../../context/context";
import { MovieService } from "../../services/MovieService";
import { MOVIES } from "../../tests/produtos";

import { TrendingTitle } from "../../styles/movies.components.style"

export function Movies() {
    const [movies, setMovies] = useState(MOVIES);
    const [genres, setGenres] = useState([]);

    const { cartMovies, addMovieToCart } = useContext(MyContext);

    const history = useHistory();

    useEffect(() => {
        const run = async () => {
            const movies = await MovieService.getMovies();
            setMovies(movies.results);

            const genres = await MovieService.getGenres();
            setGenres(genres.genres);

        };

        run();

        console.log(genres);
    }, []);

    const goToMovies = (idMovies) => {
        history.push(`/movies/${idMovies}`);
    };

    const render = () => {
        return (
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", width: "97%", marginLeft: "75px" }}>
                {movies.map((movie) => {
                    return (
                        <Movie
                            key={movie.id}
                            movie={movie}
                            navigate={goToMovies}
                            addToCart={addMovieToCart}
                        />
                    );
                })}
            </div>
        );
    };

    const findByGenre = async (genreId) => {
        const movies = await MovieService.getGenresMovies(genreId);
        console.log(movies);
        /* return (
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", width: "97%", marginLeft: "75px" }}>
                {movies.map((movie) => {
                    return (
                        <Movie
                            key={movie.id}
                            movie={movie}
                            navigate={goToMovies}
                            addToCart={addMovieToCart}
                        />
                    );
                })}
            </div>
        ); */
    }

    return (
        <div style={{ padding: 20 }}>
            <TrendingTitle> <hr /> TRENDING <hr /></TrendingTitle>
            {render()}
            <div>
                <TrendingTitle> 
                    <hr /> 
                    
                    <label>
                        GENRE
                        <input list="genres" name="myGenres" onChange={console.log()} />
                    </label>
                    <datalist  id="genres">
                        <option value="Action" />
                        {
                            genres.map(genre => {
                                return <option key={genre.id} value={genre.name} />
                            })
                        }
                    </datalist>
                    
                    <hr />
                </TrendingTitle>
            </div>
        </div>
    );
}
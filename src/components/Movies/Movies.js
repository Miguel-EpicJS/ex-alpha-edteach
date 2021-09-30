import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Movie from "./Movie";
import { MyContext } from "../../context/context";
import { MovieService } from "../../services/MovieService";
import { MOVIES } from "../../tests/produtos";

import { TrendingTitle } from "../../styles/movies.components.style"

import Select from "react-select"

import Layout from "../../pages/Layout";


export function Movies() {
    const [movies, setMovies] = useState(MOVIES);
    const [genres, setGenres] = useState([]);
    const [genreName, setGenreName] = useState(28);
    const [moviesGenre, setMoviesGenre] = useState([]);

    const { addMovieToCart } = useContext(MyContext);

    const history = useHistory();

    const options = [];

    const loadOptions = () => {
        for (let i = 0; i < genres.length; i++) {
            options.push({ value: genres[i].id, label: genres[i].name });
        }
    };

    useEffect(() => {
        const run = async () => {
            const movies = await MovieService.getMovies();
            setMovies(movies.results);

            const genres = await MovieService.getGenres();
            setGenres(genres.genres);
        };

        run();

    }, []);

    useEffect(() => {
        const findMovies = async () => {
            const genreMovies = await MovieService.getGenresMovies(genreName);
            setMoviesGenre(genreMovies.results);
        };

        findMovies();
    }, [genreName]);



    const goToMovies = (idMovies) => {
        history.push(`/movies/${idMovies}`);
    };

    const render = () => {
        loadOptions();
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


    const findByGenre = () => {
        return (
            <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row", width: "97%", marginLeft: "75px" }}>
                {moviesGenre.map((movie) => {
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
    }



    return (
        <Layout >
            <div style={{ padding: 20 }}>
                <TrendingTitle> <hr /> TRENDING <hr /></TrendingTitle>
                {render()}
                <div>
                    <TrendingTitle>
                        <hr />
                        <h2 style={{marginLeft: "-30px"}}>GENRE</h2>

                        <Select options={options} onChange={(e) => { setGenreName(e.value) }} />

                        <hr />
                    </TrendingTitle>

                    {findByGenre()}
                </div>
            </div>
        </Layout>
    );
}
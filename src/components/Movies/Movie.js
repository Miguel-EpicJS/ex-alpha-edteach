import { RiShoppingCartFill } from "react-icons/ri";
import { VscLinkExternal } from "react-icons/vsc";

import { PriceButton, LinkButton, MovieContainer, MovieTitle } from "../../styles/movie.components.style";

const imgUrl = "https://image.tmdb.org/t/p/w300/";

export default function Movie({ movie, navigate, addToCart }) {
    const gotToMovie = () => {
        navigate(movie.id);
    };

    const onClickAddToCart = () => {
        addToCart(movie);
    };

    return (
        <MovieContainer className="card" data-testid={`movie-trending-name-${movie.id}`}>
            <img
                onClick={gotToMovie}
                src={imgUrl + movie.poster_path}
                alt="..."
                width="280px"
                data-testid="movie-img"
            />
            <div>
                <MovieTitle onClick={gotToMovie} data-testid="movie-name">
                    {movie.title !== undefined ? movie.title : movie.name}
                </MovieTitle>
            </div>

            <div>
                <LinkButton onClick={gotToMovie} data-testid="link-button" ><VscLinkExternal color="#fff" /></LinkButton>
                <PriceButton onClick={onClickAddToCart} data-testid="price-button" >
                    <RiShoppingCartFill color="#fff" /> R$ {movie.vote_average * 10}
                </PriceButton>
            </div>
        </MovieContainer>
    );
}
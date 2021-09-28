import React from "react";
import { FaTrashAlt } from "react-icons/fa";

import {MovieTitle, CheckoutContainer, GeralContainer} from "../../styles/checkout.pages.style"

export default function CheckoutMovie({ movie, movies, navigate, removeFromCart }) {
    const gotToMovie = () => {
        navigate(movie.id);
    };

    const onClickRemoveFromCart = () => {
        const cart = movies.filter((i) => i.id !== movie.id);
        removeFromCart(cart);
    };

    return (
        <GeralContainer>
            <CheckoutContainer>
                <MovieTitle onClick={gotToMovie}>
                    {movie.title !== undefined ? movie.title : movie.name}
                </MovieTitle>
            </CheckoutContainer>

            <CheckoutContainer>
                <MovieTitle onClick={onClickRemoveFromCart}><FaTrashAlt color="#4B5C6B" /></MovieTitle>
                <MovieTitle>
                    R$ {movie.vote_average * 10}
                </MovieTitle>
            </CheckoutContainer>
        </GeralContainer>
    );
}
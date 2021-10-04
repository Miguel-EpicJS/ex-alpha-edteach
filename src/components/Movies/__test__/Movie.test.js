import { render, fireEvent, screen } from "@testing-library/react";
import { MOVIES } from "../../../tests/movies";
import Movie from "../Movie";

describe("Movie", () => {

    test("Test render and onClicks on Movie component", () => {
        const movie = MOVIES[0];

        const navigate = jest.fn();
        const addToCart = jest.fn();

        render(
            <Movie
                movie={movie}
                navigate={navigate}
                addToCart={addToCart}
            />
        );
        const movieName = screen.getByTestId("movie-name");
        fireEvent.click(movieName);

        expect(navigate).toHaveBeenCalledTimes(1);

        const moviePrice = screen.getByTestId("price-button");
        fireEvent.click(moviePrice);

        expect(addToCart).toHaveBeenCalledTimes(1);

        const movieLink = screen.getByTestId("link-button");
        fireEvent.click(movieLink);

        expect(navigate).toHaveBeenCalledTimes(2);

        const movieImg = screen.getByTestId("movie-img");
        fireEvent.click(movieImg);

        expect(navigate).toHaveBeenCalledTimes(3);

    });
});
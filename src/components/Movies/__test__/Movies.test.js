import { act, screen } from "@testing-library/react";
import { MovieService } from "../../../services/MovieService";
import { MOVIES, GENRES, DRAMAGENRE } from "../../../tests/movies";
import { renderWithProviders } from "../../../tests/renderWithProviders";
import {Movies} from "../Movies";


jest.mock("../../../services/MovieService");


const setup = async () => {
    let rendered;
    await act(async () => {
        rendered = await renderWithProviders(<Movies />);
    });
    return rendered;
};

describe("Movies", () => {

    beforeEach(() => {
        MovieService.getMovies.mockImplementation(() => ({results: MOVIES}) );
        MovieService.getGenres.mockImplementation(() => ({genres: GENRES}));
        MovieService.getGenresMovies.mockImplementation(() => ({results: DRAMAGENRE}));
    });

    test("Test if services is beeing called", async () => {
        await setup();
        expect(MovieService.getMovies).toHaveBeenCalledTimes(1);
        expect(MovieService.getGenres).toHaveBeenCalledTimes(1);
        expect(MovieService.getGenresMovies).toHaveBeenCalledTimes(1);
    });

    test("Test if movies is beeing rendered", async () => {
        await setup();
        MOVIES.forEach(movie => {
            expect(screen.getAllByText(movie.title !== undefined ? movie.title : movie.name));
        });
    })
    
});
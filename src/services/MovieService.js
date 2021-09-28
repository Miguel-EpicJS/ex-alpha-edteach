
import axios from "axios";

export const MovieService = {
  async getMovies() {
    const response = await axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=6ca1ad0db4eb957a0e8d23d35f42bf3b");
    return response.data;
  },
  async getGenres() {
    const response = await axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=6ca1ad0db4eb957a0e8d23d35f42bf3b");
    return response.data;  
  },
  async getGenresMovies(genreId) {
    const response = await axios.get(`https://api.themoviedb.org/3/discover/movie`, 
    {
      params: {
        api_key: "6ca1ad0db4eb957a0e8d23d35f42bf3b",
        with_genres: genreId
      }
    }
    );
    return response.data;  
  },
};
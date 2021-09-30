import React, { useState } from "react";

export const MyContext = React.createContext({
    cartMovies: [],
    user: "",
});

export function MyProvider({ children }) {
    const [cartMovies, setCartMovies] = useState(JSON.parse(localStorage.getItem("cartMovies")) || []);
    const [user, setUser] = useState("not logged");
    localStorage.setItem("cartMovies", JSON.stringify(cartMovies));

    const addMovieToCart = (movie) => {
        setCartMovies((prevState) => {
            if (prevState.find((p) => p.id === movie.id)) {
                return prevState;
            }
            return prevState.concat(movie);
        });
        localStorage.setItem("cartMovies", JSON.stringify(cartMovies));
    };

    const updateMovieToCart = (movie) => {
        setCartMovies((prevState) => {
            if (prevState.find((p) => p.id === movie.id)) {
                return prevState;
            }
            return (movie);
        });
        localStorage.setItem("cartMovies", JSON.stringify(cartMovies));
    };

    const verifyLogin = (login) => {
        if (login.email === "admin@admin.com" && login.password === "admin") {
            setUser(() => { return "logged" }   );
            console.log(user);
            return user;
        }else{
            setUser("not logged");
            return user;
        }
    }



    return (
        <MyContext.Provider
            value={{
                cartMovies,
                addMovieToCart,
                updateMovieToCart,
                user,
                verifyLogin
            }}
        >
            {children}
        </MyContext.Provider>
    );
}
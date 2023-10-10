import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { Link, useNavigate } from "react-router-dom";
import APIURL from "./APIURL";
import tmdbtoken from "./tmdbtoken";
import MoviesContentLoader from "./MoviesContentLoader";
import "animate.css";

const ReviewMovies = ({ currentUser }) => {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [ismoviesloaded, setIsmoviesloaded] = useState(false);
    const [secondloading, setSecondloading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    let ratingsArr = [];
    console.log(currentUser);
    useEffect(() => {
        makeGenresCall();
    }, []);

    //first api call to TMDB to get genres
    const makeGenresCall = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list`,
            {
                headers: {
                    Authorization: `Bearer ${tmdbtoken}`,
                },
            }
        );
        const json = await response.json();
        setGenres(json.genres);
        setLoading(false);
    };

    //second api call to TMDB upon selecting a genres to fetch movie titles
    const makeMoviesListCall = async (genreID) => {
        setSecondloading(true);
        const movieResponse = await fetch(
            `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreID}`,
            {
                headers: {
                    Authorization: `Bearer ${tmdbtoken}`,
                },
            }
        );
        const movieData = await movieResponse.json();
        setMovies(movieData.results);
        setSecondloading(false);
        setIsmoviesloaded(true);
    };

    const pullRatings = (data) => {
        //removes duplicate ratings in case a movie was rated more than once and keeps the latest rating
        ratingsArr = data.filter(
            (v, i, a) =>
                a.findLastIndex((v2) => v2.ratedTitle === v.ratedTitle) === i
        );
        // console.log(ratingsArr);
    };

    const submitRatings = async (event) => {
        event.preventDefault();

        await fetch(`${APIURL}/movies`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(ratingsArr),
        });
        setIsSubmitted(true);
        setIsmoviesloaded(false);
    };

    if (loading) {
        return (
            <div className="text-center">
                <MoviesContentLoader />
            </div>
        );
    }
    return (
        <div>
            <div className="container">
                <div className="row topRow">
                    {/* <!-- END OF INTRO IMAGE --> */}
                    <div>
                        <h1 hidden className="text-center mt-5">
                            Review Movies To Find Matches
                        </h1>
                        <div className="row row-cols-1 row-cols-md-3 g-4">
                            <div>
                                <img
                                    src="./step1.png"
                                    className="img-responsive animate__animated 
                                    animate__fadeIn "
                                    style={{
                                        height: "2",
                                        textShadow: "1px 1px 10px #FFF",
                                    }}
                                />
                                <h1
                                    className="text-center mt-4 animate__animated 
                                    animate__fadeIn "
                                    style={{
                                        color: "#1468AD",
                                        fontWeight: "bold",
                                        textShadow: "1px 1px 10px #FFF",
                                    }}
                                >
                                    Select a genre
                                </h1>
                            </div>
                            <div id="steptwo">
                                <img
                                    src="./step2.png"
                                    className="img-responsive animate__animated animate__fadeIn animate__delay-1s"
                                />
                                <h1
                                    className="text-center  mt-4 animate__animated animate__fadeIn animate__delay-1s"
                                    style={{
                                        color: "#1468AD",
                                        fontWeight: "bold",
                                        textShadow: "1px 1px 10px #FFF",
                                    }}
                                >
                                    Rate movies
                                </h1>
                            </div>
                            <div id="stepthree">
                                <img
                                    src="./step3.png"
                                    className="img-responsive animate__animated animate__fadeIn animate__delay-2s"
                                />
                                <h1
                                    className="text-center mt-4 animate__animated animate__fadeIn animate__delay-2s"
                                    style={{
                                        color: "#1468AD",
                                        fontWeight: "bold",
                                        textShadow: "1px 1px 10px #FFF",
                                    }}
                                >
                                    Find matches
                                </h1>
                            </div>
                        </div>
                        {/* <!-- SELECT GENRES DROPDOWN --> */}

                        <div className="text-center mt-5 mb-5 mx-auto w-25 d-flex justify-content-center">
                            <label hidden htmlFor="genre">
                                Select a Genre:
                            </label>
                            <select
                                id="genre"
                                className="form-select mx-auto"
                                aria-label="Select Genre"
                                onChange={(event) =>
                                    makeMoviesListCall(event.target.value)
                                }
                            >
                                <option className="text-center">
                                    Select a Genre
                                </option>

                                {genres.map((genre) => {
                                    return (
                                        <option value={genre.id} key={genre.id}>
                                            {genre.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        {secondloading ? (
                            <>
                                <MoviesContentLoader />;
                            </>
                        ) : (
                            <>
                                <div>
                                    <div className="row row-cols-1 row-cols-md-3 g-4">
                                        {movies.map((movie) => {
                                            return (
                                                <MovieCard
                                                    key={movie.id}
                                                    movieProp={movie}
                                                    ratingsProp={pullRatings}
                                                    userProp={currentUser}
                                                />
                                            );
                                        })}
                                    </div>
                                    {ismoviesloaded && (
                                        <>
                                            <form onSubmit={submitRatings}>
                                                <button
                                                    type="submit"
                                                    className="btn btn-success mt-5 mb-5"
                                                >
                                                    Submit Ratings
                                                </button>
                                            </form>
                                            {/* {submitRatings()} */}
                                        </>
                                    )}
                                    {isSubmitted ? (
                                        <>
                                            <div>
                                                <h4
                                                    className="text-left mt-4 animate__animated 
                                    animate__fadeIn "
                                                    style={{
                                                        color: "#1468AD",
                                                        fontWeight: "bold",
                                                        textShadow:
                                                            "1px 1px 10px #FFF",
                                                    }}
                                                >
                                                    Your ratings have been
                                                    submitted! See who you
                                                    matched.
                                                </h4>
                                            </div>
                                            <Link to="/find-matches">
                                                <button className="btn btn-success mb-5 mt-5">
                                                    Find Matches
                                                </button>
                                            </Link>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewMovies;

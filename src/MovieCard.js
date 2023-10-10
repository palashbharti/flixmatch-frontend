import { useState } from "react";
import FadeIn from "react-fade-in/lib/FadeIn";

let ratingsArray = [];

const MovieCard = ({ movieProp, ratingsProp, userProp }) => {
    let movieDesc = movieProp.overview;

    const [rated, setRated] = useState();

    const recordRating = (event) => {
        setRated(event.target.value);

        const ratingObject = {
            currentuserid: userProp,
            rated: event.target.value,
            ratedTitle: movieProp.title,
            ratedGenres: movieProp.genre_ids, //ratedGenres is an array
        };

        ratingsArray.push(ratingObject);
        // console.log(ratingsArray);
        ratingsProp(ratingsArray);
    };

    if (movieProp.original_language == "en") {
        return (
            <FadeIn>
                <div className="col">
                    <div className="card  align-items-stretch">
                        <img
                            src={`https://image.tmdb.org/t/p/original${movieProp.poster_path}`}
                        />
                        {/* <!--CARD IMAGE ENDS--> */}
                        <div className="card-body">
                            <h5 className="card-title">{movieProp.title}</h5>
                            <p className="card-text">
                                {movieDesc.slice(0, 100)}...
                            </p>
                            <label
                                htmlFor="reviewSlider1"
                                className="form-label"
                            >
                                Your Ratings:{"   "}
                                <p
                                    style={{
                                        display: "inline",
                                        color: "#F85C70",
                                        fontWeight: "700",
                                        fontSize: "3ch",
                                    }}
                                >
                                    {rated}
                                </p>
                            </label>
                            {/* <!-- RATINGS SLIDER  --> */}
                            {/* <div style={{ position: "absolute" }}></div> */}
                            <div className="row">
                                <div className="col-1">1</div>
                                <div className="col-9">
                                    <input
                                        type="range"
                                        className="form-range ratingsNumber"
                                        min="1"
                                        max="10"
                                        step="1"
                                        defaultValue="0"
                                        onChange={recordRating}
                                    />
                                </div>
                                <div className="col-2">10</div>
                            </div>
                            {/* <!-- END RATINGS SLIDER --> */}
                        </div>
                    </div>
                </div>
            </FadeIn>
        );
    }
};

export default MovieCard;

import FadeIn from "react-fade-in/lib/FadeIn";

const movieArr = (arr, preferredtext, textcolor) => {
    return (
        <>
            Both of you {preferredtext} the movie(s):
            <br />
            <span
                style={{
                    fontWeight: 700,
                    color: textcolor,
                }}
            >
                {arr.map((m, index, a) => {
                    let result = index === a.length - 1 ? `${m} ` : `${m}, `;
                    return result;
                })}
            </span>
            <br />
        </>
    );
};

const MatchCard = (props) => {
    const getRandomCuteImage = () => {
        let randomCuteImage =
            props.cuteImages[
                Math.floor(Math.random() * props.cuteImages.length)
            ];
        return randomCuteImage;
    };

    return (
        <FadeIn>
            <div className="col d-flex align-items-stretch">
                <div className="card " style={{ width: "100%" }}>
                    <div className=" object-fit-fill">
                        <img
                            // src="/yourMatchDefault2.jpg"
                            src={getRandomCuteImage()}
                            style={{ width: "100%", height: "40vh" }}
                            className="card-img-top img-fluid object-fit-cover"
                            alt="match"
                        />
                    </div>
                    {/* <!--CARD IMAGE ENDS--> */}
                    <div className="card-body align-items-stretch">
                        <div className="d-flex justify-content-between">
                            <h4
                                className="card-title "
                                style={{
                                    display: "inline-block",
                                    fontSize: "36px",
                                    color: "rgb(20, 104, 173)",
                                }}
                            >
                                {props.matchName}
                            </h4>
                            <h5
                                className="card-title "
                                style={{
                                    display: "inline-block",
                                    textAlign: "right",
                                    color: "rgb(248, 92, 112)",
                                    fontSize: "36px",
                                }}
                            >
                                {Math.round((props.similarityScore / 5) * 100)}%
                            </h5>
                        </div>
                        <p className="card-text">
                            Common rated movie(s): <br />
                            <span
                                style={{
                                    fontWeight: 700,
                                }}
                            >
                                {props.matchedMovies.map((m, index, a) => {
                                    let result =
                                        index === a.length - 1
                                            ? `${m} `
                                            : `${m}, `;
                                    return result;
                                })}
                            </span>
                            <br />
                            <br />
                            {props.likedMovies.length === 0
                                ? null
                                : movieArr(props.likedMovies, "like", "green")}
                            <br />
                            {props.dislikedMovies.length === 0
                                ? null
                                : movieArr(
                                      props.dislikedMovies,
                                      "dislike",
                                      "red"
                                  )}
                        </p>

                        {/* <!-- SPARK BUTTON  --> */}
                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-lg m-3 btn-primary text-center sendSparkBtn"
                            >
                                Send a Spark
                            </button>
                        </div>
                        {/* <!-- END SPARK BUTTON --> */}
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};

export default MatchCard;

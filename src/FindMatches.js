import { useEffect, useState } from "react";
import APIURL from "./APIURL";
import MatchCard from "./MatchCard";
import { MoonLoader } from "react-spinners";

const FindMatches = ({ currentUserData }) => {
    const [matches, setMatches] = useState([]);
    const [matchescopy, setMatchescopy] = useState([]);

    const [cuteImages, setcuteImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMatches = async () => {
            const getMatchedUsersData = await fetch(`${APIURL}/matchedusers`);
            const data = await getMatchedUsersData.json();

            setMatches(data.matches);
            sortBy("commonRatedMovieNames", data.matches);
            console.log(data.matches);
        };

        const makekittenAPICall = async () => {
            const url = "http://shibe.online/api/shibes?count=30";

            try {
                const response = await fetch(url);
                const result = await response.json();
                setcuteImages(result);
            } catch (error) {
                console.error(error);
            }
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        };

        const main = async () => {
            await getMatches();
            await makekittenAPICall();
        };
        main();
    }, []);
    // if (loading) {
    //     return <GridLoader color="#0097B2" />;
    // }

    const sortBy = (val, inputData = matches) => {
        // console.log(val);
        const matchesarr = [...inputData];

        if (val === "similarityScore") {
            matchesarr.sort((a, b) => {
                return b[val] - a[val];
            });
        } else {
            matchesarr.sort((a, b) => {
                return b[val].length - a[val].length;
            });
        }
        setMatchescopy(matchesarr);
        // console.log("matchesCopy", matchesCopy);
    };

    return (
        <div>
            <div className="container">
                <div className="row topRow">
                    <h1
                        className="text-center mt-5 animate__animated 
                                    animate__fadeIn "
                        style={{
                            color: "#1468AD",
                            fontWeight: "bold",
                            textShadow: "1px 1px 10px #FFF",
                        }}
                    >
                        Find Your Matches Below
                    </h1>
                    <div className="text-center mt-5 mb-5 mx-auto w-25 justify-content-center">
                        <label hidden htmlFor="sortby">
                            Sort by
                        </label>
                        <select
                            id="sortby"
                            className="form-select mx-auto"
                            aria-label="Sort by"
                            defaultValue="none"
                            onChange={
                                (event) => sortBy(event.target.value)
                                // console.log(typeof event.target.value)
                            }
                        >
                            <option value="none">Sort by...</option>
                            <option value="similarityScore">
                                Similarity Score
                            </option>
                            <option value="commonRatedMovieNames">
                                Common Movies
                            </option>
                            <option value="likedMovies">Liked Movies</option>
                            <option value="dislikedMovies">
                                Disiked Movies
                            </option>
                        </select>
                    </div>
                    <div>
                        {loading ? (
                            <MoonLoader
                                color="rgb(20, 104, 173)"
                                cssOverride={{
                                    // display: "inline-block",
                                    margin: "40px auto",
                                    borderColor: "red",
                                }}
                            />
                        ) : (
                            <>
                                <div className="row row-cols-1 row-cols-md-2 g-4">
                                    {!matchescopy
                                        ? matches.map((match) => {
                                              return (
                                                  <MatchCard
                                                      cuteImages={cuteImages}
                                                      matchName={match.userB}
                                                      key={match.userB}
                                                      similarityScore={
                                                          match.similarityScore
                                                      }
                                                      matchedMovies={
                                                          match.commonRatedMovieNames
                                                      }
                                                      likedMovies={
                                                          match.likedMovies
                                                      }
                                                      dislikedMovies={
                                                          match.dislikedMovies
                                                      }
                                                  />
                                              );
                                          })
                                        : matchescopy.map((match) => {
                                              return (
                                                  <MatchCard
                                                      cuteImages={cuteImages}
                                                      matchName={match.userB}
                                                      key={match.userB}
                                                      similarityScore={
                                                          match.similarityScore
                                                      }
                                                      matchedMovies={
                                                          match.commonRatedMovieNames
                                                      }
                                                      likedMovies={
                                                          match.likedMovies
                                                      }
                                                      dislikedMovies={
                                                          match.dislikedMovies
                                                      }
                                                  />
                                              );
                                          })}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindMatches;

// {!matches ? (
//     <p>Finding your matches...</p>
// ) : (
//     matches.map((match) => {
//         return (
//             <MatchCard
//                 cuteImages={cuteImages}
//                 matchName={match.userB}
//                 key={match.userB}
//                 similarityScore={
//                     match.similarityScore
//                 }
//                 matchedMovies={
//                     match.commonRatedMovieNames
//                 }
//                 likedMovies={match.likedMovies}
//                 dislikedMovies={
//                     match.dislikedMovies
//                 }
//             />
//         );
//     })
// )}

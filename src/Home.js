import { Link } from "react-router-dom";
import Enterdetails from "./Enterdetails";
import FadeIn from "react-fade-in/lib/FadeIn";
import "./Home.scss";

const Home = ({ currentUser }) => {
    return (
        <div id="home">
            <div className="container-fluid">
                <FadeIn>
                    <div className="row intro">
                        <div className="col-md-6 coverPhoto">
                            <img className="img-fluid" src={"/couple.jpg"} />
                        </div>
                        {/* <!-- END OF INTRO IMAGE --> */}
                        <div className="col-md-6 mt-5 introCopy">
                            <h1>Find Movie Buddies Through Movie Magic!</h1>
                            <h2 className="my-5">
                                FlixMatch connects you with like-minded
                                individuals based on your movie reviews.
                            </h2>
                            <h2 className="mb-5">
                                From rom-coms to action-packed adventures, find
                                someone who shares your passion for the silver
                                screen. Start your cinematic story today.
                            </h2>
                            <div className="text-center">
                                {currentUser ? (
                                    <Link to="/protected">
                                        <button
                                            type="button"
                                            className="btn btn-primary text-end"
                                        >
                                            Sign Out
                                        </button>
                                    </Link>
                                ) : (
                                    <Link to="/protected">
                                        <button
                                            type="button"
                                            className="btn btn-primary text-end"
                                        >
                                            Sign In
                                        </button>
                                    </Link>
                                )}
                                {/* <Link to="/protected">
                                    <button
                                        type="button"
                                        className="btn btn-lg m-3 btn-primary text-center registerBtn"
                                    >
                                        Sign in
                                    </button>
                                </Link> */}
                            </div>
                        </div>
                        {/* <!-- END OF INTRO COPY --> */}
                    </div>
                </FadeIn>
                {/* <!--END OF INTRO CONTENT ROW--> */}
            </div>
        </div>
    );
};

export default Home;

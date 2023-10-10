import { Outlet } from "react-router-dom";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = ({ currentUser }) => {
    return (
        <>
            <div id="navbar">
                <div className="sticky-top">
                    <div className="d-flex justify-content-between align-items-center p-2 bd-highlight">
                        <div className="col-md-6 logo">
                            <Link to="/">
                                {" "}
                                <img
                                    className="img-fluid"
                                    src={"./fmLogo.png"}
                                />{" "}
                            </Link>
                        </div>
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
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navbar;

import { Link } from "react-router-dom";

const Enterdetails = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row topRow">
                    {/* <!-- END OF INTRO IMAGE --> */}
                    <div>
                        <h1 className="text-center">It's About Time...</h1>
                        <h2 className="text-center">
                            ...For a Real Life Rom Com
                        </h2>
                        <div className="row mt-3">
                            <div className="col-md-6">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    aria-label="Name"
                                />
                            </div>
                            {/* <!--NAME INPUT ENDS--> */}
                            <div className="col-md-6">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    aria-label="Email"
                                />
                            </div>
                            {/* <!--EMAIL INPUT ENDS--> */}
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <input
                                    type="date"
                                    className="form-control"
                                    placeholder="Date Of Birth"
                                    aria-label="Date Of Birth"
                                    value="Date Of Birth"
                                />
                            </div>
                            {/* <!--DOB INPUT ENDS--> */}
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    aria-label="Select Gender"
                                >
                                    <option selected>Gender</option>
                                    <option value="1">Man</option>
                                    <option value="2">Woman</option>
                                    <option value="3">Transgender</option>
                                    <option value="4">
                                        Non-binary/non-conforming
                                    </option>
                                    <option value="5">
                                        Prefer not to respond
                                    </option>
                                </select>
                            </div>
                            {/* <!--GENDER INPUT ENDS--> */}
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    aria-label="Looking For"
                                >
                                    <option selected>Looking for..</option>
                                    <option value="1">Man</option>
                                    <option value="2">Woman</option>
                                    <option value="3">Transgender</option>
                                    <option value="4">
                                        Non-binary/non-conforming
                                    </option>
                                    <option value="5">
                                        Prefer not to respond
                                    </option>
                                </select>
                            </div>
                            {/* <!--LOOKING FOR INPUT ENDS--> */}
                            <div className="col-md-6">
                                <select
                                    className="form-select"
                                    multiple
                                    aria-label="Interest"
                                >
                                    <option selected>My Interests</option>
                                    <option value="1">Kayaking</option>
                                    <option value="2">Netflix & Chill</option>
                                    <option value="3">Baseball</option>
                                    <option value="4">Cooking</option>
                                    <option value="5">Geocaching</option>
                                </select>
                            </div>
                            {/* <!--AGE INPUT ENDS--> */}
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4">
                                <div className="input-group mb-3">
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="inputGroupFile02"
                                    />
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupFile02"
                                    >
                                        Upload
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group mb-3">
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="inputGroupFile02"
                                    />
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupFile02"
                                    >
                                        Upload
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="input-group mb-3">
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="inputGroupFile02"
                                    />
                                    <label
                                        className="input-group-text"
                                        htmlFor="inputGroupFile02"
                                    >
                                        Upload
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <Link to="/review-movies">
                                <button
                                    type="button"
                                    className="btn btn-lg m-3 btn-primary text-center registerBtn"
                                >
                                    Register here
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* <!-- END OF INTRO COPY --> */}
                </div>
                {/* <!--END OF INTRO CONTENT ROW--> */}
            </div>
        </div>
    );
};

export default Enterdetails;

const Login = () => {
    return (
        <div
            style={{ maxWidth: "33vw" }}
            className="m-auto mt-5 d-flex flex-column justify-content-between align-items-center"
        >
            <input
                type="email"
                className="form-control"
                placeholder="Email"
                aria-label="Email"
            />

            {/* <!--NAME INPUT ENDS--> */}
            <br />
            <input
                type="password"
                className="form-control"
                placeholder="Password"
                aria-label="password"
            />

            <a href="/">
                <button
                    type="button"
                    className="btn btn-lg m-3 btn-primary text-center"
                >
                    Login
                </button>
            </a>
        </div>
    );
};

export default Login;

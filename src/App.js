import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    RedirectToSignIn,
    SignIn,
    SignUp,
} from "@clerk/clerk-react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.js";
import Enterdetails from "./Enterdetails";
import Navbar from "./Navbar";
import ReviewMovies from "./ReviewMovies";
import FindMatches from "./FindMatches";
import Login from "./Login";
import { useState, useEffect, useMemo } from "react";
// import FindCompatibility from "./FindCompatibility";
import ProtectedSignedIn from "./ProtectedSignedIn";

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

function Protected({ setCurrentUser }) {
    return (
        <div>
            <SignedIn>
                <ProtectedSignedIn setCurrentUser={setCurrentUser} />
            </SignedIn>
            <SignedOut>
                <RedirectToSignIn />
            </SignedOut>
        </div>
    );
}

function App() {
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {}, []);

    // console.log(currentUser);

    const myRoutes = useMemo(() => {
        return createBrowserRouter([
            {
                path: "/",
                element: <Navbar currentUser={currentUser} />,
                children: [
                    { path: "/", element: <Home currentUser={currentUser} /> },
                    {
                        path: "/enter-details",
                        element: <Enterdetails />,
                    },
                    {
                        path: "/review-movies",
                        element: <ReviewMovies currentUser={currentUser} />,
                    },
                    { path: "/find-matches", element: <FindMatches /> },
                    // { path: "/calc", element: <FindCompatibility /> },
                    { path: "/login", element: <Login /> },

                    // TEST POINT - SEE IF THE PATHS NEED TO BE 'NOT' CHILDREN PATHS
                    // Clerk specific routes
                    {
                        path: "/sign-in/*",
                        element: <SignIn routing="path" path="/sign-in" />,
                    },
                    {
                        path: "/sign-up/*",
                        element: <SignUp routing="path" path="/sign-up" />,
                    },

                    // Protected page - a user must be logged in to view this page
                    {
                        path: "/protected",
                        element: <Protected setCurrentUser={setCurrentUser} />,
                    },
                ],
            },
        ]);
    });

    return (
        <ClerkProvider
            publishableKey={clerkPubKey}
            navigate={(to) => myRoutes.navigate(to)}
        >
            <div
                className="App"
                style={{
                    minHeight: "100vh",
                    backgroundImage: "url(" + "./heartsBackgd.jpg" + ")",
                }}
            >
                <RouterProvider router={myRoutes} />
            </div>
        </ClerkProvider>
    );
}

export default App;

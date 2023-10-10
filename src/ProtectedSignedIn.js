import { UserButton, useUser, useAuth } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import APIURL from "./APIURL";

const ProtectedSignedIn = ({ setCurrentUser }) => {
    const [loading, setLoading] = useState(false);
    const { user } = useUser();
    const { getToken } = useAuth();

    useEffect(() => {
        const makeAPICall = async () => {
            const token = await getToken();

            const response = await fetch(`${APIURL}/users`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    clerkid: user.id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.emailAddresses[0].emailAddress,
                }),
            });

            setLoading(false);
        };

        makeAPICall();
        // getToken().then((token) => {
        //     // 1) Ask clerk to generate a token
        //     return fetch(`${APIURL}/users`, {
        //         // 2) Make a request...
        //         headers: { Authorization: `Bearer ${token}` }, // ... including the token that was just generated!
        //     }).then((response) => {
        //         if (!response.ok) {
        //             // 3) Make sure the request was successful, log if not
        //             console.log(
        //                 `Error making request to get data: received ${response.statusCode}`
        //             );
        //             return;
        //         }
        //         return response.json().then((json) => {
        //             // 4) Extract the json data out of the response...
        //             setWord(json.data); // ... and store the string found at key “data” in the response into state
        //         });
        // });

        setCurrentUser(user.id);
    }, [getToken]);

    if (loading) {
        return <div>Skeleton component goes here</div>;
    }

    return (
        <div className="text-center mt-5">
            <h1>Hi {user.firstName}!</h1>
            <div className="text-center" style={{ display: "inline-block" }}>
                <UserButton className="mx-auto" />
            </div>
            {/* <p>Secret word: {word}</p> */}
            <h2>You are signed in!</h2>
            <h2>Let's review a few movies.</h2>

            <Link to="/review-movies">
                <button className="btn btn-success mt-5">Review Movies</button>
            </Link>
        </div>
    );
};

export default ProtectedSignedIn;

/*
// import APIURL from "./APIURL.js";
// import { useEffect } from "react";
// // Sample user data (you would get this data from the database)

// const usersResponse = await fetch(`${APIURL}/users`, {
    // method: "GET",
// });
// const usersData = await usersResponse.json();
// console.log(usersData.users);

// // Function to compare movie reviews between two users and calculate similarity score
// function calculateCompatibility(loggedInUser, userB) {

//     const loggedInUserID = window.localStorage.getItem("userID");

//     if (!loggedInUserID) {
//         prompt("Go back and update your User ID so we can find you matches");
//     }

//     for (const user of usersData.users) {
//         if (loggedInUserID == user.id) {
//             loggedInUser = user;
//         }
//     }

//     const logginUserMoviesAll = loggedInUser.movieratings.map((movie) => {
//         return movie.ratedTitle;
//     });

//     const logginUserMovies = logginUserMoviesAll.filter((item, index) => {
//         return logginUserMoviesAll.indexOf(item) === index;
//     });

//     console.log(logginUserMovies);

//     const sendCurrentUserMovies = async () => {
//         await fetch(`${APIURL}/currentusermovieratings`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(logginUserMovies),
//         });
//     };
//     console.log(JSON.stringify(logginUserMovies));
//     sendCurrentUserMovies();

//     const a = [];

//     usersData.users.forEach((user) =>
//         user.movieratings.forEach((movie) => {
//             if (movie.ratedTitle === "Barbie") {
//                 a.push(user);
//             }
//         })
//     );

//     // {
//     //     return {
//     //         ...user,
//     //         movieratings: user.movieratings.map((movie) => {
//     //             return movie;
//     //         }),
//     //     };
//     // });

//     // const matchedRatings = usersData.users.forEach((user) => {
//     //     if (loggedInUser.id !== user.id) return user;
//     //     // && loggedInUser.movieratings.includes(user.movieratings.map(movie)=> {
//     //     //     movie
//     // });
//     // );

//     // console.log(a);

//     // let commonGenres = 0;
//     // let commonRatings = 0;

//     // userA.movieReviews.forEach((reviewA) => {
//     //     userB.movieReviews.forEach((reviewB) => {
//     //         if (reviewA.title === reviewB.title) {
//     //             commonGenres++;
//     //             commonRatings += Math.abs(reviewA.rating - reviewB.rating);
//     //         }
//     //     });
//     // });

//     // // Calculate similarity score based on common genres and average rating difference
//     // const similarityScore =
//     //     commonGenres === 0
//     //         ? 0
//     //         : (commonGenres /
//     //               (userA.movieReviews.length + userB.movieReviews.length)) *
//     //           (1 / (1 + commonRatings));

//     // return similarityScore;
// }

// // Sample function to find potential matches for a user based on their data
// // function findPotentialMatches(currentUser, allUsers) {
// //     const potentialMatches = [];

// //     allUsers.forEach((user) => {
// //         if (user.id !== currentUser.id) {
// //             const compatibilityScore = calculateCompatibility(
// //                 currentUser,
// //                 user
// //             );
// //             if (compatibilityScore > 0.2) {
// //                 // You can adjust the similarity threshold (0.2 in this case) to control the number of matches
// //                 potentialMatches.push({
// //                     user: user,
// //                     compatibility: compatibilityScore,
// //                 });
// //             }
// //         }
// //     });

// //     // Sort potential matches based on compatibility score in descending order
// //     potentialMatches.sort((a, b) => b.compatibility - a.compatibility);

// //     return potentialMatches;
// // }

// function FindCompatibility() {
//     useEffect(() => calculateCompatibility(), []);

//     // findPotentialMatches();
//     return (
//         <>
//             <h1>Open Console</h1>
//         </>
//     );
// }

// // Example usage

// export default FindCompatibility;
*/

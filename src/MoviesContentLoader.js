// import React from "react";
import ContentLoader from "react-content-loader";

const MoviesContentLoader = (props) => (
    <ContentLoader
        width={1400}
        height={575}
        speed={3}
        viewBox="0 0 1080 575"
        backgroundColor="rgba(186, 186, 186, 0.5)"
        foregroundColor="#ecebeb"
        {...props}
    >
        {/* row 1 left box */}
        <rect x="0" y="58" rx="5" ry="5" width="300" height="300" />
        <rect x="0" y="375" rx="5" ry="5" width="300" height="10" />
        <rect x="0" y="395" rx="5" ry="5" width="300" height="10" />
        <rect x="0" y="415" rx="5" ry="5" width="150" height="10" />
        {/* row 1 middle box */}
        <rect x="340" y="58" rx="10" ry="10" width="300" height="300" />
        <rect x="340" y="375" rx="5" ry="5" width="300" height="10" />
        <rect x="340" y="395" rx="5" ry="5" width="300" height="10" />
        <rect x="340" y="415" rx="5" ry="5" width="150" height="10" />
        {/* row 1 right box */}

        <rect x="680" y="58" rx="10" ry="10" width="300" height="300" />
        <rect x="680" y="375" rx="5" ry="5" width="300" height="10" />
        <rect x="680" y="395" rx="5" ry="5" width="300" height="10" />
        <rect x="680" y="415" rx="5" ry="5" width="150" height="10" />
    </ContentLoader>
);

export default MoviesContentLoader;

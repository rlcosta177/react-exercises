//Home.jsx

import React from "react";
import "./App.css"
import { Parallax } from "react-parallax";

const Home = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center", color: "black" }}>
                Parallax Page
            </h1>
            <div className="container">
                <Parallax
                    bgImage=
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE2Q5YbU3EUz7v0Z09JUYIlvatewLVVSzF5Q&s"
                    strength={200} style={{
                        height: "100vh",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        marginTop: "2rem"
                    }}>
                </Parallax>
                <Parallax
                    bgImage=
                    "https://neonmusic.online/wp-content/uploads/2024/01/cover3.jpg"
                    strength={200} style={{
                        height: "100vh",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        marginTop: "2rem"
                    }}>
                </Parallax>
                <Parallax
                    bgImage=
                    "https://i.kym-cdn.com/photos/images/original/001/637/278/d7d.jpg"
                    strength={200} style={{
                        height: "100vh",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        marginTop: "2rem"
                    }} >
                </Parallax>
                <Parallax
                    bgImage=
                    "https://steamuserimages-a.akamaihd.net/ugc/1811033993922791787/9BAD8950DB1CBA2657E4D503E1E407F04DEBF383/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
                    strength={200} style={{
                        marginTop: "2rem", height: "100vh",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                </Parallax>
            </div>
        </div>
    );
};

export default Home;

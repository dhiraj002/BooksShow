import React from "react";
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import Hero from "./components/Hero";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-900">
                <NavBar />
                <Banner />
                <Hero />
            </div>
        </>
    );
};

export default App;

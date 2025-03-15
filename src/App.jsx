import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import "index.css";

const App = () => {
    const [searchQuery, setSearchQuery] = useState("Best Sellers");
    return (
        <>
            <div className="min-h-screen bg-gray-900">
                <NavBar handleSearch={(term) => setSearchQuery(term)} />
                <Banner />
                <Hero searchQuery={searchQuery} />
                <Footer />
            </div>
        </>
    );
};

export default App;

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";
import Hero from "./components/Hero";
// import "index.css";

const App = () => {
    const [searchQuery, setSearchQuery] = useState("Best Sellers");
    return (
        <>
            <div className="min-h-screen bg-gray-900">
                <NavBar hansleSearch={(term) => setSearchQuery(term)} />
                <Banner />
                <Hero searchQuery={searchQuery} />
            </div>
        </>
    );
};

export default App;

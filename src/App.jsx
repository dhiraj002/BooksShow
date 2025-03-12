import React from "react";
import NavBar from "./components/NavBar";
import { Banner } from "./components/Banner";

const App = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-900">
                <NavBar />
                <Banner />
            </div>
        </>
    );
};

export default App;

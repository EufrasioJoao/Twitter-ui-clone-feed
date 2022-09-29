import React, { useEffect, useState } from "react";
import { Layout } from "./components/Layout/Index";
import Aos from "aos";
import "aos/dist/aos.css";
import "./App.css";


function App() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className='app'>
            <Layout />
        </div>
    );
}

export default App;

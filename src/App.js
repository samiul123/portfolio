import './App.css';
import Header from "./components/header";
import {Footer} from "./components/footer";
import Home from "./components/home";
import {samiul, samiulWebp} from "./assets";
import {navLinks} from "./constants";
import React from "react";
import Background from "./components/Background";

function App() {
    const images=[{
        type: "image/webp",
        srcSet: samiulWebp,
        fallback: false
    }, {
        type: "image/png",
        srcSet: samiul,
        fallback: true
    }]
    return (
        <div className="h-screen w-full">
            <Background images={images} showGrayBackground={false}/>
            <div className="relative xl:h-screen h-auto bg-cover bg-center p-5">
                <Header/>
                <Home/>
            </div>

            {
                navLinks.map(nav => {
                    if (nav.id !== 'home' && nav.route) {
                        return <nav.route key={nav.id} id={nav.id}/>
                    }
                    return null;
                })
            }
            <Footer/>
        </div>
    );
}

export default App;

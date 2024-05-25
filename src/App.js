import './App.css';
import Header from "./components/header";
import {Footer} from "./components/footer";
import Home from "./components/home";
import {samiul} from "./assets";
import {navLinks} from "./constants";
import React from "react";

function App() {
    return (
        <>
            <div className="h-screen bg-cover bg-center"
                 style={{backgroundImage: `url(${samiul})`}}>
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
        </>
    );
}

export default App;

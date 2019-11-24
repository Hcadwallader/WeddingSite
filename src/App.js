import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./styles/App.scss";
import NavBar from "./components/NavBar/NavBar";
import Timer from "./components/Timer";

export const App = () => (
            <div className="app-container">
                <NavBar/>
                <main className="app">
                    <Timer/>
                    <h1> Hello, World!</h1>
                </main>
            </div>
        );


export default App;
import React from "react";
import reactLogo from "./images/react-logo.png";

export default function Navbar() {
    return (
        <nav className="nav">
            <img
                src={reactLogo}
                alt="react"
                className="nav-logo"
            />
            <h3 className="nav-logo-text">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}
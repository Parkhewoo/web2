
import React, { useState } from "react";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import Greeting from "../ex1/Greeting";
import "./LogControl.css";

function LogControl() {
    const [isLoggedin, setIsLoggedin] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedin(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedin(false);
    };

    let button;

    if (isLoggedin) {
        button = (
            <LogoutButton
                onClick={handleLogoutClick}
            />
        );
    } else {
        button = (
            <LoginButton
                onClick={handleLoginClick}
            />
        );
    }

    return (
        <div className="log-control">
            <Greeting isLoggedIn={isLoggedin} />
            {button}
        </div>
    );
}

export default LogControl;

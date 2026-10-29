
import React, { useState } from "react";

import Greeting from "../ex1/Greeting";
import LogoutButton from "../ex2/LogoutButton";
import LoginButton from "../ex2/LoginButton";

function LogControl() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginClick = () => {
        setIsLoggedIn(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };
    let button;
    button = isLoggedIn ?<LogoutButton onClick={handleLogoutClick}/> :<LoginButton onClick={handleLoginClick}/>

    return (
        <div>
            <Greeting isLoggedIn={isLoggedIn} />
            {button}
        </div>
    );
}

export default LogControl;


import React, { useState } from "react";
import Toolbar from "./Toolbar";
import pet1Img from "./pet01.png";
import "./LandingPage.css";

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    };

    const logoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div className="landing-page">
            <Toolbar
                isLoggedIn={isLoggedIn}
                loginClick={loginClick}
                logoutClick={logoutClick}
            />

            <hr className="page-divider" />

            <div className="main-content">
                <p>9장 조건부 렌더링 실습 화면입니다.</p>
                <img
                    src={pet1Img}
                    alt="반려동물"
                    className="pet-image"
                />
            </div>
        </div>
    );
}

export default LandingPage;

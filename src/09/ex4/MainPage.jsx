
import React, { useState } from "react";
import WarningBanner from "./WarningBanner";
import "./MainPage.css";

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    };

    return (
        <div className="main-page">
            <WarningBanner warning={showWarning} />

            <button
                className="toggle-button"
                onClick={handleToggleClick}
            >
                {showWarning ? "감추기" : "보이기"}
            </button>
        </div>
    );
}

export default MainPage;

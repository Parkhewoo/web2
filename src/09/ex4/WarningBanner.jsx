
import React from "react";
import "./WarningBanner.css";

function WarningBanner(props) {
    if (!props.warning) {
        return null;
    }

    return (
        <div className="warning-banner">
            경고!
        </div>
    );
}

export default WarningBanner;

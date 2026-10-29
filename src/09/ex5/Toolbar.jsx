
import React from "react";
import "./LandingPage.css";

function Toolbar(props) {
    const { isLoggedIn, loginClick, logoutClick } = props;

    return (
        <div className="toolbar">
            <div className="toolbar-content">
                {isLoggedIn && (
                    <span className="greeting">
                        환영합니다.
                    </span>
                )}

                {isLoggedIn ? (
                    <button
                        className="toolbar-button"
                        onClick={logoutClick}
                    >
                        로그아웃
                    </button>
                ) : (
                    <button
                        className="toolbar-button"
                        onClick={loginClick}
                    >
                        로그인
                    </button>
                )}
            </div>
        </div>
    );
}

export default Toolbar;

import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./MainContent.css";

function MainContent(props) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <main className={theme}>
            <button onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>

            <h1>Welcome to NEXUS</h1>
            <p>Explore a new digital experience.</p>
        </main>
    );
}

export default MainContent;
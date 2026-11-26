
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import "./MainContent.css";
import Card from "../../14/ex1/Card";

function MainContent() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const images = [
        {
            id: 1,
            name: "SEASON OFF",
            avatar: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            id: 2,
            name: "SALE",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
            id: 3,
            name: "디올 진저브레드 하우스",
            avatar: "https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
            id: 4,
            name: "달바 시그니처 팝업 스토어",
            avatar: "https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            id: 5,
            name: "새로움으로 스타일 업그레이드 신규오픈",
            avatar: "https://randomuser.me/api/portraits/women/5.jpg"
        },
        {
            id: 6,
            name: "트렌디한 브랜드 소식 팝업 스토어",
            avatar: "https://randomuser.me/api/portraits/women/6.jpg"
        }
    ];

    return (
        <div className={`main-content ${theme}`}>

            <header className="header">
                <h1>SHINSEGAE</h1>

                <button onClick={toggleTheme}>
                    {theme === "light" ? " Dark" : " Light"}
                </button>
            </header>

            <section className="shopping-title">
                <p>SHINSEGAE DEPARTMENT STORE</p>
                <h2>쇼핑 정보</h2>
                <span>Shopping Information</span>
            </section>

            <section className="card-container">
                {images.map((image) => (
                    <Card
                        key={image.id}
                        title={image.name}
                    >
                        <img
                            src={image.avatar}
                            alt={image.name}
                        />
                    </Card>
                ))}
            </section>

            <footer className="footer">
                SHINSEGAE DEPARTMENT STORE
            </footer>

        </div>
    );
}

export default MainContent;

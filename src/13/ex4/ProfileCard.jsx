import React from "react";
import Card from "./Card";


const profiles = [
    {
        title: "모던 하우스",
        backgroundColor: "lightblue",
        children: "깔끔하고 세련된 현대식 주택",
        images: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400"
    },
    {
        title: "전원주택",
        backgroundColor: "lightgreen",
        children: "자연과 함께하는 여유로운 집",
        images: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=400"
    },
    {
        title: "럭셔리 하우스",
        backgroundColor: "lightyellow",
        children: "고급스럽고 넓은 주택",
        images: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400"
    },
    {
        title: "작은 주택",
        backgroundColor: "pink",
        children: "아늑하고 실용적인 작은 집",
        images: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=400"
    },
    {
        title: "화이트 하우스",
        backgroundColor: "lavender",
        children: "밝고 깨끗한 화이트 인테리어",
        images: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400"
    },
    {
        title: "우드 하우스",
        backgroundColor: "lightgray",
        children: "따뜻한 나무 느낌의 주택",
        images: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400"
    },
    {
        title: "풀빌라",
        backgroundColor: "lightcyan",
        children: "수영장이 있는 고급 주택",
        images: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400"
    }
];

function ProfileCard(props) {
    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "space-between"
        }}>
            {profiles.map((profile, index) => (
                <Card
                    key={index}
                    title={profile.title}
                    backgroundColor={profile.backgroundColor}
                >
                    <img
                        src={profile.images}
                        alt={profile.title}
                        width="150"
                    />
                    <p>{profile.children}</p>
                </Card>
            ))}
        </div>
    );
}

export default ProfileCard;
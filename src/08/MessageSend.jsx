import React, { useState } from "react";

function MessageSend() {
    const [message, setMessage] = useState("");

    function handleChange(e) {
        setMessage(e.target.value);
    }

    function handleClick() {
            alert(message);
            setMessage("");
    }
    return (
        <div style={{padding: '20px'}}>
            <h1>메시지 전송기</h1>

            <input
                type="text"
                placeholder="전송할 메세지 입력"
                value={message}
                onChange={handleChange}
            />

            <button onClick={handleClick}>메시지 전송</button>

            <p>미리보기: {message}</p>
        </div>
    );
}

export default MessageSend;
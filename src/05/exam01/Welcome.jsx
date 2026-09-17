import React from "react";
import "./Welcome.css";

function Welcome(props){
    return(
        <div>
            <h1>안녕하세요~ {props.name}</h1>
        </div>
    );
}

export default Welcome;
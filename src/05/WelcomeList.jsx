import React from "react";
import Welcome from "./Welcome";

function WelcomeList(){
    return(
        <div>
        <Welcome name={"김인공"}></Welcome><br/>
        <Welcome name={"박폴리"}></Welcome><br/>
        <Welcome name={"이정수"}></Welcome><br/>
        </div>
    );
}

export default WelcomeList;
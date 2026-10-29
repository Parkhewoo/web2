import React from "react";
import UseGreeting from "./UseGreeting";
import GuestGreeting from "./GusetGreeting";

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UseGreeting/>
    }else{
        return <GuestGreeting/>
    }
}

export default Greeting;
import React from "react";
import TemperatureInput from "./TemperatureInput";
import "./Calculator.css";

function Calculator(props) {
    return (
        <div className="calculator">
            <TemperatureInput scale={"c"} />
            <TemperatureInput scale={"f"} />
        </div>
    );
}

export default Calculator;

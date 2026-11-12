import React from "react";
import './BoilingVerdict.css';

function BoilingVerdict(props) {
    if(props.celsius >= 100) {
        return <p className={"boiling"}>물이 끓습니다.</p>
    }
    return <p className={"not-boiling"}>물이 끓지 않습니다.</p>

}

export default BoilingVerdict;
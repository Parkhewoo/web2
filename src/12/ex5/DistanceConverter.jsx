import React, {useState} from "react";
import DistanceInput from "./DistanceInput";
import './DistanceConverter.css';

function DistanceConverter(props) {
    const [distance, setDistance] = useState('');
    const [scale, setScale] = useState("km");

    const handleKmChange = (distance) => {
        setDistance(distance);
        setScale("km");
    }

    const handleMileChange = (distance) => {
        setDistance(distance);
        setScale("mile");
    }

    const km = scale === "mile" ? tryConvert(distance, toKm) : distance;
    const mile = scale === "km" ? tryConvert(distance, toMile) : distance;

    return (
        <div>
            <DistanceInput
                unit="km"
                distance={km}
                onDistanceChange={handleKmChange}
            />

            <DistanceInput
                unit="mile"
                distance={mile}
                onDistanceChange={handleMileChange}
            />
        </div>
    );
}

function toMile(km) {
    return km * 0.621371;
        
}
function toKm(mile) {
    return mile * 1.609344;
}
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if(Number.isNaN(input)){
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 100) / 100;
    return rounded.toString();
}

export default DistanceConverter;
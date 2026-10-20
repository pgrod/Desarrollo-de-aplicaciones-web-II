import React from "react";

export default function Conversion({celsius, fahrenheit, kelvin }: { celsius: number; fahrenheit: number; kelvin: number }) {
 return(
    <div>
        <p>La temperatura en Celsius es: {celsius}°C</p>
        <p>La temperatura en Fahrenheit es: {fahrenheit}°F</p>
        <p>La temperatura en Kelvin es: {kelvin}K</p>
    </div>
 )
}
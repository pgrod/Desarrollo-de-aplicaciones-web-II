import Conversion from "./Components/Conversion";

export default function Home() {
const temperatura = 25;

let unidad: string = "Celsius"; 
let celsius = 0;
let fahrenheit = 0;
let kelvin = 0;
if (unidad === "Celsius") {
  celsius = temperatura;
  fahrenheit = (temperatura * 9/5) + 32;
  kelvin = temperatura + 273.15;
} else if (unidad === "Fahrenheit") {
  celsius = (temperatura - 32) * 5/9;
  fahrenheit = temperatura;
  kelvin = (temperatura - 32) * 5/9 + 273.15;
} else if (unidad === "Kelvin") {
  celsius = temperatura - 273.15;
  fahrenheit = (temperatura - 273.15) * 9/5 + 32;
  kelvin = temperatura;
}

return(
    <div>
      <h1>Conversión de temperatura</h1>
      <Conversion celsius={celsius} fahrenheit={fahrenheit} kelvin={kelvin} />
    </div>
)
}

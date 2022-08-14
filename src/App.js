import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [celcius, setCelcius] = useState(0);
  const [kelvin, setKelvin] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  const [tipo, setTipo] = useState('C');
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    let cantCelsius = 0;
    let cantKelvin = 0;
    let cantFahrenheit = 0;

    switch (tipo) {
      case 'C':  
        cantCelsius = cantidad;
        cantKelvin = cantidad + 273.15;
        cantFahrenheit = (cantidad * 1.8) + 32;
        break;

      case 'K':
        cantCelsius = cantidad - 273.15;
        cantKelvin = cantidad;
        cantFahrenheit = (cantidad - 273.15) * 1.8 + 32;
        break;

      case 'F':
        cantCelsius = (cantidad - 32) * (5/9);
        cantKelvin = (cantidad - 32) * (5/9) + 273.15;
        cantFahrenheit = cantidad;
        break;
    
      default:
        cantCelsius = 0;
        cantKelvin = 0;
        cantFahrenheit = 0;
        break;
    }
    
    setCelcius(Number(cantCelsius));
    setKelvin(Number(cantKelvin));
    setFahrenheit(Number(cantFahrenheit));
  }, [cantidad, tipo]);

  const handleCantChange = e => {
    if (!isNaN(e.target.value)) {
      setCantidad(e.target.value);
    }
  }

  return (
    <div className="App">
      <h1>Convertidor de unidades de temperatura</h1>
      <h3>Gerardo Palacios PD200491 - DPS G01T</h3>

      <p>Celcius: {celcius.toFixed(2)} °C</p>
      <p>Kelvin: {kelvin.toFixed(2)} K</p>
      <p>Fahrenheit: {fahrenheit.toFixed(2)} °F</p>

      <hr />

      <h3>{cantidad}</h3>

      <select onChange={event => setTipo(event.target.value)} value={tipo}>
        <option value='C'>Celsius</option>
        <option value='K'>Kelvin</option>
        <option value='F'>Fahrenheit</option>
      </select>
      <input onChange={handleCantChange} value={cantidad} />
    </div>
  );
}

export default App;

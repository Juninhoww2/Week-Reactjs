import { useState } from 'react';
import './app.css'
import './undraw_indoor_bike_pwa4.svg'

export default function App() {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const [message, setMessage] = useState('')
  function calculatorIMC()  {
    const w = height / 100;
    const imc = weight / (w * w);

    if(imc < 18.6) {
      setMessage("You are below weight! Your IMC: " + imc.toFixed(2))
    } else if(imc >= 18.6 && imc < 24.9) {
      setMessage("Weight great! Your IMC: " + imc.toFixed(2))
    } else if(imc >= 24.9 && imc < 34.9) {
      setMessage("You're slightly above weight! Your IMC: " + imc.toFixed(2))
    } else if (imc > 34.9) {
      setMessage("Take care of your health you're obesity! Your IMC: " + imc.toFixed(2))
    }

  } 
       

  return (
    // fragment 
    <>
      <div className="app">
         
        <h1>Calculator IMC</h1>
        <span>Let's calculator you IMC</span>

        <div className="area-input">
          <input type="text" 
            placeholder="Weight in (kg) Ex: 90"
            value={weight}
            onChange={ (e) => setWeight(e.target.value)} 
          />
          <input type="text" 
            placeholder="Height in (cm) Ex: 180"
            value={height}
            onChange={ (e) => setHeight(e.target.value)}
          />

          <button onClick={calculatorIMC}>
            Calculator
          </button>

        </div>

        <h2>{message}</h2>
      </div>
    </>
  )
}
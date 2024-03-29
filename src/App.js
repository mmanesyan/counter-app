import React, { useState } from 'react'
import styles from './index.css'
function App() {
  const [count, setCount] = useState(0)
  const [maxValue, setMaxValue] = useState(100)
  const [minValue, setMinValue] = useState(-100)
  const [step, setStep] = useState(1)
  
  const Increase = () => {
    if (count + step <= maxValue) {
      setCount(count + step)
    }
  }
  const Decrease = () => {
    if (count - step >= minValue) {
      setCount(count - step)
    }
  }
  const Reset = () => {
    setCount(0)
  }
  const MaxValueChange = (e) => {
    setMaxValue(parseInt(e.target.value))
  }
  const MinValueChange = (e) => {
    setMinValue(parseInt(e.target.value))
  }
  const StepChange = (e) => {
    setStep(parseInt(e.target.value))
  }
 
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={Increase} className='button'>Increase</button>
      <button onClick={Decrease} disabled={count <= minValue} className='button'>Decrease</button>
      <button onClick={Reset} className='button'>Reset</button>

      <h2>Set Maximal and Minimal values for  Counter </h2>
      <label>
        Max Value:
        <input type="number" value={maxValue} onChange={MaxValueChange} className='input' />
      </label>
      <br />
      <label>
        Min Value:
        <input type="number" value={minValue} onChange={MinValueChange}  className='input' />
      </label>
      <br />
      <label>
        Step:
        <input type="number" value={step} onChange={StepChange}  className='input' />
      </label>
    </div>
  )
}
export default App

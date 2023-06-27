import React, { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)
  const [maxValue, setMaxValue] = useState(100)
  const [minValue, setMinValue] = useState(-100)
  const [step, setStep] = useState(1)
  
  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={Increase}>Increase</button>
      <button onClick={Decrease} disabled={count <= minValue}>Decrease</button>
      <button onClick={Reset}>Reset</button>

      <h2>Set Maximal and Minimal values for  Counter </h2>
      <label>
        Max Value:
        <input type="number" value={maxValue} onChange={MaxValueChange} />
      </label>
      <br />
      <label>
        Min Value:
        <input type="number" value={minValue} onChange={MinValueChange} />
      </label>
      <br />
      <label>
        Step:
        <input type="number" value={step} onChange={StepChange} />
      </label>
    </div>
  )
}
export default App

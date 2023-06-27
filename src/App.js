import React, { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [maxValue, setMaxValue] = useState(100)
  const [minValue, setMinValue] = useState(-100)
  const [step, setStep] = useState(1)

  const Increase = () => {
    if (count + step <= maxValue) {
      setCount(count + step);
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

 
}

export default App;

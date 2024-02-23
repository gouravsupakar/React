import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(10)

  const addValue = () =>{
    setCounter(counter + 1)   // they will ask what will happen if here is so many setMethod 
    setCounter(counter + 1)   // ANS:- the counter variable will just be increased by 1 because of reconciliation and fiber comes into play
    setCounter(counter + 1)
    setCounter(counter + 1)
  }

  const removeValue = () =>{
    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)
    setCounter(counter - 1)
  }

  return (
    <>
     <h1>Counter project interview questions</h1>
     <h3>Counter: {counter}</h3>
     <br />
     <button onClick={addValue}>Add value +</button>
     <br /> <br />
     <button onClick={removeValue}>Remove value -</button>
    </>
  )
}

export default App

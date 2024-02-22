import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () =>{
    
    if(counter >= 0 && counter < 20){
      setCounter(counter + 1)
    } else{
      counter = 20;
    }
  }

  const removeValue = () =>{
    
    if(counter > 0 && counter <= 20){
      setCounter(counter - 1)
    } else{
      counter = 0;
    }
  }

  return (
    <>
     <h1>Gourav | chai aur code</h1>
     <h3>Conter Value: {counter}</h3>

     <button onClick={addValue}>Add Value</button>
     <br />
     <br />
     <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const myObj = {
    userName: "Gs",
    age: 23
  }

  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl p-4 mb-4'>Tailwind test</h1>
      <Card myName="Gourav" btnText = "visit me"/>
      <Card  someObj = {myObj} btnText = "Click me"/>
    </>
  )
}

export default App

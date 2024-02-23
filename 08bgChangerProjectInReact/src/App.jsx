import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("black")

  return (
   <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center shadow-lg bg-white px-3 py-2 rounded-xl gap-2'>
        <button onClick={() => {setcolor("red")}} className='rounded-lg shadow-lg text-black outline-none px-4 py-1 ' style={{backgroundColor: "red"}}>Red</button>

        <button onClick={() => {setcolor("yellow")}}  className='rounded-lg shadow-lg text-black outline-none px-4 py-1 ' style={{backgroundColor: "yellow"}}>Yellow</button>
        
        <button onClick={() => {setcolor("green")}}  className='rounded-lg shadow-lg text-black outline-none px-4 py-1 ' style={{backgroundColor: "green"}}>Green</button>
        
        <button onClick={() => {setcolor("white")}}  className='rounded-lg shadow-xl text-black outline-none px-4 py-1 ' style={{backgroundColor: "white"}}>White</button>
        
        <button onClick={() => {setcolor("purple")}}  className='rounded-lg shadow-lg text-black outline-none px-4 py-1 ' style={{backgroundColor: "purple"}}>Purple</button>
        
        <button onClick={() => {setcolor("blue")}}  className='rounded-lg shadow-lg text-black outline-none px-4 py-1 ' style={{backgroundColor: "blue"}}>Blue</button>
        
        <button onClick={() => {setcolor("orange")}}  className='rounded-lg shadow-lg text-black outline-none px-4 py-1 ' style={{backgroundColor: "orange"}}>Orange</button>
      </div>
    </div>
   </div>
  )
}

export default App

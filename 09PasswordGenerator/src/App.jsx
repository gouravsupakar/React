import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(( ) =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  //copy function

  const copyPasswordToClipboard = useCallback(() =>{
    passwordRef.current?.select();
    //to select range
    passwordRef.current?.setSelectionRange(0 , 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
    
    <div className='w-full max-w-lg  mx-auto shadow-md rounded-lg px-4 my-8  bg-gray-600'>
    <h1 className='text-center text-white text-2xl pt-1 pb-2 my-3'>Password Generator</h1>
      <div className='flex shadow rounder-lg overflow-hidden mb-4 mt-4'>
        <input id='password' type="text"
        value={password}
        className='outline-none w-full py-1 px-3 rounded-md pb-2'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />

        <button onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white pb-1
        px-3 py-0.5 shrink-0 rounded-md '>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
           type="range"
           min={6}
           max={100}
           value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} />
            <label>Length: {length}</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
           defaultChecked={numAllowed}
           id="numberInput"
           onChange={() => {
               setNumAllowed((prev) => !prev);
           }} />
           <label htmlFor="numberInput">Numbers</label>
        </div>

        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
      </div>
    </div>
    </>
  )
}

export default App

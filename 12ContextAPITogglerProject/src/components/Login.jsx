import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handelSubmit = (e) => {
        e.preventDefault()
        setUser({userName, password})
    }

    return (
        <div>
            <h2> Login</h2>

            <br />

            <input type='text' 
            className='px-2 mx-2 py-2'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='userName'/>

            <input type="text" 
            className='px-2 mx-2 py-2'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'/>

            <button onClick={handelSubmit}>Submit</button>
        </div>
    )
}

export default Login

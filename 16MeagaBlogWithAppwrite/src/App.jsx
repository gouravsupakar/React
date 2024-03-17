import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import {login, logout} from './store/authSlice.js'
import { Header, Footer } from './components/index.js'
import { Outlet } from 'react-router-dom'

function App() {
  
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      } else {
        dispatch(logout());
      }
    })
    .finally(() => setLoading(false))
  }, [loading, setLoading])

  return !loading ? (                             // this is conditional rendering the code here is checking if loading is true then only show something otherwise show null 
    <div className='min-h-screen flex flex-wrap
    content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />   
        </main>
        <Footer />
      </div>
    </div>
  ) : null;

}

export default App

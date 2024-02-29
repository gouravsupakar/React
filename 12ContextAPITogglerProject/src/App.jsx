import './App.css'
import UserContextProvider from './UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider>
      <h1>Welcome to context API crash course</h1>
      <br />
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App

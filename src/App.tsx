import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
// import ProgressBar from './components/shared/ProgressBar'

function App() {

  return (
    <>
      <Routes>

        {/* TODO: Make home a protectec route*/}
        <Route path={"/*"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/signup"} element={<Signup />} />


      </Routes>

    </>
  )
}

export default App

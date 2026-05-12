import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import '../assets/css/App.css'
import Home from './Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex w-full bg-primary-800 mb-16 fixed top-0">
        {/* Navbar */}
        <div className="grid grid-cols-2 w-screen h-20">
          <div className="welcomeHeader text-primary-50">
            <h1 className="">WELCOME TO MY PORTFOLIO</h1>
          </div>
          <div className="self-center-safe justify-items-end-safe h-20">
            <button className="navbarButtons">
              Home Page
            </button >
            <button className="navbarButtons">
              About Me
            </button>
            <button className="navbarButtons">
              Projects
            </button>
            <button className="navbarButtons">
              Development Stack
            </button >
          </div>
        </div> 
      </div>
      <Home />
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import { HashRouter, Routes, Route, Link } from 'react-router'
import '../assets/css/App.css'
import Home from './Home.jsx'
import AboutMe from './AboutMe.jsx'
import Projects from './Projects.jsx'
import Stack from './Stack.jsx'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <HashRouter>
        <div className="flex w-full bg-primary-800 mb-16 fixed top-0">
          {/* Navbar */}
          <div className="grid grid-cols-3 w-screen h-20">
            <div className="welcomeHeader col-span-1">
              <h1 className="text-primary-50">WELCOME TO MY PORTFOLIO</h1>
            </div>
            <div className="self-center-safe grid grid-cols-4 col-span-2 me-4">
              <div className="col-span-1">
                <Link className="navbarButtons" to='/'>
                  Home Page
                </Link >
              </div>

              <div className="col-span-1">
                <Link className="navbarButtons" to='/about_me'>
                  About Me
                </Link>
              </div>

              <div className="col-span-1">
                <Link className="navbarButtons" to='/projects'>
                  Projects
                </Link>
              </div>

              <div className="col-span-1">
                <Link className="navbarButtons" to='/stack'>
                  Development Stack
                </Link >
              </div>

             
            </div>
          </div> 
        </div>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/about_me' element={<AboutMe />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/stack' element={<Stack />}/>

        </Routes>
      </HashRouter>
    </>
  )
}

export default App

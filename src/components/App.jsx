import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import heroImg from '../assets/hero.png'
import { HashRouter, Routes, Route } from 'react-router'
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
                <a className="navbarButtons" href='/'>
                  Home Page
                </a >
              </div>

              <div className="col-span-1">
                <a className="navbarButtons" href='/about_me'>
                  About Me
                </a>
              </div>

              <div className="col-span-1">
                <a className="navbarButtons" href='/projects'>
                  Projects
                </a>
              </div>

              <div className="col-span-1">
                <a className="navbarButtons" href='/stack'>
                  Development Stack
                </a >
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

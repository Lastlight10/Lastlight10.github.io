import { useState } from 'react'
import '../assets/css/Home.css'

function Home(){
  return (
    <>
      <div className="flex-col grid grid-cols-1 gap-2 p-4 mt-48">
        <div className="panels">
          <h1 className="headers">About Me</h1>
          <div className="contentPanel">
            <p className="contentText">
              Greetings! my name is Clarenz Anthony L. Recon. Fresh college graduate of Bachelor of Science in Computer Science and is studying to be a Fullstack Web Developer. I have developed several projects and compiled them to my GitHub repositories for version control and progress tracking. As a student, the development of these systems, along with the lessons I learned from the university, have made me into a fresh and eager web developer who seeks to pursue a career in the field.
            </p>
          </div>
        </div>
        <div className="panels">
          <h1 className="headers">
            My Projects
          </h1>
          <div className="contentPanel">
            <p className="contentText">
              Here are my projects made from PHP and MySQL and deployed in Infinityfree.
            </p>
          </div>
        </div>
        <div className="panels">
          <h1 className="headers">
            Why Development Stack and Why
          </h1>
          <div className="contentPanel">
            <p className="contentText">
              Here are the development technologies I studied.
            </p>
          </div>
        </div>

        <div className="panels">
          <h1 className="headers">
            Why Development Stack and Why
          </h1>
          <div className="contentPanel">
            <p className="contentText">
              Here are the development technologies I studied.
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
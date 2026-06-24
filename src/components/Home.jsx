import { useState } from 'react'
import '../assets/css/Home.css'
import profileImg from '../assets/profile.jpg';

function Home(){
  return (
    <>
      <div className="flex-col grid grid-cols-1 gap-2 p-4 mt-48">
        <div className="panels">
          <h1 className="headers">About Me</h1>          
          <div className="contentPanel grid grid-cols-3">
            <div className="col-span-1 text-primary-50">
              <img src={profileImg} alt="Profile" />;
            </div>
            <div className="col-span-2 ms-4">
              <p className="contentText">
                Greetings! my name is Clarenz Anthony L. Recon. Fresh college graduate of Bachelor of Science in Computer Science and is studying to be a Fullstack Web Developer. I have developed several projects and compiled them to my GitHub repositories for version control and progress tracking. As a student, the development of these systems, along with the lessons I learned from the university, have made me into a fresh and eager web developer who seeks to pursue a career in the field. 
              </p>
              <div className="panelWithButton">
                <p className="panelWithButtonText">
                  You can learn more about me here:
                </p>
                <a className="panelButton" href="/about_me">
                  Click Here
                </a>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="panels">
          <h1 className="headers">
            My Projects
          </h1>
          <div className="contentPanel grid grid-cols-3">
            <div className="col-span-1 text-primary-50">
              <img className="aspect-square rounded-xl" src="src/assets/projects.png" alt="My profile image."></img>
            </div>
            <div className="col-span-2 ms-4">
              <p className="contentText">
                Here are my projects made from PHP and MySQL and deployed in Infinityfree. Each project were made as a requirement for my final project in college and are reviewed and tested to meet the requirements of the specific type of systems.
              </p>
              <div className="panelWithButton">
                <p className="panelWithButtonText">
                  You can learn more about my projects here:
                </p>
                <a className="panelButton" href="/projects">
                  Click Here
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="panels">
          <h1 className="headers">
            Why Development Stack and Why
          </h1>
          <div className="contentPanel grid grid-cols-3">
            <div className="col-span-1 text-primary-50">
              <img className="aspect-square rounded-xl" src="src/assets/techstack.png" alt="My profile image."></img>
            </div>
            <div className="col-span-2 ms-4">
              <p className="contentText">
                Here are the development technologies I studied for web development. Here you will see the tools and technologies I used to study web development.
              </p>
              <div className="panelWithButton">
                <p className="panelWithButtonText">
                  You can learn more about my development stack here:
                </p>
                <a className="panelButton">
                  Click Here
                </a>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </>
  )
}

export default Home
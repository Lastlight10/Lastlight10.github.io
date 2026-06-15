import '../assets/css/Projects.css';
import { useState, useEffect } from 'react';

function nextSlide(){

};

function Projects(){

  const [projectOne, setProjectOne] = useState("src/assets/projects1/p1.jpg");
  const [countOne, setCountOne] = useState(0);
  let picOne;

  function nextSlideOne(){
    setCountOne((prev)=>{
      const nextOne = prev > 3 ? 0 : prev + 1;
      picOne = nextOne === 1 ? "src/assets/projects1/p2.jpg" 
      : nextOne === 2 ? "src/assets/projects1/p3.jpg"
      : nextOne === 3 ? "src/assets/projects1/p4.jpg"
      : nextOne === 4 ? "src/assets/projects1/p5.jpg"
      : "src/assets/projects1/p1.jpg";
      setProjectOne(picOne);
      return nextOne;
    });
  };

  function prevSlideOne(){
    setCountOne((prev)=>{
      const nextOne = prev < 0 ? 3 : prev - 1;
      picOne = nextOne === 1 ? "src/assets/projects1/p2.jpg" 
      : nextOne === 2 ? "src/assets/projects1/p3.jpg"
      : nextOne === 3 ? "src/assets/projects1/p4.jpg"
      : nextOne === 4 ? "src/assets/projects1/p5.jpg"
      : "src/assets/projects1/p1.jpg";
      setProjectOne(picOne);
      return nextOne;
    });
  };

  return(
    <>
      <div className="flex-col grid grid-rows-1 gap-2 p-4 mt-48">

         <div className="panels animate-fade-down animate-ease-in animate-duration-500">
          <h1 className="headers text-center">My Projects</h1>
          <p className="contentText ms-10 me-10">The projects displayed here are my work as a requirement for my college project submissions and for personal projects. The following projects are free and made for non-profit purposes and can be accessed via their respective GitHub repository links shown below. Any use of the projects below should provide a reference or accreditation to its original developer.</p>
        </div>
        
        <div className="panels animate-fade-down animate-ease-in animate-duration-500">
          <h2 className="headers2">Inventory Management System for Computer Parts with Serialization</h2>
          <div className="contentPanel">
            <div className="imagePanel">
              <img className="projectPics" src={projectOne} alt="Project pictues set 1."></img>
              <div className="buttonContainer">
                <button className="slideshowButton next md:right-0" onClick={ nextSlideOne } id="nextButtonOne">Next</button>
                <button className="slideshowButton left md:left-0" onClick={ prevSlideOne } id="prevButtonOne">Previous</button>
              </div>
            </div>
            <div className="contentText">The projects displayed here are my work as a requirement for my college project submissions and for personal projects. The following projects are free and made for non-profit purposes and can be accessed via their respective GitHub repository links shown below. Any use of the projects below should provide a reference or accreditation to its original developer.</div>
          </div>

          
        </div>

        <div className="panels animate-fade-down animate-ease-in animate-duration-500">
          <h2 className="headers2">Online School Enrollment System with Payment Verification</h2>
          <div className="contentPanel">

          </div>
        </div>

      </div>
    </>
  )
}

export default Projects
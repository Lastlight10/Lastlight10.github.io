import '../assets/css/Projects.css';
import { useState, useEffect } from 'react';

function nextSlide(){

};

function Projects(){

  //FIRST PROJECT
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

  //SECOND PROJECT
  const [projectTwo, setProjectTwo] = useState("src/assets/projects2/p1.jpg");
  const [countTwo, setCountTwo] = useState(0);
  let picTwo;

  function nextSlideTwo(){
    setCountTwo((prevTwo)=>{
      const nextTwo = prevTwo > 4 ? 0 : prevTwo + 1;
      picTwo = nextTwo === 1 ? "src/assets/projects2/p2.jpg" 
      : nextTwo === 2 ? "src/assets/projects2/p3.jpg"
      : nextTwo === 3 ? "src/assets/projects2/p4.jpg"
      : nextTwo === 4 ? "src/assets/projects2/p5.jpg"
      : nextTwo === 5 ? "src/assets/projects2/p6.jpg"
      : "src/assets/projects2/p1.jpg";
      setProjectTwo(picTwo);
      return nextTwo;
    });
  };

  function prevSlideTwo(){
    setCountTwo((prevTwo)=>{
      const nextTwo = prevTwo < 0 ? 4 : prevTwo - 1;
      picTwo = nextTwo === 1 ? "src/assets/projects2/p2.jpg" 
      : nextTwo === 2 ? "src/assets/projects2/p3.jpg"
      : nextTwo === 3 ? "src/assets/projects2/p4.jpg"
      : nextTwo === 4 ? "src/assets/projects2/p5.jpg"
      : nextTwo === 5 ? "src/assets/projects2/p6.jpg"
      : "src/assets/projects2/p1.jpg";
      setProjectTwo(picTwo);
      return nextTwo;
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

            <div className="contentText">The projects displayed here are my work as a requirement for my college project submissions and for personal projects. The following projects are free and made for non-profit purposes and can be accessed via their respective GitHub repository links shown below. Any use of the projects below should provide a reference or accreditation to its original developer.
            </div>

            <div className="featuresPanel">
              <div className="feature col-span-1 row-span-1 text-center font-bold">
                FEATURES
              </div>
              <div className="feature col-span-1 row-span-1 text-center font-bold">
                DEVELOPMENT STACK
              </div>
              <div className="feature col-span-2 row-span-1 font-semibold">
                <ul className="list-disc ms-4">
                  <li>Online inventory tracking for computer parts with and without serialization</li>
                  <li>Transaction management and history tracking</li>
                  <li>Product monitoring and management</li>
                  <li>Sale report and accessible PDF document printing</li>
                  <li>User interface designed for modern web browsers</li>
                </ul>
              </div>
              <div className="feature col-span-2 row-span-1 font-semibold">

                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <h1 className="text-lg">Frontend:</h1>
                    <ul className="list-disc ms-8 font-normal">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                   <h1 className="text-lg">Backend:</h1>
                    <ul className="list-disc ms-8 font-normal">
                      <li>PHP</li>
                    </ul>
                    
                    <h1 className="text-lg">Database:</h1>
                    <ul className="list-disc ms-8 font-normal">
                      <li>MySQL</li>
                      <li>SQLite</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="panels animate-fade-down animate-ease-in animate-duration-500">
          <h2 className="headers2">Online Enrollment Management System</h2>
          <div className="contentPanel">
            <div className="imagePanel">
              <img className="projectPics" src={projectTwo} alt="Project pictues set 2."></img>
              <div className="buttonContainer">
                <button className="slideshowButton next md:right-0" onClick={ nextSlideTwo } id="nextButtonTwo">Next</button>
                <button className="slideshowButton left md:left-0" onClick={ prevSlideTwo } id="prevButtonTwo">Previous</button>
              </div>
            </div>
            <div className="contentText">The projects displayed here are my work as a requirement for my college project submissions and for personal projects. The following projects are free and made for non-profit purposes and can be accessed via their respective GitHub repository links shown below. Any use of the projects below should provide a reference or accreditation to its original developer.
            </div>
             <div className="featuresPanel">
              <div className="feature col-span-1 row-span-1 text-center font-bold">
                FEATURES
              </div>
              <div className="feature col-span-1 row-span-1 text-center font-bold">
                DEVELOPMENT STACK
              </div>
              <div className="feature col-span-2 row-span-1 font-semibold">
                <ul className="list-disc ms-4">
                  <li>Online inventory tracking for computer parts with and without serialization</li>
                  <li>Transaction management and history tracking</li>
                  <li>Product monitoring and management</li>
                  <li>Sale report and accessible PDF document printing</li>
                  <li>User interface designed for modern web browsers</li>
                </ul>
              </div>
              <div className="feature col-span-2 row-span-1 font-semibold">

                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <h1 className="text-lg">Frontend:</h1>
                    <ul className="list-disc ms-8 font-normal">
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="col-span-1">
                   <h1 className="text-lg">Backend:</h1>
                    <ul className="list-disc ms-8 font-normal">
                      <li>PHP</li>
                    </ul>
                    
                    <h1 className="text-lg">Database:</h1>
                    <ul className="list-disc ms-8 font-normal">
                      <li>MySQL</li>
                      <li>SQLite</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Projects
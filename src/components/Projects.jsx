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

            <div className="contentText">The Inventory Management System for Computer Parts with Serialization is a system designed for computer stores or warehouses to properly store information in a secured but accessible place. The system allows the staff to have the processes from the traditional inventory management system but improved and meant to be used in the modern web browsers for ease of use and access. The system is meant to solve the problem of traditional inventory management system such as being reliant to paper documents which need proper storage and security to prevent compromise from outside parties, traditional processes that are slow such as manually searching or writing documents. The staff also has less accessibility as they have to physically obtain the documents to review information compared to it being available online. In conclusion, the system allows inventory management to be streamlined and adapted to a modern web environment.
            </div>

            <div className="contentText">
              Access the GitHub repo link here: 
              <a className="text-primary-400" href="https://github.com/Lastlight10/php-computerparts-ims"> IMS for Serialized Computer Parts</a>
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
                  <li>Staff accounts management</li>
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
            <div className="contentText">The online enrollment management system is a system what aims to ease the process of enrollment for students and allow staff to easily management and maintain these enrollments. The system allows student to view their enrollment history, enrollment details, university curriculum, as well as upload receipts for proof of payment. There are also options for staff to change courses, subjects and curriculum details and user management such as adding staff accounts or managing student status or enrolled courses. The system is built to improve upon the traditional methods of enrollments using paper documents in which students need to be present on the institution to proceed. The system also allows information to be easily accessed by students such as their enrollment information or curriculum online. Overall, the system modernizes the traditional systems of enrollment found on old universities which are slow and manual, allowing students to save time by experiencing faster processes compared to their manual counter part.
            </div>

            <div className="contentText">
              Access the GitHub repo link here: 
              <a className="text-primary-400" href="https://github.com/Lastlight10/enrollment"> Online Enrollment Management System</a>
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
                  <li>Accessible online enrollment process for students</li>
                  <li>Enrollment management with payment history and tracking</li>
                  <li>Courses, subjects, and curriculum management that are customizable depending on the institution</li>
                  <li>Document reports for payments, enrollments, and history</li>
                  <li>Highly informative dashboard that presents the statistics and analysis of data within the system</li>
                  <li>User interface designed for modern web browsers</li>
                  <li>User accounts management for staff and user alike</li>
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
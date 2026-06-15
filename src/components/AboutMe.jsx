import '../assets/css/AboutMe.css';
import { useState, useEffect } from 'react';

function AboutMe() {

  const [profile_image, setImage] = useState("src/assets/profile.jpg");
  const [i, setI] = useState(0);

  useEffect(()=>{
    const interval = setInterval(() => {
      setI((prev)=>{
        const nextI = prev > 1 ? 0 : prev + 1;
        if (nextI === 1){
          setImage("src/assets/profile1.JPG")
        }
        else if (nextI === 2){
          setImage("src/assets/profile2.JPG")
        }
        else{
          setImage("src/assets/profile.jpg")
        }
        return nextI
      })
    }, 4900);
    return () => clearInterval(interval)
  },[]);

  return (
    <>
      <div className="flex-col grid grid-rows-1 gap-2 p-4 mt-48">
        <div className="panels animate-ease-in animate-fade-down animate-duration-500">
          <h1 className="headers">Want to know more about me?</h1>
          <div className="contentPanel justify-center grid grid-cols-3">
            <div className="gap-4 col-span-1 text-primary-50">
              
              <div className="profileCarousel">
                <img className="aboutMePics" src={profile_image} alt="My profile image1."></img>
              </div>      
            </div>
            <div className=" ms-8 me-8 col-span-2">
              <p className="contentText">
                First let me reintroduce myself. My name is Clarenz Anthony Lunar Recon, a fresh graduate of Bachelor of Science in Computer Science in The University of Manila. I aim to be a professional Fullstack Web Developer specializing in Laravel Framework with ReactJS Library combined with PostgreSQL for database management. Below lies my personal information where you can contact me through email, or Facebook Messenger or you can take a look at my GitHub repositories for my projects.
              </p>
            </div>
          </div>

          <h1 className="headers2">Educational Background</h1>
          <div className="contentPanel justify-center">
            <div className="ms-8 me-8">
               <p className="contentText">
                My educational background has a large effect on the career path I have chosen which is to be a web developer along with the my peers and professors. These background are as follows:
               </p>
               <div className="grid grid-rows-3 mt-4 p-4">

                <div className="row-span-1">
                  <h3 className="headers3">
                    Junior High School (Grade 7-10)
                  </h3>
                  <p className="contentSubText">
                    2016-2020: Batasan Hills National High School (STE)
                  </p>
                </div>

                <div className="row-span-1">
                  <h3 className="headers3">
                    Senior High School (Grade 11-12)
                  </h3>
                  <p className="contentSubText">
                     2021-2022: Batasan Hills National High School (STEM)
                  </p>
                </div>
                
                <div className="row-span-1">
                  <h3 className="headers3">
                    College
                  </h3>
                  <p className="contentSubText">
                    2022-2026: The University of Manila (Bachelor of Science in Computer Science)
                  </p>
                </div>
               </div>
               
            </div>
           
          </div>

          <h1 className="headers2">Why I Chose This Career</h1>
          <div className="contentPanel justify-center">
            <div className="ms-8 me-8">
              <p className="contentText">
                When you ask people about what they do on the internet, most of the time they will tell you the websites they spend most of the time in like YouTube, Facebook or Instagram. These websites are a product of web developers who worked hard in maintaning and creating these websites that serves millions of users worldwide. As a fresh and upcoming web developer, I also aim to create websites popular and used by many internet users.
              </p>
              <p className="contentText">
                But there is something that I haven't really paid much attention to until I developed web applications myself and that is web applications can be an alternative to traditional softwares such as an inventory management system that can be accessed on using a web browser. This makes the systems accessible to almost any web browser at any places. This is one of the things I loved about websites, their accessibility with the limits of being contained in a single computer like a software only downloaded in one computer. One other thing is the design and aesthethics of websites along with themes and animations make it very appealing to users. Web developers has a lot of tools like TailWindCSS that can help in making websites more modern and pleasing to look at or libraries like ReactJS which is one of the most popular libraries used by developers for their frontend. 
              </p>
            </div>
          </div>
        </div>
        
      </div>
      

    </>
  )
}

export default AboutMe
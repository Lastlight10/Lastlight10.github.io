import '../assets/css/Stack.css';
import { useRef } from 'react'

function Stack(){
  const frontend = useRef(null);
  const backend = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior:"smooth",
    });
  }

  return(
    <>
      <div className="flex-col grid grid-cols-1 gap-2 p-4 mt-48">

        <div className="panels animate-fade-down animate-ease-in animate-duration-500">
          <h1 className="headers text-center">My Development Stack</h1>
          <p className="contentText ms-10 me-10">The following development stack refers to the programming languages, frameworks, libraries, and other tools used in the development of my projects and the areas where I am proficient at. The development stack serves as the foundation and key to start the development of the project therefore, I have learned and became proficient with these tools as part of my career in web development. </p>
          <div className="flex flex-col md:flex-row p-0 gap-4 m-0 justify-center items-center">
            <button className="panelButton" onClick={()=>scrollToSection(frontend)}>Frontend</button>
            <button className="panelButton" onClick={()=>scrollToSection(backend)}>Backend</button>
            <button className="panelButton" onClick={()=>scrollToSection()}>Version Control</button>
            <button className="panelButton" onClick={()=>scrollToSection()}>IDEs</button>
          </div>
          
        </div>

        <div className="panels animate-fade-down animate-ease-in animate-duration-500" ref={frontend}>
          <h1 className="headers text-center">Frontend Stack</h1>

          <div className="contentPanel">
            <h2 className="headers2">HTML, CSS and JavaScript</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src="src/assets/trio.jpg"></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  These trio of languages serves as the backbone of user intarface and user experience and it has been that way since the development of modern websites. HTML provides the structure and foundation of the website, CSS handles the designs, formatting, and layout while JavaScript handles the interaction under the hood to support the user interface or interact with the backend logic of the system.
                </p>
              </div>

            </div>
          </div>

          <div className="contentPanel">
            <h2 className="headers2">Bootstrap Library</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src="src/assets/bootstrap.jpg"></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  A frontend library developed to provide easy design and to simplify the development of websites through custom components. Usually partnered with HTML and CSS, the library provides a lot of tools in creating design and making a webiste's layout properly arranged and easy for users to understand.
                </p>
              </div>

            </div>
          </div>

          <div className="contentPanel">
            <h2 className="headers2">ReactJS Library</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src="src/assets/text1.png"></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  The most popular frontend library used by web developers due to its ability to give developers create websites utilizing React components that are highly customizable and uses JavaScript or TypeScript syntax under the .jsx markup syntax. ReactJS offers a different way of creating a frontend by dividing the page into separate components, thus updates and changes can only affect specific components, avoiding rendering whole pages. This method provides faster and easier user experience which is important to the modern web users.
                </p>
              </div>

            </div>
          </div>

      
        </div>


        <div className="panels animate-fade-down animate-ease-in animate-duration-500" ref={backend}>
          <h1 className="headers text-center">Backend Stack</h1>

          <div className="contentPanel">
            <h2 className="headers2">HTML, CSS and JavaScript</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src="src/assets/trio.jpg"></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  These trio of languages serves as the backbone of user intarface and user experience and it has been that way since the development of modern websites. HTML provides the structure and foundation of the website, CSS handles the designs, formatting, and layout while JavaScript handles the interaction under the hood to support the user interface or interact with the backend logic of the system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stack
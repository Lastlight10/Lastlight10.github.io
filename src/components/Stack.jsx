import '../assets/css/Stack.css';
import { useRef } from 'react'

import trio from '../assets/trio.jpg';
import bootstrap from '../assets/bootstrap.jpg';
import reactPic from '../assets/text1.png';
import tailwind from '../assets/tailwind.png'
import php_laravel from '../assets/php_laravel.png'
import express_node from '../assets/express_node.png'
import github from '../assets/github.jpeg'
import vsCode from '../assets/vscode.png'



function Stack(){
  const frontend = useRef(null);
  const backend = useRef(null);
  const version_control = useRef(null);
  const ide = useRef(null);

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
            <button className="panelButton" onClick={()=>scrollToSection(version_control)}>Version Control</button>
            <button className="panelButton" onClick={()=>scrollToSection(ides)}>IDEs</button>
          </div>
          
        </div>

        <div className="panels animate-fade-down animate-ease-in animate-duration-500" ref={frontend}>
          <h1 className="headers text-center">Frontend Stack</h1>

          <div className="contentPanel">
            <h2 className="headers2">HTML, CSS and JavaScript</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src={ trio }></img>
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
                <img className="" src={bootstrap}></img>
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
                <img className="" src={reactPic}></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  The most popular frontend library used by web developers due to its ability to give developers create websites utilizing React components that are highly customizable and uses JavaScript or TypeScript syntax under the .jsx markup syntax. ReactJS offers a different way of creating a frontend by dividing the page into separate components, thus updates and changes can only affect specific components, avoiding rendering whole pages. This method provides faster and easier user experience which is important to the modern web users.
                </p>
              </div>

            </div>
          </div>

          <div className="contentPanel">
            <h2 className="headers2">Tailwind CSS</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src={tailwind}></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  A popular CSS framework designed to be easily intergrated with your markup template allowing developers to create and design web pages with a wide variety of utilities. The framework is the standard of CSS design framework and is very popular among modern website developers while being relatively easy to use. The framework can also be used with regular CSS, and front end libraries like ReactJS. The different classes are the main tools a developer uses in this framework and these classes offer high customizability and flexible design choices.
                </p>
              </div>

            </div>
          </div>

      
        </div>


        <div className="panels animate-fade-down animate-ease-in animate-duration-500" ref={backend}>
          <h1 className="headers text-center">Backend Stack</h1>

          <div className="contentPanel">
            <h2 className="headers2">PHP</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src={php_laravel}></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  One of the most popular languages used in web development and has been used for almost two decades from the early 2000s up to the modern days of 2020s. The scripting language remains popular for web developers due to its flexibility, speed, and history which makes learning this language worth it for web developers. The scripting language provides many tools that allows object-oriented programming such as objects amd classes. PHP is commonly used with a package manager called Composer which allows the language to easily integrate packages. The langauage is also popular because of the web application framework called Laravel which allows developers to make a web application using blade templated frontend utilizing MVC architecture. The framework also offers Eloquent ORM for database interactions, with built-in security services like authentication, and encryption. Overall, the framework is a massive upgrade to the regular PHP development and allows for better and more controlled environment for developers to use.
                </p>
              </div>
            </div>
          </div>

           <div className="contentPanel">
            <h2 className="headers2">JavaScript with NodeJS, ExpressJS</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src={express_node}></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  JavaScript is the most iconic and recognizable programming langauage used for web development. Modern webistes uses Javascript regularly whether in in the frontend or backend logic. Its easy intergration withing markup templates such as HTML makes it very popular for web developers as a way to make their webpages interactive or used to control the logic behind the scenes like handling queries, requests, or database management. To make using JavaScript easier for developers, a runtime environment called NodeJS was developed and this helped the developers by making the handling of background processes outside of browsers, essentially being its own server. The environment comes with its default package manager called as "npm" which handles the packages a developer need by simply managing them with a console command. While a web app can be developed solely using NodeJS, it is common for developers to use frameworks such as ExpressJS, a minimal and flexible web application framework used for web application development that contains its own utility methods and middleware while being able to work with NodeJS to provide a smooth performance when developing.
                </p>
              </div>
            </div>
          </div>

        </div>

        <div className="panels animate-fade-down animate-ease-in animate-duration-500" ref={version_control}>
          <h1 className="headers text-center">Version Control</h1>
          <div className="contentPanel">
            <h2 className="headers2">GitHub</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src={github}></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  Utilizing Git, a version control system used in the development of software and web applications, GitHub serves as a platform for developers to store their projects known as repositories, in which other people can connect and cooperate. This way, developing a single project with multiple people can be smoother as people can simply commit their developed changes, be reviewed by others, and decide whether to push it in production or not. This makes a project's development easier to handle, manage and review its progress. Github also offers branches to make multiple developments on a single project at the same time. In this platform, developers can also showcase their skills by sharing their repositories with each other, make fork requests or clone public repositories. The platform is very popular among modern web developers therefore having repositories and sharing it to others is a great way to showcase your skills in web development.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="panels animate-fade-down animate-ease-in animate-duration-500" ref={ide}>
          <h1 className="headers text-center">Integrated Development Environment</h1>
          <div className="contentPanel">
            <h2 className="headers2">Visual Studio Code</h2>
            <div className="flex flex-col md:flex-row p-4 items-center">
              <div className="w-3/4 md:w-3/5">
                <img className="" src={vsCode}></img>
              </div>
              <div className="w-full">
                <p className="contentText p-4">
                  VS Code is an open-source code editor avaiable for Linux, Windows and MacOS. It is lightweight, higly customizable and easy to use. It features extensions for development tools, GitHub intergration to easily develop software and maintain its version control. The editor also allows for multiple languages with syntax highlighting. This IDE is popular among developers due to its flexibility and performance, availability of tools and extensions, and accessibility.
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
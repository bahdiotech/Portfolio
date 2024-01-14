import React from "react";
import profImag from "../assets/images/profile.jpg";
import { FaArrowAltCircleRight, FaHandPointRight, FaPhone } from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTittle } from "../hooks/useTitle";
import { Contact } from "./Contact";
import { AdobeXd, CorelDraw, Css, Figma, Git, GithubIco, Html5, Illustrator, JavaScript, PhotoShop, Python, ReactIconCol, Tailwind } from "./icons";

// import { Profile } from "./Profile";

export const About = () => {
  useTittle('About')
  return (
    <main className="mb-[10rem]">
      <section >
        <div className="flex  relative other:hidden flex-row ">
          <div className="basis-1/2 h-[5rem] dark:bg-neutral-800 bg-neutral-600 ">
            
          </div>
          <div className=" basis-1/2 h-[5rem] dark:bg-neutral-700 bg-white">
            
          </div>
        </div>
        
        <div className=" flex flex-row basis-full min-w-fit other:w-full inset-auto mx-auto h-[20rem]  items-center other:h-[12rem] bg-teal-800  ">

          <img src={profImag} className="rounded-xl border-4 other:ml-4 ml-32 mr-10 border-white object-center other:w-[8rem] object-cover  w-[14rem] m-8 " alt="" />
          <p className="text-4xl font-sensaBold mr-4 flex-col text-white mdMobile:text-2xl other:text-xl flex "> ADENIRAN GBOHUNMI ABRAHAM  <span className="text-xs m-2 text-neutral-300 ">Front-End Engineer</span> </p>
         
          
        </div>
      <div className="flex relative other:flex-col flex-row ">
          <div className="basis-1/2 h-auto dark:bg-neutral-800 bg-neutral-600 ">
            <div className=" tab:m-5 m-10 other:m-2  ">
              <section className="mb-10">
              <h1 className="text-white mb-4 underline underline-offset-8  decoration-green-900 decoration-4 text-center other:text-xl text-2xl font-novaRound">
                  About Me
              </h1>
              <p className="text-white text-xl other:base text-justify">
                Experienced and innovative Front-End Engineer with a passion for developing robust,
                 user-friendly, and visually appealing web applications. Proven expertise in HTML, CSS,
                  JavaScript, and modern front-end frameworks. Adept at collaborating with cross-functional teams to deliver 
                high-quality solutions that meet client and business needs.
              </p>
              </section>
              <h1 className="text-white font-novaRound text-center text-3xl sMobile:text-base mdMobile:text-xl border-2 px-4 border-teal-700 py-1 mb-4 shadow-sm shadow-neutral-500 rounded-3xl">Contacts Information</h1>
                <ul className="text-white space-y-4 mb-8">
                  <li className="flex items-center "> <FaPhone className="bg-teal-400 mr-4 text-black rounded-full text-xl p-1"/>+234 703 3348 5812</li>
                <li className="flex items-center "> <FaEnvelope className="bg-teal-400 mr-4 text-black rounded-full text-xl p-1"/>bardiotech@gmail.com</li>
                  <li className="flex items-center "> <FaLocationDot className="bg-teal-400 mr-4 text-black rounded-full text-xl p-1"/>Lagos, Nigeria</li>
                <li className="flex items-center "> <FaHandPointRight className="bg-teal-400 mr-4 text-black rounded-full text-xl p-1" /> For  More Contact Information <Link className="ml-2 text-blue-600" to="/contacts">Click here!</Link> </li>

                </ul>

              <h1 className="text-white shadow-sm shadow-neutral-500  font-novaRound text-center text-3xl sMobile:text-base mdMobile:text-xl border-2 px-4 border-teal-700  py-1 rounded-3xl">Languages</h1>
              <ul className="text-white list-disc mx-10 my-4">
                <li>English</li>
                <li>Pidgin</li>
                <li>Yoruba</li>
              </ul>
              <h1 className="text-white font-novaRound text-3xl border-2 shadow-sm shadow-neutral-500  border-teal-700 mdMobile:text-xl sMobile:text-base rounded-3xl px-4 text-center py-1">Experiences</h1>
               <ul className="text-white space-y-4 list-disc mx-10 my-4">
                  <li>Collaborated with UX/UI designers to implement responsive and visually stunning user interfaces for web applications.</li>
                  <li>Developed and maintained codebases using modern front-end technologies, including HTML5, CSS3, and JavaScript (ES6+).</li>
                  <li>mplemented and optimized front-end features, ensuring high performance and compatibility across browsers.</li>
                  <li>Worked closely with back-end developers to integrate user-facing elements with server-side logic.</li>
                  <li>Conducted code reviews to ensure code quality, maintainability, and adherence to coding standards.</li>
                  <li>Contributed to the optimization of web applications for speed and scalability.
</li>
                  </ul>
              <h1 className="text-white shadow-sm shadow-neutral-500  font-novaRound text-3xl border-2 border-teal-700 mdMobile:text-xl sMobile:text-base rounded-3xl px-4 text-center py-1">Certifications
              </h1>
              <ul className="text-white space-y-4 list-none mx-10 my-4">
                <li className="flex items-center"> <FaArrowAltCircleRight className="mr-5"/> 
                Bachelor of Technology (B.tech) <br />
                  Computer Science <br />
                  Ladoke Akintola University of Technology <br />
                  2016 - 2021 <br />
                  Ogbomoso, Oyo-State, Nigeria
                </li>
                <li className="flex items-center"> <FaArrowAltCircleRight className="mr-5" /> 
                  Diploma in Desktop Publishing <br />
                  FEMTECH Information Technology <br />
                  2015-2016 <br />
                  Ilorin, Kwara-State, Nigeria

                </li>
                <li className="flex items-center"> <FaArrowAltCircleRight className="mr-5" /> 
                  Front-End Certificate Of completion <br />
                  CodeCademy Online Course <br />
                  2019 <br />
                  Online Class

                </li>
                <li className="flex items-center"> <FaArrowAltCircleRight className="mr-5" /> 
                  Python Certificate Of completion <br />
                  CodeCademy Online Course <br />
                  2020 <br />
                  Online Class

                </li>
              </ul>
            </div>

        </div>
          <div className=" basis-1/2  dark:bg-neutral-700  bg-white">
            <div className=" tab:m-5 m-10 other:m-2 ">
              <section>
              <h1 className="font-novaRound text-3xl text-center text-white shadow-md shadow-neutral-400 bg-teal-700 mdMobile:text-xl sMobile:text-base rounded-3xl px-8 py-1">Projects
              </h1>

                <ul className="text-neutral-700 dark:text-white space-y-4 list-disc mx-10 my-4">
                  <h2 className="font-bold flex text-xl"> <FaHandPointRight className="mr-4 rounded-full text-3xl"/> Movie App </h2>
                  <li>Developed a responsive e-commerce platform using React.js, </li>
                  <li>Generated the Movie List, Data and detail from a movie free Api </li>
                  <li>You can as well add movie to your favorite and it will save to your browser memory until you clear your browsing history </li>
                  <li> I made the search more responsive that it shows movie information as you type in the movie title</li>
                  <li>GitHub Repository: [Link to GitHub repository]</li>
                  <li> Deployed the Web-App using Netlify </li>
                  <li><a className='text-blue-600' href="https://bardimate-movie.netlify.app/" target="blank"> Click to visit!</a> </li>
               </ul>
                <ul className=" text-neutral-700 dark:text-white space-y-4 list-disc mx-10 my-4">
                  <h2 className="font-bold flex text-xl"> <FaHandPointRight className="mr-4 rounded-full text-3xl"/> E-commerce Platform </h2>
                  <li>Developed a responsive e-commerce platform using React.js, integrating with a backend API for product data.</li>
                  <li>I implemented a way to sort and makes it easy to locate any product on the web app</li>
                  <li>Implemented user authentication, cart functionality, and payment processing.</li>
                  <li>GitHub Repository: [Link to GitHub repository]</li>
                  <li> Deployed the Web-App using Netlify </li>
                  <li> NB: website might run Slow because the backend was deployed on a free server <a className='text-blue-600' href="https://codebook-bardi.netlify.app" target="blank"> Click to visit!</a> </li>
               </ul>
                <ul className="text-neutral-700 dark:text-white space-y-4 list-disc mx-10 my-4">
                  <h2 className="font-bold flex text-xl"> <FaHandPointRight className="mr-4 rounded-full text-3xl" />  Portfolio Website </h2>
                  <li>Created a personal portfolio website showcasing skills, projects, and resume.</li>
                  <li>Utilized React.js and Tailwind Css to design an aesthetically pleasing and user-friendly interface.</li>
                  <li>GitHub Repository: [Link to GitHub repository]</li>
                  <li> Deployed the Web-App using Netlify </li>
               </ul>
              </section>
              <section>
                
              </section>
              <section>
                <h1 className="font-novaRound text-3xl text-center shadow-md shadow-neutral-400 text-white bg-teal-700 mdMobile:text-xl sMobile:text-base rounded-3xl px-8 py-1">Skills Summary
              </h1>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <ReactIconCol className='other:w-6 w-8 mr-1' />React</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '92%'}}> 92%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <Html5 className='other:w-6 w-8 mr-1' />HTML 5</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '99%'}}> 99%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <Css className='other:w-6 w-8 mr-1' />CSS</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '87.8%'}}> 87.8%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <Python className='other:w-6 w-8 mr-1' />Python</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '69.8%'}}> 69.8%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <JavaScript className='other:w-6 w-8 mr-1' />JavaScript</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '86%'}}> 86%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <PhotoShop className='other:w-6 w-8 mr-1' />Photoshop</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '88.3%'}}> 88.3%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <Illustrator className='other:w-6 w-8 mr-1' />Illustrator</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '65.5%'}}> 87.8%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <Figma className='other:w-6 w-8 mr-1' />Figma</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '64.2%'}}> 64.2%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <CorelDraw className='other:w-6 w-8 mr-1' />CorelDraw</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '64.2%'}}> 64.2%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <AdobeXd className='other:w-6 w-8 mr-1' />Adobe Xd</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '53.4%'}}> 53.4%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <Tailwind className='other:w-6 w-8 mr-1' />tailwind CSS</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '89.9%'}}> 89.9%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <Git className='other:w-6 w-8 mr-1' />Git</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '84.8%'}}> 84.8%</div>
                  </div>
              </div>
              <div className="flex  items-center">
                  <h3 className=" flex items-center tab:text-xl other:text-xl text-2xl font-novaRound basis-1/2">  <GithubIco className='other:w-6 w-8 mr-1' />Github</h3>
                  <div className="w-full basis-1/2 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div className="bg-cyan-900  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width: '84.8%' }}> 84.8%</div>
                  </div>
              </div>
             
              </section>
          </div>
        </div>
    </div>
      </section>
      <Contact/>
    </main>
  )
}

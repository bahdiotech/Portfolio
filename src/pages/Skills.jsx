import React from "react";
import { AdobeXd, CorelDraw, Css, Figma, Git, GithubIco, Html5, Illustrator, JavaScript, PhotoShop, Python, ReactIconCol } from "./icons";

   


export const Skills = () => {

  return (
    <main>
      <article className=""><p className="font-novaSquare other:text-xl ml-10 text-2xl"> \\My Skills</p> 
      <ul className="flex ml-4 justify-around items-center flex-wrap flex-row ">
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <ReactIconCol /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'>React.Js</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <Html5 /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'>HTML 5</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <Css /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'>Css</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <Python /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'>Python</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <JavaScript /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'>JavaScript</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <Figma /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'>Figma</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <AdobeXd /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'>Adobe XD</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <CorelDraw /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'>CorelDraw</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <Illustrator /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'> Adobe Illustrator</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <PhotoShop /> <span className='font-novaSquare other:text-base tab:text-xl text-2xl'>Adobe Photoshop</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <GithubIco /> <span className='font-novaSquare ml-1 other:text-base tab:text-xl text-2xl'>GitHub</span> </li>
        <li className="basis-1/4 tab:basis-1/3 other:basis-1/2 flex my-6 items-center"> <Git /> <span className='font-novaSquare ml-1 other:text-base tab:text-xl text-2xl'>Git</span> </li>
        
      </ul>
      </article>
    </main>
  )
}

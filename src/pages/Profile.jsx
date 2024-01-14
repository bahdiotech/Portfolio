import React from "react";
import avaterImg from "../assets/images/avaterImg.jpg";
import cover from "../assets/images/cover.jpg";
import { NavLink } from "react-router-dom";

export const Profile = () => {
  return (
    <main>
      <div className="mb-[6rem]">
        <img className="w-full h-[16rem]  other:h-[8rem] object-cover object-center" src={cover} alt="" />
        <div className="bg-transparent flex items-center justify-center border-cyan-700 z-10 border-none -mt-16 h-[5rem]">
          <img src={avaterImg} className="w-[15rem] other:h-[7rem] other:w-[7rem]  h-[15rem] rounded-full" alt="" />
        </div>
      </div>
      <div className="flex  flex-col items-center">
        <h1 className="text-center  text-2xl other:text-xl font-novaRound uppercase">Gbohunmi Abraham Adeniran</h1>
        <p className="text-center  text-base other:text-sm mt-4 text-neutral-400 font-novaRound ">Lagos, Nigeria</p>
        <div className="flex other:mx-5 my-8 other:min-w-[20rem]  min-w-[40rem] justify-around ">
          <p className="flex flex-col">
            <span className="bigNov font-novaSquare dark:text-white tracking-wide other:text-2xl text-4xl ">8+</span>
            <span className="font-novaOcal text-sm dark:text-neutral-400  other:text-xxs text-[#666363]">Project <br/> Showcased</span>
          </p>
          <p className="flex flex-col">
            <span className="bigNov font-novaSquare dark:text-white tracking-wide other:text-2xl text-4xl ">9+</span>
            <span className="font-novaOcal text-sn  dark:text-neutral-400 other:text-xxs text-[#666363]">Skills <br /> for front end </span>
          </p>
          <p className="flex flex-col">
            <span className="bigNov font-novaSquare dark:text-white tracking-wide other:text-2xl text-4xl ">3+</span>
            <span className="font-novaOcal text-sn  dark:text-neutral-400 other:text-xxs text-[#666363]">Years of <br /> Experience</span>
          </p>
          <p className="flex flex-col">
            <span className="bigNov font-novaSquare dark:text-white tracking-wide other:text-2xl text-4xl ">6+</span>
            <span className="font-novaOcal text-sm  dark:text-neutral-400 other:text-xxs text-[#666363]">Happy <br /> Clients</span>
          </p>
        </div>
        <div className="flex items-center justify-around">
          <button className=" other:px-3 flex basis-full other:mr-2 mr-4 hover:bg-gradient-to-br border-black dark:border-white border-2 py-1 text-2xl other:text-base rounded-md px-10">Connect</button>
          <button className=" border-black ml-4 other:ml-2 other:px-3 dark:border-white border-2 py-1 text-2xl other:text-base rounded-md px-10">Message</button>
        </div>
        <ul>
          <NavLink to="/path">
            
          </NavLink>
        </ul>
      </div>
      
    </main>
  )
}

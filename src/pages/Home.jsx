import "@splidejs/react-splide/css";
import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Intersection } from "@splidejs/splide-extension-intersection";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { Mee, Sliders } from "../assets/images";
import { websites } from "../assets/projects/index";
import { ProjectCard } from "../components/ProjectCard";
import { Contact } from "./Contact";
import { Skills } from "./Skills";

/* eslint-disable react/jsx-no-comment-textnodes */

// import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export const Home = () => {
  return (
    <main className="my-4 ">
      <p className="flex my-4 md:mx-5 text-[#717171] dark:text-neutral-200 items-center">
        <span className="mr-4 ">
          <MdLocationPin className="w-6 h-6" />
        </span>
        <span>Lagos, Nigeria</span>
      </p>
      <div className="flex  p-4 rounded-xl dark:bg-neutral-600 dark:bg-opacity-30 bg-neutral-300 justify-around items-center other:flex-col">
        <article className=" md:h-[25rem] flex flex-col mb-16 justify-between  ">
         <div><p className="font-novaSquare md:w-rem] other:text-base other:w-[16rem] h-23 w-[22.5rem] text-xl">
          <span className="mr-2 text-3xl ">I
            Adeniran A. Gbohunmi,<br/>
          </span>
          I am a Web Developer, With a Passion for creating fine and unique, responsive and most user interactive website or web Application
        
          </p> 
          </div> 
        <Link to="/about"><button className="bg-blue-600 text-white text-xl rounded-lg mt-16 py-2 px-5">Learn More</button> </Link>
      </article>
      <div><Splide hasTrack={false} extensions={{ Intersection }} tag="div" options={{ perPage: 1, type: 'loop', gap: '0', rewind: true, drag: 'free', arrows: true, width: '25rem', autoHeight: true, snap: true, autoScroll: { speed: 1, pauseOnHover: true }, autoplay: 'start', intersection: { inView: { autoplay: true } } }}>

          <SplideTrack>{Mee.map((mee) => (<SplideSlide className="rounded-lg" key={mee.id}>

            <img className=" bg-contain sMobile:w-[18rem] mdMobile:w-[21rem] lgMobile:w-[25rem] object-cover my-6  w-[25rem]" src={mee.src} alt={mee.name} />
          </SplideSlide>))}
          </SplideTrack>
        </Splide></div>
        
      </div>
      
      {/* <article className="flex other:mx-3 md:mx-5 w-full  other:flex-col other:h-[7rem] mb-16 justify-between items-center"><p className="font-novaSquare other:my-6 text-sm sMobile:w-[16rem] float-right other:text-sm h-6 w-[19.9rem]">
        Welcome to my portfolio. I love showcasing my projects and I'm open to
        new opportunities! Explore my work and feel free to get in touch
      </p></article> */}
      
      <Splide hasTrack={false} extensions={{ Intersection }} tag="div" options={{ perPage: 1, type: 'loop', gap: '10px', rewind: true, drag: 'free', arrows: true, autoWidth: true, autoHeight: true, snap: true, autoScroll: { speed: 1, pauseOnHover:true },autoplay:'start', intersection: { inView:{autoplay:true}} }}>
       
        <SplideTrack>{Sliders.map((slide) => (<SplideSlide className="rounded-lg" key={slide.id}>
          
           <img className="h-[46.8rem] bg-contain object-cover object-center rounded-sm  other:h-[16rem] mt-4 w-[84rem] " src={slide.src} alt={slide.name} />
        </SplideSlide>))}</SplideTrack>
        <div className="splide__progress">
          <div className="splide__progress__bar" />
        </div>
  

          </Splide>

          <div className="flex my-8 justify-around ">
        <p className="flex flex-col">
          <span className="bigNov font-novaSquare dark:text-white tracking-wide other:text-3xl text-5xl ">8+</span>
          <span className="font-novaOcal  text-base dark:text-neutral-400 other:text-xs text-[#666363]">Project <br/> Showcased</span>
            </p>
            <p className="flex flex-col">
          <span className="bigNov font-novaSquare dark:text-white tracking-wide other:text-3xl text-5xl ">9+</span>
          <span className="font-novaOcal text-base  dark:text-neutral-400 other:text-xs text-[#666363]">Skills <br/> for front end </span>
            </p>
            <p className="flex flex-col">
          <span className="bigNov font-novaSquare dark:text-white tracking-wide other:text-3xl text-5xl ">3+</span>
          <span className="font-novaOcal text-base  dark:text-neutral-400 other:text-xs text-[#666363]">Years of <br/> Experience</span>
            </p>
            <p className="flex flex-col">
          <span className="bigNov font-novaSquare dark:text-white tracking-wide other:text-3xl text-5xl ">6+</span>
          <span className="font-novaOcal text-base  dark:text-neutral-400 other:text-xs text-[#666363]">Happy <br/> Clients</span>
            </p>
          </div>
      <article className="bg-black other:h-[9rem] dark:bg-neutral-900 my-6 h-[16rem] ">
            <div className="other:mx-6 mx-28 py-10 other:py-4 ">
            <p className="font-novaScript  text-neutral-300 other:text-xs dark:text-neutral-500">//A Client said...</p> 
          
          <p className="font-novaSquare group-[]: text-xl w-[25rem] other:text-sm mt-4 other:mt-1 dark:text-neutral-400 other:w-[14rem]">“You doing this Like you’ve been doing it for a longer time, Bardio you are truly a Bard front-end Engineer.</p>
        </div>
          </article>
          <Skills/>

      <main >
        <div className="flex " title="Note: some Web-app might load slower that doesn't mean anything they happened cuz of free Api" >
          <h1 className="border-cyan-600 other:text-xl font-novaSquare my-4 ml-10 text-2xl pb-3 px-0 text-center border-b-4">PROJECTS</h1>
        </div>
        <div>
        <section className="flex justify-center w-full  flex-wrap flex-row">
          {websites.map((website) => <ProjectCard key={website.id} website={website} /> )}
        </section>
        <div className="flex justify-center">
        <Link to='/Projects' className="bg-slate-400 dark:bg-neutral-500 dark:hover:bg-neutral-600 text-white hover:bg-slate-600 py-2 px-4 rounded-2xl items-center justify-center"> Goto Projects page</Link>
        </div>
        </div>
      </main>
          
          <Contact/>
    </main>
  );
};
/* eslint-enable react/jsx-no-comment-textnodes */

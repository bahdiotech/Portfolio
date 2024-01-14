import React from "react";

export const ProjectCard = (website, className) => {
  const { id, name, src, link } = website.website
 
  return (
    <div key={id} title={name} className={` ${className} flex flex-auto justify-center border-4 border-opacity-30 border-neutral-400 other:h-[15rem] m-4 items-center  rounded-[2rem] mr-4  flex-row h-[23rem] tab:h-[15rem] tab:w-[20rem] w-[27rem] bg-cover bg-no-repeat flex-wrap `} style={{backgroundImage: `url(${src})`, backgroundRepeat: 'no-repeat'}}>
      <a className="border-2 h-7  flex shadow-lg shadow-inherit font-novaSquare rounded-xl hover:bg-opacity-70 text-xl text-neutral-900 bg-gradient-to-r  other:text-base bg-opacity-50 bg-slate-600 items-center border-gray-500 p-4" target="blank" href={link}> visit Site</a>
    </div>
  )
}

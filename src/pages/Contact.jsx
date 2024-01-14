import React from "react";
import { FaPhone } from "react-icons/fa";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { MdMail, MdPhone, MdWhatsapp } from "react-icons/md";
import { GithubIco, InstagramCol, Linkedlin, TwitterX } from "./icons";

export const Contact = () => {
  const[name, setName] = React.useState('')
  const[email, setEmail] = React.useState('')
  const[Project, setProject] = React.useState('')
  const[body, setBody] = React.useState('')



  const handleSubmit = (e) =>{
   
    const recipient = 'bardiotech@gmail.com';
    const subject = 'I have a Job offer';
    const bodyEmail = `My Name is ${name} \n my email address is ${email} \n The Project is ${Project} \n \n Additional Details:\n ${body} `;
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyEmail)}`;
  
    window.location.href = mailtoLink;
    

  }

  return (
    <main>
      <div className="my-6 flex-row flex justify-around  other:flex-col other:mx-4">
        <form onSubmit={handleSubmit} className="my-6 basis-1/2 other:basis-full other:mx-0 other:mr-0 flex md:mx-10 lg:mr-8  flex-col space-y-6">
          <h3 className="font-novaSquare text-2xl"> \\ Contact</h3>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Your Name*"
            className="bg-transparent focus:outline-none other:h-[3rem]  md:text-base text-xl placeholder:text-base font-novaScript h-[3.5rem]  other:placeholder:text-sm  md:h-[3rem] other:mr-0  placeholder:font-novaSquare  p-4 dark:border-neutral-600 rounded-2xl  border"
          />
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your Email*"
            className="bg-transparent  other:h-[3rem]  md:text-base text-xl placeholder:text-base font-novaScript h-[3.5rem]  other:placeholder:text-sm  md:h-[3rem] other:mr-0  placeholder:font-novaSquare  p-4 dark:border-neutral-600 rounded-2xl  border"
          />
          <input
            type="text"
            onChange={(e) => setProject(e.target.value)}
            value={Project}
            placeholder="What type of project are you looking for ?"
            className="bg-transparent  other:h-[3rem]  md:text-base text-xl placeholder:text-base font-novaScript h-[3.5rem]  other:placeholder:text-sm  md:h-[3rem] other:mr-0  placeholder:font-novaSquare  p-4 dark:border-neutral-600 rounded-2xl  border"
          />
          <textarea
            onChange={(e) => setBody(e.target.value)}
            value={body}
            className=" md:text-base text-xl placeholder:text-base font-novaScript dark:bg-inherit  placeholder:font-novaSquare other:placeholder:text-sm  p-4 dark:border-neutral-600 rounded-xl  border"
            placeholder="Write your Message..."
            cols="30"
            rows="10"
          />
          <input
            type="submit"
            value="Send"
            className="bg-neutral-900 hover:bg-neutral-700 mt-16 md:text-base p-4 text-white  other:placeholder:text-sm  flex justify-center  font-novaSquare text-xl   rounded-2xl  border-none"
          />
        </form>
        <div className="flex other:basis-full basis-1/2 other:flex-nowrap flex-wrap flex-col justify-between">
          <div className="my-6 flex basis-1/4 other:basis-1/2 flex-col  other:mr-0 mr-8 space-y-6">
            <h1 className="font-novaSquare md:text-2xl dark:text-white other:text-xl  text-2xl">
              <span className="font-sensaBold">BARDIOTECH</span> Portfolio
            </h1>
            <div className="shadow-md flex dark:shadow-slate-700  flex-col justify-center space-y-3  items-center text-center h-[150px]">
              <a href="mailto:bardiotech@gmail.com">
              <MdMail className="mr-2 dark:tex-white text-blue-700 md:text-6xl text-5xl" /></a>
              <p className="font-novaSquare dark:text-white text-purple-800 flex other:text-xl sMobile:text-xl md:text-xl items-center  text-2xl">
                <a href="mailto:bardiotech@gmail.com">
                bardiotech@gmail.com
                </a>
              </p>
              <span className="font-novaSquare dark:text-white flex other:text-sm md:text-base items-center text-xl">
                Contact me Mon - Fri 24/7
              </span>
            </div>
            <div className="shadow-md flex dark:shadow-slate-700  flex-col justify-center space-y-3  items-center text-center h-[150px]">
              <a href="tel:07033485812">
              <MdPhone className="mr-2 dark:tex-white text-green-700 md:text-6xl text-5xl" />
              </a>
              <p className="font-novaSquare dark:text-white text-purple-800 flex other:text-xl sMobile:text-xl md:text-xl items-center  text-2xl">
                <a href="tel:07033485812">
                +234 (0) 703 348 5812</a>
              </p>
              <span className="font-novaSquare dark:text-white flex other:text-sm md:text-base items-center  text-xl">
                
                Contact me Mon - Fri 24/7
              </span>
            </div>
            <div className="shadow-md flex dark:shadow-slate-700  flex-col justify-center space-y-3  items-center text-center h-[150px]">
              <a target="blank" href="https://wa.me/message/EDIISAM5BLEEM1">
              <MdWhatsapp className="mr-2 dark:tex-white text-green-500 md:text-6xl text-5xl" />
              </a>
              <p className="font-novaSquare dark:text-white text-purple-800 flex other:text-xl sMobile:text-xl md:text-xl items-center  text-2xl">
                <a href="https://wa.me/message/EDIISAM5BLEEM1">
                +234 (0) 703 348 5812</a>
              </p>
              <span className="font-novaSquare dark:text-white flex other:text-sm md:text-base items-center  text-xl">
                Contact me Mon - Fri 24/7
              </span>
            </div>
           
          </div>
          <div className="my-6 other:basis2 other:ml-8">
            <p className="font-novaSquare my-8 md:text-xl other:text-base lgMobile:text-xl text-2xl">
              {" "}Connect with me on social media!
            </p>
            <div className="flex justify-between lgMobile:h-[200px] other:mr-0 mr-8 flex-row">
              <a
                target="blank"
                href="https://www.instagram.com/bardi_i_?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"
              >
                <InstagramCol className="md:w-8" />
              </a>
              <a target="blank" href="https://www.linkedin.com/in/gbohunmi-adeniran-37968b27b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                <Linkedlin className="md:w-8" />
              </a>
              <a target="blank" href="https://github.com/bahdiotech">
                <GithubIco className="md:w-8" />
              </a>
              <a target="blank" href="https://twitter.com/i_am_gbohunmi">
                <TwitterX className="md:w-8" />
               
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

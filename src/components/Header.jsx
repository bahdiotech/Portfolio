import React, { useEffect, useState } from "react";
import { MdClose, MdDarkMode, MdMenu, MdOutlineLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { BardiLogo } from "../pages/icons";

export const Header = () => {
  const [sideBar, setSideBar] = useState(false);
  // const [hidden, setHidden] = useState(false);
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  // const handleSideBar = () => {
  //   setHidden(false);
  //   setSideBar(!sideBar);
  // };

  const activeClass =
    "text-base tab:text-sm block py-2 pl-3 pr-4 text-white bg-gray-800 rounded md:bg-transparent md:text-gray-500 md:p-0 md:dark:text-neutral-400";

  const inActiveClass =
    "text-base block py-2 pl-5 tab:text-sm pr text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header className="w-[full] shadow  flex items-center justify-center dark:shadow-slate-300 dark:bg-neutral-950">
      <div onClick={() => setSideBar(false)} className={` ${sideBar? 'block': 'hidden'} md:hidden lg:hidden absolute h-[100rem] bg-slate-500 bg-opacity-10 w-full`}></div>
      <div className=" md:mx-4 w-[82em]  other:mx-4 mx-auto  h-[6.25rem]  flex justify-between items-center">
       
        <Link to="/" className="">
         
            <span className="font-novaScript flex other:text-base  items-center sMobile:text-xxs text-base">
            <span className=" flex mdMobile:text-base  text-teal-950 dark:text-teal-800 ">Welcome <span className="mt-4 text-sm  ">to</span> </span>  <BardiLogo className=' w-[6rem] h-[6rem] other:h-[5rem]  other:w-[5rem]' /><span className=" other:text-xs dark:text-teal-800 text-teal-950 mdMobile:text-base text-sm">Portfolio</span>
          </span>{" "}
          
        </Link>
        <div className="hidden  other:flex justify-between items-center space-x-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            type="button"
            className=" font-medium text-gray-700 w-7 h-7 flex justify-center items-center  bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {!darkMode ? (
              <MdDarkMode className={` text-xl`} />
            ) : (
              <MdOutlineLightMode className={` text-xl`} />
            )}
          </button>
          <MdMenu
            className={`${sideBar && 'hidden'} h-7 w-7 text-2xl}`}
            onClick={() => setSideBar(!sideBar)}
          />
          <MdClose className={`${!sideBar && 'hidden'} w-7 h-7 p-0`} onClick={() => setSideBar(false)}  />
          
        </div>
        
        <ul
          className={`${!sideBar && "other:hidden"
            } other:z-40 other:rounded-lg flex other:flex-col other:absolute other:h-[22rem] other:space-y-6 other:dark:bg-slate-700 other:bg-slate-100 other:w-[15rem] other:right-0 other:mt-[25rem] font-novaSquare text-base tab:space-x-5 space-x-12`}
        >
          <button
            onClick={() => setDarkMode(!darkMode)}
            type="button"
            className=" other:hidden md:mr[-1.4rem] font-medium text-gray-700 w-7 h-7 flex justify-center items-center  bg-white border border-gray-200 rounded-lg toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            {!darkMode ? (
              <MdDarkMode className={` text-xl`} />
            ) : (
              <MdOutlineLightMode className={` text-xl`} />
            )}
          </button>
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
            to="/"
          >
            Home
          </NavLink>
         
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            About
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) =>
              isActive ? activeClass : inActiveClass
            }
          >
            Contacts
          </NavLink>
          <Link to='/contacts' className="px-2 rounded-md mb-3 py-1  text-white  bg-blue-600 text-xl other:block hidden">
            Hire Me
          </Link>
        </ul>
        <Link to='./contacts' className="px-4 py-2 tab:p-2 tab:text-sm font-novaRound md:text-base hover:bg-cyan-800 bg-cyan-700 text-white rounded-md text-xl other:hidden">
          Hire Me
        </Link>
      </div>
    </header>
  );
};

import { useState, useEffect, useRef } from "react";
import logo from "../assets/svg/logosvg.svg"
import { NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Button from "./Button";


type linksTypes =  Record<string, string>;

export default function Navbar () {    
    const [hidden, setHidden] = useState(false);
    const [isVisible, setIsVisible] = useState(false)

  const USlinks: linksTypes = {
    'Services': '/services',
    'Industries': '/industries',
    'About Us': '/about Us',
    'Contact US': '/contact us',
  }

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detect direction
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling DOWN
        setHidden(true);
      } else {
        // Scrolling UP
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

      <div className={`${isVisible? ' h-60 transition-all duration-500 ease-in-out' : 'h-12.5'} xl:h-auto overflow-hidden w-screen sm:w-full fixed left-0 flex flex-col py-3 sm:px-16 px-2 bg-[#f5f3f4] z-70 transition-all duration-300 ease-in-out
      ${hidden ? "-top-24" : "top-0"}
    `}>

      {/* main interface for desktop View  */}
      <div className="w-full flex justify-between items-center ">
        <NavLink to={'/'}><img src={logo} className="w-36 contain" alt="logo" /></NavLink>

        <div className={`w-[30%] justify-between items-center hidden flex-col xl:flex xl:flex-row`}>
        {Object.keys(USlinks).map((key) => (
          <NavLink
            key={key}
            to={USlinks[key]}
            className={({ isActive }) =>
              `text-base font-medium transition-colors ${
                isActive
                  ? "text-primary-orange underline decoration-primary-orange"
                  : "hover:text-primary-orange"
              }`
            }
          >
            {key}
          </NavLink>
          ))}
        </div>


        <div 
        onClick={() => setIsVisible(!isVisible)}
        className={`
          text-2xl xl:hidden inline-block
          transition-transform duration-500 ease-in-out
          ${isVisible ? 'rotate-180' : 'rotate-0'}
        `}
        >
          {isVisible ? <IoClose /> : <GiHamburgerMenu />}
        </div>
        <Button variant="primary" className="xl:inline hidden sm:hidden">Get started</Button>
      </div>

          {/* only applies in mobile view */}
        <div className="w-[50%] pl-12 justify-between items-start flex xl:hidden flex-col gap-2 xl:flex-row mt-2">
          {Object.keys(USlinks).map((key) => (
            <NavLink
            key={key}
            to={USlinks[key]}
            className={({ isActive }) =>
              `text-base font-medium transition-colors ${
                isActive
                  ? "text-primary-orange underline decoration-primary-orange"
                  : "hover:text-primary-orange"
              }`
            }
          >
            {key}
          </NavLink>
          ))}
          <Button variant="primary" className="text-center md:p-3">Get started</Button>
        </div>
      </div>
    
    );
}
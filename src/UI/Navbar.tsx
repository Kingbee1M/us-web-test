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
    'About Us': '/about-Us',
    'Contact Us': '/contact-Us',
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



      <header className={`${isVisible? ' h-64 transition-all duration-500 ease-in-out' : 'h-12.5'} xl:h-auto overflow-hidden w-screen sm:w-full fixed left-0 flex flex-col items-start xl:flex-row xl:items-center xl:justify-between gap-3 py-3 sm:px-16 px-2 bg-[#f5f3f4] z-70 transition-all duration-300 ease-in-out ${hidden ? "-top-24" : "top-0"}`}>
        
        <div className="w-full xl:w-auto flex flex-row justify-between">
        <NavLink to={'/'}><img src={logo} className="w-36 contain" alt="logo" /></NavLink>

        <button 
        onClick={() => setIsVisible(!isVisible)}
        className={`
          text-2xl xl:hidden inline-block
          transition-transform duration-500 ease-in-out
          ${isVisible ? 'rotate-180' : 'rotate-0'}
        `}
        >
          {isVisible ? <IoClose /> : <GiHamburgerMenu />}
        </button>
        </div>


        <div className="flex flex-col gap-3 xl:flex-row xl:justify-between w-full xl:w-2/3">
          <nav className={`w-full xl:w-1/2 flex flex-col justify-between items-start gap-3 xl:items-center xl:flex-row`}>
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
          </nav>


          
          <Button variant="primary" className="w-1/2 xl:w-1/5">Get Started</Button>
        </div>
      </header>

    
    );
}

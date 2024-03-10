import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SwitchTheme from "./SwitchTheme";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import Image from "next/image";
const Header = () => {

    const [darkMode, setDarkMode] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(0);
    const [openBurger, setOpenBurger] = useState<boolean>(false);
    const [isInitialized, setIsInitialized] = useState<boolean>(false);

    
    //enabled/disabled darkmode 
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    //enabled/disabled burger menu
    const toggleMenu = () => {
        setOpenBurger(!openBurger);
    };


    useEffect(() => {
        if (!isInitialized) {
            const darkModeStorage = localStorage.getItem('darkMode');
            if (darkModeStorage === "enabled") {
                setDarkMode(true);
            }
            setIsInitialized(true);
        }
    }, [isInitialized]);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            document.body.classList.remove('dark');
            localStorage.removeItem('darkMode');
        }
    }, [darkMode]);


    return (
        <>
            <header className="h-28 flex items-center text-xl" id="headerScrolled">
                <nav className=" h-28 phone:relative flex items-center w-full">
                    <Link href="/" className="w-1/3 flex justify-center phone:justify-start items-center"><Image src="/images/logo.png" className="w-36 phone:mb-1 phone:w-24" alt="logo" width={2048} height={2048} /></Link>
                    {width >= 1024 && (<ul className="flex justify-evenly h-full items-center w-1/3">
                        <li className=""><Link href='/'>Accueil</Link></li>
                        <li className="mx-10"><Link href='/project'>Mes projets</Link></li>
                        <li className=""><Link href='/contact'>Contact</Link></li>
                    </ul>)}
                    <div className="w-1/3 phone:w-2/4 flex justify-center phone:justify-center items-center mt-2 phone:m-0 phone:absolute phone:top-1/2 phone:left-1/2 phone:transform phone:-translate-x-1/2 phone:-translate-y-1/2">
                        <a href="https://github.com/Tontico" className="group w-12  hover:w-44 h-12 hover:bg-customColor relative bg-customColor rounded-full text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start items-center p-2">
                            <FontAwesomeIcon icon={faGithub} className="w-8 h-8  shrink-0 fill-neutral-50" />
                            <span className="origin-left inline-flex text-base duration-100 ml-1 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all">
                                Tontico
                            </span>

                        </a>
                        <a href="https://www.linkedin.com/in/anthony-suraci/" className="group mx-5 w-12 hover:w-44 h-12 hover:bg-customColor relative bg-customColor rounded-full text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start items-center p-2">
                            <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8 shrink-0 fill-neutral-50" />
                            <span
                                className="origin-left inline-flex w-full text-base duration-100 ml-1 group-hover:duration-300 group-hover:delay-500 opacity-0 group-hover:opacity-100 border-l-2 px-1 transform scale-x-0 group-hover:scale-x-100 transition-all whitespace-nowrap overflow-hidden"
                            >Anthony Suraci</span>
                        </a>
                        <SwitchTheme darkMode={darkMode} toggleTheme={toggleDarkMode} />
                    </div>

                    {width <= 1024 && (<button id="burger" className=" flex w-24 justify-center items-center phone:absolute phone:top-1/2 phone:right-0 phone:transform phone:-translate-y-1/2" onClick={toggleMenu}>
                        {openBurger ? <FontAwesomeIcon icon={faTimes} className="w-8 h-8" /> : <FontAwesomeIcon icon={faBars} className="w-8 h-8" />}
                    </button>)}
                </nav>
            </header>
            <div className="border border-customColor w-1/3 phone:w-2/3 mx-auto"></div>
            {openBurger && (
                <motion.ul
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.5 }}
                    className="absolute z-50 w-full text-2xl flex flex-col justify-start items-center overflow-hidden bg-white dark:bg-customDarkBg phone:justify-self-end"
                >
                    <li className="my-20"><Link href='/'>Accueil</Link></li>
                    <li className="mb-20"><Link href='/project'>Mes projets</Link></li>
                    <li className="mb-20"><Link href='/contact'>Contacts</Link></li>
                </motion.ul>
            )}
        </>
    );
}

export default Header;
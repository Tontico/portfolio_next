import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SwitchTheme from "./SwitchTheme";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

const Header = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);
    const logo = !darkMode ? "images/logo-light.png" : "images/logo-dark.png";

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        const darkModeCookies = Cookies.get('darkMode');
        if (darkModeCookies === "enabled") {
            setDarkMode(true);
        }
    }, [])

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
            Cookies.set('darkMode', 'enabled', { expires: 7 });
        } else {
            document.body.classList.remove('dark');
            Cookies.remove('darkMode');
        }

    }, [darkMode])


    return (
        <>
            <header className="h-28 flex items-center text-xl" id="headerScrolled">
                <nav className=" h-28 flex items-center w-full">
                    <Link href="/" className="w-1/3"><img src={logo} className="w-32" alt="logo"></img></Link>
                    <ul className="flex justify-evenly h-full items-center w-1/3">
                        <li className=""><Link href='/'>Accueil</Link></li>
                        <li className="mx-10"><Link href='/project'>Mes projets</Link></li>
                        <li className="">Contacts</li>
                    </ul>
                    <div className="w-1/3 flex justify-center items-center mt-2">
                        <a href="https://github.com/Tontico" className="group w-12 hover:w-44 h-12 hover:bg-customColor relative bg-customColor rounded-full text-neutral-50 duration-700 before:duration-700 before:hover:500 font-bold flex justify-start items-center p-2">
                            <FontAwesomeIcon icon={faGithub} className="w-8 h-8 shrink-0 fill-neutral-50" />
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
                </nav>
            </header>
            <div className="border border-customColor w-1/3 mx-auto"></div>
        </>
    );
}

export default Header;
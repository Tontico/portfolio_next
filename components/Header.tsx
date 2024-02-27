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
            <header className="h-28 flex items-center text-xl">
                <nav className=" h-28 flex items-center w-full">
                    <Link href="/" className="w-1/3"><img src={logo} className="w-32" alt="logo"></img></Link>
                    <ul className="flex justify-evenly h-full items-center w-1/3">
                        <li className=""><Link href='/'>Accueil</Link></li>
                        <li className="mx-10">Mes projets</li>
                        <li className="">Contacts</li>
                    </ul>
                    <div className="w-1/3 flex justify-center items-center mt-2">
                        <a href="https://github.com/Tontico" className=""><FontAwesomeIcon icon={faGithub} className="h-8 mt-0.5 text-customColor" /></a>
                        <a href="https://www.linkedin.com/in/anthony-suraci/" className=""><FontAwesomeIcon icon={faLinkedin} className="h-8 mx-8 mt-1 text-customColor" /></a>
                        <SwitchTheme darkMode={darkMode} toggleTheme={toggleDarkMode} />
                    </div>
                </nav>
            </header>
            <div className="border border-customColor w-1/3 mx-auto"></div>
        </>
    );
}

export default Header;
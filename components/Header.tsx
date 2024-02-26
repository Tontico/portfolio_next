import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {

    return (
        <>
            <header className="h-24 flex items-center font-customTitle ">
                <nav className="flex items-center w-full p-5">
                    <Link href="/" className="w-1/3"><img src="/images/logo1.png" className="w-32" alt="logo"></img></Link>
                    <ul className="flex justify-evenly items-center w-1/3">
                        <li className="">Accueil</li>
                        <li className="mx-5">Mes projets</li>
                        <li className="">Contacts</li>
                    </ul>
                    <div>
                        <FontAwesomeIcon icon={faGithub} />
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                </nav>
            </header>
            <div className="border border-customColor w-1/3 mx-auto"></div>
        </>
    );
}

export default Header;